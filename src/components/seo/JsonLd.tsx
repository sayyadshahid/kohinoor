import { FAQS } from '../../data/faq';
import { SITE } from '../../config/site';

type JsonLdNode = Record<string, unknown>;

export function buildStructuredData() {
  const businessId = `${SITE.url}/#business`;
  const websiteId = `${SITE.url}/#website`;
  const webpageId = `${SITE.url}/#webpage`;
  const breadcrumbId = `${SITE.url}/#breadcrumb`;

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
    sameAs: [SITE.googleBusinessUrl],
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
    potentialAction: {
      '@type': 'ContactAction',
      name: 'Call Kohinoor Tailors to book a fitting',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `tel:${SITE.phone}`,
        inLanguage: 'en-IN',
        actionPlatform: [
          'http://schema.org/MobileWebPlatform',
          'http://schema.org/DesktopWebPlatform',
        ],
      },
    },
  };

  const webPage: JsonLdNode = {
    '@type': 'WebPage',
    '@id': webpageId,
    url: SITE.url,
    name: 'Kohinoor Tailors | Ladies Suit Stitching, Kondhwa Pune',
    description: SITE.description,
    isPartOf: { '@id': websiteId },
    about: { '@id': businessId },
    inLanguage: 'en-IN',
    datePublished: SITE.datePublished,
    dateModified: SITE.lastUpdated,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#hero-lead', '#faq'],
    },
  };

  const faqPage: JsonLdNode = {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    description:
      'Answers to common questions about ladies suit stitching, bridal lehenga alterations, zardozi embroidery, pricing and fitting appointments at Kohinoor Tailors in Kondhwa, Pune.',
    isPartOf: { '@id': webpageId },
    about: { '@id': businessId },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#faq-title', '#faq'],
    },
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  const breadcrumb: JsonLdNode = {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url,
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, website, webPage, faqPage, breadcrumb],
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
