'use client';

import { X } from 'lucide-react';
import { useBooking } from '../../context/booking-context';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { CATEGORY_SERVICE_MAP } from '../../data/gallery';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import Button from '../ui/Button';

const CATEGORY_KEYS: Record<string, string> = {
  'Ladies Suit Stitching': 'gallery_filter_suit',
  Embroidery: 'gallery_filter_emb',
  Alterations: 'gallery_filter_alt',
};

export default function Lightbox({ item, onClose }) {
  const { locale } = useLocale();
  const { selectService } = useBooking();
  const category = t(locale, CATEGORY_KEYS[item.category] ?? 'gallery_filter_all');

  useScrollLock(true);
  useEscapeKey(onClose, true);

  const inquire = () => {
    selectService(CATEGORY_SERVICE_MAP[item.category] ?? item.category);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-mocha-950/85 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-deep"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          autoFocus
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-ink shadow-card transition-colors hover:bg-brand hover:text-on-dark sm:right-4 sm:top-4"
          aria-label={t(locale, 'lightbox_close')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid min-h-0 grid-cols-1 overflow-y-auto overscroll-contain md:grid-cols-2">
          <div className="h-56 w-full bg-mocha-950 sm:h-64 md:h-full">
            <img
              decoding="async"
              loading="lazy"
              width={1000}
              height={1000}
              src={item.image}
              alt={`${item.title} - ladies suit by Kohinoor Tailors in Kondhwa, Pune`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-4 p-4 sm:p-6">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-platinum-300 sm:text-xs">
                {category}
              </span>

              <h3
                id="lightbox-title"
                className="pr-8 font-serif text-xl font-semibold text-brand sm:text-2xl"
              >
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-ink-soft sm:text-sm">{item.description}</p>

              <div className="rounded-lg border border-line bg-canvas p-3 text-xs text-ink-soft">
                <span className="mb-1 block font-semibold text-brand">{t(locale, 'gallery_craft_spec')}</span>
                {item.details}
              </div>
            </div>

            <div className="space-y-2 border-t border-line pt-2">
              <Button onClick={inquire} size="blockLg" elevation="card" full caps>
                {t(locale, 'gallery_inquire_similar')}
              </Button>
              <Button onClick={onClose} variant="muted" size="block" full>
                {t(locale, 'gallery_close_preview')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
