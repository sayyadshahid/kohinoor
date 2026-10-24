'use client';

import { useCallback, useState } from 'react';
import { Menu, MessageSquare, Phone, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SECTION_IDS, SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useAutoHideHeader } from '../../hooks/useAutoHideHeader';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { NAV_LABEL_KEYS } from '../../data/i18n/nav';
import Logo from '../brand/Logo';
import NeedleAndThreadIcon from '../brand/NeedleAndThreadIcon';
import Button from '../ui/Button';
import DesktopNav from './DesktopNav';
import { CurvedNavbar } from '../ui/curved-menu';

function CurvedMenuFooter() {
  const { locale } = useLocale();
  return (
    <div className="flex w-full items-center justify-between gap-3 border-t border-line px-10 py-5 text-xs font-semibold uppercase tracking-wider md:px-24">
      <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-brand">
        <Phone className="h-4 w-4" aria-hidden="true" />
        {t(locale, 'header_call_atelier')}
      </a>
      <a
        href={waLink(WHATSAPP_MESSAGES.fitting)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-brand"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        {t(locale, 'header_book_fitting')}
      </a>
    </div>
  );
}

export default function Header() {
  const { locale } = useLocale();
  const menuItems = NAV_LINKS.map(({ href, label }) => ({
    heading: NAV_LABEL_KEYS[href] ? t(locale, NAV_LABEL_KEYS[href]) : label,
    href,
  }));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hidden, pastHero, scrolled } = useAutoHideHeader('home');
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMobileMenuOpen((open) => !open), []);

  useScrollLock(mobileMenuOpen);
  useEscapeKey(closeMenu, mobileMenuOpen);

  const compact = hidden && !mobileMenuOpen;
  const solid = pastHero || mobileMenuOpen || compact;

  return (
    <>
      {/* Reserves the space the header used to occupy so collapsing it never shifts the page. */}
      <div aria-hidden="true" className="h-20 md:h-[5.5rem]" />

      <header className="pointer-events-none fixed inset-x-0 top-2 z-50 flex justify-center">
        <div
          className={`pointer-events-auto relative z-[80] overflow-visible border border-transparent transition-all duration-700 ease-soft motion-reduce:transition-none ${
            mobileMenuOpen ? 'invisible -translate-y-2 opacity-0' : ''
          } ${
            compact
              ? 'h-10 w-36 rounded-full px-2'
              : 'h-[4.5rem] w-[calc(100%-1.5rem)] rounded-3xl sm:w-[calc(100%-2rem)] md:h-20 lg:w-[calc(100%-3rem)]'
          } ${
            solid
              ? 'border-line bg-canvas/85 shadow-card backdrop-blur-xl'
              : scrolled
                ? 'border-line/60 bg-canvas/60 backdrop-blur-xl'
                : 'bg-canvas/60 backdrop-blur-xl'
          }`}
        >
          <div
            aria-hidden={compact || undefined}
            inert={compact || undefined}
            className={`absolute left-1/2 top-1/2 flex h-[4.5rem] w-[calc(100vw-1.5rem)] -translate-x-1/2 -translate-y-1/2 items-center overflow-visible transition-opacity duration-300 ease-soft sm:w-[calc(100vw-2rem)] md:h-20 lg:w-[calc(100vw-3rem)] ${
              compact ? 'opacity-0' : 'opacity-100 delay-150'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex w-full items-center justify-between overflow-visible">
              <Logo href="#home" />

              <DesktopNav activeSection={activeSection} />

              <div className="hidden md:flex items-center gap-3">
                <Button href={`tel:${SITE.phone}`} variant="ghost" size="sm" caps>
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  {t(locale, 'header_call_atelier')}
                </Button>
                <Button
                  href={waLink(WHATSAPP_MESSAGES.fitting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="smWide"
                  elevation="card"
                  caps
                >
                  {t(locale, 'header_book_fitting')}
                </Button>
              </div>

              <button
                onClick={toggleMenu}
                className="md:hidden p-2 -mr-2 text-brand rounded-md"
                aria-label={mobileMenuOpen ? t(locale, 'menu_close_aria') : t(locale, 'menu_open_aria')}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div
            aria-hidden={!compact || undefined}
            inert={!compact || undefined}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-soft ${
              compact ? 'opacity-100 delay-150' : 'pointer-events-none opacity-0'
            }`}
          >
            <a href="#home" className="flex items-center gap-2 text-brand" aria-label="Kohinoor — back to top">
              <NeedleAndThreadIcon className="w-4 h-4" />
              <span className="font-serif text-base font-semibold tracking-tight text-mocha-900 whitespace-nowrap">
                Kohinoor
              </span>
            </a>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {mobileMenuOpen ? (
            <CurvedNavbar
              navItems={menuItems}
              setIsActive={closeMenu}
              footer={<CurvedMenuFooter />}
            />
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
