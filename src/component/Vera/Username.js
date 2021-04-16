// import { useEffect } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  min-width: 120px;
  text-align: center;
  padding: 10px 12px;
  cursor: text;
  font-size: 18px;
  color: var(--font-color);
  border-radius: var(--border-radius);
  background-color: var(--button-bg-color);
`;
export default function Username() {
  // const handleLogin = () => {
  //   chrome.runtime.sendMessage({ action: 'LOGIN' }, function () {
  //     /* callback */
  //     console.log('send login message');
  //   });
  // };
  // useEffect(() => {
  //   // 监听
  //   chrome.runtime.onMessage.addListener((request) => {
  //     console.log({ request });
  //     if (request.user) {
  //       let { username } = request.user;
  //       console.log({ username });
  //       // VERA_EMITTER.emit('login', { isHost, localId, inviteId, username });
  //     }
  //   });
  // }, []);
  return <StyledWrapper contentEditable className="username"></StyledWrapper>;
}
