import styled from 'styled-components';

const StyledWrapper = styled.section`
  font-size: 0.14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .app {
    margin-bottom: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name {
      font-size: 0.25rem;
    }
    .logo {
      width: 0.5rem;
      height: 0.5rem;
      img {
        width: 100%;
      }
    }
  }
  .status {
    font-size: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .tip {
    margin-bottom: 0.2rem;
  }
  .close_btn {
    padding: 0.1rem 0.2rem;
    font-size: 0.22rem;
    color: #fff;
    border-radius: 0.05rem;
    background-color: #2ea043;
  }
`;

export default StyledWrapper;
