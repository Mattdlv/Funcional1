import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type BotanicalVariant = "eucalyptus" | "lavender" | "sprig" | "leaf-pair";

interface BotanicalProps {
  variant: BotanicalVariant;
  className?: string;
  flip?: boolean;
}

/**
 * Ilustraciones lineales botánicas en SVG (livianas, sin imágenes externas).
 * Cada variante es distinta para evitar repetir siempre el mismo dibujo.
 * Un movimiento sutil tipo "mecido por el viento" se aplica vía CSS,
 * desactivado si el usuario prefiere reducir el movimiento.
 */
export function Botanical({ variant, className = "", flip = false }: BotanicalProps) {
  const reduced = usePrefersReducedMotion();
  const animClass = reduced ? "" : "animate-sway";

  const style = flip ? { transform: "scaleX(-1)" } : undefined;

  return (
    <div className={`${className} ${animClass} pointer-events-none select-none`} style={style} aria-hidden="true">
      {variant === "eucalyptus" && <EucalyptusSvg />}
      {variant === "lavender" && <LavenderSvg />}
      {variant === "sprig" && <SprigSvg />}
      {variant === "leaf-pair" && <LeafPairSvg />}
    </div>
  );
}

function EucalyptusSvg() {
  return (
    <svg viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M60 218C60 218 56 160 60 120C64 80 60 20 60 4" stroke="#7C8358" strokeWidth="1.4" />
      {[
        [40, 190, 16],
        [82, 175, -16],
        [38, 150, 14],
        [84, 132, -13],
        [40, 108, 15],
        [82, 88, -14],
        [42, 64, 13],
        [78, 46, -12],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx={Math.abs(r)}
          ry={Math.abs(r) * 0.6}
          transform={`rotate(${r > 0 ? -25 : 25} ${cx} ${cy})`}
          fill="#93A37E"
          opacity={0.8}
        />
      ))}
    </svg>
  );
}

function LavenderSvg() {
  return (
    <svg viewBox="0 0 60 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M30 218V60" stroke="#7C8358" strokeWidth="1.3" />
      <path d="M30 150C30 150 18 140 14 128" stroke="#7C8358" strokeWidth="1" />
      <path d="M30 170C30 170 42 160 46 148" stroke="#7C8358" strokeWidth="1" />
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} cx={30 + (i % 2 === 0 ? -4 : 4)} cy={58 - i * 8} r={4.5} fill="#A897BF" opacity={0.75} />
      ))}
    </svg>
  );
}

function SprigSvg() {
  return (
    <svg viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M4 70C40 60 80 55 136 20" stroke="#9C7F5F" strokeWidth="1.2" />
      {[10, 30, 50, 70, 90, 110].map((x, i) => (
        <ellipse
          key={i}
          cx={x}
          cy={68 - i * 9}
          rx={10}
          ry={5}
          transform={`rotate(${-20 - i * 3} ${x} ${68 - i * 9})`}
          fill="#BFCBB0"
          opacity={0.8}
        />
      ))}
      <circle cx="128" cy="18" r="3.5" fill="#C9AD77" />
    </svg>
  );
}

function LeafPairSvg() {
  return (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M4 50C30 20 60 20 96 6" stroke="#7C8358" strokeWidth="1.2" />
      <ellipse cx="30" cy="38" rx="13" ry="7" transform="rotate(-25 30 38)" fill="#AEB587" opacity={0.75} />
      <ellipse cx="58" cy="24" rx="13" ry="7" transform="rotate(-15 58 24)" fill="#93A37E" opacity={0.75} />
      <ellipse cx="82" cy="12" rx="10" ry="5.5" transform="rotate(-10 82 12)" fill="#BFCBB0" opacity={0.75} />
    </svg>
  );
}
