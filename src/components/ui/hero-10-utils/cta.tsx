import type { ReactNode } from 'react';

import Button, { type ButtonSize, type ButtonVariant } from '../Button';

const VARIANT_MAP: Record<string, string> = {
  default: 'primary',
  outline: 'outline',
  secondary: 'subtle',
  ghost: 'ghost',
  link: 'muted',
  destructive: 'primary',
  whatsapp: 'whatsapp',
};

const SIZE_MAP: Record<string, string> = {
  default: 'lg',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  icon: 'md',
};

type CtaData = {
  ctaEnabled?: boolean;
  text?: ReactNode;
  link?: string;
  variant?: string;
  size?: string;
};

export function Cta({ cta }: { cta?: CtaData }) {
  if (!cta?.ctaEnabled) return null;

  const external = /^https?:\/\//.test(cta.link ?? '');

  return (
    <Button
      href={cta.link || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variant={
        (VARIANT_MAP[cta.variant ?? 'default'] ?? cta.variant ?? 'primary') as ButtonVariant
      }
      size={(SIZE_MAP[cta.size ?? 'default'] ?? 'lg') as ButtonSize}
      elevation="card"
      hoverLift
    >
      {cta.text}
    </Button>
  );
}

export default Cta;
