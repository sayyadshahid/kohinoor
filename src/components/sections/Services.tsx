import { SERVICES } from '../../data/services';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import Card from '../ui/Card';
import { SITE } from '../../config/site';

const PRICE_DISPLAY = ['From ₹100', 'From ₹450', 'Custom quote'] as const;

export default function Services() {
  return (
    <Section id="services" className="py-16 md:py-24 bg-canvas-alt/70 border-y border-line">
      <SectionHeading
        eyebrow="Our Tailoring Services in Kondhwa, Pune"
        title="Three Crafts, One Cutting Table"
        description="Kohinoor Tailors offers ladies suit stitching, alterations and reshaping, and hand and machine embroidery in Kondhwa, Pune. Compare starting prices, turnaround times, and what’s included."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <Reveal key={service.id} delay={90} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>


    </Section>
  );
}
