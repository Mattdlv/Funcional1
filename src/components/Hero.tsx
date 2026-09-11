import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { Botanical } from "./Botanical";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const { bride, groom } = weddingConfig.couple;

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden paper-texture bg-ivory px-6 text-center"
    >
      <Botanical
        variant="eucalyptus"
        className="absolute -left-4 top-0 w-28 sm:w-40 h-[70%] opacity-90"
      />
      <Botanical
        variant="eucalyptus"
        flip
        className="absolute -right-4 top-0 w-28 sm:w-40 h-[70%] opacity-90"
      />
      <Botanical
        variant="lavender"
        className="absolute left-2 bottom-0 w-10 sm:w-14 h-40 opacity-70 hidden sm:block"
      />
      <Botanical
        variant="lavender"
        flip
        className="absolute right-2 bottom-0 w-10 sm:w-14 h-40 opacity-70 hidden sm:block"
      />

      <motion.p
        initial={reduced ? undefined : { opacity: 0, y: -10 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="section-label mb-6"
      >
        Nos casamos
      </motion.p>

      <motion.h1
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[15vw] leading-[0.95] sm:text-7xl md:text-8xl text-olive-700"
      >
        {bride} <span className="text-earth-500 italic">&amp;</span> {groom}
      </motion.h1>

      <motion.p
        initial={reduced ? undefined : { opacity: 0, y: 12 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="mt-6 font-sans text-sm sm:text-base tracking-[0.4em] uppercase text-earth-600"
      >
        04 · 12 · 2026
      </motion.p>

      <motion.p
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8 max-w-md font-serif italic text-lg sm:text-xl text-ink/80"
      >
        Estamos a punto de comenzar nuestro para siempre.
      </motion.p>

      <motion.a
        href="#countdown"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-10 flex flex-col items-center gap-2 text-olive-600"
      >
        <span className="text-[11px] font-sans tracking-widest2 uppercase">Deslizá para descubrir</span>
        <ChevronDown size={18} className={reduced ? "" : "animate-bounce"} style={{ animationDuration: "2s" }} />
      </motion.a>
    </section>
  );
}
