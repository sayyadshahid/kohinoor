import { COMMON_QUESTIONS, FAQ_BY_LOCALE } from '../../data/faq';
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
            <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </Reveal>

      <div className="mt-16">
        <SectionHeading
          id="common-questions-title"
          as="h2"
          title={t(locale, 'faq_common_title')}
          maxWidth="max-w-3xl"
          titleClassName="text-2xl sm:text-3xl"
        />

        <div className="mx-auto mt-8 max-w-4xl space-y-4">
          {COMMON_QUESTIONS.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 60}
              className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <h3
                id={`common-question-${index + 1}`}
                className="font-serif text-lg font-semibold text-brand sm:text-xl"
              >
                {item.question}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {item.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
