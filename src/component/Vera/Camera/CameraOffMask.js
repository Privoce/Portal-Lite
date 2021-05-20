import styled from 'styled-components';
const StyledMask = styled.div`
  z-index: 6;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/user.svg`});
`;
export default StyledMask;
