import { Award, ShieldCheck } from 'lucide-react';
import { SITE, YEARS_CRAFTING } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { ABOUT_STATS } from '../../data/content';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import StatList from '../ui/StatList';

export default function About() {
  const { locale } = useLocale();
  return (
    <Section id="about" className="py-16 md:py-24 bg-canvas-alt/70 border-y border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <SectionHeading
            id="about-title"
            align="center"
            spacing="space-y-6"
            maxWidth="max-w-full"
            eyebrow={t(locale, 'about_eyebrow')}
            title={
              locale === 'en'
                ? t(locale, 'about_title')
                : locale === 'hinglish'
                  ? `${YEARS_CRAFTING}+ Saalon ka Tailoring Precision aur Fabric Mastery`
                  : `${YEARS_CRAFTING} ${t(locale, 'about_title')}`
            }
            description={t(locale, 'about_desc')}
            threadClassName="w-56"
          />

          <Reveal delay={80} className="mt-6 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-ink-soft leading-relaxed font-normal text-pretty">
              <p>
                {locale === 'hinglish' ? `Founded in ${SITE.founded} Kondhwa, Pune mein Kohinoor Tailors ki shuruaat ek simple belief se hui: har garment second skin jaisa feel hona chahiye. Hamara atelier traditional hand-stitching techniques ko precise pattern cutting ke saath milata hai taaki clothing effortlessly fit ho.` : (
                  <>
                    {t(locale, 'about_p1_start')} {SITE.founded} {t(locale, 'about_p1_mid')}
                  </>
                )}
              </p>
              <p>
                {t(locale, 'about_p2')}
              </p>
            </div>

            <StatList
              items={ABOUT_STATS}
              size="lg"
              className="py-4 border-y border-line-strong gap-6"
            />

            <div className="p-5 rounded-xl border-2 border-dashed border-line-strong bg-surface flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-brand shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-1">
                <h3
                  id="trial-fitting-guarantee"
                  className="font-serif font-semibold text-sm text-brand"
                >
                  {t(locale, 'about_guarantee_title')}
                </h3>
                <p className="text-xs text-ink-soft">
                  {t(locale, 'about_guarantee_desc')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-lift border-4 border-surface ring-1 ring-line-strong">
            <img
              decoding="async"
              loading="lazy"
              width={1000}
              height={450}
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
              alt="Master tailor measuring and crafting a custom ladies suit at Kohinoor Tailors in Kondhwa, Pune"
              className="w-full h-[450px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mocha-950/85 via-mocha-950/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-on-dark space-y-1.5">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-platinum-300" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-platinum-300">
                  {t(locale, 'about_work_title')}
                </span>
              </div>
              <p className="font-serif text-base text-platinum-50">
                {t(locale, 'about_work_subtitle')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
