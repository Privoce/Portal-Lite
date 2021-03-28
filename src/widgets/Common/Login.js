import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 0.16rem;
    font-weight: 800;
    color: inherit;
    margin-bottom: 0.3rem;
  }
  .login {
    font-size: 0.12rem;
    background: #5c46e3;
    color: #fff;
    border-radius: 0.06rem;
    padding: 0.08rem 0.25rem;
  }
`;

const Login = () => {
  const handleLoginClick = () => {
    let toggleEle = document.querySelector('.settings .toggle');
    let loginEle = document.querySelector('.settings .setting .icon.profile');
    if (loginEle) {
      toggleEle.click();
      loginEle.click();
    }
  };
  return (
    <StyledWrapper>
      <div className="tip">Login First</div>
      <button className="login" onClick={handleLoginClick}>
        Login
      </button>
    </StyledWrapper>
  );
};
export default Login;
