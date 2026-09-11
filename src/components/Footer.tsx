import { weddingConfig } from "../config/weddingConfig";
import { Botanical } from "./Botanical";

export function Footer() {
  const { bride, groom } = weddingConfig.couple;

  return (
    <footer className="relative bg-olive-700 text-ivory pt-16 pb-28 md:pb-16 px-6 text-center overflow-hidden">
      <Botanical variant="sprig" className="absolute -top-2 left-1/2 -translate-x-1/2 w-40 opacity-20" />

      <p className="font-display text-3xl sm:text-4xl">
        {bride} <span className="text-gold-400 italic">&amp;</span> {groom}
      </p>
      <p className="mt-2 font-sans text-sm tracking-[0.4em] uppercase text-sage-100/80">04 · 12 · 2026</p>
      <p className="mt-6 font-serif italic text-lg text-ivory/85">
        Gracias por ser parte de nuestra historia.
      </p>
      <p className="mt-8 font-sans text-xs tracking-widest text-ivory/50">
        Con amor, {bride} &amp; {groom}.
      </p>
    </footer>
  );
}
