import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: 0.12rem;
  overflow: scroll;
  height: 100%;
  padding: 0.1rem;
  display: flex;
  position: relative;
  .auth {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    padding: 0.1rem;
    background: #07d302;
    color: #fff;
  }
  .user {
    margin: 0.1rem;
    .username {
      font-size: 0.2rem;
    }
    .head {
      width: 1rem;
      border-radius: 50%;
    }
  }
  .list {
    overflow: scroll;
    height: 6rem;
    padding: 0;
    margin: 0.1rem;
    list-style: none;
    .item {
      font-size: 0.16rem;
      padding: 0.05rem 0.05rem;
      a {
        text-decoration: underline;
      }
      .timeago {
        font-size: 0.12rem;
        color: #666;
        padding: 0 0.1rem;
      }
    }
  }
`;

export default StyledWrapper;
