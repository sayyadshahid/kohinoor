'use client';

import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import ContactForm from './ContactForm';

export default function BookingDialog({ onClose }) {
  const { locale } = useLocale();
  useScrollLock(true);
  useEscapeKey(onClose, true);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-mocha-950/75 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-dialog-title"
    >
      <div
        className="relative w-full max-w-2xl my-auto max-h-[calc(100dvh-2rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface/90 text-ink hover:bg-brand hover:text-on-dark flex items-center justify-center transition-colors shadow-card"
          aria-label={t(locale, 'form_close_aria')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-2xl">
          <ContactForm inDialog onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
}
