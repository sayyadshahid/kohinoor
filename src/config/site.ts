import type { LucideIcon } from 'lucide-react';
import { Scissors } from 'lucide-react';

export type ServiceId = 'alterations' | 'stitching' | 'embroidery';

export type SiteService = {
  id: ServiceId;
  name: string;
  shortDescription: string;
  startingPrice: number | null;
  turnaround: string;
  includes: string;
};

const SERVICES: SiteService[] = [
  {
    id: 'alterations',
    name: 'Alterations & Reshaping',
    shortDescription:
      'Precision waist tapering, hem shortening, sleeve adjustment, side seam reshaping and shoulder corrections for suits, blouses, kurtis and heavy bridal lehengas.',
    startingPrice: 150,
    turnaround: '24–48 hours',
    includes: 'Waist, bust, armhole and hem adjustments',
  },
  {
    id: 'stitching',
    name: 'Ladies Suit & Ensemble Stitching',
    shortDescription:
      'Bespoke stitching for Punjabi salwar kameez, Anarkali suits, straight trousers, sharara sets, padded blouses and Indo-Western dresses cut to precise measurements.',
    startingPrice: 450,
    turnaround: 'Confirmed at fitting',
    includes: 'Measurements, stitching and trial fitting',
  },
  {
    id: 'embroidery',
    name: 'Hand & Machine Embroidery',
    shortDescription:
      'Traditional Zardozi, Aari needlework, silk thread motifs, mirror work and custom necklines or sleeve borders tailored for festive and bridal wear.',
    startingPrice: null,
    turnaround: 'Quoted by design',
    includes: 'Zardozi, Aari, silk thread and mirror work',
  },
];

/* Single source of truth for business details, contact details and SEO output. */
export const SITE = {
  name: 'Kohinoor Tailors',
  alternateName: 'Kohinoor Atelier',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://kohinoorr.vercel.app').replace(/\/+$/, ''),
  founded: 2015,
  description:
    'Bespoke ladies suit stitching, bridal lehenga alterations and hand zardozi embroidery in Kondhwa, Pune.',
  phone: '+918483895822',
  phoneDisplay: '+91 84838 95822',
  whatsapp: '918483895822',
  address:
    '501, Phase 2, Lane Number 9, Saibaba Nagar, Kondhwa, Pune, Maharashtra 411048, India',
  addressParts: {
    streetAddress: '501, Phase 2, Lane Number 9, Saibaba Nagar, Kondhwa',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411048',
    addressCountry: 'IN',
  },
  mapQuery: '501, Phase 2, Lane Number 9, Saibaba Nagar, Kondhwa, Pune 411048',
  coords: { lat: 18.46941223825573, lng: 73.88395709392807 },
  hours: 'Monday – Saturday: 10:00 AM – 8:30 PM',
  sundayHours: 'Sunday: 11:00 AM – 5:00 PM (Trial Fittings Only)',
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:30',
    },
    {
      dayOfWeek: ['Sunday'],
      opens: '11:00',
      closes: '17:00',
    },
  ],
  priceRange: '₹₹',
  areaServed: ['Kondhwa', 'Pune', 'Hadapsar', 'Undri', 'NIBM', 'Wanowrie', 'Camp'],
  /* Replace with the live Google Maps / Google Business Profile URL. */
  googleBusinessUrl: 'https://maps.app.goo.gl/REPLACE_WITH_GOOGLE_BUSINESS_PROFILE',
  datePublished: '2025-01-01',
  /* Single source for the visible "Last updated" line and schema dateModified. */
  lastUpdated: '2026-10-30',
  services: SERVICES,
  ogImage: '/og-image.jpg',
  ogImageAlt:
    'Dusty rose embroidered ladies suit stitched by Kohinoor Tailors in Kondhwa, Pune',
} as const;

const COORD_QUERY = `${SITE.coords.lat},${SITE.coords.lng}`;

export const YEARS_CRAFTING = new Date().getFullYear() - SITE.founded;

export const waLink = (message: string): string =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  fitting: 'Namaste Kohinoor Tailors, mujhe fitting session book karni hai.',
  stitching: 'Namaste Kohinoor Tailors, mujhe stitching ke baare mein inquiry karni hai.',
  stitchingAndAlterations:
    'Namaste Kohinoor Tailors, mujhe stitching aur alterations ke baare mein inquiry karni hai.',
  embroidery:
    'Namaste Kohinoor Tailors, mujhe hand aur machine embroidery ke baare mein inquiry karni hai.',
  directions: 'Namaste Kohinoor Tailors, main shop ke bahar hoon, directions bhej dijiye.',
};

export const SECTION_IDS = [
  'home',
  'services',
  'alterations',
  'gallery',
  'about',
  'faq',
  'contact',
];

type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#alterations', label: 'Before & After', icon: Scissors },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${COORD_QUERY}`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${COORD_QUERY}`;

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${COORD_QUERY}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
