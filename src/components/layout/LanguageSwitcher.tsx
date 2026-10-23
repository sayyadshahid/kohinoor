'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLocale, type Locale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

const OPTIONS: { code: Locale; labelKey: string }[] = [
  { code: 'en', labelKey: 'lang_en' },
  { code: 'hi', labelKey: 'lang_hi' },
  { code: 'mr', labelKey: 'lang_mr' },
];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative z-[100]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-1 text-[11px] font-medium text-ink transition-colors hover:text-brand"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t(locale, 'lang_label')}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        {locale === 'en' ? t(locale, 'lang_en') : locale === 'hi' ? t(locale, 'lang_hi') : t(locale, 'lang_mr')}
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={t(locale, 'lang_label')}
          className="absolute right-0 top-full pt-1 w-28 z-[100]"
        >
          <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-lift">
          {OPTIONS.map((opt) => (
            <button
              key={opt.code}
              role="option"
              aria-selected={locale === opt.code}
              onClick={() => {
                setLocale(opt.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-2 py-1 text-left text-[11px] ${
                locale === opt.code
                  ? 'bg-brand-soft/60 text-brand'
                  : 'text-ink hover:bg-canvas-alt'
              }`}
            >
              {t(locale, opt.labelKey)}
              {locale === opt.code ? <span aria-hidden="true">•</span> : null}
            </button>
          ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
