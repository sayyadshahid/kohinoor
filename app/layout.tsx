import localFont from 'next/font/local';
import JsonLd from '@/src/components/seo/JsonLd';
import { SITE } from '@/src/config/site';
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

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Kohinoor Tailors | Ladies Suit Stitching, Kondhwa Pune',
  description:
    'Bespoke ladies suit stitching, bridal lehenga alterations and zardozi embroidery in Kondhwa, Pune. 24–48h alterations, free trial fitting. Call +91 84838 95822.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'Kohinoor Tailors',
    title: 'Kohinoor Tailors | Ladies Suit Stitching, Kondhwa Pune',
    description:
      'Bespoke ladies suit stitching, bridal lehenga alterations and zardozi embroidery in Kondhwa, Pune. 24–48h alterations, free trial fitting. Call +91 84838 95822.',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kohinoor Tailors | Ladies Suit Stitching, Kondhwa Pune',
    description:
      'Bespoke ladies suit stitching, bridal lehenga alterations and zardozi embroidery in Kondhwa, Pune. 24–48h alterations, free trial fitting. Call +91 84838 95822.',
    images: [SITE.ogImage],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C211C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`scroll-smooth ${fraunces.variable} ${inter.variable}`}
    >
      <body className="bg-canvas text-ink font-sans antialiased selection:bg-brand selection:text-on-dark">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
