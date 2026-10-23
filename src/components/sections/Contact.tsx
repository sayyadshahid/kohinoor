import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import ContactDetails from '../contact/ContactDetails';
import ContactMap from '../contact/ContactMap';

export default function Contact() {
  return (
    <Section id="contact" className="py-16 md:py-24 bg-canvas-alt/70 border-t border-line">
      <SectionHeading
        eyebrow="Visit & Inquire"
        title="Let's Build Something Amazing"
        description="Find our atelier, meet the master tailors, and start a garment that fits like it was made for you — because it is."
        threadClassName="w-56"
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
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
