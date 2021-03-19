import { useState, useEffect } from 'react';
// import Navs from './SwiperTabs/nav_data';
import { useWidgetSettings } from '../../hooks';

// 导航
const useNavData = (widgetName = '', defaultData) => {
  const [histories, setHistories] = useState([]);
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  if (process.env.REACT_APP_CHROME_EXT == 'true') {
    chrome.history.search(
      {
        text: '',
        startTime: Date.now() - 7 * (24 * 60 * 60 * 1000), // 7 days ago
        endTime: Date.now()
      },
      (items) => {
        console.log({ items });
        let sorted = items.sort((a, b) => {
          return b.typedCount * 0.6 + b.visitCount - (a.typedCount * 0.6 + a.visitCount);
        });
        console.log({ sorted });
        let hs = sorted.slice(0, 8).map((item) => {
          const { id, title, url } = item;
          return { id, title, url, themeColor: '#fff', history: true };
        });
        console.log({ hs });
        setHistories(hs);
      }
    );
  }
  const initialData = defaultData?.local || getWidgetSetting({ name: widgetName }) || [];
  const [data, setData] = useState(initialData);
  const updateNavs = (list) => {
    setData(list);
    updateWidgetSetting({ name: widgetName, data: list });
  };
  const addNav = (app) => {
    let existed = data.filter((item) => item.url == app.url);
    if (existed.length != 0) {
      return { success: false, msg: '地址已存在' };
    }

    setData((prev) => {
      let newData = [...prev, app];
      updateWidgetSetting({ name: widgetName, data: newData });
      return newData;
    });
    return { success: true, data };
  };
  const removeNav = (url) => {
    setData((prev) => {
      let newData = prev.filter((item) => {
        return item.url !== url;
      });
      updateWidgetSetting({ name: widgetName, data: newData });
      return newData;
    });
  };
  return { data, histories, addNav, removeNav, updateNavs };
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
