'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../../data/gallery';
import Button from '../ui/Button';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import GalleryCard from '../gallery/GalleryCard';
import Lightbox from '../gallery/Lightbox';

const CARD_WIDTH =
  'w-full shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]';

export default function Gallery() {
  const { locale } = useLocale();

  const filters = [
    { key: 'All', label: t(locale, 'gallery_filter_all') },
    { key: 'Ladies Suit Stitching', label: t(locale, 'gallery_filter_suit') },
    { key: 'Embroidery', label: t(locale, 'gallery_filter_emb') },
    { key: 'Alterations', label: t(locale, 'gallery_filter_alt') },
  ];
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [distance, setDistance] = useState(0);

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const filteredItems = useMemo(
    () =>
      filter === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  const closeLightbox = useCallback(() => setSelectedItem(null), []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const next = Math.max(0, track.scrollWidth - viewport.clientWidth);
    setDistance((current) => (Math.abs(current - next) > 0.5 ? next : current));
  }, []);

  useEffect(() => {
    measure();

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;

    if (observer) {
      if (viewport) observer.observe(viewport);
      if (track) observer.observe(track);
    }

    window.addEventListener('resize', measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure, filteredItems]);

  useEffect(() => {
    const track = trackRef.current;

    if (distance <= 0) {
      if (track) track.style.transform = '';
      return undefined;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const currentTrack = trackRef.current;
      if (!section || !currentTrack) return;

      const offset = Math.min(
        Math.max(-section.getBoundingClientRect().top, 0),
        distance
      );
      currentTrack.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (track) track.style.transform = '';
    };
  }, [distance]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative bg-canvas"
      style={distance > 0 ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="center"
              eyebrow={t(locale, 'gallery_eyebrow')}
              title={t(locale, 'gallery_title')}
              threadClassName="w-48"
            />

            <div className="flex flex-wrap items-center justify-center gap-2">
              {filters.map((category) => (
                <Button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  variant={filter === category.key ? 'primary' : 'subtle'}
                  size="snug"
                  elevation={filter === category.key ? 'card' : 'none'}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div ref={viewportRef} className="mt-8 overflow-hidden sm:mt-10">
            <div
              ref={trackRef}
              className="flex items-stretch gap-6 will-change-transform"
            >
              {filteredItems.map((item, index) => (
                <Reveal
                  key={item.id}
                  delay={(index % 3) * 90}
                  className={`h-full ${CARD_WIDTH}`}
                >
                  <GalleryCard
                    item={item}
                    onOpen={setSelectedItem}
                    mediaClassName="max-h-[calc(100svh-21rem)] sm:max-h-[calc(100svh-19rem)] lg:max-h-[calc(100svh-18rem)]"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedItem ? <Lightbox item={selectedItem} onClose={closeLightbox} /> : null}
    </section>
  );
}
