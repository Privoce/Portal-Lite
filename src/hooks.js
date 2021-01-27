import { useState } from 'react';
import { Widgets } from './data';

// 小组件
const LOCAL_WG_KEY = 'WIDGET_LOCAL_DATA';

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
  const updateWidgetSetting = (key = 'common', obj) => {
    let tmp = widgetSettings;
    if (tmp[key]) {
      tmp[key] = { ...tmp[key], ...obj };
    } else {
      tmp[key] = obj;
    }

    setWidgetSettings({ ...tmp });
    updateLocalData(tmp);
  };
  const getWidgetSetting = (name = 'common', key = 'local') => {
    // console.log({ widgetSettings });
    let obj = widgetSettings[name];
    if (obj) {
      return obj[key] ? obj[key] : null;
    }
    return null;
  };
  return { widgetSettings, getWidgetSetting, updateWidgetSetting };
};

export { useWidgets, useWidgetSettings };
