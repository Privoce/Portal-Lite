import RemoteCamera from './RemoteCamera.js';
import { appendHistory, getUsername } from './utils.js';
import { peerConfig } from './config.js';

window.MyPortalVeraPeer = null;
window.PEER_DATA_CONNS = {};
window.USERNAMES = {};
const handleCmd = ({ videoContainer, cmd }) => {
  let { type = '', data } = cmd;
  switch (type) {
    case 'RM_BG':
      if (videoContainer.getAttribute('bg') == 'true') {
        videoContainer.querySelector('.opt.bg').click();
      }
      break;
    case 'RS_BG':
      if (videoContainer.getAttribute('bg') !== 'true') {
        videoContainer.querySelector('.opt.bg').click();
      }
      break;
    case 'VIDEO_ON':
      videoContainer.setAttribute('video', true);
      REMOTE_STREAM.getVideoTracks().forEach((t) => (t.enabled = true));
      break;
    case 'VIDEO_OFF':
      videoContainer.removeAttribute('video');
      REMOTE_STREAM.getVideoTracks().forEach((t) => (t.enabled = false));
      break;
    case 'AUDIO_ON':
      videoContainer.setAttribute('audio', true);
      REMOTE_STREAM.getAudioTracks().forEach((t) => (t.enabled = true));
      break;
    case 'AUDIO_OFF':
      videoContainer.removeAttribute('audio');
      REMOTE_STREAM.getAudioTracks().forEach((t) => (t.enabled = false));
      break;
    case 'USERNAME':
      let { peerId, username } = data;
      USERNAMES[peerId] = username;
      break;
    default:
      break;
  }
};
class PeerClient {
  constructor({ pvid, panel }) {
    // init peerjs
    MyPortalVeraPeer = MyPortalVeraPeer
      ? new Peer(MyPortalVeraPeer.id, peerConfig)
      : new Peer(peerConfig);
    console.log('my peer', MyPortalVeraPeer);
    MyPortalVeraPeer.on('open', (id) => {
      // 受邀者，则主动连接host
      if (pvid) {
        let inviteConn = MyPortalVeraPeer.connect(pvid);
        console.log('connect the invite peer', pvid, inviteConn);
        inviteConn.on('open', async () => {
          PEER_DATA_CONNS[pvid] = inviteConn;
          inviteConn.send('hi from invited!');
          let username = await getUsername();
          if (username) {
            inviteConn.send({ type: 'USERNAME', data: { peerId: id, username } });
          }
          // 监听数据
          inviteConn.on('data', (cmd = {}) => {
            let { type = '', data } = cmd;
            console.log(`invited received: `, cmd, type, data);
            let videoContainer = panel.dom.querySelector('.camera.remote .video');
            handleCmd({ videoContainer, cmd });
          });
        });
        inviteConn.on('close', () => {
          console.log('close conn invited');
          // panel.dom.querySelector('.camera.remote .video');
        });
        inviteConn.on('error', (error) => {
          console.log('remote connect error', error);
        });
      }
      console.log('peer ID', id);
      panel.dom.setAttribute('data-status', 'open');
      panel.init({ inviteId: pvid, localId: id });

      // incoming connection
      MyPortalVeraPeer.on('connection', (conn) => {
        console.log('incoming peer connection!', conn);
        panel.dom.setAttribute('data-status', 'connected');
        // 如果是host，来自remote的连接，需要回应？
        if (!pvid) {
          MyPortalVeraPeer.connect(conn.peer);
          PEER_DATA_CONNS[conn.peer] = conn;
        }
        conn.on('open', () => {
          console.log('the connection is open and ready for read/write.');
          // 放入全局变量中
          // conn.send('hello from the other!');
          // 只有host才发初始化的消息
          if (!pvid) {
            let cmd = { type: 'INIT', data: { pids: Object.keys(PEER_DATA_CONNS) } };
            console.log('send connected peer ids', cmd);
            conn.send(cmd);
          }
          // 监听数据
          conn.on('data', (cmd = {}) => {
            console.log(`local received: `, cmd);
            let videoContainer = panel.dom.querySelector('.camera.remote .video');
            handleCmd({ videoContainer, cmd });
          });
        });

        conn.on('close', () => {
          console.log('close conn');
        });
        conn.on('error', (error) => {
          console.log('local connect error', error);
        });
      });
      MyPortalVeraPeer.on('disconnected', () => {
        panel.dom.setAttribute('data-status', 'disconnected');
      });
    });
    // incoming voice/video connection
    MyPortalVeraPeer.on('call', async (call) => {
      console.log('called from remote');
      // 加入当前remote peer列表
      REMOTE_PEER_IDS.push(call.peer);
      try {
        let remoteCamera = new RemoteCamera(call.peer);
        let cameraList = panel.dom.querySelector('.cameras');
        console.log('attach remote video');
        cameraList.appendChild(remoteCamera.getDom());
        call.answer(LOCAL_STREAM); // Answer the call with an A/V stream.
        // 写入历史记录
        appendHistory({ peerId: pvid ? pvid : MyPortalVeraPeer.id, isHost: !pvid });
        // 去掉邀请链接框
        panel.inviteBox.remove();
        call.on('stream', (s) => {
          REMOTE_STREAM = s;
          remoteCamera.attachStream(s);
          cameraList.setAttribute('camera-status', 'connected');
          // panel.dom.setAttribute('camera-status', 'connected');
        });
        call.on('close', () => {
          console.log('call close');
          // 从当前remote peer列表剔除
          delete PEER_DATA_CONNS[call.peer];
        });
      } catch (error) {
        console.error('Failed to get local stream', error);
      }
    });
    MyPortalVeraPeer.on('error', (error) => {
      console.log({ error });
      panel.dom.setAttribute('data-status', 'error');
    });
    MyPortalVeraPeer.on('close', () => {
      console.log('connect close');
      // panel.dom.setAttribute('data-status', 'close');
    });
  }
}
export default PeerClient;
