'use client';

import { COMMON_QUESTIONS, FAQ_BY_LOCALE } from '../../data/faq';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

export default function FAQ() {
  const { locale } = useLocale();
  const faqs = FAQ_BY_LOCALE[locale];

  const renderCommonQuestions = (duplicate = false) =>
    COMMON_QUESTIONS.map((item, index) => (
      <div
        key={`${duplicate ? 'duplicate-' : ''}${item.question}`}
        className="faq-marquee-card flex flex-col justify-center overflow-hidden rounded-xl border border-line bg-surface p-4 shadow-card"
      >
        <h3
          id={duplicate ? undefined : `common-question-${index + 1}`}
          className="font-serif text-lg font-semibold text-brand line-clamp-2 sm:text-xl"
        >
          {item.question}
        </h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-4">
          {item.answer}
        </p>
      </div>
    ));

  return (
    <Section
      id="faq"
      className="py-16 md:py-24 bg-canvas lg:h-dvh lg:py-0"
      containerClassName="lg:h-full"
    >
      <div className="grid gap-12 lg:h-full lg:grid-cols-12 lg:gap-10 lg:py-10">
        <div className="flex flex-col lg:col-span-7 lg:min-h-0">
          <SectionHeading
            id="faq-title"
            align="left"
            className="shrink-0"
            eyebrow={t(locale, 'faq_eyebrow')}
            title={t(locale, 'faq_title')}
            description={t(locale, 'faq_desc')}
          />

          <Reveal
            delay={80}
            className="faq-scroll mt-10 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2"
          >
            <div className="space-y-3">
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
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col lg:col-span-5 lg:min-h-0">
          <SectionHeading
            id="common-questions-title"
            align="left"
            className="shrink-0 text-center max-lg:mx-auto lg:text-left"
            title={t(locale, 'faq_common_title')}
            description={t(locale, 'faq_common_desc')}
            maxWidth="max-w-xl"
            threadClassName="max-w-xs max-lg:mx-auto"
            titleClassName="text-2xl sm:text-3xl"
          />

          <Reveal delay={80} className="mt-8 lg:mt-10 lg:min-h-0 lg:flex-1">
            <div className="faq-marquee-viewport">
              <div className="faq-marquee-track flex flex-col">
                <div className="flex flex-col gap-4 pb-4">
                  {renderCommonQuestions()}
                </div>
                <div
                  aria-hidden="true"
                  className="faq-marquee-dupe flex-col gap-4 pb-4"
                >
                  {renderCommonQuestions(true)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
