'use client';

import { useCallback, useState } from 'react';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import { Scissors } from 'lucide-react';
import { BEFORE_AFTER_CASES, BEFORE_AFTER_CASES_HI, BEFORE_AFTER_CASES_MR, BEFORE_AFTER_CASES_HINGLISH } from '../../data/alterations';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import BeforeAfterSlider from '../alterations/BeforeAfterSlider';
import CaseTabs from '../alterations/CaseTabs';
import TransformationDetails from '../alterations/TransformationDetails';

export default function Alterations() {
  const { locale } = useLocale();
  const cases =
    locale === 'hi'
      ? BEFORE_AFTER_CASES_HI
      : locale === 'mr'
        ? BEFORE_AFTER_CASES_MR
        : locale === 'hinglish'
          ? BEFORE_AFTER_CASES_HINGLISH
          : BEFORE_AFTER_CASES;
  const [activeCase, setActiveCase] = useState(0);

  const item = cases[activeCase];

  const handleSelectCase = useCallback((index) => setActiveCase(index), []);

  return (
    <Section id="alterations" className="py-16 md:py-24 relative overflow-hidden bg-surface">
      <SectionHeading
        id="alterations-title"
        maxWidth="max-w-3xl"
        spacing="space-y-4"
        eyebrow={
          <Badge tone="brand" size="md" icon={Scissors} iconClassName="text-platinum-300">
            {t(locale, 'alterations_badge')}
          </Badge>
        }
        title={t(locale, 'alterations_title')}
        description={t(locale, 'alterations_desc')}
      />

      <CaseTabs
        cases={cases}
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
