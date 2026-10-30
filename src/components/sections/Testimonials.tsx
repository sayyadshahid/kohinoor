import { TESTIMONIALS } from '../../data/testimonials';
import TestimonialCard from '../testimonials/TestimonialCard';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import Alterations from './Alterations';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

/*
 * Customer experiences block: heading → review cards → before/after showcase.
 */
export default function Testimonials() {
  const { locale } = useLocale();
  return (
    <>
      <Section className="pt-16 md:pt-24 pb-16 md:pb-24">
        <SectionHeading
          id="testimonials-title"
          maxWidth="max-w-xl"
          eyebrow={t(locale, 'testimonials_eyebrow')}
          title={t(locale, 'testimonials_title')}
          description={t(locale, 'testimonials_desc')}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 90} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Alterations />
    </>
  );
}
