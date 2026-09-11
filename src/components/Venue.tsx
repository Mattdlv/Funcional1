import { MapPin, Navigation as NavigationIcon } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { Reveal } from "./Reveal";
import { Botanical } from "./Botanical";

export function Venue() {
  const { name, address, cityProvince, mapUrl } = weddingConfig.venue;
  const hasMapUrl = Boolean(mapUrl) && mapUrl !== "[COMPLETAR]";

  return (
    <section id="ubicacion" className="relative py-20 sm:py-28 px-6 bg-ivory overflow-hidden">
      <Botanical variant="sprig" className="absolute top-4 right-2 w-28 sm:w-36 opacity-40" />

      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <p className="section-label">Nos encontramos en</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">{name}</h2>
          <p className="mt-3 font-serif text-lg text-ink/75">{address}</p>
          <p className="font-serif text-lg text-ink/75">{cityProvince}</p>

          <a
            href={hasMapUrl ? mapUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasMapUrl}
            className={`btn-primary mt-8 ${!hasMapUrl ? "pointer-events-none opacity-50" : ""}`}
          >
            <NavigationIcon size={17} />
            Cómo llegar
          </a>
          {!hasMapUrl && (
            <p className="mt-2 text-xs text-earth-600/80 font-sans">
              Ubicación por confirmar — se completará VENUE_MAP_URL.
            </p>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card relative aspect-[4/3] flex flex-col items-center justify-center gap-3 p-8 text-center">
            <MapPin size={40} strokeWidth={1.2} className="text-olive-500" />
            <p className="font-serif italic text-lg text-ink/70">
              {hasMapUrl ? "Tocá el botón para ver cómo llegar" : "El mapa se mostrará aquí una vez confirmado el lugar"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
