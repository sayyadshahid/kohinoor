import { Scissors, Sparkles, Ruler } from 'lucide-react';

export const SERVICES = [
  {
    id: 'alterations',
    swatch: 'SWATCH #ALT-01',
    badge: 'Fast 24-48h',
    icon: Scissors,
    title: 'Garment Alterations & Reshaping',
    description:
      'Precision waist tapering, hem shortening, sleeve adjustment, side seam reshaping, and shoulder corrections for suits, blouses, kurtis, and heavy bridal lehengas.',
    features: [
      'Waist, bust, and armhole custom resizing',
      'Bridal lehenga length & can-can adjustment',
      'Invisible zip replacements & hook stitching',
    ],
    price: 'Starting from ₹150',
    cta: 'Book Fitting',
    bookingService: 'Garment Alterations & Reshaping',
  },
  {
    id: 'embroidery',
    swatch: 'SWATCH #EMB-02',
    badge: 'Hand-Crafted',
    icon: Sparkles,
    title: 'Intricate Hand & Machine Embroidery',
    description:
      'Traditional Zardozi, Aari needlework, silk thread motifs, mirror work, and custom necklines or sleeve borders tailored for festive & bridal wear.',
    features: [
      'Zardozi metallic thread & sequin embellishments',
      'Custom neckline & sleeve border patterns',
      'Dupatta border attachment & tassel work',
    ],
    price: 'Custom Quote by Design',
    cta: 'Request Quote',
    bookingService: 'Intricate Embroidery',
  },
  {
    id: 'stitching',
    swatch: 'SWATCH #STITCH-03',
    badge: 'Signature Fit',
    icon: Ruler,
    title: 'Ladies Suit & Ensemble Stitching',
    description:
      'Bespoke stitching for Punjabi salwar kameez, Anarkali suits, straight trousers, sharara sets, padded blouses, and Indo-Western dresses cut to precise measurements.',
    features: [
      'Personalized body measurement mapping',
      'Interlining, canvas collar & neat inner piping',
      'Trial fitting session included prior to delivery',
    ],
    price: 'Starting from ₹450',
    cta: 'Order Stitching',
    bookingService: 'Ladies Suit Stitching',
  },
];
