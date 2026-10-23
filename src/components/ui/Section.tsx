import type { ReactNode } from 'react';

/* Page section with the standard max-width container. */
type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
};

export default function Section({ id, className = '', containerClassName = '', children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
