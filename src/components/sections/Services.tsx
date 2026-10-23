import { SERVICES } from '../../data/services';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import { SITE } from '../../config/site';

export default function Services() {
  return (
    <Section id="services" className="py-16 md:py-24 bg-canvas-alt/70 border-y border-line">
      <SectionHeading
        eyebrow="Our Tailoring Services in Kondhwa, Pune"
        title="Three Crafts, One Cutting Table"
        description="Kohinoor Tailors offers ladies suit stitching, alterations and reshaping, and hand and machine embroidery in Kondhwa, Pune. Select a service below, turnaround times, and fitting details."
      />

      <div className="mt-10">
        <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-brand text-on-dark">
                <th className="text-left text-xs uppercase tracking-wider px-5 py-3.5">Service</th>
                <th className="text-left text-xs uppercase tracking-wider px-5 py-3.5">Turnaround</th>
                <th className="text-left text-xs uppercase tracking-wider px-5 py-3.5">Includes</th>
              </tr>
            </thead>
            <tbody>
              {SITE.services.map((service, index) => (
                <tr
                  key={service.id}
                  className={
                    index === 0
                      ? 'bg-surface'
                      : index === 1
                        ? 'bg-canvas-alt/60'
                        : 'bg-surface'
                  }
                >
                  <td className="px-5 py-4 font-serif text-base font-semibold text-brand">
                    {service.name}
                  </td>
                  <td className="px-5 py-4 text-ink-soft">
                    {index === 0
                      ? '24–48 hours'
                      : index === 1
                        ? 'Confirmed at fitting'
                        : 'Quoted by design'}
                  </td>
                  <td className="px-5 py-4 text-ink-soft leading-relaxed">
                    {index === 0
                      ? 'Waist, bust, armhole and hem adjustments'
                      : index === 1
                        ? 'Measurements, stitching and trial fitting'
                        : 'Zardozi, Aari, silk thread and mirror work'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
