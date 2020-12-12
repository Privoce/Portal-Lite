// import { useState, useEffect } from 'react';
// import { format } from 'timeago.js';
import StyledWrapper from './styled';
import { useWeiboToken } from '../../hooks';
const cid = '1360860551';
// https://api.weibo.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI
const authLink = `https://api.weibo.com/oauth2/authorize?client_id=${cid}&&response_type=code&redirect_uri=${encodeURI(
  process.env.REACT_APP_WB_REDIRECT
)}`;
export default function WeiboFeed() {
  const { token } = useWeiboToken();
  return (
    <StyledWrapper>
      {token ? (
        <div className="auth">已授权</div>
      ) : (
        <a className="auth" href={authLink} target="_blank">
          去授权 {token}
        </a>
      )}
      {/* <div className="user">
          <h2 className="username">{user.name}</h2>
          <img className="head" src={user.avatarUrl} alt="用户头像" />
        </div> */}
    </StyledWrapper>
  );
}
