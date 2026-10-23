import { ArrowUpRight, MessageSquare, Phone, X } from 'lucide-react';
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import Logo from '../brand/Logo';
import StitchedThreadLine from '../brand/StitchedThreadLine';

export default function MobileNav({ activeSection, onNavigate }) {
  useScrollLock(true);
  useEscapeKey(onNavigate, true);

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      className="pointer-events-auto fixed inset-0 z-[60] animate-menu-in overflow-y-auto overscroll-contain bg-canvas md:hidden"
    >
      <div className="relative flex min-h-[100dvh] flex-col px-5 pb-5 pt-4">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-8 select-none font-serif text-[46vw] leading-none text-mocha-100/45"
        >
          K
        </span>

        <div className="relative flex items-center justify-between">
          <Logo href="#home" showTagline={false} />
          <button
            type="button"
            onClick={onNavigate}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-brand shadow-card transition-transform duration-300 active:scale-95"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex-1 pt-7">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-silver">
              Index
            </span>
            <span className="h-px flex-1 bg-line" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-silver">
              {NAV_LINKS.length}
            </span>
          </div>

          <nav aria-label="Primary" className="mt-2 flex flex-col">
            {NAV_LINKS.map(({ href, label }, index) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={onNavigate}
                  aria-current={isActive ? 'true' : undefined}
                  style={{ animationDelay: `${100 + index * 55}ms` }}
                  className="group flex animate-rise items-center justify-between gap-4 border-b border-line/70 py-2"
                >
                  <span className="flex min-w-0 items-baseline gap-3">
                    <span className="w-5 shrink-0 text-[10px] font-semibold tabular-nums tracking-widest text-silver">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`truncate font-serif text-[clamp(1.6rem,7.5vw,2.5rem)] leading-tight tracking-tight transition-colors ${
                        isActive ? 'italic text-brand' : 'text-ink group-hover:text-brand'
                      }`}
                    >
                      {label}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'text-brand opacity-100'
                        : 'text-silver opacity-40 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="relative mt-5">
          <StitchedThreadLine className="mb-4 text-line-strong" height="8" />

          <div className="grid grid-cols-2 gap-2">
            <a
              href={waLink(WHATSAPP_MESSAGES.fitting)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 rounded-full bg-brand px-4 py-3 text-on-dark shadow-card transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                {t(useLocale().locale, 'header_book_fitting')}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-between gap-2 rounded-full border border-line bg-surface px-4 py-3 text-brand shadow-card transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t(useLocale().locale, 'header_call_atelier')}
              </span>
              <ArrowUpRight className="h-4 w-4 text-silver" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-silver">
            <span>Kondhwa, Pune</span>
            <span>Mon–Sat · 10–8:30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
