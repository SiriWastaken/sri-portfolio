import type { TechIconData } from "@/assets/icons/types";

/** True when the brand colour is too dark to read as a hover colour. */
function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
}

/**
 * Official brand mark (Simple Icons, or vendored in src/assets/icons), drawn in the current text colour.
 * The parent should be a `group`; on hover the icon takes its brand colour.
 */
export function TechIcon({ icon, className = "size-6" }: { icon: TechIconData; className?: string }) {
  const brand = isNearBlack(icon.hex) ? undefined : `#${icon.hex}`;
  return (
    <svg
      viewBox={icon.viewBox ?? "0 0 24 24"}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={`shrink-0 transition-colors duration-200 ${brand ? "group-hover:text-(--brand)" : ""} ${className}`}
      style={brand ? ({ "--brand": brand } as React.CSSProperties) : undefined}
    >
      <path d={icon.path} />
    </svg>
  );
}
