import styled from 'styled-components';
import Button from '../Button';
import Username from '../Username';
import Login from '../Login';
import useUsername from '../hooks/useUsername';
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
    justify-content: center;
    gap: 5em;
    width: 100%;
  }
`;
let clicked = false;
export default function JoinBox({ ready = false, peerClient, peerIds = [], addMediaConnection }) {
  const { username } = useUsername();
  const handleJoin = () => {
    if (clicked) return;
    if (!window.LOCAL_MEDIA_STREAM) {
      alert('Local MediaStream Null');
      return;
    }
    console.log({ peerIds });
    peerIds.forEach((id) => {
      let newMediaConn = peerClient.call(id, window.LOCAL_MEDIA_STREAM);
      console.log({ newMediaConn });
      addMediaConnection(newMediaConn);
    });
    clicked = true;
  };
  return (
    <StyledBox>
      <Username local={true} readonly={false} fixed={false} />
      <div className="btns">
        {username ? null : <Login />}
        <Button disabled={!ready} className="blue" onClick={handleJoin}>
          {username ? joinTxt : joinAsGuestTxt}
        </Button>
      </div>
    </StyledBox>
  );
}
