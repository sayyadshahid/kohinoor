import { useState } from 'react';
import { Clock, MapPin, MessageSquare, Navigation, Phone } from 'lucide-react';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { MAPS_DIRECTIONS_URL, SITE } from '../../config/site';
import { useBooking } from '../../context/booking-context';
import BookingDialog from './BookingDialog';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import IconTile from '../ui/IconTile';
import Reveal from '../ui/Reveal';

const getRows = (locale: string) => [
  { icon: MapPin, label: t(locale as any, 'contact_shop_label'), value: SITE.address },
  { icon: Clock, label: t(locale as any, 'contact_hours_label'), value: SITE.hours, hint: SITE.sundayHours },
  {
    icon: Phone,
    label: t(locale as any, 'contact_hotline'),
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
];

export default function ContactDetails() {
  const { locale } = useLocale();
  const rows = getRows(locale);
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
            <Eyebrow>{locale === 'en' ? 'Visit the Atelier' : t(locale, 'contact_eyebrow')}</Eyebrow>
            <h3
              id="contact-address-hours"
              className="font-serif text-xl font-semibold text-brand mt-1"
            >
              {t(locale, 'contact_visit_title')}
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-ink-soft">
            {rows.map(({ icon, label, value, hint, href }) => (
              <div key={label} className="flex items-start gap-3">
                <IconTile icon={icon} className="mt-0.5" />
                <div>
                  <span className="font-semibold block text-brand">{label}</span>
                  {href ? (
                    <a href={href} className="hover:underline text-brand font-medium" aria-label={`Call ${value}`}>
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
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="mdWide"
            full
            caps
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
{t(locale, 'contact_directions')}
          </Button>
        </Card>

        <Card className="flex-1 flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <Eyebrow>{t(locale, 'contact_inspire')}</Eyebrow>
            <h3
              id="contact-inspiration"
              className="font-serif text-xl font-semibold text-brand"
            >
              {t(locale, 'contact_chat_title')}
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              {t(locale, 'contact_chat_desc')}
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
{t(locale, 'contact_chat_btn')}
          </Button>
        </Card>
      </div>

      {bookingOpen ? <BookingDialog onClose={() => setBookingOpen(false)} /> : null}
    </Reveal>
  );
}
