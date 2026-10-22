import { useEffect, useState } from 'react';

/* True once the visitor has scrolled past `offset` pixels. */
export function useScrolledPast(offset) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const update = () => setPast(window.scrollY > offset);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [offset]);

  return past;
}
