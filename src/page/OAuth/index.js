import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledWrapper from './styled';
import getToken from './github';
const APPs = {
  github: 'Github OAuth'
};
export default function OAuth() {
  let { app } = useParams();
  const [pending, setPending] = useState(true);
  const [tipVisible, setTipVisible] = useState(false);

  useEffect(() => {
    let params = new URLSearchParams(location.search);

    getToken(params.get('code')).then((resp) => {
      console.log({ resp });
      setPending(true);
      const { code, data } = resp;
      if (code == 0 && data.access_token) {
        localStorage.setItem('GITHUB_OAUTH_TOKEN', data.access_token);
        setTipVisible(true);
        setTimeout(() => {
          window.close();
        }, 3000);
      }
    });
  }, []);
  const handleCloseClick = () => {
    window.close();
  };
  console.log({ app });
  return (
    <StyledWrapper>
      {pending ? <div>授权中...</div> : <div className="title">{APPs[app]} oauth</div>}
      {tipVisible && (
        <div className="tip">
          3秒后将关闭页面
          <button onClick={handleCloseClick} className="close_btn">
            立即关闭
          </button>
        </div>
      )}
    </StyledWrapper>
  );
}
