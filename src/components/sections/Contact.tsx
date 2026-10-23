import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import ContactDetails from '../contact/ContactDetails';
import ContactMap from '../contact/ContactMap';
import { SITE } from '../../config/site';

export default function Contact() {
  return (
    <Section id="contact" className="py-16 md:py-24 bg-canvas-alt/70 border-t border-line">
      <SectionHeading
        eyebrow="Visit & Inquire"
        title="Contact Kohinoor Tailors in Kondhwa, Pune"
        description="Find our atelier, meet the master tailors, and start a garment that fits like it was made for you — because it is."
        threadClassName="w-56"
      />

      <div className="mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Reveal className="rounded-xl border border-line bg-surface p-4 shadow-card">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
            Location
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{SITE.address}</p>
        </Reveal>
        <Reveal delay={60} className="rounded-xl border border-line bg-surface p-4 shadow-card">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
            Hours
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            {SITE.hours}
            <br />
            {SITE.sundayHours}
          </p>
        </Reveal>
        <Reveal delay={90} className="rounded-xl border border-line bg-surface p-4 shadow-card">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
            Phone / WhatsApp
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            <a className="hover:underline" href={`tel:${SITE.phone}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            Starting prices from ₹150 (alterations) and ₹450 (ladies suit stitching)
          </p>
        </Reveal>
        <Reveal delay={120} className="rounded-xl border border-line bg-surface p-4 shadow-card">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
            Service Area
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{SITE.areaServed.join(', ')}</p>
          <p className="mt-1 text-xs text-ink-muted">24–48h alterations; trial fitting included</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Reveal className="lg:col-span-7">
          <div className="lg:h-full lg:min-h-[560px]">
            <ContactMap />
          </div>
        </Reveal>

        <ContactDetails />
      </div>
    </Section>
  );
}
