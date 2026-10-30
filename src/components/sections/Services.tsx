import { SERVICES } from '../../data/services';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';

export default function Services() {
  const { locale } = useLocale();

  const services = SERVICES.map((s, idx) => {
    if (idx === 0) {
      return {
        ...s,
        title: t(locale, 'services_card_alt_title'),
        description: t(locale, 'services_card_alt_desc'),
        features: [
          t(locale, 'services_feat_alt1'),
          t(locale, 'services_feat_alt2'),
          t(locale, 'services_feat_alt3'),
        ],
        price: t(locale, 'services_price_alt'),
        badge: t(locale, 'services_badge_fast'),
        cta: t(locale, 'services_cta_book'),
      };
    }
    if (idx === 1) {
      return {
        ...s,
        title: t(locale, 'services_card_emb_title'),
        description: t(locale, 'services_card_emb_desc'),
        features: [
          t(locale, 'services_feat_emb1'),
          t(locale, 'services_feat_emb2'),
          t(locale, 'services_feat_emb3'),
        ],
        price: t(locale, 'services_price_emb'),
        badge: t(locale, 'services_badge_hand'),
        cta: t(locale, 'services_cta_quote'),
      };
    }
    return {
      ...s,
      title: t(locale, 'services_card_stitch_title'),
      description: t(locale, 'services_card_stitch_desc'),
      features: [
        t(locale, 'services_feat_st1'),
        t(locale, 'services_feat_st2'),
        t(locale, 'services_feat_st3'),
      ],
      price: t(locale, 'services_price_st'),
      badge: t(locale, 'services_badge_fit'),
      cta: t(locale, 'services_cta_order'),
    };
  });

  return (
    <Section id="services" className="py-16 md:py-24 bg-canvas-alt/70 border-y border-line">
      <SectionHeading
        id="services-title"
        eyebrow={t(locale, 'services_eyebrow')}
        title={t(locale, 'services_title')}
        description={t(locale, 'services_desc')}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Reveal key={service.id} delay={90} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12">
        <div className="overflow-x-auto rounded-2xl border border-line bg-surface shadow-card">
          <table className="w-full border-collapse text-left text-sm">
             
            <thead>
              <tr className="border-b border-line bg-canvas-alt/60">
                <th scope="col" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_service')}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_turnaround')}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_best')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_alt')}
                </th>
                <td className="px-4 py-3 text-ink-soft sm:px-6">24–48 hours</td>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_alt_best')}
                </td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_stitch')}
                </th>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_call')}
                </td>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_stitch_best')}
                </td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_emb')}
                </th>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_call')}
                </td>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_emb_best')}
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-semibold text-brand sm:px-6">
                  {t(locale, 'services_table_bridal')}
                </th>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_call')}
                </td>
                <td className="px-4 py-3 text-ink-soft sm:px-6">
                  {t(locale, 'services_table_bridal_best')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
