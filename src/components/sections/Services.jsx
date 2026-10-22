import { SERVICES } from '../../data/services';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../services/ServiceCard';

export default function Services() {
  return (
    <Section id="services" className="py-16 md:py-24 bg-canvas-alt/70 border-y border-line">
      <SectionHeading
        eyebrow="Our Tailoring Services"
        title="Three Crafts, One Cutting Table"
        description="Select a service below to view specific fitting details, turnaround times, and custom alterations options."
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
