import { useEffect, useState } from 'react';

/* Tracks how far the page has been scrolled, as a 0–100 percentage. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progress;
}
