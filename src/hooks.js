import { useState } from 'react';
import { Widgets } from './data';

// 小组件
const useWidgets = () => {
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  let wgKeys = Object.entries(Widgets)
    .filter(([, val]) => val.preset == true)
    .map(([key]) => key);
  const initialKeys = getWidgetSetting({ key: 'local', name: 'widgets' }) || wgKeys;
  const [widgets, setWidgets] = useState(initialKeys);
  const updateWidgetData = (list) => {
    setWidgets(list);
    updateWidgetSetting({ name: 'widgets', data: list });
  };
  const addWidget = (app) => {
    setWidgets((prev) => {
      let newData = [...prev, app];
      updateWidgetSetting({ name: 'widgets', data: newData });
      return newData;
    });
  };
  const removeWidget = (key) => {
    setWidgets((prev) => {
      let newData = prev.filter((item) => {
        return item !== key;
      });
      updateWidgetSetting({ name: 'widgets', data: newData });
      return newData;
    });
  };

  return { widgets, addWidget, removeWidget, updateWidgetData };
};
// 小组件的本地设置
const LOCAL_WG_SETTINGS_KEY = 'WIDGET_SETTINGS_DATA';
const useWidgetSettings = () => {
  let settings = null;
  try {
    settings = JSON.parse(localStorage.getItem(LOCAL_WG_SETTINGS_KEY));
  } catch (error) {
    console.log({ error });
  }
  const updateLocalData = (newData) => {
    localStorage.setItem(LOCAL_WG_SETTINGS_KEY, JSON.stringify(newData));
  };
  const [widgetSettings, setWidgetSettings] = useState(settings);
  let defaultUpdateParams = { name: 'common', key: 'local', data: null };
  const updateWidgetSetting = (params = defaultUpdateParams) => {
    const { key, name, data } = Object.assign({}, defaultUpdateParams, params);
    console.log({ key, name, data });
    let tmp = widgetSettings || {};
    if (tmp[name]) {
      tmp[name] = { ...tmp[name], ...{ [key]: data } };
    } else {
      tmp[name] = { [key]: data };
    }

    setWidgetSettings({ ...tmp });
    updateLocalData(tmp);
  };
  let defaultGetParams = { key: 'local', name: 'common' };

  const getWidgetSetting = (params = defaultGetParams) => {
    const { key, name } = Object.assign({}, defaultGetParams, params);
    if (!widgetSettings) return null;
    // console.log({ widgetSettings });
    let obj = widgetSettings[name];
    if (obj) {
      return obj[key] ? obj[key] : null;
    }
    return null;
  };
  const clearWidgetSettings = () => {
    // console.log({ widgetSettings });
    setWidgetSettings(null);
    localStorage.removeItem(LOCAL_WG_SETTINGS_KEY);
  };
  const importWidgetSettings = (content) => {
    // console.log({ widgetSettings });
    setWidgetSettings(JSON.parse(content));
    localStorage.setItem(LOCAL_WG_SETTINGS_KEY, content);
  };
  const getLocalWidgetSettings = () => {
    // console.log({ widgetSettings });
    let localData = JSON.parse(localStorage.getItem(LOCAL_WG_SETTINGS_KEY));
    return localData;
  };

  return {
    widgetSettings,
    getWidgetSetting,
    getLocalWidgetSettings,
    updateWidgetSetting,
    importWidgetSettings,
    clearWidgetSettings
  };
};

export { useWidgets, useWidgetSettings };
