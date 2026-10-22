import { Sparkle } from 'lucide-react';

export default function SideBySideCompare({ item }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="relative rounded-xl overflow-hidden border border-line bg-surface">
        <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-mocha-950/85 backdrop-blur-sm text-on-dark rounded-full text-xs font-semibold uppercase tracking-wider">
          Before · Unfitted
        </div>
        <img
          decoding="async"
          loading="lazy"
          src={item.beforeImage}
          alt={`Before alteration: ${item.title}`}
          className="w-full h-72 sm:h-80 object-cover filter contrast-95 brightness-95"
        />
        <div className="p-3 bg-surface border-t border-line text-xs text-ink-soft">
          <span className="font-semibold text-danger block">Issue:</span>
          {item.beforeProblem}
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-mocha-300 bg-surface shadow-card">
        <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-brand text-on-dark rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ring-1 ring-platinum-300/25">
          <Sparkle className="w-3 h-3 text-platinum-300" aria-hidden="true" /> After · Kohinoor Fit
        </div>
        <img
          decoding="async"
          loading="lazy"
          src={item.afterImage}
          alt={`After alteration: ${item.title}`}
          className="w-full h-72 sm:h-80 object-cover"
        />
        <div className="p-3 bg-surface border-t border-line text-xs text-ink-soft">
          <span className="font-semibold text-brand block">Result:</span>
          {item.afterSolution}
        </div>
      </div>
    </div>
  );
}
