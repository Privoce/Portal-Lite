import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: 0.12rem;
  overflow: scroll;
  /* overscroll-behavior: contain; */
  height: 100%;
  padding: 0.1rem;
  display: flex;
  /* position: relative; */
  /* overflow: hidden; */
  .auth {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    padding: 0.1rem;
    background: #07d302;
    color: #fff;
  }
  .head {
    width: 1rem;
    border-radius: 50%;
    border: 1px solid #eee;
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
    overflow: hidden;
    background-color: #fff;
    .avatar {
      width: 100%;
      height: 100%;
    }
  }
  .list {
    /* list-style: none; */
    height: 100%;
    /* overflow: scroll; */
    display: flex;
    flex-wrap: wrap;
  }
`;

export default StyledWrapper;
