'use client';

import { useCallback, useState } from 'react';
import { Scissors } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../../data/alterations';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import BeforeAfterSlider from '../alterations/BeforeAfterSlider';
import CaseTabs from '../alterations/CaseTabs';
import TransformationDetails from '../alterations/TransformationDetails';

export default function Alterations() {
  const [activeCase, setActiveCase] = useState(0);

  const item = BEFORE_AFTER_CASES[activeCase];

  const handleSelectCase = useCallback((index) => setActiveCase(index), []);

  return (
    <Section id="alterations" className="py-16 md:py-24 relative overflow-hidden bg-surface">
      <SectionHeading
        maxWidth="max-w-3xl"
        spacing="space-y-4"
        eyebrow={
          <Badge tone="brand" size="md" icon={Scissors} iconClassName="text-platinum-300">
            Drag to Compare
          </Badge>
        }
        title="Alterations: Before vs After"
        description={
          <>
            Drag the{' '}
            <strong className="text-brand font-semibold">
              vertical dotted line left or right
            </strong>{' '}
            on the image below to inspect our tailoring craftsmanship in real time.
          </>
        }
      />

      <CaseTabs
        cases={BEFORE_AFTER_CASES}
        activeIndex={activeCase}
        onChange={handleSelectCase}
      />

      <Card padding="lg" className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              title={item.title}
            />
          </div>

          <TransformationDetails item={item} />
        </div>
      </Card>
    </Section>
  );
}
