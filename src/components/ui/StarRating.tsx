import { Star } from 'lucide-react';

export default function StarRating({ count = 5, className = 'flex items-center gap-1 text-mocha-500' }) {
  return (
    <div className={className} aria-label={`Rated ${count} out of 5`}>
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} className="w-4 h-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}
