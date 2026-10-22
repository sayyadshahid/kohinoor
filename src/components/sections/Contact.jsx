import Section from '../ui/Section';
import ContactDetails from '../contact/ContactDetails';
import ContactForm from '../contact/ContactForm';

export default function Contact() {
  return (
    <Section id="contact" className="py-16 md:py-24 bg-canvas-alt/70 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <ContactForm />
        <ContactDetails />
      </div>
    </Section>
  );
}
