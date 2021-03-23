import RemoteCamera from './RemoteCamera.js';
import { appendHistory } from './utils.js';
import { peerConfig } from './config.js';

window.MyPortalVeraPeer = null;
window.PEER_DATA_CONNS = {};

class PeerClient {
  constructor({ pvid, panel }) {
    // init peerjs
    MyPortalVeraPeer = MyPortalVeraPeer
      ? new Peer(MyPortalVeraPeer.id, peerConfig)
      : new Peer(peerConfig);
    console.log('my peer', MyPortalVeraPeer);
    MyPortalVeraPeer.on('open', (id) => {
      // 受邀者，则主动连接对方
      if (pvid) {
        let inviteConn = MyPortalVeraPeer.connect(pvid);
        console.log('connect the invite peer', pvid, inviteConn);
        inviteConn.on('open', () => {
          inviteConn.send('hi from remote!');
        });
        inviteConn.on('error', (error) => {
          console.log('remote connect error', error);
        });
        PEER_DATA_CONNS[pvid] = inviteConn;
      }
      console.log('peer ID', id);
      panel.dom.setAttribute('data-status', 'open');
      panel.init({ inviteId: pvid, localId: id });

      // incoming connection
      MyPortalVeraPeer.on('connection', (conn) => {
        console.log('incoming peer connection!', conn);
        panel.dom.setAttribute('data-status', 'connected');
        // 如果是host，来自remote的连接，需要回应并存入全局变量
        if (!pvid) {
          // 放入全局变量中
          // PEER_DATA_CONNS[conn.peer] = conn;
          // console.log('connect the other', conn.peer);
          MyPortalVeraPeer.connect(conn.peer);
          PEER_DATA_CONNS[conn.peer] = conn;
        }

        conn.on('open', () => {
          console.log('the connection is open and ready for read/write.');
          conn.send('hello from host!');
          // 只有host才发初始化的消息
          if (!pvid) {
            let cmd = { type: 'INIT', data: { pids: Object.keys(PEER_DATA_CONNS) } };
            console.log('send connected peer ids', cmd);
            conn.send(cmd);
          }
        });
        conn.on('data', (cmd = {}) => {
          let { type = '', data } = cmd;
          console.log(`received: `, type, data);
          let videoContainer = panel.dom.querySelector('.camera.remote .video');
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
              if (videoContainer.getAttribute('video') !== 'true') {
                videoContainer.querySelector('.opt.video').click();
              }
              break;
            case 'VIDEO_OFF':
              if (videoContainer.getAttribute('video') == 'true') {
                videoContainer.querySelector('.opt.video').click();
              }
              break;
            case 'AUDIO_ON':
              if (videoContainer.getAttribute('audio') !== 'true') {
                videoContainer.querySelector('.opt.audio').click();
              }
              break;
            case 'AUDIO_OFF':
              if (videoContainer.getAttribute('audio') == 'true') {
                videoContainer.querySelector('.opt.audio').click();
              }
              break;

            default:
              break;
          }
        });
        conn.on('error', (error) => {
          console.log('host connect error', error);
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
          PEER_DATA_CONNS = Object.fromEntries(
            Object.entries(PEER_DATA_CONNS).filter(([pid, conn]) => pid !== call.peer)
          );
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
