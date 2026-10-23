import type { ReactNode } from 'react';

const VARIANTS = {
  primary: 'bg-brand text-on-dark hover:bg-brand-hover',
  outline: 'border border-brand text-brand hover:bg-brand hover:text-on-dark',
  whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-hover',
  subtle:
    'bg-surface text-ink-soft border border-line hover:border-line-strong hover:bg-canvas-alt',
  plain: 'bg-canvas text-ink-soft border border-line hover:border-line-strong',
  ghost: 'text-brand hover:bg-canvas-alt',
  muted: 'text-ink-muted hover:text-ink font-medium',
};

const SIZES = {
  snug: 'px-4 py-2 text-xs',
  xs: 'px-3.5 py-2 text-xs',
  sm: 'px-4 py-2.5 text-xs',
  smWide: 'px-5 py-2.5 text-xs',
  md: 'px-5 py-3 text-sm',
  mdWide: 'px-6 py-3 text-xs',
  lg: 'px-6 py-3.5 text-sm',
  lgWide: 'px-6 py-3.5 text-xs',
  xl: 'px-6 py-4 text-xs',
  block: 'py-2 text-xs',
  blockLg: 'py-3 text-xs',
};

const ELEVATIONS = {
  none: '',
  card: 'shadow-card',
  lift: 'shadow-lift',
};

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  elevation?: keyof typeof ELEVATIONS;
  full?: boolean;
  caps?: boolean;
  hoverLift?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
};

/*
 * Shared pill button. Renders an <a> when `href` is supplied, otherwise a
 * <button>. Extra props (type, target, rel, aria-*) pass straight through.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'sm',
  elevation = 'none',
  full = false,
  caps = false,
  hoverLift = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition',
    VARIANTS[variant],
    SIZES[size],
    ELEVATIONS[elevation],
    full ? 'w-full' : '',
    caps ? 'uppercase tracking-wider' : '',
    hoverLift ? 'hover:-translate-y-0.5' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
