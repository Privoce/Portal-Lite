import { useEffect, useRef, useState } from 'react';
import StyledWidget from './styled';
import { getTranslateValues } from '../hooks/utils';
let dragMoving = false;
const posKey = 'WIDGET_POSITION';
export default function Widget({ openPanel }) {
  const [pos, setPos] = useState(null);
  const widgetRef = useRef(null);
  useEffect(() => {
    const initPosition = () => {
      chrome.storage.sync.get([posKey], (res) => {
        // Notify that we saved.
        const y = res[posKey] || 30;
        setPos(y);
      });
    };
    if (widgetRef) {
      let dragEle = widgetRef.current;
      let handle = dragEle.querySelector('.handle');
      new PlainDraggable(dragEle, {
        onMove: () => {
          console.log('moving');
          dragMoving = true;
        },
        onDragEnd: () => {
          let { y } = getTranslateValues(dragEle);
          let mb = parseInt(getComputedStyle(dragEle).marginBottom);
          console.log('drag end', { y });
          // 存到本地
          chrome.storage.sync.set({ [posKey]: y - mb });
          dragMoving = false;
        },
        handle
        // autoScroll: true
      });
      initPosition();
    }
  }, []);
  const handleLogoMouseUp = () => {
    chrome.runtime.sendMessage({ action: 'OPEN_HOME' }, function () {
      /* callback */
      console.log('send open home message');
    });
  };
  const handleCameraMouseUp = () => {
    // 正在拖动...
    if (dragMoving) return;
    openPanel();
  };
  return (
    <StyledWidget position={pos} className={pos ? 'visible' : ''}>
      <div className="widget" ref={widgetRef}>
        <div className="drag">
          <div className="handle"></div>
          <div className="portal_logo" onMouseUpCapture={handleLogoMouseUp}></div>
        </div>
        <div className="camera" onMouseUp={handleCameraMouseUp}></div>
      </div>
    </StyledWidget>
  );
}
