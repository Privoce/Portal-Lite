import styled from 'styled-components';

const StyledBox = styled.div`
  box-sizing: border-box;
  height: 20em;
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  &.float {
    background-color: #333;
    position: absolute;
    left: -220px;
    top: 20px;
    padding: 15px;
    border-radius: 5px;
  }
  .title {
    color: var(--vera-font-color);
    font-weight: 100;
    font-size: 16px;
    margin-bottom: -30px;
  }
  .link {
    width: 100%;
    width: -webkit-fill-available;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4em 0.8em;
    border: 1px solid var(--vera-font-color);
    background: var(--vera-panel-bg-color);
    border-radius: var(--vera-border-radius);
    font-size: 1.2em;
    .url {
      user-select: text;
      color: var(--vera-font-color);
      width: 100%;
      height: fit-content;
      white-space: nowrap;
      word-break: break-word;
      text-align: left;
      line-height: 2.2;
      max-height: 9em;
      overflow: hidden;
      overflow-x: scroll;
      margin-right: 1em;
    }
    .copy {
      cursor: pointer;
    }
  }
  .users {
    height: fit-content;
    overflow: scroll;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    background-color: #1f1f1f;
    border-radius: var(--vera-border-radius);
    padding: 0.6em 0.4em;
    color: var(--vera-font-color);
    &::-webkit-scrollbar {
      /* visibility: hidden; */
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:not(:last-child) {
        padding-bottom: 0.4em;
        border-bottom: 1px dashed #333;
      }
      .avator {
        width: 2.5em;
        height: 2.5em;
        border-radius: 50%;
      }
      .name {
        color: inherit;
        font-size: 1em;
      }
    }
  }
  .login {
    margin-top: 1.5em;
    padding: 1em 2em;
    background-color: #c4c4c4;
  }
`;
export default StyledBox;
