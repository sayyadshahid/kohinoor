'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GALLERY_ITEMS_BY_LOCALE } from '../../data/gallery';
import { WHATSAPP_MESSAGES, waLink } from '../../config/site';
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
  const items = GALLERY_ITEMS_BY_LOCALE[locale];

  const filters = [
    { key: 'All', label: t(locale, 'gallery_filter_all') },
    { key: 'Alterations', label: t(locale, 'gallery_filter_alt') },
    { key: 'Ladies Suit Stitching', label: t(locale, 'gallery_filter_suit') },
    { key: 'Embroidery', label: t(locale, 'gallery_filter_emb') },
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
        ? items
        : items.filter((item) => item.category === filter),
    [filter, items]
  );
  const showEmbroideryNote = filter === 'Embroidery' && filteredItems.length === 0;

  const closeLightbox = useCallback(() => setSelectedItem(null), []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) {
      setDistance(0);
      return;
    }

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
              id="gallery-title"
              align="center"
              eyebrow={t(locale, 'gallery_eyebrow')}
              title={t(locale, 'gallery_title')}
              description={t(locale, 'gallery_desc')}
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

          {showEmbroideryNote ? (
            <div className="mx-auto mt-8 max-w-xl sm:mt-10">
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface p-8 text-center shadow-card sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-platinum-200 ring-1 ring-platinum-300/25">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3
                  id="gallery-embroidery-note"
                  className="font-serif text-xl font-semibold text-brand sm:text-2xl"
                >
                  {t(locale, 'gallery_emb_note_title')}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {t(locale, 'gallery_emb_note_desc')}
                </p>
                <Button
                  href={waLink(WHATSAPP_MESSAGES.embroidery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="mdWide"
                  elevation="card"
                  hoverLift
                  caps
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {t(locale, 'gallery_emb_note_cta')}
                </Button>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>

      {selectedItem ? <Lightbox item={selectedItem} onClose={closeLightbox} /> : null}
    </section>
  );
}
