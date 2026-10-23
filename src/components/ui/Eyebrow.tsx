export default function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`text-xs font-semibold tracking-widest uppercase text-brand ${className}`}
    >
      {children}
    </span>
  );
}
