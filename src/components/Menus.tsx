import { Check } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { formatCurrency } from "../utils/format";
import { Reveal } from "./Reveal";

export function Menus() {
  return (
    <section id="menu" className="relative py-20 sm:py-28 px-6 bg-ivory">
      <div className="max-w-content mx-auto">
        <Reveal className="text-center">
          <p className="section-label">Menú</p>
          <h2 className="section-title mt-3">¿Qué menú elegís?</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weddingConfig.menus.map((menu, index) => {
            const hasPrice = menu.price > 0;
            const isPlaceholder = menu.name === "[COMPLETAR]";
            return (
              <Reveal key={menu.id} delay={index * 0.1}>
                <div className="card h-full flex flex-col p-7">
                  <h3 className="font-display text-2xl text-ink">{menu.name}</h3>
                  <p className="mt-1 font-display text-xl text-earth-600">
                    {hasPrice ? formatCurrency(menu.price) : "[COMPLETAR]"}
                  </p>
                  <p className="mt-3 font-serif text-base text-ink/70">{menu.description}</p>

                  <p className="mt-5 text-xs font-sans tracking-widest2 uppercase text-olive-600">
                    Incluye
                  </p>
                  <ul className="mt-3 space-y-2 flex-1">
                    {menu.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-sans text-ink/75">
                        <Check size={16} className="mt-0.5 flex-shrink-0 text-olive-500" strokeWidth={1.6} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {isPlaceholder && (
                    <p className="mt-4 text-[11px] text-earth-600/70 font-sans">
                      Datos por completar en weddingConfig.ts
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
