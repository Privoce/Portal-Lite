import { useEffect, useRef } from 'react';
import StyledWidget from './styled';
let dragMoving = false;
export default function Widget({ openPanel }) {
  const widgetRef = useRef(null);
  useEffect(() => {
    if (widgetRef) {
      let dragEle = widgetRef.current;
      let handle = dragEle.querySelector('.handle');
      new PlainDraggable(dragEle, {
        onMove: () => {
          console.log('moving');
          dragMoving = true;
        },
        onDragEnd: () => {
          console.log('drag end');
          dragMoving = false;
        },
        handle
        // autoScroll: true
      });
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
    <StyledWidget>
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
