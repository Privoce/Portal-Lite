// import React from 'react';

export default function Copied() {
  let color = getComputedStyle(document.documentElement).getPropertyValue('--vera-button-bg-color');
  return (
    <svg width="19" height="11" viewBox="0 0 19 11" fill="none">
      <path
        d="M0 6.41803L4.56817 11L5.72043 9.83607L1.16043 5.26229L0 6.41803ZM17.8396 0L9.19355 8.68033L5.79398 5.26229L4.62538 6.41803L9.19355 11L19 1.16393L17.8396 0ZM14.3746 1.16393L13.2224 0L8.03312 5.20492L9.19355 6.36066L14.3746 1.16393Z"
        fill={color}
      />
    </svg>
  );
}
