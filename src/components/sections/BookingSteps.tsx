import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

export default function BookingSteps() {
  const { locale } = useLocale();

  return (
    <Section id="book-fitting" className="py-16 md:py-24 bg-surface border-t border-line">
      <SectionHeading
        id="book-fitting-title"
        maxWidth="max-w-3xl"
        title={t(locale, 'faq_booking_title')}
        description={t(locale, 'faq_booking_desc')}
      />

      <Reveal delay={80} className="mx-auto mt-8 max-w-2xl">
        <ol className="list-decimal space-y-3 rounded-2xl border border-line bg-canvas-alt/60 p-6 pl-10 text-sm text-ink-soft leading-relaxed shadow-card sm:p-8 sm:pl-12">
          <li>{t(locale, 'faq_booking_step1')}</li>
          <li>{t(locale, 'faq_booking_step2')}</li>
          <li>{t(locale, 'faq_booking_step3')}</li>
          <li>{t(locale, 'faq_booking_step4')}</li>
        </ol>
      </Reveal>
    </Section>
  );
}
