import styled from 'styled-components';

const StyledBox = styled.div`
  box-sizing: border-box;
  height: 20em;
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  padding: 5px;
  background-color: var(--camera-bg-color);
  border-radius: var(--border-radius);
  .link {
    width: 100%;
    width: -webkit-fill-available;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4em;
    background: var(--button-bg-color);
    border-radius: var(--border-radius);
    font-size: 1em;
    .url {
      user-select: text;
      color: var(--font-color);
      width: 100%;
      height: fit-content;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-word;
      text-align: left;
      line-height: 1.2;
      max-height: 9em;
      overflow: hidden;
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
    padding: 0.6em 0.4em;
    border-radius: var(--border-radius);
    color: var(--font-color);
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
