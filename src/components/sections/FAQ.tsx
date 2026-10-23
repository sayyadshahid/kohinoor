import { FAQS } from '../../data/faq';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

export default function FAQ() {
  return (
    <Section id="faq" className="py-16 md:py-24 bg-canvas">
      <SectionHeading
        maxWidth="max-w-3xl"
        eyebrow="Frequently Asked Questions"
        title="Tailoring Questions Answered"
        description="Quick answers about ladies suit stitching, alterations, embroidery, timings and booking in Kondhwa, Pune."
      />

      <Reveal delay={80} className="mt-10 mx-auto max-w-4xl space-y-3">
        {FAQS.map((item) => (
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
    </Section>
  );
}
