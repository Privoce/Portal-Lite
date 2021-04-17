import { useState } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  max-width: 100px;
  > input {
    width: 100%;
    border: none;
    text-align: center;
    padding: 10px 12px;
    font-size: 18px;
    color: var(--font-color);
    border-radius: var(--border-radius);
    background-color: var(--button-bg-color);
  }
  &.fixed {
    max-width: auto;
    position: absolute;
    top: 5px;
    right: 5px;
    > input {
      padding: 6px 8px;
    }
  }
`;
export default function Username({ username = 'Tristan', readonly = true, fixed = true }) {
  const [name, setName] = useState(username);
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
  const handleChange = ({ target }) => {
    setName(target.value);
  };
  return (
    <StyledWrapper className={`username ${fixed ? 'fixed' : ''}`}>
      <input type="text" value={name} onChange={handleChange} readOnly={readonly} />
    </StyledWrapper>
  );
}
