import { useEffect, useState } from 'react';

/* Returns the id of the section currently occupying the viewport centre. */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.6] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
