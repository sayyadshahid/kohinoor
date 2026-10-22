import { getInitials } from '../../data/testimonials';
import Card from '../ui/Card';
import StarRating from '../ui/StarRating';

export default function TestimonialCard({ testimonial }) {
  const { name, service, quote } = testimonial;

  return (
    <Card
      elevation="card"
      hoverable
      className="space-y-4 flex flex-col justify-between relative h-full"
    >
      <div className="space-y-3">
        <StarRating />
        <p className="text-xs sm:text-sm text-ink-soft italic leading-relaxed">{quote}</p>
      </div>

      <div className="pt-4 border-t border-line-strong flex items-center justify-between">
        <div>
          <h4 className="font-serif font-semibold text-sm text-brand">{name}</h4>
          <span className="text-xs text-ink-muted">{service}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-canvas-alt border border-line flex items-center justify-center font-serif text-xs font-semibold text-brand">
          {getInitials(name)}
        </div>
      </div>
    </Card>
  );
}
