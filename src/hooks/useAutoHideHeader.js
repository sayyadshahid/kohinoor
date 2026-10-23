import { useEffect, useRef, useState } from 'react';

/*
 * Hides the sticky header while scrolling down past the hero, and reveals it
 * again on any upward scroll. `pastHero` lets the header switch from a
 * transparent treatment over the hero to a solid one over page content.
 */
export function useAutoHideHeader(heroId = 'home') {
  const [hidden, setHidden] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const frame = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const hero = document.getElementById(heroId);
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      const y = window.scrollY;
      const goingUp = y < lastY.current - 2;
      const goingDown = y > lastY.current + 2;

      if (y <= 8 || goingUp) {
        setHidden(false);
      } else if (goingDown && y >= heroBottom) {
        setHidden(true);
      }

      setPastHero(y >= heroBottom);
      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      frame.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [heroId]);

  return { hidden, pastHero };
}
