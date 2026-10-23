import { Scissors } from 'lucide-react';

/* Single source of truth for contact details. */
export const SITE = {
  founded: 2015,
  phone: '+918483895822',
  phoneDisplay: '+91 84838 95822',
  whatsapp: '918483895822',
  address: '501, Phase 2, Lane Number 9, Saibaba Nagar, Kondhwa, Pune, Maharashtra 411048',
  mapQuery: '501, Phase 2, Lane Number 9, Saibaba Nagar, Kondhwa, Pune 411048',
  coords: { lat: 18.46941223825573, lng: 73.88395709392807 },
  hours: 'Monday – Saturday: 10:00 AM – 8:30 PM',
  sundayHours: 'Sunday: 11:00 AM – 5:00 PM (Trial Fittings Only)',
};

const COORD_QUERY = `${SITE.coords.lat},${SITE.coords.lng}`;

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
  `https://www.google.com/maps/search/?api=1&query=${COORD_QUERY}`;

export const MAPS_DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${COORD_QUERY}`;

export const MAPS_EMBED_URL =
  `https://maps.google.com/maps?q=${COORD_QUERY}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
