import { useState, useEffect } from 'react';
import { Webapps } from '../../data';
// 导航
const NAV_LOCAL_KEY = 'WEB_APP_NAV_DATA';
const useNavData = () => {
  const initialData = JSON.parse(localStorage.getItem(NAV_LOCAL_KEY) || 'null') || Webapps;
  const [data, setData] = useState(initialData);
  const updateLocalData = (newData) => {
    localStorage.setItem(NAV_LOCAL_KEY, JSON.stringify(newData));
  };
  const updateNavs = (list) => {
    setData(list);
    updateLocalData(list);
  };
  const addNav = (app) => {
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
  const removeNav = (url) => {
    setData((prev) => {
      let newData = prev.filter((item) => {
        return item.url !== url;
      });
      updateLocalData(newData);
      return newData;
    });
  };
  return { data, addNav, removeNav, updateNavs };
};
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

export { useContextMenu, useNavData };
