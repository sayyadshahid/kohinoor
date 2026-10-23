import localFont from 'next/font/local';
import './globals.css';

const fraunces = localFont({
  src: [
    { path: './fonts/fraunces-normal.woff2', weight: '300 800', style: 'normal' },
    { path: './fonts/fraunces-italic.woff2', weight: '300 800', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-fraunces',
  preload: true,
});

const inter = localFont({
  src: [{ path: './fonts/inter-normal.woff2', weight: '300 700', style: 'normal' }],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const SITE_URL = 'https://kohinoor-tailors.example.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Kohinoor | Bespoke Tailoring, Embroidery & Ladies Suit Stitching',
  description:
    'Master tailoring atelier specializing in precision alterations, hand zardozi & thread embroidery, and custom ladies suit stitching.',
  openGraph: {
    type: 'website',
    siteName: 'Kohinoor Atelier',
    title: 'Kohinoor | Bespoke Tailoring, Embroidery & Ladies Suit Stitching',
    description:
      'Precision alterations, hand zardozi embroidery and custom ladies suit stitching since 1998.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Master tailor measuring silk fabric at a cutting table',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kohinoor | Bespoke Tailoring, Embroidery & Ladies Suit Stitching',
    description:
      'Precision alterations, hand zardozi embroidery and custom ladies suit stitching since 1998.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C211C',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Kohinoor Tailors',
  description:
    'Bespoke tailoring atelier for precision alterations, hand zardozi embroidery and ladies suit stitching.',
  foundingDate: '1998',
  telephone: '+91 98765 43210',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Market Road, Near Clock Tower, Sector 4',
    addressLocality: 'City Center',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '17:00',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${fraunces.variable} ${inter.variable}`}>
      <body className="bg-canvas text-ink font-sans antialiased selection:bg-brand selection:text-on-dark">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
