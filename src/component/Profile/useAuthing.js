import { useState, useEffect } from 'react';

// GitHub Token
const StorageAuthingKey = 'AUTHING_OAUTH_TOKEN';
const useAuthing = () => {
  const [token, setToken] = useState(localStorage.getItem(StorageAuthingKey) || '');
  useEffect(() => {
    const storageEvent = (evt) => {
      const { newValue, oldValue, key } = evt;
      console.log({ evt });
      if (key == StorageAuthingKey) {
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

export default useAuthing;
