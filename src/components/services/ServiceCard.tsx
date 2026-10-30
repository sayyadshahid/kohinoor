import { ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/booking-context';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import CheckList from '../ui/CheckList';
import IconTile from '../ui/IconTile';

export default function ServiceCard({ service }) {
  const { selectService } = useBooking();
  const { icon, swatch, badge, title, description, features, price, cta, bookingService } = service;

  return (
    <Card
      tone="swatch"
      elevation="card"
      hoverable
      className="group relative flex flex-col justify-between h-full"
    >
      <div className="flex items-center justify-between border-b border-line pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-line-strong bg-canvas flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-ink-muted uppercase">
            {swatch}
          </span>
        </div>
        <Badge size="sm">{badge}</Badge>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <IconTile icon={icon} size="md" />
          <h3
            id={`service-${service.id}`}
            className="font-serif text-xl font-semibold text-brand"
          >
            {title}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">{description}</p>

        <CheckList items={features} className="space-y-2 pt-2" />
      </div>

      <div className="mt-6 pt-4 border-t border-dashed border-line-strong flex items-center justify-between">
        <span className="text-xs text-ink-muted font-medium">{price}</span>
        <button
          onClick={() => selectService(bookingService)}
          className="text-xs font-semibold text-brand hover:text-mocha-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          {cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}
