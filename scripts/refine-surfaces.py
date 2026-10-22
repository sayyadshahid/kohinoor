#!/usr/bin/env python3
"""Phase 2 of the Kohinoor redesign: refine surface, type and accent treatments."""
import pathlib
import sys

SRC = pathlib.Path("src/App.jsx")

REPLACEMENTS = [
    # ---- Service swatch cards ----
    (
        "group relative bg-surface rounded-xl border border-line p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between",
        "group relative bg-surface rounded-2xl border border-line p-6 shadow-card hover:shadow-lift hover:border-mocha-300 transition-all duration-300 flex flex-col justify-between",
    ),
    (
        "w-4 h-4 rounded-full border-2 border-silver bg-canvas-alt flex items-center justify-center",
        "w-4 h-4 rounded-full border-2 border-line-strong bg-canvas flex items-center justify-center",
    ),
    (
        "text-xs font-mono font-semibold tracking-wider text-brand/80 uppercase",
        "text-xs font-mono font-semibold tracking-wider text-ink-muted uppercase",
    ),
    (
        "text-xs font-medium px-2.5 py-1 bg-canvas-alt text-brand rounded-full",
        "text-xs font-medium px-2.5 py-1 bg-canvas-alt text-brand rounded-full ring-1 ring-line",
    ),
    (
        "w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center",
        "w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center ring-1 ring-brand/10",
    ),
    (
        "mt-6 pt-4 border-t border-dashed border-line flex items-center justify-between",
        "mt-6 pt-4 border-t border-dashed border-line-strong flex items-center justify-between",
    ),
    (
        "text-xs font-semibold text-brand hover:text-silver inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform focus:outline-none",
        "text-xs font-semibold text-brand hover:text-mocha-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform focus:outline-none",
    ),
    # ---- Check icons: silver -> readable mocha ----
    ('Check className="w-4 h-4 text-silver shrink-0 mt-0.5"', 'Check className="w-4 h-4 text-mocha-500 shrink-0 mt-0.5"'),
    # ---- Text tone hierarchy ----
    ("text-ink/90", "text-ink-soft"),
    ("text-ink/85", "text-ink-soft"),
    ("text-ink/80", "text-ink-soft"),
    ("text-ink/75", "text-ink-soft"),
    ("text-ink/70", "text-ink-muted"),
    ("text-ink/60", "text-ink-muted"),
    ("text-ink/50", "text-ink-muted"),
    # ---- Serif headings: bold -> semibold (more refined) ----
    ("font-serif text-3xl sm:text-4xl font-bold", "font-serif text-3xl sm:text-4xl font-semibold"),
    ("font-serif text-2xl font-bold", "font-serif text-2xl font-semibold"),
    ("font-serif text-xl font-bold", "font-serif text-xl font-semibold"),
    ("font-serif text-lg font-bold", "font-serif text-lg font-semibold"),
    # ---- Section header paragraphs ----
    (
        'className="text-sm sm:text-base text-ink-soft"',
        'className="text-sm sm:text-base text-ink-soft text-pretty"',
    ),
    # ---- Buttons: shadow consistency ----
    ("shadow-md shadow-card", "shadow-card"),
    ("transition-colors shadow-md flex items-center justify-center gap-2", "transition-colors shadow-lift flex items-center justify-center gap-2"),
]


def main() -> int:
    src = SRC.read_text(encoding="utf-8")
    total = 0
    for old, new in REPLACEMENTS:
        n = src.count(old)
        if n:
            src = src.replace(old, new)
            total += n
            print(f"  {n:>3}x  {old[:60]}")
    SRC.write_text(src, encoding="utf-8")
    print(f"\n{total} refinements applied.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
