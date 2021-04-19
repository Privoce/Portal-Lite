import { useState, useEffect } from 'react';

const useUsername = (defaultName = '') => {
  const [name, setName] = useState(defaultName);
  const [fake, setFake] = useState(false);
  useEffect(() => {
    chrome.storage.sync.get(['user', 'fakename'], (res) => {
      console.log('local user data', res.user, res.fakename);
      const { user = null, fakename = null } = res;
      if (user) {
        setName(user.username);
        setFake(false);
      } else if (fakename) {
        setName(fakename);
        setFake(true);
      }
    });
    chrome.storage.onChanged.addListener((changes, area) => {
      console.log({ changes, area });
      if (area == 'sync' && changes.user?.newValue) {
        let { username } = changes.user.newValue;
        setName(username);
        setFake(false);
      }
      if (area == 'sync' && changes.fakename?.newValue) {
        let newName = changes.fakename.newValue;
        setName(newName);
        setFake(true);
      }
    });
    return () => {
      // chrome.storage.onChanged = null;
    };
  }, []);
  const updateUsername = (name) => {
    chrome.storage.sync.set({ fakename: name }, () => {
      // Notify that we saved.
      console.log('set fakename');
    });
  };
  return { username: name, fake, updateUsername };
};

export default useUsername;
