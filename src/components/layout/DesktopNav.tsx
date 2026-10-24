'use client';

import { NAV_LINKS } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { NAV_LABEL_KEYS } from '../../data/i18n/nav';
import LanguageSwitcher from './LanguageSwitcher';

const PRIMARY_HREFS = new Set(['#home', '#services', '#alterations', '#contact']);

export default function DesktopNav({ activeSection }: { activeSection: string }) {
  const { locale } = useLocale();

  return (
    <nav
      className="group/nav hidden md:flex items-center text-sm font-medium text-ink relative z-[60]"
      aria-label="Primary"
    >
      {NAV_LINKS.map(({ href, label, icon: Icon }, index) => {
        const isActive = activeSection === href.slice(1);
        const labelKey = NAV_LABEL_KEYS[href];
        const displayLabel = labelKey ? t(locale, labelKey) : label;
        const isPrimary = PRIMARY_HREFS.has(href);

        return (
          <a
            key={href}
            href={href}
            aria-current={isActive ? 'true' : undefined}
            className={`relative flex items-center gap-1 overflow-hidden whitespace-nowrap rounded-full transition-all duration-500 ease-soft motion-reduce:transition-none ${
              isPrimary
                ? `px-1.5 py-1 max-w-[160px] opacity-100 translate-x-0 ${index === 0 ? '' : 'ml-1'}`
                : 'px-0 py-1 max-w-0 opacity-0 -translate-x-1 pointer-events-none ml-0 group-hover/nav:px-1.5 group-hover/nav:ml-1 group-hover/nav:max-w-[160px] group-hover/nav:opacity-100 group-hover/nav:translate-x-0 group-hover/nav:pointer-events-auto'
            } ${isActive ? 'text-brand font-semibold' : 'text-ink hover:text-brand'}`}
          >
            {Icon ? <Icon className="w-3.5 h-3.5 text-silver" aria-hidden="true" /> : null}
            <span className="relative">{displayLabel}</span>
          </a>
        );
      })}
      <div className="ml-1">
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
