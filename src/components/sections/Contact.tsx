import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import ContactDetails from '../contact/ContactDetails';
import ContactMap from '../contact/ContactMap';
import { SITE } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

export default function Contact() {
  const { locale } = useLocale();
  return (
    <Section id="contact" className="py-16 md:py-24 bg-canvas-alt/70 border-t border-line">
      <SectionHeading
        eyebrow={t(locale, 'contact_eyebrow')}
        title={t(locale, 'contact_title')}
        description={t(locale, 'contact_desc')}
        threadClassName="w-56"
      />

      <div className="mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Reveal>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mocha-400/40 to-transparent" />
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-brand-soft/60">
                <div className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">
                  {t(locale, 'contact_card_loc')}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{SITE.address}</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mocha-400/40 to-transparent" />
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-brand-soft/60">
                <div className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">
                  {t(locale, 'contact_card_hours')}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {SITE.hours}
                  <br />
                  {SITE.sundayHours}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mocha-400/40 to-transparent" />
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-brand-soft/60">
                <div className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">
                  {t(locale, 'contact_card_phone')}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  <a className="hover:underline" href={`tel:${SITE.phone}`} aria-label={`Call ${SITE.phoneDisplay}`}>
                    {SITE.phoneDisplay}
                  </a>
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  {t(locale, 'contact_card_phone_note')}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mocha-400/40 to-transparent" />
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-brand-soft/60">
                <div className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">
                  {t(locale, 'contact_card_area')}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{SITE.areaServed.join(', ')}</p>
                <p className="mt-1 text-xs text-ink-muted">{t(locale, 'contact_card_area_note')}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Reveal className="lg:col-span-7">
          <div className="lg:h-full lg:min-h-[560px]">
            <ContactMap />
          </div>
        </Reveal>

        <ContactDetails />
      </div>
    </Section>
  );
}
