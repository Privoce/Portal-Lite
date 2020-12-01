import { useState, useEffect } from 'react';

const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const showMenu = (pos) => {
    setPosition(pos);
    setVisible(true);
  };
  const hideMenu = () => {
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
  return { menuVisible: visible, position, showMenu, hideMenu };
};

export { useContextMenu };
