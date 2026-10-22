/*
 * Brand lockup. `primary` is the mocha mark used in the header;
 * `inverse` is the platinum mark used in the dark footer.
 */
export default function Logo({
  variant = 'primary',
  href,
  showTagline = variant === 'primary',
  className = '',
}) {
  const inverse = variant === 'inverse';

  const wordmark = inverse
    ? 'font-serif text-2xl font-semibold tracking-tight text-platinum-50'
    : 'font-serif text-2xl md:text-3xl font-semibold tracking-tight text-mocha-900 block leading-none';

  const content = (
    <>
      <div>
        <span className={wordmark}>Kohinoor</span>
        {showTagline ? (
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-ink-muted block mt-1">
            Atelier &amp; Tailoring
          </span>
        ) : null}
      </div>
    </>
  );

  const wrapperClass = `flex items-center ${inverse ? 'gap-2' : 'gap-3 group'} ${className}`;

  if (href) {
    return (
      <a href={href} className={wrapperClass}>
        {content}
      </a>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
