import { useState } from "react";
import { Copy, Check, AlertTriangle } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { formatLongDate } from "../utils/format";
import { copyToClipboard } from "../utils/clipboard";
import { Reveal } from "./Reveal";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const isPlaceholder = !value || value === "[COMPLETAR]";

  const handleCopy = async () => {
    if (isPlaceholder) return;
    const success = await copyToClipboard(value);
    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 py-3.5 border-b border-olive-300/25 last:border-0">
      <div className="min-w-0">
        <p className="text-[11px] font-sans tracking-widest2 uppercase text-olive-600">{label}</p>
        <p className="mt-0.5 font-serif text-lg text-ink break-words">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        disabled={isPlaceholder}
        aria-label={`Copiar ${label}`}
        className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full border border-olive-400/50 px-3.5 py-2 text-xs font-sans text-olive-700 disabled:opacity-40 active:scale-95 transition-transform min-h-[40px]"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copiado ✓" : "Copiar"}
      </button>
    </div>
  );
}

export function Payment() {
  const { deadline, alias, holder, cuit, bank, cbu } = weddingConfig.payment;

  return (
    <section id="pago" className="relative py-20 sm:py-28 px-6 bg-earth-700 text-ivory">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="section-label !text-earth-400">Información de pago</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Fecha límite</h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl text-gold-400">
            {formatLongDate(deadline).toUpperCase()}
          </p>
          <p className="mt-5 max-w-sm font-serif text-lg text-ivory/80">
            Para ayudarnos con la organización, les pedimos completar el pago
            antes del 31 de octubre.
          </p>

          <div className="mt-6 flex items-start gap-2.5 text-sm font-sans text-ivory/70 max-w-sm">
            <AlertTriangle size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
            <p>Antes de enviar el dinero, verificá que los datos coincidan con los mostrados aquí.</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-ivory/95 text-ink p-6 sm:p-7">
            <CopyRow label="Alias" value={alias} />
            <CopyRow label="Titular" value={holder} />
            <CopyRow label="CUIT" value={cuit} />
            <CopyRow label="Banco / billetera" value={bank} />
            <CopyRow label="CBU" value={cbu} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
