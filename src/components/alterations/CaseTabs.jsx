import { Scissors } from 'lucide-react';
import Button from '../ui/Button';

export default function CaseTabs({ cases, activeIndex, onChange }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
      {cases.map((item, index) => {
        const active = activeIndex === index;
        return (
          <Button
            key={item.id}
            onClick={() => onChange(index)}
            variant={active ? 'primary' : 'subtle'}
            size="smWide"
            elevation={active ? 'card' : 'none'}
            className={active ? 'ring-2 ring-platinum-400' : ''}
          >
            <Scissors className="w-3.5 h-3.5" aria-hidden="true" />
            {item.tag}: {item.title.split(' ')[0]} {item.title.split(' ')[1]}
          </Button>
        );
      })}
    </div>
  );
}
