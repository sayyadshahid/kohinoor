import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

const TONES = {
  surface: 'bg-surface border border-line-strong text-brand shadow-card',
  brand: 'bg-brand text-on-dark ring-1 ring-platinum-300/20',
  brandAlt: 'bg-brand text-platinum-300',
  subtle: 'bg-canvas-alt text-brand ring-1 ring-line-strong',
  outline: 'bg-canvas-alt text-ink-soft border border-line',
};

const SIZES = {
  sm: 'px-2.5 py-1 text-xs font-medium',
  md: 'px-4 py-2 text-xs font-semibold tracking-widest uppercase',
  lg: 'px-3 py-1 text-xs font-semibold uppercase tracking-wider',
};

type BadgeProps = {
  tone?: keyof typeof TONES;
  size?: keyof typeof SIZES;
  icon?: LucideIcon;
  iconClassName?: string;
  className?: string;
  children?: ReactNode;
};

export default function Badge({
  tone = 'subtle',
  size = 'sm',
  icon: Icon,
  iconClassName = '',
  className = '',
  children,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full ${SIZES[size]} ${TONES[tone]} ${className}`}
    >
      {Icon ? <Icon className={`w-3.5 h-3.5 ${iconClassName}`} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
