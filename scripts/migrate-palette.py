#!/usr/bin/env python3
"""Migrate Kohinoor's hardcoded hex colors to semantic design tokens."""
import pathlib
import sys

SRC = pathlib.Path("src/App.jsx")

REPLACEMENTS = [
    # ---- ivory / light surfaces ----
    ("bg-[#FAF7F2]/95", "bg-canvas/95"),
    ("bg-[#FAF7F2]/90", "bg-surface/90"),
    ("bg-[#FAF7F2]/20", "bg-on-dark/20"),
    ("bg-[#FAF7F2]", "bg-surface"),
    ("text-[#FAF7F2]", "text-on-dark"),
    ("border-[#FAF7F2]/10", "border-on-dark/10"),
    ("border-[#FAF7F2]", "border-on-dark"),
    ("selection:text-[#FAF7F2]", "selection:text-on-dark"),
    # ---- charcoal / dark surfaces ----
    ("bg-[#2B2420]/90", "bg-ink/90"),
    ("bg-[#2B2420]/85", "bg-ink/85"),
    ("bg-[#2B2420]/80", "bg-ink/80"),
    ("bg-[#2B2420]/40", "bg-ink/40"),
    ("bg-[#2B2420]/5", "bg-ink/5"),
    ("bg-[#2B2420]", "bg-ink"),
    ("text-[#2B2420]", "text-ink"),
    ("border-[#2B2420]", "border-ink"),
    ("placeholder-[#2B2420]", "placeholder-ink"),
    ("hover:text-[#2B2420]", "hover:text-ink"),
    # ---- maroon / brand ----
    ("bg-[#6B1E2B]/70", "bg-brand/70"),
    ("bg-[#6B1E2B]/60", "bg-brand/60"),
    ("bg-[#6B1E2B]/10", "bg-brand/10"),
    ("bg-[#6B1E2B]", "bg-brand"),
    ("text-[#6B1E2B]", "text-brand"),
    ("border-[#6B1E2B]", "border-brand"),
    ("hover:text-[#6B1E2B]", "hover:text-brand"),
    ("hover:bg-[#6B1E2B]", "hover:bg-brand"),
    ("focus:border-[#6B1E2B]", "focus:border-brand"),
    ("focus:ring-[#6B1E2B]", "focus:ring-brand"),
    ("selection:bg-[#6B1E2B]", "selection:bg-brand"),
    ("from-[#6B1E2B]", "from-brand"),
    ("hover:bg-[#501520]", "hover:bg-brand-hover"),
    # ---- gold / metallic accent ----
    ("text-[#C9A227]", "text-silver"),
    ("bg-[#C9A227]", "bg-silver"),
    ("border-[#C9A227]/40", "border-silver/40"),
    ("border-[#C9A227]", "border-silver"),
    ("ring-[#C9A227]", "ring-silver"),
    ("focus-visible:ring-[#C9A227]", "focus-visible:ring-silver"),
    ("hover:text-[#C9A227]", "hover:text-silver"),
    ("hover:bg-[#C9A227]", "hover:bg-silver"),
    ("after:bg-[#C9A227]", "after:bg-silver"),
    # ---- beige section backgrounds ----
    ("bg-[#EFE6D8]/60", "bg-canvas-alt/60"),
    ("bg-[#EFE6D8]/50", "bg-canvas-alt/50"),
    ("bg-[#EFE6D8]/40", "bg-canvas-alt/40"),
    ("bg-[#EFE6D8]", "bg-canvas-alt"),
    ("border-[#EFE6D8]/60", "border-line/60"),
    ("border-[#EFE6D8]", "border-line"),
    ("text-[#EFE6D8]", "text-platinum-200"),
    ("hover:bg-[#EFE6D8]", "hover:bg-canvas-alt"),
    # ---- beige-dark borders & fills ----
    ("border-[#DFD3BF]", "border-line"),
    ("bg-[#DFD3BF]", "bg-line-strong"),
    ("hover:bg-[#DFD3BF]", "hover:bg-line-strong"),
    ("ring-[#DFD3BF]", "ring-line"),
    # ---- WhatsApp brand green ----
    ("hover:bg-[#1EBE5A]", "hover:bg-whatsapp-hover"),
    ("bg-[#25D366]", "bg-whatsapp"),
    ("ring-[#25D366]", "ring-whatsapp"),
    # ---- semantic danger ----
    ("text-red-800", "text-danger"),
]


def main() -> int:
    src = SRC.read_text(encoding="utf-8")
    counts = {}
    for old, new in REPLACEMENTS:
        n = src.count(old)
        if n:
            src = src.replace(old, new)
            counts[old] = n
    SRC.write_text(src, encoding="utf-8")

    total = sum(counts.values())
    for old, new in REPLACEMENTS:
        if old in counts:
            print(f"  {counts[old]:>4}x  {old:<28} -> {new}")

    leftover = [
        h
        for h in ("#FAF7F2", "#6B1E2B", "#501520", "#C9A227", "#2B2420", "#EFE6D8", "#DFD3BF")
        if h in src
    ]
    print(f"\n{total} replacements applied.")
    print(f"remaining raw hex in class strings: {leftover or 'none'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
