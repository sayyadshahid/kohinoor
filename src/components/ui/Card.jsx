const TONES = {
  surface: 'bg-surface border border-line',
  swatch: 'bg-swatch-texture border border-line',
};

const PADDING = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-6 sm:p-8',
};

const ELEVATIONS = {
  none: '',
  card: 'shadow-card',
  lift: 'shadow-lift',
};

export default function Card({
  tone = 'surface',
  padding = 'md',
  elevation = 'card',
  hoverable = false,
  className = '',
  children,
  ...props
}) {
  return (
    <div
      className={[
        'rounded-2xl',
        TONES[tone],
        PADDING[padding],
        ELEVATIONS[elevation],
        hoverable ? 'hover:shadow-lift hover:border-mocha-300 transition-all duration-300' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
