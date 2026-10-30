'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Cta } from '@/components/ui/hero-10-utils/cta';

const variantStyles = {
  standard: {
    section: 'pt-2 pb-20 sm:pt-3 sm:pb-28',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-lg text-sm sm:text-base',
    header: 'gap-5',
    content: 'gap-8 sm:gap-10',
    fan: 'max-w-3xl max-sm:-mx-6 max-sm:w-[calc(100%+3rem)]',
    fanCard: 'aspect-4/5 max-sm:aspect-[3/4]',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-2xl sm:text-3xl md:text-4xl',
    description: 'max-w-md text-sm',
    header: 'gap-4',
    content: 'gap-6 sm:gap-8',
    fan: 'max-w-2xl max-sm:-mx-6 max-sm:w-[calc(100%+3rem)]',
    fanCard: 'aspect-4/5 max-sm:aspect-[3/4]',
  },
};

const fanSlots = [
  { width: 'w-[44%] sm:w-[38%]', layout: '-mr-8 z-10', rotate: -6, x: 48, ty: 24 },
  { width: 'w-[52%] sm:w-[42%]', layout: 'z-20', rotate: 0, x: 0, ty: -8 },
  { width: 'w-[44%] sm:w-[38%]', layout: '-ml-8 z-10', rotate: 6, x: -48, ty: 24 },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fanContainer: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease,
      delay: 0.4,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

type FanSlot = (typeof fanSlots)[number];

const fanCard: Variants = {
  hidden: (slot: FanSlot) => ({
    x: slot.x,
    rotate: slot.rotate,
    y: slot.ty,
  }),
  visible: (slot: FanSlot) => ({
    x: 0,
    rotate: slot.rotate,
    y: slot.ty,
    transition: { duration: 0.5, ease },
  }),
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease },
  },
};

type RevealProps = {
  active: boolean;
  variants?: Variants;
  className?: string;
  children?: ReactNode;
};

function Reveal({ active, variants, className, children }: RevealProps) {
  if (!active) return <div className={className}>{children}</div>;

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  );
}

type ImageFanProps = {
  images: string[];
  imageAlts?: string[];
  cardAspect: string;
  animate: boolean;
};

function ImageFan({ images, imageAlts, cardAspect, animate }: ImageFanProps) {
  return (
    <motion.div
      className="relative flex w-full items-center justify-center"
      variants={fanContainer}
      initial={animate ? 'hidden' : false}
      whileInView={animate ? 'visible' : undefined}
      animate={animate ? undefined : 'visible'}
      viewport={{ once: false, margin: '-80px' }}
    >
      {images.slice(0, 3).map((src, i) => {
        const slot = fanSlots[i] ?? fanSlots[1];
        return (
          <motion.div
            key={src}
            custom={slot}
            variants={fanCard}
            className={cn(
              'relative shrink-0 overflow-hidden rounded-xl shadow-xl outline outline-black/10 dark:outline-white/10',
              cardAspect,
              slot.width,
              slot.layout,
            )}
          >
            <img
              src={src}
              alt={imageAlts?.[i] ?? 'Ladies suit stitching and tailoring by Kohinoor Tailors in Kondhwa, Pune'}
              decoding="async"
              loading={i === 0 ? 'eager' : 'lazy'}
              width={900}
              height={1125}
              className="size-full object-cover"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

type HeroCta = {
  ctaEnabled?: boolean;
  text?: ReactNode;
  link?: string;
  variant?: string;
  size?: string;
};

type Hero10Props = {
  id?: string;
  className?: string;
  title?: ReactNode;
  tagline?: ReactNode;
  description?: ReactNode;
  socialProof?: ReactNode;
  images?: string[];
  imageAlts?: string[];
  animation?: 'none' | 'subtle' | string;
  primaryCTA?: HeroCta;
  secondaryCTA?: HeroCta;
  variant?: keyof typeof variantStyles;
};

export function Hero10({
  id,
  className,
  title,
  tagline,
  description,
  socialProof,
  images,
  imageAlts,
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
}: Hero10Props) {
  const reduce = useReducedMotion();
  const animate = animation === 'subtle' && !reduce;
  const vs = variantStyles[variant];

  const titleElement = title && (
    <h1
      id="hero-title"
      className={cn(
        'text-foreground font-serif font-normal tracking-tight text-balance',
        vs.title,
      )}
    >
      {title}
    </h1>
  );

  const descriptionElement = description && (
    <p
      id="hero-lead"
      className={cn('text-muted-foreground text-balance', vs.description)}
    >
      {description}
    </p>
  );

  const ctasElement = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'outline' }}
        />
      )}
    </div>
  );

  const socialProofElement = socialProof && (
    <p className="text-muted-foreground text-xs font-medium">{socialProof}</p>
  );

  const mediaElement = images?.length ? (
    <ImageFan
      images={images}
      imageAlts={imageAlts}
      cardAspect={vs.fanCard}
      animate={animate}
    />
  ) : null;

  return (
    <section
      id={id}
      className={cn(
        'bg-background relative isolate w-full overflow-hidden',
        className,
      )}
    >
      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal
          active={animate}
          className={cn(
            'flex w-full max-w-2xl flex-col items-center',
            vs.header,
          )}
        >
          {tagline ? (
            <p className="font-serif text-sm italic text-primary sm:text-base">
              {tagline}
            </p>
          ) : null}
          {titleElement}
          {descriptionElement}
        </Reveal>

        <Reveal active={animate} className="flex flex-col items-center gap-4">
          {ctasElement}
          {socialProofElement}
        </Reveal>

        <div className={cn('mx-auto w-full', vs.fan)}>{mediaElement}</div>
      </motion.div>
    </section>
  );
}

export default Hero10;
