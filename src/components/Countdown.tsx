import { useMemo } from "react";
import { weddingConfig } from "../config/weddingConfig";
import { argentinaDateTimeToUtc } from "../utils/datetime";
import { useCountdown } from "../hooks/useCountdown";
import { Reveal } from "./Reveal";
import { Botanical } from "./Botanical";

const UNITS: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

export function Countdown() {
  const target = useMemo(
    () => argentinaDateTimeToUtc(weddingConfig.date, weddingConfig.ceremonyTime),
    []
  );
  const countdown = useCountdown(target);

  return (
    <section id="countdown" className="relative py-20 sm:py-28 px-6 bg-olive-600 overflow-hidden">
      <Botanical variant="sprig" className="absolute -top-2 -left-4 w-32 sm:w-44 opacity-25" />
      <Botanical variant="sprig" flip className="absolute -bottom-2 -right-4 w-32 sm:w-44 opacity-25" />

      <div className="relative max-w-content mx-auto text-center">
        <Reveal>
          <p className="section-label text-sage-100">Cada vez falta menos</p>
        </Reveal>

        {countdown.isPast ? (
          <Reveal delay={0.15}>
            <p className="mt-6 font-display italic text-3xl sm:text-4xl text-ivory">
              Hoy comienza nuestra historia.
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
              {UNITS.map((unit) => (
                <div
                  key={unit.key}
                  className="flex flex-col items-center justify-center w-[74px] h-[74px] sm:w-28 sm:h-28 rounded-2xl bg-ivory/10 border border-ivory/20 backdrop-blur-sm"
                >
                  <span className="font-display text-3xl sm:text-5xl text-ivory tabular-nums">
                    {String(countdown[unit.key]).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] sm:text-xs font-sans tracking-widest2 uppercase text-sage-100">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
