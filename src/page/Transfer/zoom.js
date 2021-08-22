import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuthing } from '@authing/react-ui-components';
import { AuthingGuard } from '@authing/react-ui-components';
// 引入 authing guard css 文件
import '@authing/react-ui-components/lib/index.min.css';
import { appId, appHost, GuardConfig } from '../../InitialConfig';

const StyledWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const redirectToZoom = (token) => {
  if (!token) return;
  setTimeout(() => {
    location.href = `https://wechat.okeydemo.com/author?token=${token}`;
  }, 2000)

}
export default function ZoomTransfer() {
  const { authClient } = useAuthing({
    appId,
    appHost
  });
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null)
  useEffect(() => {
    const init = async () => {
      let user = await authClient.getCurrentUser();
      if (user) {
        console.log({ user });
        setUser(user)
        // 注入成功
        redirectToZoom(user.token)
      }
      setChecking(false);
    };
    init();
  }, []);
  const handleGuardLogin = async (user) => {
    console.log('login', { user });
    setUser(user);
    redirectToZoom(user.token)
  };
  const handleRegComplete = (user) => {
    setUser(user);
    redirectToZoom(user.token)
  };
  if (checking) return <StyledWrapper>
    Checking
  </StyledWrapper>;
  if (!user) return <StyledWrapper>
    <AuthingGuard
      visible={true}
      onRegisterInfoCompleted={handleRegComplete}
      // onClose={handleGuardClose}
      onLogin={handleGuardLogin}
      // onLoad={handleGuardLoad}
      appId={appId}
      config={GuardConfig}
    />
  </StyledWrapper>
  return (
    <StyledWrapper>
      redirecting to zoom....
    </StyledWrapper>
  )
}
