'use client';

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type Variants,
} from 'motion/react';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react';

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
  reducedMotion: boolean;
};

/* --------------------------------------------------------------------------
 * Mobile fan carousel
 * On small screens the three cards sit on a circle instead of a static row,
 * so a swipe cycles them 1 → 2 → 3 → 1 in both directions. Each card keeps
 * its fan slot look (tilt, overlap, depth) and the drag follows the finger.
 * ------------------------------------------------------------------------ */

const MOBILE_CARD_WIDTH = 0.52; // matches the centre card width on mobile
const MOBILE_CARD_ASPECT = 4 / 3; // 3:4 portrait
const MOBILE_SIDE_SCALE = 0.85; // 44% width vs the 52% centre card
const MOBILE_SLOT_SHIFT = 0.48; // slot centres at ±(48% of width − 32px)
const MOBILE_SLOT_GUTTER = 32;

/* Wrap a slot distance into [-total/2, total/2) so cards loop seamlessly. */
function circularOffset(delta: number, total: number) {
  const half = total / 2;
  const wrapped = ((delta % total) + total) % total;
  return wrapped >= half ? wrapped - total : wrapped;
}

type FanSlideProps = {
  src: string;
  alt: string;
  index: number;
  total: number;
  position: MotionValue<number>;
  slotGap: number;
  eager: boolean;
};

function FanSlide({
  src,
  alt,
  index,
  total,
  position,
  slotGap,
  eager,
}: FanSlideProps) {
  const rel = useTransform(position, (p) => circularOffset(index - p, total));
  const x = useTransform(rel, (r) => r * slotGap);
  const y = useTransform(rel, (r) => 24 - 32 * (1 - Math.min(Math.abs(r), 1)));
  const rotate = useTransform(rel, (r) => 6 * Math.max(-1, Math.min(1, r)));
  const scale = useTransform(
    rel,
    (r) => 1 - (1 - MOBILE_SIDE_SCALE) * Math.min(Math.abs(r), 1),
  );
  /* Fade out only while a card travels around the back of the circle. */
  const opacity = useTransform(rel, (r) =>
    1 - Math.min(Math.max(Math.abs(r) - 1, 0) / 0.4, 1),
  );
  const zIndex = useTransform(rel, (r) =>
    Math.round(20 - 10 * Math.min(Math.abs(r), 1)),
  );

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 aspect-[3/4] w-[52%] overflow-hidden rounded-xl shadow-xl outline outline-black/10 dark:outline-white/10"
      style={{
        marginLeft: `-${MOBILE_CARD_WIDTH * 50}%`,
        marginTop: `-${MOBILE_CARD_WIDTH * MOBILE_CARD_ASPECT * 50}%`,
        willChange: 'transform',
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex,
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        decoding="async"
        loading={eager ? 'eager' : 'lazy'}
        width={900}
        height={1125}
        className="size-full object-cover"
      />
    </motion.div>
  );
}

type MobileFanCarouselProps = {
  images: string[];
  imageAlts?: string[];
  reducedMotion: boolean;
};

type DragState = {
  id: number;
  startX: number;
  startPosition: number;
  lastX: number;
  lastTime: number;
  velocity: number;
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function MobileFanCarousel({
  images,
  imageAlts,
  reducedMotion,
}: MobileFanCarouselProps) {
  const total = Math.min(images.length, 3);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<DragState | null>(null);
  const snap = useRef<{ stop: () => void } | null>(null);
  const position = useMotionValue(Math.floor(total / 2));
  /* Where the track is currently resting / heading, used when a snap is interrupted. */
  const goal = useRef(position.get());

  const slotGap = stageWidth
    ? Math.max(
        stageWidth * MOBILE_SLOT_SHIFT - MOBILE_SLOT_GUTTER,
        stageWidth * 0.36,
      )
    : 0;

  useIsomorphicLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const measure = () => setStageWidth(el.getBoundingClientRect().width);
    measure();

    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => snap.current?.stop(), []);

  const settle = useCallback(
    (target: number) => {
      snap.current?.stop();
      snap.current = null;
      goal.current = target;

      if (reducedMotion) {
        position.set(target);
        return;
      }

      snap.current = animate(position, target, {
        type: 'spring',
        stiffness: 320,
        damping: 34,
        restDelta: 0.001,
      });
    },
    [position, reducedMotion],
  );

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (total < 2 || slotGap === 0) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    snap.current?.stop();
    snap.current = null;
    drag.current = {
      id: event.pointerId,
      startX: event.clientX,
      startPosition: position.get(),
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    };
    setDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;

    const now = performance.now();
    const elapsed = Math.max(now - state.lastTime, 1);
    const instant = ((event.clientX - state.lastX) / elapsed) * 1000;
    state.velocity = state.velocity * 0.7 + instant * 0.3;
    state.lastX = event.clientX;
    state.lastTime = now;

    /* One swipe moves at most one card: past that the track only stretches. */
    const raw = -(event.clientX - state.startX) / slotGap;
    const clamped = Math.max(-1, Math.min(1, raw));
    const stretched = clamped + (raw - clamped) * 0.25;

    position.set(state.startPosition + stretched);
  };

  const finishDrag = (
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled: boolean,
  ) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;

    drag.current = null;
    setDragging(false);

    const travel =
      state.startPosition - (event.clientX - state.startX) / slotGap;
    const moved = travel - state.startPosition;
    const base = Math.round(state.startPosition);
    let target = goal.current;

    if (cancelled) {
      target = Math.round(position.get());
    } else if (Math.abs(state.velocity) > 400) {
      /* Fling: one card, in the direction of the throw. */
      target = base + (state.velocity < 0 ? 1 : -1);
    } else if (Math.abs(moved) > 0.25) {
      target = base + Math.sign(moved);
    }

    settle(target);
  };

  return (
    <div
      ref={stageRef}
      className={cn(
        'relative w-full touch-pan-y select-none',
        total > 1 && (dragging ? 'cursor-grabbing' : 'cursor-grab'),
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={(event) => finishDrag(event, false)}
      onPointerCancel={(event) => finishDrag(event, true)}
    >
      <div aria-hidden className="aspect-[3/4] w-[52%]" />
      {stageWidth > 0 &&
        images.slice(0, total).map((src, i) => (
          <FanSlide
            key={src}
            src={src}
            alt={
              imageAlts?.[i] ??
              'Ladies suit stitching and tailoring by Kohinoor Tailors in Kondhwa, Pune'
            }
            index={i}
            total={total}
            position={position}
            slotGap={slotGap}
            eager={i === 1}
          />
        ))}
    </div>
  );
}

function ImageFan({
  images,
  imageAlts,
  cardAspect,
  animate,
  reducedMotion,
}: ImageFanProps) {
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
              'hidden sm:block',
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

      <div className="w-full sm:hidden">
        <MobileFanCarousel
          images={images}
          imageAlts={imageAlts}
          reducedMotion={reducedMotion}
        />
      </div>
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
      reducedMotion={!!reduce}
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
