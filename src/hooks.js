import { useState, useEffect } from 'react';
import { Webapps, Tools, Widgets } from './data';
const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [widget, setWidget] = useState(undefined);
  const showMenu = ({ position, widget }) => {
    setPosition(position);
    setWidget(widget);
    setVisible(true);
  };
  const hideMenu = () => {
    setWidget(undefined);
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
  return { menuVisible: visible, position, widget, showMenu, hideMenu };
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
const LOCAL_WG_KEY = 'WIDGET_LIST';
const useWidgets = () => {
  let wgKeys = Object.keys(Widgets);
  const initialKeys = JSON.parse(localStorage.getItem(LOCAL_WG_KEY)) || wgKeys;
  const [widgets, setWidgets] = useState(initialKeys);
  const updateLocalData = (newData) => {
    localStorage.setItem(LOCAL_WG_KEY, JSON.stringify(newData));
  };
  const updateWidgetData = (list) => {
    setWidgets(list);
    updateLocalData(list);
  };
  const addWidget = (app) => {
    setWidgets((prev) => {
      let newData = [...prev, app];
      updateLocalData(newData);
      return newData;
    });
  };
  const removeWidget = (key) => {
    setWidgets((prev) => {
      let newData = prev.filter((item) => {
        return item !== key;
      });
      updateLocalData(newData);
      return newData;
    });
  };
  return { widgets, addWidget, removeWidget, updateWidgetData };
};
const AppKeyMap = {
  webapp: { localKey: 'WEB_APP_DATA', initalData: Webapps },
  tool: { localKey: 'WEB_TOOL_DATA', initalData: Tools }
};
const useAppData = (src = 'webapp') => {
  const { localKey, initalData } = AppKeyMap[src];
  const initialData = JSON.parse(localStorage.getItem(localKey) || 'null') || initalData;
  const [data, setData] = useState(initialData);
  const updateLocalData = (newData) => {
    localStorage.setItem(localKey, JSON.stringify(newData));
  };
  const updateAppData = (list) => {
    setData(list);
    updateLocalData(list);
  };
  const addApp = (app) => {
    setData((prev) => {
      let newData = [...prev, app];
      updateLocalData(newData);
      return newData;
    });
  };
  const removeApp = (url) => {
    setData((prev) => {
      let newData = prev.filter((item) => {
        return item.url !== url;
      });
      updateLocalData(newData);
      return newData;
    });
  };
  return { data, addApp, removeApp, updateAppData };
};

export { useContextMenu, useGithubToken, useAppData, useWidgets };
