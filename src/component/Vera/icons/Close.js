// import React from 'react';

export default function Close({ color = '' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
        fill={color || `var(--vera-font-color)`}
      />
    </svg>
  );
}
