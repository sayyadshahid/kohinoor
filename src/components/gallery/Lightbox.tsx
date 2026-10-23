'use client';

import { X } from 'lucide-react';
import { useBooking } from '../../context/booking-context';
import { CATEGORY_SERVICE_MAP } from '../../data/gallery';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import Button from '../ui/Button';

export default function Lightbox({ item, onClose }) {
  const { selectService } = useBooking();

  useScrollLock(true);
  useEscapeKey(onClose, true);

  const inquire = () => {
    selectService(CATEGORY_SERVICE_MAP[item.category] ?? item.category);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-mocha-950/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="bg-surface rounded-2xl max-w-2xl w-full overflow-hidden shadow-deep border border-line-strong relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          autoFocus
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface/90 text-ink hover:bg-brand hover:text-on-dark flex items-center justify-center transition-colors shadow-card"
          aria-label="Close image modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-mocha-950 aspect-[4/5] md:aspect-auto">
            <img
              decoding="async"
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-platinum-300 bg-brand px-3 py-1 rounded-full inline-block">
                {item.category}
              </span>

              <h3 className="font-serif text-2xl font-semibold text-brand">{item.title}</h3>

              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">{item.description}</p>

              <div className="p-3 bg-canvas rounded-lg border border-line text-xs text-ink-soft">
                <span className="font-semibold block mb-1 text-brand">Craft Specification:</span>
                {item.details}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-line">
              <Button onClick={inquire} size="blockLg" elevation="card" full caps>
                Inquire About Similar Design
              </Button>
              <Button onClick={onClose} variant="muted" size="block" full>
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
