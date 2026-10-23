import { useState } from 'react';
import { Clock, MapPin, MessageSquare, Navigation, Phone } from 'lucide-react';
import { MAPS_SEARCH_URL, SITE } from '../../config/site';
import { useBooking } from '../../context/booking-context';
import BookingDialog from './BookingDialog';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import IconTile from '../ui/IconTile';
import Reveal from '../ui/Reveal';

const rows = [
  { icon: MapPin, label: 'Shop Location', value: SITE.address },
  { icon: Clock, label: 'Operating Hours', value: SITE.hours, hint: SITE.sundayHours },
  {
    icon: Phone,
    label: 'Direct Hotline',
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
];

export default function ContactDetails() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { formSubmitted, resetForm } = useBooking();

  const openBooking = () => {
    if (formSubmitted) resetForm();
    setBookingOpen(true);
  };

  return (
    <Reveal delay={120} className="lg:col-span-5">
      <div className="flex flex-col gap-6 lg:h-full">
        <Card className="space-y-6">
          <div>
            <Eyebrow>Visit the Atelier</Eyebrow>
            <h3 className="font-serif text-xl font-semibold text-brand mt-1">
              Address &amp; Hours
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-ink-soft">
            {rows.map(({ icon, label, value, hint, href }) => (
              <div key={label} className="flex items-start gap-3">
                <IconTile icon={icon} className="mt-0.5" />
                <div>
                  <span className="font-semibold block text-brand">{label}</span>
                  {href ? (
                    <a href={href} className="hover:underline text-brand font-medium">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                  {hint ? <span className="block text-ink-muted text-xs mt-0.5">{hint}</span> : null}
                </div>
              </div>
            ))}
          </div>

          <Button
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="mdWide"
            full
            caps
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </Button>
        </Card>

        <Card className="flex-1 flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <Eyebrow>Prefer to Chat?</Eyebrow>
            <h3 className="font-serif text-xl font-semibold text-brand">
              Send Us Your Inspiration
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Share a reference photo, fabric detail, or occasion date on WhatsApp and our master
              tailor will guide you on cuts, measurements, and timelines before you visit.
            </p>
          </div>

          <Button
            onClick={openBooking}
            variant="whatsapp"
            size="mdWide"
            elevation="card"
            full
            caps
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Book a Fitting via WhatsApp
          </Button>
        </Card>
      </div>

      {bookingOpen ? <BookingDialog onClose={() => setBookingOpen(false)} /> : null}
    </Reveal>
  );
}
