import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import StitchedThreadLine from '../brand/StitchedThreadLine';

/*
 * Section intro block: eyebrow, title, stitched divider and optional copy.
 * `eyebrow` may be a string or a custom node (e.g. a Badge).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  as: Heading = 'h2',
  maxWidth,
  spacing = 'space-y-3',
  threadClassName = 'max-w-xs',
  showThread = true,
  className = '',
  titleClassName = 'text-3xl sm:text-4xl',
  children,
}) {
  const centered = align === 'center';
  const width = maxWidth ?? (centered ? 'max-w-2xl' : '');

  return (
    <Reveal
      className={[centered ? 'text-center mx-auto' : '', width, className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={spacing}>
        {typeof eyebrow === 'string' ? <Eyebrow>{eyebrow}</Eyebrow> : eyebrow}
        <Heading
          className={`font-serif ${titleClassName} font-semibold text-brand text-balance`}
        >
          {title}
        </Heading>
        {showThread ? (
          <StitchedThreadLine
            className={`${threadClassName} ${centered ? 'mx-auto' : ''} text-silver`}
          />
        ) : null}
        {description ? (
          <p className="text-sm sm:text-base text-ink-soft text-pretty">{description}</p>
        ) : null}
        {children}
      </div>
    </Reveal>
  );
}
