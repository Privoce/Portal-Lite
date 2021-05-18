import React from 'react';

import { ResizableBox } from 'react-resizable';

export default function Resize({
  width = 440,
  height = 250,
  left = 0,
  top = 0,
  onResizeStart,
  onResizeStop,
  updateSize
}) {
  const handleResize = (evt, { size }) => {
    updateSize(size);
  };
  // lockAspectRatio={true}
  return (
    <ResizableBox
      lockAspectRatio={true}
      onResizeStart={onResizeStart}
      onResizeStop={onResizeStop}
      style={{ left: `${left}px`, top: `${top}px` }}
      width={width}
      height={height}
      minConstraints={[220, 250]}
      onResize={handleResize}
      maxConstraints={[1200, 500]}
      resizeHandles={['sw', 'se', 'nw', 'ne']}
    ></ResizableBox>
  );
}
