import styled from 'styled-components';
const StyledMask = styled.div`
  z-index: 6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/user.svg`});
`;
export default StyledMask;
