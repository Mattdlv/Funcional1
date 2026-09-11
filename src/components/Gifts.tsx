import { useState } from "react";
import { Copy, Check, MessageCircle, Gift } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { copyToClipboard } from "../utils/clipboard";
import { Reveal } from "./Reveal";
import { Botanical } from "./Botanical";

export function Gifts() {
  const { alias, whatsappUrl } = weddingConfig.gifts;
  const [copied, setCopied] = useState(false);
  const hasWhatsapp = Boolean(whatsappUrl) && whatsappUrl !== "[COMPLETAR]";

  const handleCopy = async () => {
    if (!alias || alias === "[COMPLETAR]") return;
    const success = await copyToClipboard(alias);
    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="regalos" className="relative py-20 sm:py-28 px-6 bg-ivory overflow-hidden">
      <Botanical variant="leaf-pair" className="absolute top-6 left-2 w-24 h-14 opacity-50" />

      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <Gift size={32} strokeWidth={1.2} className="mx-auto text-olive-500 mb-4" />
          <p className="section-label">¿Y el regalo?</p>
          <h2 className="section-title mt-3">Lo importante es compartir este día</h2>
          <p className="mt-4 font-serif text-lg text-ink/75">
            Pero si además quieren hacernos un regalo, pueden hacerlo a través
            del siguiente alias:
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card mt-8 p-6 flex items-center justify-between gap-4">
            <div className="text-left min-w-0">
              <p className="text-[11px] font-sans tracking-widest2 uppercase text-olive-600">
                Alias de regalos
              </p>
              <p className="mt-0.5 font-serif text-lg text-ink break-words">{alias}</p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!alias || alias === "[COMPLETAR]"}
              className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full border border-olive-400/50 px-3.5 py-2 text-xs font-sans text-olive-700 disabled:opacity-40 active:scale-95 transition-transform min-h-[40px]"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copiado ✓" : "Copiar alias"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-9 font-serif text-lg text-ink/75">¿No sabés qué regalarnos?</p>
          <p className="font-serif text-lg text-ink/75">
            Escribinos por privado y te contamos algunas ideas.
          </p>
          <a
            href={hasWhatsapp ? whatsappUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasWhatsapp}
            className={`btn-primary mt-6 ${!hasWhatsapp ? "pointer-events-none opacity-50" : ""}`}
          >
            <MessageCircle size={17} />
            Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
