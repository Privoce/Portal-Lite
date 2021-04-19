import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Username from '../Username';
import Login from '../Login';
import useUsername from '../hooks/useUsername';
const joinTxt = chrome.i18n.getMessage('join');

const StyledBox = styled.div`
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 5px;
  background: transparent;
  border-radius: var(--border-radius);
`;
export default function JoinBox({ peerClient, peerIds = [], addMediaConnection }) {
  const { username } = useUsername();
  const handleJoin = () => {
    console.log({ peerIds });
    peerIds.forEach((id) => {
      let newMediaConn = peerClient.call(id, window.LOCAL_MEDIA_STREAM);
      console.log({ newMediaConn });
      addMediaConnection(newMediaConn);
    });
  };
  return (
    <StyledBox>
      <Button className="btn ok" onClick={handleJoin}>
        {joinTxt}
      </Button>
      <Username local={true} readonly={false} fixed={false} />
      {username ? null : <Login />}
    </StyledBox>
  );
}
