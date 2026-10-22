import Button from '../ui/Button';

/* Single-image before/after switch for the toggle compare mode. */
export default function ToggleCompare({ item, value, onChange }) {
  const showingBefore = value === 'before';

  return (
    <div className="space-y-3">
      <div className="flex justify-center gap-2">
        <Button
          onClick={() => onChange('before')}
          variant={showingBefore ? 'primary' : 'plain'}
          size="snug"
          elevation={showingBefore ? 'card' : 'none'}
        >
          Show Before
        </Button>
        <Button
          onClick={() => onChange('after')}
          variant={showingBefore ? 'plain' : 'primary'}
          size="snug"
          elevation={showingBefore ? 'none' : 'card'}
        >
          Show After · Bespoke
        </Button>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-mocha-300 bg-surface">
        <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-brand text-on-dark rounded-full text-xs font-semibold uppercase tracking-wider">
          {showingBefore ? 'Before · Ill-Fitting' : 'After · Kohinoor Precision Fit'}
        </div>
        <img
          decoding="async"
          loading="lazy"
          src={showingBefore ? item.beforeImage : item.afterImage}
          alt={`${showingBefore ? 'Before' : 'After'} alteration`}
          className="w-full h-80 sm:h-96 object-cover transition-all duration-500"
        />
      </div>
    </div>
  );
}
