import { useState, useEffect } from 'react';

const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const showMenu = (pos) => {
    setPosition(pos);
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };
  useEffect(() => {
    document.onclick = () => {
      hideMenu();
    };
    return () => {
      document.onclick = null;
    };
  }, []);
  return { menuVisible: visible, position, showMenu, hideMenu };
};
const StorageGithubKey = 'GITHUB_OAUTH_TOKEN';
const useGithubToken = () => {
  const [token, setToken] = useState(localStorage.getItem(StorageGithubKey) || '');
  useEffect(() => {
    const storageEvent = (evt) => {
      const { newValue, oldValue, key } = evt;
      console.log({ evt });
      if (key == StorageGithubKey) {
        if (newValue != oldValue) {
          setToken(newValue);
        }
      }
    };
    window.addEventListener('storage', storageEvent);
    return () => {
      window.removeEventListener('storage', storageEvent);
    };
  }, []);
  return { token, setToken };
};
const StorageWeiboKey = 'WEIBO_OAUTH_TOKEN';
const useWeiboToken = () => {
  const [token, setToken] = useState(localStorage.getItem(StorageWeiboKey) || '');
  useEffect(() => {
    const storageEvent = (evt) => {
      const { newValue, oldValue, key } = evt;
      console.log({ evt });
      if (key == StorageWeiboKey) {
        if (newValue != oldValue) {
          setToken(newValue);
        }
      }
    };
    window.addEventListener('storage', storageEvent);
    return () => {
      window.removeEventListener('storage', storageEvent);
    };
  }, []);
  return { token, setToken };
};

export { useContextMenu, useWeiboToken, useGithubToken };
