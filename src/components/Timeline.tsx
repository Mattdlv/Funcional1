import { Gem, GlassWater, Music4, CakeSlice } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { Reveal } from "./Reveal";

const ICONS = {
  rings: Gem,
  glass: GlassWater,
  music: Music4,
  cake: CakeSlice,
} as const;

export function Timeline() {
  return (
    <section id="cronograma" className="relative py-20 sm:py-28 px-6 bg-paper">
      <div className="max-w-2xl mx-auto">
        <Reveal className="text-center">
          <p className="section-label">El gran día</p>
          <h2 className="section-title mt-3">Cronograma de la noche</h2>
        </Reveal>

        <ol className="mt-14 relative">
          <div
            className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-olive-300/60"
            aria-hidden="true"
          />

          {weddingConfig.schedule.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.12}>
                <li className="relative flex gap-5 sm:gap-6 pb-10 last:pb-0">
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ivory border border-olive-300 flex items-center justify-center shadow-sm">
                    <Icon size={22} strokeWidth={1.4} className="text-olive-600" />
                  </div>
                  <div className="pt-1.5">
                    <p className="text-xs sm:text-sm font-sans tracking-widest2 uppercase text-earth-600">
                      {item.time}
                    </p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl text-ink">{item.title}</h3>
                    <p className="mt-1 font-serif text-base sm:text-lg text-ink/70">{item.description}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
