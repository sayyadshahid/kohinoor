import { Award, ShieldCheck } from 'lucide-react';
import { SITE } from '../../config/site';
import { ABOUT_STATS } from '../../data/content';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import StatList from '../ui/StatList';

export default function About() {
  return (
    <Section id="about" className="py-16 md:py-24 bg-canvas-alt/70 border-y border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <SectionHeading
          align="left"
          spacing="space-y-6"
          className="lg:col-span-7"
          eyebrow="About Kohinoor Atelier"
          title="Three Decades of Tailoring Precision & Fabric Mastery"
          threadClassName="w-56"
        >
          <div className="space-y-4 text-sm sm:text-base text-ink-soft leading-relaxed font-normal text-pretty">
            <p>
              Founded in {SITE.founded},{' '}
              <strong className="text-brand font-semibold">Kohinoor</strong> began with a simple
              belief: every garment should feel like a second skin. Located in the heart of the
              tailoring district, our atelier combines traditional hand-stitching techniques with
              modern silhouette cuts to deliver clothing that fits effortlessly.
            </p>
            <p>
              Whether it is altering a cherished vintage sari dress, crafting an intricate
              hand-zardozi bridal suit, or stitching daily office suits with reinforced seams, our
              master tailors treat every piece of fabric with meticulous attention.
            </p>
          </div>

          <StatList
            items={ABOUT_STATS}
            size="lg"
            className="py-4 border-y border-line-strong gap-6"
          />

          <div className="p-5 rounded-xl border-2 border-dashed border-line-strong bg-surface flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-brand shrink-0 mt-1" aria-hidden="true" />
            <div className="space-y-1">
              <h4 className="font-serif font-semibold text-sm text-brand">
                The Kohinoor Trial-Fitting Guarantee
              </h4>
              <p className="text-xs text-ink-soft">
                If your suit doesn't fit with absolute perfection during your initial trial, we
                re-adjust and fine-tune it free of cost until it satisfies your expectations.
              </p>
            </div>
          </div>
        </SectionHeading>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-lift border-4 border-surface ring-1 ring-line-strong">
            <img
              decoding="async"
              loading="lazy"
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
              alt="Master tailor crafting custom dress at cutting table"
              className="w-full h-[450px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mocha-950/85 via-mocha-950/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-on-dark space-y-1.5">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-platinum-300" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-platinum-300">
                  Master Tailors at Work
                </span>
              </div>
              <p className="font-serif text-base text-platinum-50">
                Hand-drafted patterns for every individual garment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
