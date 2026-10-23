import Button from '../Button';

const VARIANT_MAP = {
  default: 'primary',
  outline: 'outline',
  secondary: 'subtle',
  ghost: 'ghost',
  link: 'muted',
  destructive: 'primary',
  whatsapp: 'whatsapp',
};

const SIZE_MAP = {
  default: 'lg',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  icon: 'md',
};

export function Cta({ cta }) {
  if (!cta?.ctaEnabled) return null;

  const external = /^https?:\/\//.test(cta.link ?? '');

  return (
    <Button
      href={cta.link || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variant={VARIANT_MAP[cta.variant] ?? cta.variant ?? 'primary'}
      size={SIZE_MAP[cta.size] ?? 'lg'}
      elevation="card"
      hoverLift
    >
      {cta.text}
    </Button>
  );
}

export default Cta;
