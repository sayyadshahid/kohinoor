import { useEffect } from 'react';

/* Locks body scrolling while `active` is true (modals, drawers). */
export function useScrollLock(active = true) {
  useEffect(() => {
    if (!active) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);
}
