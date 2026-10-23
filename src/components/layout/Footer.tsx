import { ArrowUp, MapPin, MessageSquare, Phone } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { FOOTER_LINKS, SPECIALTIES } from '../../data/content';
import { scrollToTop } from '../../lib/scroll';
import Logo from '../brand/Logo';
import StitchedThreadLine from '../brand/StitchedThreadLine';

export default function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="bg-mocha-950 text-platinum-100 pt-14 pb-8 border-t border-mocha-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-platinum-800/50">
          <div className="space-y-4 md:col-span-1">
            <Logo variant="inverse" />
            <p className="text-xs text-platinum-200/80 leading-relaxed">
              {t(locale, 'footer_desc')} {SITE.founded}.
            </p>
            <div className="pt-1">
              <StitchedThreadLine className="w-32 text-platinum-300" />
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-sm tracking-wider uppercase text-platinum-300">
              {t(locale, 'footer_nav')}
            </h4>
            <ul className="space-y-2 text-xs text-platinum-200/75">
              {FOOTER_LINKS.map(({ href }, idx) => {
                const keys = ['footer_link_home', 'footer_link_services', 'footer_link_alter', 'footer_link_gallery', 'footer_link_about', 'footer_link_contact'];
                return (
                  <li key={href}>
                    <a href={href} className="hover:text-platinum-100 transition-colors">
                      {t(locale, keys[idx] as any)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-sm tracking-wider uppercase text-platinum-300">
              {t(locale, 'footer_specialties')}
            </h4>
            <ul className="space-y-2 text-xs text-platinum-200/75">
              {['footer_spec1', 'footer_spec2', 'footer_spec3', 'footer_spec4', 'footer_spec5'].map((key) => (
                <li key={key}>{t(locale, key as any)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-sm tracking-wider uppercase text-platinum-300">
              {t(locale, 'footer_contact')}
            </h4>
            <p className="text-xs text-platinum-200/80 leading-relaxed">
              {SITE.address}
            </p>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-platinum-100 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={waLink(WHATSAPP_MESSAGES.stitching)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-platinum-100 hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-platinum-100 hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {t(locale, 'footer_get_dir')}
              </a>
            </div>
            <p className="text-xs text-platinum-200/70">
              {SITE.hours}
              <br />
              {SITE.sundayHours}
            </p>
          </div>
        </div>

        <div aria-hidden="true" className="h-px bg-silver-rule opacity-60" />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-platinum-200/60 gap-4">
          <p>© {new Date().getFullYear()} Kohinoor Tailors. {t(locale, 'footer_rights')}</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1">
              <span>{t(locale, 'footer_hand')}</span>
              <span className="text-platinum-300">★</span>
              <span>{t(locale, 'footer_craft')}</span>
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-platinum-200/70 hover:text-platinum-100 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
{t(locale, 'footer_back_top')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
