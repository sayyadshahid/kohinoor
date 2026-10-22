import { TESTIMONIALS } from '../../data/testimonials';
import TestimonialCard from '../testimonials/TestimonialCard';
import Alterations from './Alterations';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

/*
 * Customer experiences block: heading → review cards → before/after showcase.
 */
export default function Testimonials() {
  return (
    <>
      <Section className="pt-16 md:pt-24 pb-16 md:pb-24">
        <SectionHeading
          maxWidth="max-w-xl"
          eyebrow="Customer Experiences"
          title="What Our Clients Say"
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
