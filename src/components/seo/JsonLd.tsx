import { FAQS } from '../../data/faq';
import { SITE } from '../../config/site';

type JsonLdNode = Record<string, unknown>;

export function buildStructuredData() {
  const businessId = `${SITE.url}/#business`;
  const websiteId = `${SITE.url}/#website`;

  const business: JsonLdNode = {
    '@type': 'ClothingStore',
    '@id': businessId,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}/icon.svg`,
    description: SITE.description,
    telephone: SITE.phoneDisplay,
    priceRange: SITE.priceRange,
    foundingDate: String(SITE.founded),
    address: {
      '@type': 'PostalAddress',
      ...SITE.addressParts,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    areaServed: SITE.areaServed.map((name) => ({
      '@type': 'Place',
      name,
    })),
    openingHoursSpecification: SITE.openingHours.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...spec.dayOfWeek],
      opens: spec.opens,
      closes: spec.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tailoring services in Kondhwa, Pune',
      itemListElement: SITE.services.map((service) => ({
        '@type': 'Offer',
        name: service.name,
        description: service.shortDescription,
        priceCurrency: 'INR',
        ...(service.startingPrice !== null
          ? {
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'INR',
                minPrice: service.startingPrice,
              },
            }
          : {}),
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDescription,
          serviceType: service.name,
          provider: { '@id': businessId },
        },
      })),
    },
  };

  const website: JsonLdNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': businessId },
    inLanguage: 'en-IN',
  };

  const faqPage: JsonLdNode = {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, website, faqPage],
  };
}

const escapeJson = (value: unknown): string =>
  JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeJson(buildStructuredData()) }}
    />
  );
}
