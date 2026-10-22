import { useEffect } from 'react';

/* Calls `handler` when Escape is pressed while `active`. */
export function useEscapeKey(handler, active = true) {
  useEffect(() => {
    if (!active) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handler(event);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handler, active]);
}
