export default function NeedleAndThreadIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2L15 9L12 22L9 9L12 2Z" />
      <circle cx="12" cy="5" r="1" fill="currentColor" />
      <path d="M13 5C17 5 21 8 20 13C19.2 17 14 18 12 22" strokeDasharray="3 3" />
    </svg>
  );
}
