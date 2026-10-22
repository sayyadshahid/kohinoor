/*
 * Compact stat trio used in the hero and the about section.
 * `size="lg"` switches to the larger about-section treatment.
 */
export default function StatList({ items, size = 'sm', className = '' }) {
  const large = size === 'lg';

  return (
    <div className={`grid grid-cols-3 ${className}`}>
      {items.map(({ value, label }) => (
        <div key={label} className={large ? '' : 'space-y-0.5'}>
          <div
            className={`font-serif font-semibold text-brand ${
              large ? 'text-3xl sm:text-4xl' : 'text-xl'
            }`}
          >
            {value}
          </div>
          <div className={`text-xs text-ink-muted font-medium ${large ? 'mt-1' : ''}`}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
