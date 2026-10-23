'use client';

import { BookingProvider } from '../context/BookingProvider';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Gallery from '../components/sections/Gallery';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import FloatingActions from '../components/layout/FloatingActions';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-canvas text-ink font-sans antialiased selection:bg-brand selection:text-on-dark">
        <Header />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </BookingProvider>
  );
}
