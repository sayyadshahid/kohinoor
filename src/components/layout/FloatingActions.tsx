'use client';

import { ArrowUp, MessageSquare } from 'lucide-react';
import { WHATSAPP_MESSAGES, waLink } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { useScrolledPast } from '../../hooks/useScrolledPast';
import { scrollToTop } from '../../lib/scroll';

export default function FloatingActions() {
  const { locale } = useLocale();
  const showBackToTop = useScrolledPast(600);

  return (
    <>
      <a
        href={waLink(WHATSAPP_MESSAGES.stitching)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-deep hover:bg-whatsapp-hover transition-transform hover:scale-110 md:hidden"
        aria-label={t(locale, 'floating_whatsapp_aria')}
      >
        <MessageSquare className="w-7 h-7 fill-current" aria-hidden="true" />
      </a>

      {showBackToTop ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 hidden w-11 h-11 rounded-full bg-mocha-950 text-platinum-200 shadow-deep hover:bg-mocha-900 hover:text-platinum-50 transition-colors md:flex items-center justify-center"
          aria-label={t(locale, 'floating_top_aria')}
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </button>
      ) : null}
    </>
  );
}
