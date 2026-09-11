import { Reveal } from "./Reveal";
import { Botanical } from "./Botanical";

export function Welcome() {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <div className="flex justify-center mb-6">
            <Botanical variant="leaf-pair" className="w-24 h-16" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif text-xl sm:text-2xl leading-relaxed text-ink/90">
            Después de tanto imaginar este día, finalmente llegó el momento de
            compartirlo con ustedes.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 font-serif text-xl sm:text-2xl leading-relaxed text-ink/90">
            Gracias por acompañarnos en uno de los días más importantes de
            nuestras vidas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
