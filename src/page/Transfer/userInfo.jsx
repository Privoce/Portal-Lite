import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BiTransferAlt } from 'react-icons/bi'
import { useAuthing } from '@authing/react-ui-components';
import { AuthingGuard } from '@authing/react-ui-components';
// 引入 authing guard css 文件
import '@authing/react-ui-components/lib/index.min.css';
import { appId, appHost, GuardConfig } from '../../InitialConfig';
import Footer from '../../component/Footer'

const StyledWrapper = styled.section`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:.5rem;
  justify-content: center;
  align-items: center;
  font-size: .24rem;
  padding-top:.4rem;
  overflow: scroll;
  >.title{
    font-size: .4rem;
    font-weight: 800;
  }
  .trans{
    display: flex;
    align-items: center;
    gap: .3rem;
    .product{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .2rem;
      .logo{
        width:1rem;
        height:1rem;
        border-radius: 50%;
        border:1px solid #eee;
        padding:.14rem;
      }
      .title{
        font-size: .3rem;
        font-weight: 800;
      }
    }
    .arrows{
      margin-top: -30px;
    }
  }
  .btn{
    padding:.12rem .18rem;
    font-size: .34rem;
    background:#5072f0;
    color:#fff;
    border-radius: 5px;
  }
  .tip{
    color:#999;
  }
`;
const Products = {
  webrowse: {
    title: 'Webrowse',
    logo: 'https://static.nicegoodthings.com/works/vera/webrowse.logo.png'
  },
  vera: {
    title: "Vera",
    logo: 'https://static.nicegoodthings.com/works/vera/vera.logo.png'
  },
  sphere: {
    title: 'Sphere Youtube',
    logo: 'https://static.nicegoodthings.com/works/vera/vera.logo.png'
  }
}
export default function UserInfoTransfer() {
  const { product = '' } = useParams();
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
      }
      setChecking(false);
    };
    init();
  }, []);
  useEffect(() => {
    if (user) {
      switch (product) {
        case 'sphere': {
          // 发送给sphere youtube
          console.log("send user info to sphere");
          document.dispatchEvent(new CustomEvent('SPHERE_LOGIN', { detail: { user } }));
        }
          break;
        default:
          break;
      }
      // 发送给sphere youtube
      document.dispatchEvent(new CustomEvent('SPHERE_LOGIN', { detail: { user } }));
    }
  }, [user])
  const handleGuardLogin = async (user) => {
    console.log('login', { user });
    setUser(user);
  };
  const handleRegComplete = (user) => {
    setUser(user);
  };
  if (checking) return <StyledWrapper>
    Checking
  </StyledWrapper>;
  const currProduct = Products[product];
  if (!currProduct) return null;
  return (
    <>
      <StyledWrapper>
        {user && <h1 className="title">Login Success!</h1>}
        <div className="trans">
          <div className="product">
            <img className="logo" src={currProduct.logo} alt="transfer product logo" />
            <h3 className="title">{currProduct.title}</h3>
          </div>
          <BiTransferAlt className="arrows" size="70" color="#ddd" />
          <div className="product">
            <img className="logo" src='https://static.nicegoodthings.com/privoce/works.portal.logo.png' alt="transfer product logo" />
            <h3 className="title">Portal</h3>
          </div>
        </div>
        {user ? <div className="tip">You can close this window and continue ...</div> : <div className="login">
          <AuthingGuard
            onRegisterInfoCompleted={handleRegComplete}
            onLogin={handleGuardLogin}
            appId={appId}
            config={{ ...GuardConfig, mode: 'normal' }}
          />
        </div>
        }

      </StyledWrapper>
      <Footer />
    </>
  )
}
