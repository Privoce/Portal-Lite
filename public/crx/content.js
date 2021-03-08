console.log('portal vemos content script loaded');
let insert = document.createElement('aside');
insert.id = 'ext_portal_widget_vemos';
// insert.style.display = 'none';
document.body.appendChild(insert);
// invite btn
let btn = document.createElement('button');
btn.setAttribute('class', 'invite');
btn.innerHTML = 'Invite';
btn.addEventListener('click', (evt) => {
  const { target } = evt;
  target.parentElement.classList.toggle('dash_show');
});
insert.appendChild(btn);
// dashboard

let dashboard = initDashboard();

insert.appendChild(dashboard);
// 初始化操作台
function initDashboard() {
  let dashboard = document.createElement('div');
  dashboard.setAttribute('class', 'dashboard');
  let ifr = document.createElement('iframe');
  ifr.src = chrome.runtime.getURL('crx/assets/dashboard/index.html');
  dashboard.appendChild(ifr);
  return dashboard;
}
// 初始化摄像
function initCamera() {
  let camera = document.createElement('div');
  camera.setAttribute('class', 'camera');
  camera.setAttribute('draggable', true);
  let ifr = document.createElement('iframe');
  ifr.allow = 'autoplay';
  ifr.src = chrome.runtime.getURL('crx/assets/camera/index.html');
  camera.appendChild(ifr);
  return camera;
}
// 插入一个摄像
function insertCamera() {
  let newCarmera = initCamera();
  document.body.appendChild(newCarmera);
}
// 监听事件消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('content script event fire', { request });
  const { action, data } = request;
  switch (action) {
    case 'DASHBOARD_SHOW':
      console.log('portal vemos dashboard show');
      insert.style.display = 'block';
      break;
    case 'INSERT_CAMERA':
      console.log('portal vemos insert camera');
      insertCamera();
      break;

    default:
      break;
  }
});
