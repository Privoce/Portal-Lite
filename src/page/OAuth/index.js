import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledWrapper from './styled';
import getToken from './github';
const APPs = {
  github: { name: 'Github OAuth', logo: '/logos/github.trending.png' }
};
let intervalId = null;
export default function OAuth() {
  let { app } = useParams();
  const [pending, setPending] = useState(true);
  const [tipVisible, setTipVisible] = useState(true);
  let [countDown, setCountDown] = useState(null);
  useEffect(() => {
    // return early
    if (countDown === null) {
      return;
    }
    if (countDown === 0) {
      console.log('TIME LEFT IS 0');
      window.close();
      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    intervalId = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [countDown]);
  useEffect(() => {
    let code = new URLSearchParams(location.search).get('code');
    let extId = new URLSearchParams(location.search).get('extId') || 0;
    if (code) {
      getToken(code).then((resp) => {
        console.log({ resp });
        setPending(true);
        const { code, data } = resp;
        if (code == 0 && data.access_token) {
          setPending(false);
          setTipVisible(true);
          localStorage.setItem('GITHUB_OAUTH_TOKEN', data.access_token);
          if (extId != 0) {
            location.href = `https://${extId}.chromiumapp.org/token=${data.access_token}`;
          } else {
            setCountDown(3);
          }
        }
      });
    }
  }, []);

  const handleCloseClick = () => {
    window.close();
  };
  console.log({ app });
  return (
    <StyledWrapper>
      <div className="app">
        <div className="name">{APPs[app].name}</div>
        <div className="logo">
          <img src={APPs[app].logo} alt="app logo" />
        </div>
      </div>
      <div className="status">{pending ? '授权中...' : tipVisible ? '授权成功' : '授权失败'}</div>
      {tipVisible && (
        <>
          <div className="tip">{countDown}秒后将关闭页面</div>
          <button onClick={handleCloseClick} className="close_btn">
            立即关闭
          </button>
        </>
      )}
    </StyledWrapper>
  );
}
