import styled from 'styled-components';
import Button from '../Button';
import Username from '../Username';
import Login from '../Login';
import useUsername from '../hooks/useUsername';
// const prepareTxt = chrome.i18n.getMessage('prepare');
const joinTxt = chrome.i18n.getMessage('join');
const joinAsGuestTxt = chrome.i18n.getMessage('joinAsGuest');

const StyledBox = styled.div`
  box-sizing: border-box;
  height: 20em;
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  justify-content: space-around;
  padding: 5px;
  padding-top: 3em;
  background: transparent;
  border-radius: var(--vera-border-radius);
  .btns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &.logined {
      justify-content: center;
    }
  }
`;
let clicked = false;
export default function JoinBox({ sendSocketMessage }) {
  const { username } = useUsername();
  const handleJoin = () => {
    if (clicked) return;
    sendSocketMessage({ cmd: 'NEW_PEER' });
    clicked = true;
  };
  // {ready ? (username ? joinTxt : joinAsGuestTxt) : `${prepareTxt}...`}
  return (
    <StyledBox>
      <Username local={true} readonly={false} fixed={false} />
      <div className={`btns ${username ? 'logined' : ''}`}>
        {username ? null : <Login />}
        <Button onClick={handleJoin}>{username ? joinTxt : joinAsGuestTxt}</Button>
      </div>
    </StyledBox>
  );
}
