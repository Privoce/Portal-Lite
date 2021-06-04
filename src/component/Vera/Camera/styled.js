import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  .video .username,
  .opts {
    visibility: hidden;
  }
  &:hover {
    .video {
      .username,
      .opts {
        visibility: visible;
      }
    }
  }
  &.remote .video .opts {
    .bg,
    .video,
    .audio {
      display: none;
    }
  }

  .processing {
    z-index: 10;
    display: none;
    text-transform: capitalize;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -70%, 0);
    padding: 1em;
    border-radius: 0.5em;
    background-color: var(--vera-camera-bg-color);
    font-size: 2.2em;
    color: var(--vera-font-color);
  }
  .video {
    width: 20em;
    height: 20em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &.hide_video video {
      visibility: hidden;
    }
    video {
      border: 4px solid ${({ color }) => color};
      border-radius: 50%;
      box-sizing: border-box;
      width: -webkit-fill-available;
      height: 100%;
    }
  }
`;

export default StyledWrapper;
