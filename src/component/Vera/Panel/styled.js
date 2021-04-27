import styled from 'styled-components';
const StyledWrapper = styled.aside`
  font-family: sans-serif;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: all;
  display: flex !important;
  align-items: center;
  gap: 15px;
  min-width: 200px;
  min-height: 200px;
  max-height: 100vh;
  overflow: visible;
  padding: 12px;
  padding-top: 40px;
  border-radius: var(--border-radius);
  transition: all 0.5s ease-in-out;
  transition-property: background, width, height;
  background: var(--panel-bg-color);
  &:after {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #999;
    border-radius: 50%;
  }
  &[data-status='waiting'] {
    /* width: 440px;
    height: 224px; */
  }
  &[data-status='open']:after {
    background-color: #ee7f3d;
  }
  &[data-status='close']:after {
    background-color: #fff;
  }
  &[data-status='call']:not(.min),
  &[data-status='streaming']:not(.min) {
    &:after {
      background-color: #85e89e;
    }
    background: transparent;

    .topbar,
    &:after {
      visibility: hidden;
    }
    &:hover {
      background: var(--panel-bg-color);
      .topbar,
      &:after {
        visibility: visible;
      }
    }
  }
  &[data-status='connected']:after {
    background-color: #48baff;
  }
  &[data-status='disconnected']:after {
    background-color: #ccc;
  }
  &.vt {
    flex-direction: column;
    .cameras {
      flex-direction: column;
    }
  }
  &.one {
    gap: 0;
    .cameras .local {
      display: none;
    }
  }
  &.min {
    min-height: fit-content;
    min-width: 250px;
    padding-bottom: 2px;
    .cameras {
      display: none;
    }
  }
  .topbar {
    position: absolute;
    top: 10px;
    left: 0;
    justify-content: space-between;
    width: -webkit-fill-available;
  }
  .cameras {
    overflow: hidden;
    display: flex;
    gap: 15px;
  }
`;

export default StyledWrapper;
