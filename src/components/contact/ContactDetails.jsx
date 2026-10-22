import { Clock, MapPin, MessageSquare, Phone } from 'lucide-react';
import { MAPS_EMBED_URL, MAPS_SEARCH_URL, SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import Button from '../ui/Button';
import Card from '../ui/Card';
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
  return (
    <Reveal delay={120} className="lg:col-span-5">
      <div className="space-y-6">
        <Card className="space-y-6">
          <h3 className="font-serif text-xl font-semibold text-brand">Atelier Address &amp; Hours</h3>

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

          <div className="pt-2">
            <Button
              href={waLink(WHATSAPP_MESSAGES.directions)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="mdWide"
              elevation="card"
              full
              caps
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              WhatsApp Direct Click-to-Chat
            </Button>
          </div>
        </Card>

        <Card padding="none" className="overflow-hidden relative">
          <div className="p-3 bg-canvas-alt border-b border-line-strong flex items-center justify-between text-xs font-semibold text-brand">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Interactive Map Preview
            </span>
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline text-xs"
            >
              Open Google Maps
            </a>
          </div>

          <div className="relative h-48 w-full bg-canvas-alt flex items-center justify-center text-center p-4">
            <iframe
              title="Kohinoor Tailors Map Location"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
              loading="lazy"
              src={MAPS_EMBED_URL}
            />
          </div>
        </Card>
      </div>
    </Reveal>
  );
}
