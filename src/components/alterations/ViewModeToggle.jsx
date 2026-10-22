import { ArrowLeftRight, Layers } from 'lucide-react';
import ColumnsIcon from '../ui/ColumnsIcon';
import Button from '../ui/Button';

const MODES = [
  { id: 'slider', label: 'Interactive Dotted Slider', icon: ArrowLeftRight },
  { id: 'side-by-side', label: 'Side-by-Side', icon: ColumnsIcon },
  { id: 'toggle', label: 'Toggle Button View', icon: Layers },
];

export default function ViewModeToggle({ value, onChange }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-xs">
      <span className="text-ink-muted font-medium">Compare Mode:</span>
      {MODES.map(({ id, label, icon: Icon }) => {
        const active = value === id;
        return (
          <Button
            key={id}
            onClick={() => onChange(id)}
            variant={active ? 'primary' : 'subtle'}
            size="xs"
            elevation={active ? 'card' : 'none'}
          >
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            {label}
          </Button>
        );
      })}
    </div>
  );
}
