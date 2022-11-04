import { useEffect } from 'react';

export default function PageTitle({ title = '' }) {
  useEffect(() => {
    const currTitle = document.title;
    if (title) {
      document.title = title;
    }
    return () => {
      document.title = currTitle;
    };
  }, [title]);
  return null;
}
