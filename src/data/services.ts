import { Scissors, Sparkles, Ruler, type LucideIcon } from 'lucide-react';
import { SITE, type ServiceId } from '../config/site';

type ServiceItem = (typeof SITE.services)[number] & {
  priceDisplay: string;
};

type ServicePresentation = {
  swatch: string;
  badge: string;
  icon: LucideIcon;
  features: string[];
  cta: string;
  bookingService: string;
};

const PRESENTATION: Record<ServiceId, ServicePresentation> = {
  alterations: {
    swatch: 'SWATCH #ALT-01',
    badge: 'Fast 24-48h',
    icon: Scissors,
    features: [
      'Waist, bust, and armhole custom resizing',
      'Bridal lehenga length & can-can adjustment',
      'Invisible zip replacements & hook stitching',
    ],
    cta: 'Book Fitting',
    bookingService: 'Garment Alterations & Reshaping',
  },
  stitching: {
    swatch: 'SWATCH #STITCH-03',
    badge: 'Signature Fit',
    icon: Ruler,
    features: [
      'Personalized body measurement mapping',
      'Interlining, canvas collar & neat inner piping',
      'Trial fitting session included prior to delivery',
    ],
    cta: 'Order Stitching',
    bookingService: 'Ladies Suit Stitching',
  },
  embroidery: {
    swatch: 'SWATCH #EMB-02',
    badge: 'Hand-Crafted',
    icon: Sparkles,
    features: [
      'Zardozi metallic thread & sequin embellishments',
      'Custom neckline & sleeve border patterns',
      'Dupatta border attachment & tassel work',
    ],
    cta: 'Request Quote',
    bookingService: 'Intricate Embroidery',
  },
};

const SERVICE_ORDER: ServiceId[] = ['alterations', 'embroidery', 'stitching'];

const PRICE_DISPLAY: Record<ServiceId, string> = {
  alterations: 'From ₹100',
  stitching: 'From ₹450',
  embroidery: 'Custom quote',
};

export const SERVICES = SERVICE_ORDER.map((id) => {
  const service = SITE.services.find((item) => item.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  const presentation = PRESENTATION[service.id];

  return {
    ...service,
    ...presentation,
    title: service.name,
    description: service.shortDescription,
    price: PRICE_DISPLAY[service.id],
  };
});

export type Service = (typeof SERVICES)[number];
