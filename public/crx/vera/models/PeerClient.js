import Camera from './Camera.js';
import Cursor from './Cursor.js';
import { appendHistory, getUsername, toggleCameraControl } from './utils.js';
import { peerConfig } from './config.js';

window.MyPortalVeraPeer = null;
window.OTHER_PEER_IDS = [];
window.PEER_DATA_CONNS = {};
window.USERNAMES = {};
const handleCmd = ({ cameraContainer, cmd }) => {
  let { type = '', data } = cmd;
  switch (type) {
    case 'INIT':
      console.log('from init data', { data });
      if (data) {
        let { peerIds = [] } = data;
        OTHER_PEER_IDS = peerIds;
        // 与每个peer建立 datachannel
        peerIds.forEach((pid) => {
          initDatachannel(pid, MyPortalVeraPeer.id);
        });
      }
      break;
    case 'RM_BG':
    case 'RS_BG':
      toggleCameraControl('bg', cameraContainer);
      break;
    case 'VIDEO_ON':
    case 'VIDEO_OFF':
      toggleCameraControl('video', cameraContainer);
      break;
    case 'AUDIO_ON':
    case 'AUDIO_OFF':
      toggleCameraControl('audio', cameraContainer);
      break;
    case 'USERNAME':
      let { peerId, username } = data;
      USERNAMES[peerId] = username;
      window.REMOTE_USERNAME = username;
      break;
    default:
      break;
  }
};
const initDatachannel = (oppositePid, myPid) => {
  let dataConn = MyPortalVeraPeer.connect(oppositePid);
  console.log('connect the datachannel peer');
  dataConn.on('open', async () => {
    VERA_EMITTER.emit('connect.ready');
    PEER_DATA_CONNS[oppositePid] = dataConn;
    dataConn.send('hi from invited!');
    let currName = await getUsername();
    let username = currName;
    if (username) {
      dataConn.send({ type: 'USERNAME', data: { peerId: myPid, username } });
    }
    // 显示对方鼠标
    // new Cursor({ conn: dataConn });
    // 监听数据
    dataConn.on('data', (cmd = {}) => {
      let { type = '', data } = cmd;
      console.log(`invited received: `, cmd, type, data);
      let cameraContainer = document.querySelector(`[peer-id='${dataConn.peer}'] .remote`);
      handleCmd({ cameraContainer, cmd });
    });
  });
  dataConn.on('close', () => {
    console.log('close conn invited');
    VERA_EMITTER.emit('connect.close', { pid: dataConn.peer });
    // panel.dom.querySelector('.camera.remote .video');
  });
  dataConn.on('error', (error) => {
    console.log('remote connect error', error);
  });
};
class PeerClient {
  constructor({ pvid, panel }) {
    // init peerjs
    MyPortalVeraPeer = MyPortalVeraPeer
      ? new Peer(MyPortalVeraPeer.id, peerConfig)
      : new Peer(peerConfig);
    MyPortalVeraPeer.on('open', (id) => {
      // 受邀者，则主动连接host建立datachannel
      console.log('peer id same?:', MyPortalVeraPeer.id, id);
      if (pvid) {
        initDatachannel(pvid, id);
      }
      // new Cursor();
      console.log('peer ID', id);
      panel.dom.setAttribute('data-status', 'open');
      panel.init({ inviteId: pvid, localId: id });

      // incoming connection
      MyPortalVeraPeer.on('connection', (conn) => {
        console.log('incoming peer connection!', conn);
        panel.dom.setAttribute('data-status', 'connected');
        // 如果是host，来自remote的连接，需要回应？
        PEER_DATA_CONNS[conn.peer] = conn;
        if (!pvid) {
          MyPortalVeraPeer.connect(conn.peer);
        }
        conn.on('open', () => {
          VERA_EMITTER.emit('connect.ready');
          console.log('the connection is open and ready for read/write.');
          // host特有操作
          if (!pvid) {
            // 发初始化消息:包含除了新建立的链接之外的连接
            let cmd = {
              type: 'INIT',
              data: { peerIds: Object.keys(PEER_DATA_CONNS).filter((id) => id !== conn.peer) }
            };
            console.log('send connected peer ids', cmd);
            conn.send(cmd);
            // 显示对方鼠标
            // new Cursor({ conn });
          }
          // 监听数据
          conn.on('data', (cmd = {}) => {
            console.log(`local received: `, cmd);
            let cameraContainer = panel.dom.querySelector('.camera.remote');
            handleCmd({ cameraContainer, cmd });
          });
        });

        conn.on('close', () => {
          console.log('close conn');
          delete PEER_DATA_CONNS[conn.peer];
          VERA_EMITTER.emit('connect.close', { pid: conn.peer });
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
        let remoteCamera = new Camera({ remote: true, peerId: call.peer });
        let cameraList = panel.dom.querySelector('.cameras');
        console.log('attach remote video');
        cameraList.appendChild(remoteCamera.dom);
        call.answer(LOCAL_STREAM); // Answer the call with an A/V stream.
        // 写入历史记录
        appendHistory({ peerId: pvid ? pvid : MyPortalVeraPeer.id, isHost: !pvid });

        // 去掉邀请链接框
        panel.dom.querySelector('.invite')?.remove();
        call.on('stream', (s) => {
          REMOTE_STREAM = s;
          remoteCamera.attachStream(s);
          cameraList.setAttribute('camera-status', 'connected');
          panel.dom.setAttribute('data-status', 'streaming');
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
