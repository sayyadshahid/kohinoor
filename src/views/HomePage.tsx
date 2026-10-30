'use client';

import { BookingProvider } from '../context/BookingProvider';
import { LocaleProvider } from '../context/LocaleProvider';
import About from '../components/sections/About';
import BookingSteps from '../components/sections/BookingSteps';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';
import Gallery from '../components/sections/Gallery';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import FloatingActions from '../components/layout/FloatingActions';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <LocaleProvider>
      <BookingProvider>
        <div className="min-h-screen bg-canvas text-ink font-sans antialiased selection:bg-brand selection:text-on-dark">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-dark focus:shadow-lift"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">
            <Hero />
            <Services />
            <Gallery />
            <About />
            <Testimonials />
            <FAQ />
            <BookingSteps />
            <Contact />
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </BookingProvider>
    </LocaleProvider>
  );
}
