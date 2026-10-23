import type { LucideIcon } from 'lucide-react';

const SIZES = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10 ring-1 ring-mocha-200',
};

type IconTileProps = {
  icon: LucideIcon;
  size?: keyof typeof SIZES;
  className?: string;
};

export default function IconTile({ icon: Icon, size = 'sm', className = '' }: IconTileProps) {
  return (
    <div
      className={`rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0 ${SIZES[size]} ${className}`}
    >
      <Icon className={size === 'md' ? 'w-5 h-5' : 'w-4 h-4'} aria-hidden="true" />
    </div>
  );
}
