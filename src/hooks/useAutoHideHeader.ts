import { useEffect, useRef, useState } from 'react';

/*
 * Hides the sticky header while scrolling down past the hero, and reveals it
 * again on any upward scroll. `pastHero` lets the header switch from a
 * transparent treatment over the hero to a solid one over page content.
 */
export function useAutoHideHeader(heroId = 'home') {
  const [hidden, setHidden] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const direction = useRef(0);
  const pivotY = useRef(0);
  const ticking = useRef(false);
  const frame = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    pivotY.current = window.scrollY;

    const update = () => {
      const hero = document.getElementById(heroId);
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      const y = window.scrollY;
      const delta = y - lastY.current;

      setPastHero(y >= heroBottom);
      setScrolled(y > 8);

      if (y <= 8) {
        direction.current = 0;
        pivotY.current = y;
        setHidden(false);
      } else if (delta !== 0) {
        const nextDirection = Math.sign(delta);
        const reversal = Math.abs(y - pivotY.current);

        if (direction.current === 0) {
          direction.current = nextDirection;
          pivotY.current = y;
          if (nextDirection > 0) {
            if (y >= heroBottom) setHidden(true);
          } else if (y < heroBottom) {
            setHidden(false);
          }
        } else if (nextDirection === direction.current) {
          if (nextDirection > 0) {
            if (y > pivotY.current) pivotY.current = y;
            if (y >= heroBottom) setHidden(true);
          } else {
            if (y < pivotY.current) pivotY.current = y;
            if (y < heroBottom) setHidden(false);
          }
        } else if (reversal >= 16) {
          direction.current = nextDirection;
          pivotY.current = y;
          if (nextDirection > 0) {
            if (y >= heroBottom) setHidden(true);
          } else if (y < heroBottom) {
            setHidden(false);
          }
        }
      }

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

  return { hidden, pastHero, scrolled };
}
