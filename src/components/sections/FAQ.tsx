import { FAQ_BY_LOCALE } from '../../data/faq';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

export default function FAQ() {
  const { locale } = useLocale();
  const faqs = FAQ_BY_LOCALE[locale];
  return (
    <Section id="faq" className="py-16 md:py-24 bg-canvas">
      <SectionHeading
        id="faq-title"
        maxWidth="max-w-3xl"
        eyebrow={t(locale, 'faq_eyebrow')}
        title={t(locale, 'faq_title')}
        description={t(locale, 'faq_desc')}
      />

      <Reveal delay={80} className="mt-10 mx-auto max-w-4xl space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-line bg-surface shadow-card open:shadow-lift transition-shadow"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm sm:text-base font-semibold text-brand">
              {item.question}
              <span
                aria-hidden="true"
                className="text-silver transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </Reveal>

      <Reveal delay={120} className="mt-12 mx-auto max-w-4xl">
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <h3
            id="how-to-book-a-fitting"
            className="font-serif text-xl font-semibold text-brand sm:text-2xl"
          >
            {t(locale, 'faq_booking_title')}
          </h3>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            {t(locale, 'faq_booking_desc')}
          </p>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm text-ink-soft leading-relaxed">
            <li>{t(locale, 'faq_booking_step1')}</li>
            <li>{t(locale, 'faq_booking_step2')}</li>
            <li>{t(locale, 'faq_booking_step3')}</li>
            <li>{t(locale, 'faq_booking_step4')}</li>
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
