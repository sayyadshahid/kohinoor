'use client';

import { useState } from 'react';
import { ArrowLeftRight, Lightbulb, Scissors, Sparkles } from 'lucide-react';

/* Draggable split slider: drag the dotted thread line to compare fits. */
export default function BeforeAfterSlider({ beforeImage, afterImage, title }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-platinum-400/40 shadow-lift select-none bg-mocha-950">
        <img
          decoding="async"
          loading="lazy"
          src={afterImage}
          alt={`After alteration fit: ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-brand text-on-dark rounded-full text-xs font-semibold uppercase tracking-wider shadow-card pointer-events-none flex items-center gap-1.5 ring-1 ring-platinum-300/25">
          <Sparkles className="w-3.5 h-3.5 text-platinum-300" aria-hidden="true" /> After ·
          Kohinoor Fit
        </div>

        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            decoding="async"
            loading="lazy"
            src={beforeImage}
            alt={`Before alteration fit: ${title}`}
            className="w-full h-full object-cover filter contrast-95 brightness-95"
          />
          <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-mocha-950/90 backdrop-blur-sm text-on-dark rounded-full text-xs font-semibold uppercase tracking-wider shadow-card pointer-events-none border border-platinum-300/25">
            Before · Ill-Fitting
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none transform -translate-x-1/2 flex items-center justify-center"
          style={{ left: `${position}%` }}
        >
          <div className="h-full w-0.5 border-r-2 border-dashed border-platinum-300/90 shadow-[0_0_12px_rgba(36,26,21,0.45)]" />
          <div className="absolute w-11 h-11 rounded-full bg-brand text-platinum-200 border-2 border-platinum-300 shadow-deep flex items-center justify-center pointer-events-none">
            <Scissors className="w-4 h-4 rotate-90" aria-hidden="true" />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
          aria-label="Drag slider to compare Before and After alteration"
          aria-valuetext={`${position}% before, ${100 - position}% after`}
        />

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1.5 bg-mocha-950/85 backdrop-blur-sm text-on-dark rounded-full text-xs uppercase font-semibold tracking-widest pointer-events-none border border-platinum-400/40 flex items-center gap-1.5 shadow-card">
          <ArrowLeftRight className="w-3.5 h-3.5 text-platinum-300" aria-hidden="true" />
          <span>Drag Thread Line</span>
        </div>
      </div>

      <p className="text-center text-xs text-ink-muted font-medium flex items-center justify-center gap-1.5">
        <Lightbulb className="w-3.5 h-3.5 text-silver shrink-0" aria-hidden="true" />
        Move the dotted thread line to compare fabric fit &amp; seams in real time.
      </p>
    </div>
  );
}
