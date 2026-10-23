import { Scissors } from 'lucide-react';

/* Single source of truth for contact details. */
export const SITE = {
  founded: 1998,
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210',
  address: 'Kohinoor Tailors, Main Market Road, Near Clock Tower, Sector 4',
  mapQuery: 'Kohinoor Tailors Main Market Road',
  coords: { lat: 30.751857, lng: 76.801415 },
  hours: 'Monday – Saturday: 10:00 AM – 8:30 PM',
  sundayHours: 'Sunday: 11:00 AM – 5:00 PM (Trial Fittings Only)',
};

export const YEARS_CRAFTING = new Date().getFullYear() - SITE.founded;

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  fitting: 'Hello Kohinoor Tailors, I would like to book a fitting session.',
  stitching: 'Hello Kohinoor Tailors, I would like to inquire about stitching.',
  stitchingAndAlterations:
    'Hello Kohinoor Tailors, I would like to inquire about stitching and alterations.',
  directions: 'Hello Kohinoor Tailors, I am outside the shop and would like directions.',
};

export const SECTION_IDS = ['home', 'services', 'alterations', 'gallery', 'about', 'contact'];

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#alterations', label: 'Before & After', icon: Scissors },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const MAPS_SEARCH_URL =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;

export const MAPS_EMBED_URL =
  `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
