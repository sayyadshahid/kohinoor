import { SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import Hero10 from '../ui/hero-10';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
];

const HERO_IMAGE_ALTS = [
  'Master tailor measuring silk fabric at a cutting table',
  'Artisan tailoring a garment by hand in the atelier',
  'Close-up of hand embroidery and zardozi detail',
];

export default function Hero() {
  return (
    <Hero10
      id="home"
      title="Precision Tailoring"
      titleLine2Prefix="for"
      titleHighlight="Every Silhouette."
      description="Specializing in master ladies suit stitching, hand zardozi & thread embroidery, and flawless garment alterations in Kondhwa, Pune. Shaped to your exact body measurements with artisanal care."
      socialProof={`Est. ${SITE.founded} • 100% bespoke fit • 24–48h alterations`}
      images={HERO_IMAGES}
      imageAlts={HERO_IMAGE_ALTS}
      animation="subtle"
      primaryCTA={{
        ctaEnabled: true,
        text: 'WhatsApp Inquiry',
        link: waLink(WHATSAPP_MESSAGES.stitchingAndAlterations),
        variant: 'primary',
        size: 'default',
      }}
      secondaryCTA={{
        ctaEnabled: true,
        text: 'Direct Call',
        link: `tel:${SITE.phone}`,
        variant: 'outline',
        size: 'default',
      }}
    />
  );
}
