'use client';

import { useCallback, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { SECTION_IDS, SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useScrolledPast } from '../../hooks/useScrolledPast';
import Logo from '../brand/Logo';
import Button from '../ui/Button';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ReadingProgress from './ReadingProgress';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolledPast(20);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMobileMenuOpen((open) => !open), []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-xl shadow-card border-b border-line py-3'
          : 'bg-canvas border-b border-line/70 py-4'
      }`}
    >
      <ReadingProgress value={scrollProgress} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo href="#home" />

        <DesktopNav activeSection={activeSection} />

        <div className="hidden md:flex items-center gap-3">
          <Button href={`tel:${SITE.phone}`} variant="ghost" size="sm" caps>
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Call Atelier
          </Button>
          <Button
            href={waLink(WHATSAPP_MESSAGES.fitting)}
            target="_blank"
            rel="noopener noreferrer"
            size="smWide"
            elevation="card"
            caps
          >
            Book Fitting
          </Button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 -mr-2 text-brand rounded-md"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <MobileNav activeSection={activeSection} onNavigate={closeMenu} />
      ) : null}
    </header>
  );
}
