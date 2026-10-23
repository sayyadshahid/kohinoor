import { ArrowRight, ZoomIn } from 'lucide-react';
import Card from '../ui/Card';

export default function GalleryCard({ item, onOpen, mediaClassName = '' }) {
  return (
    <Card
      elevation="none"
      padding="none"
      hoverable
      className="group relative overflow-hidden cursor-pointer transform hover:-translate-y-1 h-full"
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(item);
        }
      }}
    >
      <div className={`aspect-[4/5] w-full overflow-hidden bg-mocha-950/5 relative ${mediaClassName}`}>
        <img
          decoding="async"
          loading="lazy"
          width={1000}
          height={1250}
          src={item.image}
          alt={`${item.title} - ${item.category} by Kohinoor Tailors, Kondhwa Pune`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-mocha-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
          <div className="space-y-2 text-on-dark transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-on-dark/20 ring-1 ring-platinum-300/30 mx-auto flex items-center justify-center">
              <ZoomIn className="w-5 h-5 text-on-dark" aria-hidden="true" />
            </div>
            <h4 className="font-serif font-semibold text-lg">{item.title}</h4>
            <p className="text-xs text-platinum-200">{item.category}</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-canvas border-t border-line flex items-center justify-between">
        <div>
          <h3 className="font-serif font-semibold text-sm text-brand line-clamp-1">{item.title}</h3>
          <span className="text-xs text-ink-muted">{item.category}</span>
        </div>
        <span className="text-xs text-brand font-semibold flex items-center gap-1">
          View <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </span>
      </div>
    </Card>
  );
}
