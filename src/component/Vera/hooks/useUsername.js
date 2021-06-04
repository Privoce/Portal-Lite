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
      if (area == 'sync') {
        const { user, fakename } = changes;
        if (user) {
          let { newValue = null } = user || {};
          if (newValue) {
            let { username } = user.newValue;
            setName(username);
          } else {
            setName(null);
          }
          setFake(false);
        } else if (fakename) {
          let { newValue = null } = fakename || {};
          setName(newValue);
          setFake(true);
        }
      }
    });
    return () => {
      // chrome.storage.onChanged = null;
    };
  }, []);
  useEffect(() => {
    if (!fake) {
      chrome.storage.sync.remove(['fakename']);
    }
  }, [fake]);
  const updateUsername = (name) => {
    chrome.storage.sync.set({ fakename: name }, () => {
      // Notify that we saved.
      console.log('set fakename');
    });
  };
  return { username: name, fake, updateUsername };
};

export default useUsername;
