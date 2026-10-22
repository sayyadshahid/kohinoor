import { Check } from 'lucide-react';

export default function CheckList({ items, className = 'space-y-2' }) {
  return (
    <ul className={`${className} text-xs text-ink-soft`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <Check className="w-4 h-4 text-mocha-500 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
