import { SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import Hero10 from '../ui/hero-10';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

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
  const { locale } = useLocale();

  return (
    <Hero10
      id="home"
      title={t(locale, 'hero_title1')}
      titleLine2Prefix={`${t(locale, 'hero_title2')} `}
      titleHighlight={t(locale, 'hero_title_highlight')}
      description={t(locale, 'hero_desc')}
      socialProof={t(locale, 'hero_proof')}
      images={HERO_IMAGES}
      imageAlts={HERO_IMAGE_ALTS}
      animation="subtle"
      primaryCTA={{
        ctaEnabled: true,
        text: t(locale, 'hero_cta_whatsapp'),
        link: waLink(WHATSAPP_MESSAGES.stitchingAndAlterations),
        variant: 'primary',
        size: 'default',
      }}
      secondaryCTA={{
        ctaEnabled: true,
        text: t(locale, 'hero_cta_call'),
        link: `tel:${SITE.phone}`,
        variant: 'outline',
        size: 'default',
      }}
    />
  );
}
