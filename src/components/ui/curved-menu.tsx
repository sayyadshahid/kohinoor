'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { Camera, Globe, Phone, Share2, X } from 'lucide-react';
import { SITE } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index: number;
}

interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
}

interface iHeaderProps {
  navItems?: iNavItem[];
  footer?: React.ReactNode;
}

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const MENU_SLIDE_ANIMATION = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: EASE } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: EASE },
  },
};

const defaultNavItems: iNavItem[] = [
  {
    heading: 'Home',
    href: '#home',
    subheading: 'Welcome to our atelier',
    imgSrc:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
  },
  {
    heading: 'Services',
    href: '#services',
    subheading: 'What we offer',
    imgSrc:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
  },
  {
    heading: 'Before & After',
    href: '#alterations',
    subheading: 'See the transformation',
    imgSrc:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
  },
  {
    heading: 'Gallery',
    href: '#gallery',
    subheading: 'Recent work',
    imgSrc:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
  },
  {
    heading: 'About',
    href: '#about',
    subheading: 'Our story',
    imgSrc:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80',
  },
  {
    heading: 'Contact',
    href: '#contact',
    subheading: 'Get in touch with us',
    imgSrc:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80',
  },
];

const CustomFooter: React.FC = () => {
  return (
    <div className="flex w-full justify-between px-10 py-5 text-sm text-ink md:px-24">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Camera size={24} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Globe size={24} />
      </a>
      <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
        <Share2 size={24} />
      </a>
      <a href={`tel:${SITE.phone}`} aria-label="Call Kohinoor Tailors">
        <Phone size={24} />
      </a>
    </div>
  );
};

const NavLink: React.FC<iNavLinkProps> = ({ heading, href, setIsActive, index }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = () => setIsActive(false);

  const isExternalLink = /^https?:\/\//.test(href);
  const linkProps = isExternalLink
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-line py-3 transition-colors duration-500 md:py-5"
    >
      <Link
        ref={ref}
        onMouseMove={handleMouseMove}
        href={href}
        className="w-full uppercase"
        {...linkProps}
      >
        <div className="relative flex items-start">
          <span className="mr-2 font-sans text-2xl font-thin text-ink transition-colors duration-500 md:text-4xl">
            {index}.
          </span>
          <div className="flex flex-row gap-2">
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: 'spring',
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              className="relative z-10 block font-serif text-3xl font-light text-ink transition-colors duration-500 md:text-4xl"
            >
              {heading.split('').map((letter, i) => {
                return (
                  <motion.span
                    key={`${letter}-${i}`}
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 16 },
                    }}
                    transition={{ type: 'spring' }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                );
              })}
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Curve: React.FC = () => {
  const [viewportHeight, setViewportHeight] = useState(800);

  useEffect(() => {
    const syncHeight = () => setViewportHeight(window.innerHeight);
    syncHeight();
    window.addEventListener('resize', syncHeight);
    return () => window.removeEventListener('resize', syncHeight);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${viewportHeight} L100 ${viewportHeight} Q-100 ${viewportHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${viewportHeight} L100 ${viewportHeight} Q100 ${viewportHeight / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: EASE },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] h-full w-[100px] fill-canvas stroke-none"
      aria-hidden="true"
    >
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  );
};

export const CurvedNavbar: React.FC<iCurvedNavbarProps & { footer?: React.ReactNode }> = ({
  setIsActive,
  navItems,
  footer,
}) => {
  const { locale } = useLocale();

  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="pointer-events-auto fixed right-0 top-0 z-40 h-[100dvh] w-screen max-w-screen-sm overflow-y-auto bg-canvas"
    >
      <a
        href="#home"
        onClick={() => setIsActive(false)}
        className="absolute left-6 top-6 z-10 flex flex-col leading-none"
      >
        <span className="font-serif text-xl font-semibold tracking-tight text-ink">Kohinoor</span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-silver">
          {t(locale, 'menu_tagline')}
        </span>
      </a>

      <button
        type="button"
        onClick={() => setIsActive(false)}
        aria-label={t(locale, 'menu_close_aria')}
        className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-card transition-transform duration-300 active:scale-95"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex h-full min-h-full flex-col justify-between pt-24">
        <div className="mt-0 flex flex-col gap-3 px-10 text-5xl md:px-24">
          <div className="mb-0 border-b border-line text-sm uppercase text-silver">
            <p>{t(locale, 'footer_nav')}</p>
          </div>
          <section className="mt-0 bg-transparent">
            <div className="mx-auto max-w-7xl">
              <nav aria-label={t(locale, 'nav_primary_aria')}>
                {navItems.map((item, index) => {
                  return (
                    <NavLink
                      key={item.href}
                      {...item}
                      setIsActive={setIsActive}
                      index={index + 1}
                    />
                  );
                })}
              </nav>
            </div>
          </section>
        </div>
        {footer}
      </div>
      <Curve />
    </motion.div>
  );
};

const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  footer = <CustomFooter />,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((open) => !open);

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={handleClick}
          aria-label={isActive ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isActive}
          className="fixed -right-1 top-0 z-50 m-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-none bg-canvas md:-right-1"
        >
          <div className="relative flex h-6 w-8 flex-col items-center justify-between">
            <span
              className={`block h-1 w-7 bg-ink transition-transform duration-300 ${isActive ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-1 w-7 bg-ink transition-opacity duration-300 ${isActive ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-1 w-7 bg-ink transition-transform duration-300 ${isActive ? '-translate-y-3 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar setIsActive={setIsActive} navItems={navItems} footer={footer} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
