import styled from 'styled-components';
const StyledMask = styled.div`
  z-index: 6;
  border-radius: 50%;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #444;
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/user.svg`});
`;
export default StyledMask;
