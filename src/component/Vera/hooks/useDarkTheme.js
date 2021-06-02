import { useState, useEffect } from 'react';
const useDarkTheme = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const initDarkMode = () => {
      let initIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      chrome.storage.local.get(['DARK_MODE'], (result) => {
        if (typeof result.DARK_MODE !== undefined) {
          console.log('dark mode', result.DARK_MODE);
          initIsDark = result.DARK_MODE;
        }
        setDark(initIsDark);
      });
    };
    initDarkMode();
  }, []);
  useEffect(() => {
    let PANEL = document.querySelector('#PORTAL_VERA_PANEL');
    if (dark) {
      PANEL.classList.add('vera-dark-theme');
    } else {
      PANEL.classList.remove('vera-dark-theme');
    }
    chrome.storage.local.set({ DARK_MODE: dark });
  }, [dark]);

  const updateDarkTheme = (dark) => {
    setDark(dark);
  };

  return { dark, updateDarkTheme };
};

export default useDarkTheme;
