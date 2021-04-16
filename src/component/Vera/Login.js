import { useEffect } from 'react';
import Button from './Button';
const loginTxt = chrome.i18n.getMessage('login');
export default function Login() {
  const handleLogin = () => {
    chrome.runtime.sendMessage({ action: 'LOGIN' }, function () {
      /* callback */
      console.log('send login message');
    });
  };
  useEffect(() => {
    // 监听
    chrome.runtime.onMessage.addListener((request) => {
      console.log({ request });
      if (request.user) {
        let { username } = request.user;
        console.log({ username });
        // VERA_EMITTER.emit('login', { isHost, localId, inviteId, username });
      }
    });
  }, []);
  return <Button onClick={handleLogin}>{loginTxt}</Button>;
}
