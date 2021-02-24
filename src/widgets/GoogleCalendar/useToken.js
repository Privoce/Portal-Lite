import { useState, useEffect } from 'react';

// GOOGLE CALENDAR Token
const StorageKey = 'GOOGLE_CALENAR_OAUTH_TOKEN';
const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem(StorageKey) || '');
  useEffect(() => {
    const storageEvent = (evt) => {
      const { newValue, oldValue, key } = evt;
      console.log({ evt });
      if (key == StorageKey) {
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
  const updateToken = (val) => {
    localStorage.setItem(StorageKey, val);
  };
  return { token, updateToken };
};

export default useToken;
