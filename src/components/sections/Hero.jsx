import { MessageSquare, Phone, Scissors } from 'lucide-react';
import { SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';
import { HERO_STATS } from '../../data/content';
import NeedleAndThreadIcon from '../brand/NeedleAndThreadIcon';
import StitchedThreadLine from '../brand/StitchedThreadLine';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Section from '../ui/Section';
import StatList from '../ui/StatList';

export default function Hero() {
  return (
    <Section id="home" className="relative pt-8 pb-20 lg:py-28 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--color-mocha-800)_0%,transparent_68%)] opacity-10" />
        <div className="absolute -bottom-52 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,var(--color-platinum-500)_0%,transparent_66%)] opacity-25" />
        <div className="absolute inset-0 bg-fabric-pattern opacity-70" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 z-10 space-y-7">
          <Badge tone="surface" size="md" icon={Scissors} iconClassName="text-brand">
            Est. {SITE.founded} • Master Ladies Tailoring
          </Badge>

          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-mocha-900 text-balance">
              Precision Tailoring <br />
              <span className="italic font-normal text-mocha-500">for Every Silhouette.</span>
            </h1>
            <StitchedThreadLine className="w-48 sm:w-64 text-silver" />
          </div>

          <p className="text-base sm:text-lg text-ink-soft max-w-xl font-normal leading-relaxed text-pretty">
            Specializing in master ladies suit stitching, hand zardozi &amp; thread embroidery, and
            flawless garment alterations. Shaped to your exact body measurements with artisanal
            care.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-4">
            <Button
              href={waLink(WHATSAPP_MESSAGES.stitchingAndAlterations)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              elevation="lift"
              hoverLift
            >
              <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
              WhatsApp Inquiry
            </Button>

            <Button href={`tel:${SITE.phone}`} variant="outline" size="lg">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Direct Call
            </Button>
          </div>

          <StatList
            items={HERO_STATS}
            className="pt-6 border-t border-line gap-4 max-w-lg"
          />
        </div>

        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative mx-auto lg:mr-0 max-w-md lg:max-w-none">
            <div className="absolute -top-5 -left-5 z-20 bg-surface border border-line-strong px-4 py-3 rounded-xl shadow-lift max-w-[210px] hidden sm:block">
              <div className="flex items-center gap-2 text-brand font-serif font-semibold text-sm">
                <NeedleAndThreadIcon className="w-4 h-4" />
                Atelier Quality
              </div>
              <p className="text-xs text-ink-soft mt-1 leading-snug">
                Every seam hand-checked and reinforced for long wear.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-deep border-4 border-surface ring-1 ring-line-strong">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                alt="Master tailor measuring silk fabric at cutting table"
                fetchPriority="high"
                decoding="async"
                className="w-full h-[440px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-950/85 via-mocha-950/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-on-dark p-4 rounded-xl bg-mocha-950/50 backdrop-blur-md border border-platinum-300/20">
                <p className="font-serif text-lg font-medium italic text-platinum-50">
                  "A suit isn't just stitched; it's sculpted."
                </p>
                <p className="text-xs text-platinum-300 tracking-wider uppercase font-medium mt-1">
                  — Master Tailor at Kohinoor
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-dashed border-line-strong rounded-full -z-10 opacity-70 hidden sm:block" />
          </div>
        </div>
      </div>
    </Section>
  );
}
