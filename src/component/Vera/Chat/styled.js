import styled from 'styled-components';

const StyledWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  height: 80vh;
  min-width: 40vw;
  &.visible {
    pointer-events: all;
    visibility: visible;
  }
  .str-chat-channel {
    max-height: 80vh;
  }
`;

export default StyledWrapper;
