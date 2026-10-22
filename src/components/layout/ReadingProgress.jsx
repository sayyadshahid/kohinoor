/* Mocha thread travelling across the top of the sticky header. */
export default function ReadingProgress({ value }) {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-mocha-800 via-mocha-500 to-platinum-400 transition-[width] duration-150 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
