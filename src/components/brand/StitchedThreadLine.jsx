const STITCH_COUNT = 24;
const WIDTH = 400;
const HEIGHT = 14;

/* Hand-drawn running-stitch divider; colour comes from `currentColor`. */
export default function StitchedThreadLine({ className = '', height = '14' }) {
  const stitches = Array.from({ length: STITCH_COUNT }, (_, index) => {
    const progress = index / STITCH_COUNT;
    const nextProgress = (index + 0.58) / STITCH_COUNT;
    const x1 = 6 + progress * 388;
    const y1 = 7 + Math.sin(progress * Math.PI * 2) * 1.8;
    const x2 = 6 + nextProgress * 388;
    const y2 = 7 + Math.sin(nextProgress * Math.PI * 2) * 1.8;

    return (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        pathLength="1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.5 + (index % 3) * 0.2}
        style={{ animationDelay: `${index * 26}ms` }}
      />
    );
  });

  return (
    <svg
      className={`w-full stitch-thread ${className}`}
      height={height}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {stitches}
    </svg>
  );
}
