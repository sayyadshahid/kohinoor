import { Scissors } from 'lucide-react';
import { useBooking } from '../../context/booking-context';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import CheckList from '../ui/CheckList';

export default function TransformationDetails({ item }) {
  const { selectService } = useBooking();

  return (
    <div className="lg:col-span-5 space-y-5">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider bg-brand text-on-dark px-2.5 py-1 rounded">
            {item.tag}
          </span>
          <Badge tone="outline" size="sm">
            Turnaround: {item.turnaround}
          </Badge>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-brand">{item.title}</h3>
      </div>

      <div className="p-4 bg-canvas rounded-xl border border-line space-y-3">
        <h4 className="font-serif font-semibold text-sm text-brand flex items-center gap-2">
          <Scissors className="w-4 h-4 text-silver" aria-hidden="true" />
          Specific Alteration Steps Performed:
        </h4>

        <CheckList items={item.alterationSteps} />
      </div>

      <div className="pt-2">
        <Button
          onClick={() => selectService(`Alteration: ${item.title}`)}
          size="lgWide"
          elevation="lift"
          full
          caps
        >
          <Scissors className="w-4 h-4" aria-hidden="true" />
          Book This Specific Alteration
        </Button>
      </div>
    </div>
  );
}
