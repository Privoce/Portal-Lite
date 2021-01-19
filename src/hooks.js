import { useState, useEffect } from 'react';
import { Webapps, Widgets } from './data';
// 右键菜单
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
// 搜索引擎
const StorageSearchEngine = 'SETTING_SEARCH_ENGINE';
const useSearchEngine = () => {
  const [search, setSearch] = useState(localStorage.getItem(StorageSearchEngine) || 'baidu');
  const update = (val) => {
    localStorage.setItem(StorageSearchEngine, val);
    setSearch(val);
  };
  return { search, updateSearch: update };
};
// GitHub Token
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
// 小组件
const LOCAL_WG_KEY = 'WIDGET_LIST_DATA';

const useWidgets = () => {
  let wgKeys = Object.entries(Widgets)
    .filter(([, val]) => val.preset == true)
    .map(([key]) => key);
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
// 小组件的本地设置
const LOCAL_WG_SETTINGS_KEY = 'WIDGET_SETTINGS_DATA';
const useWidgetSettings = () => {
  let settings = {};
  try {
    settings = JSON.parse(localStorage.getItem(LOCAL_WG_SETTINGS_KEY));
  } catch (error) {
    settings = {};
  }
  const updateLocalData = (newData) => {
    localStorage.setItem(LOCAL_WG_SETTINGS_KEY, JSON.stringify(newData));
  };
  const [widgetSettings, setWidgetSettings] = useState(settings || {});
  const updateWidgetSetting = (key, obj) => {
    let tmp = widgetSettings;
    if (tmp[key]) {
      tmp[key] = { ...tmp[key], ...obj };
    } else {
      tmp[key] = obj;
    }

    setWidgetSettings({ ...tmp });
    updateLocalData(tmp);
  };
  const getWidgetSetting = (name, key) => {
    console.log({ widgetSettings });
    let obj = widgetSettings[name];
    if (obj) {
      return obj[key] ? obj[key] : null;
    }
    return null;
  };
  return { widgetSettings, getWidgetSetting, updateWidgetSetting };
};
// 导航
const NAV_LOCAL_KEY = 'WEB_APP_NAV_DATA';
const useAppData = () => {
  const initialData = JSON.parse(localStorage.getItem(NAV_LOCAL_KEY) || 'null') || Webapps;
  const [data, setData] = useState(initialData);
  const updateLocalData = (newData) => {
    localStorage.setItem(NAV_LOCAL_KEY, JSON.stringify(newData));
  };
  const updateAppData = (list) => {
    setData(list);
    updateLocalData(list);
  };
  const addApp = (app) => {
    let existed = data.filter((item) => item.url == app.url);
    if (existed.length != 0) {
      return { success: false, msg: '地址已存在' };
    }

    setData((prev) => {
      let newData = [...prev, app];
      updateLocalData(newData);
      return newData;
    });
    return { success: true, data };
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

export {
  useContextMenu,
  useGithubToken,
  useAppData,
  useWidgets,
  useWidgetSettings,
  useSearchEngine
};
