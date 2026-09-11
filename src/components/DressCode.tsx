import { weddingConfig } from "../config/weddingConfig";
import { Reveal } from "./Reveal";

export function DressCode() {
  const { style, message, colorsToAvoid } = weddingConfig.dressCode;

  return (
    <section id="dress-code" className="relative py-20 sm:py-28 px-6 bg-paper">
      <div className="max-w-content mx-auto text-center">
        <Reveal>
          <p className="section-label">Dress code</p>
          <h2 className="section-title mt-3">{style}</h2>
          <p className="mt-4 max-w-md mx-auto font-serif text-lg text-ink/75">{message}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <p className="section-label">Colores a evitar</p>
            <p className="mt-2 max-w-sm mx-auto font-sans text-sm text-ink/60">
              Son los colores de nuestra estética para ese día — ¡los reservamos para nosotros!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-9">
              {colorsToAvoid.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-2.5">
                  <span
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-ink/10 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs sm:text-sm font-sans text-ink/70">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
