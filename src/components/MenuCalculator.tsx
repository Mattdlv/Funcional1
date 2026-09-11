import { useMemo, useState, type ChangeEvent } from "react";
import { Copy, Check, Minus, Plus } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { formatCurrency } from "../utils/format";
import { copyToClipboard } from "../utils/clipboard";
import { Reveal } from "./Reveal";

export function MenuCalculator() {
  const menus = weddingConfig.menus;
  const [menuId, setMenuId] = useState(menus[0]?.id ?? "");
  const [guestsInput, setGuestsInput] = useState("2");
  const [copied, setCopied] = useState(false);

  const selectedMenu = useMemo(() => menus.find((m) => m.id === menuId) ?? menus[0], [menuId, menus]);

  const parsedGuests = Number(guestsInput);
  const isValidGuests = Number.isInteger(parsedGuests) && parsedGuests > 0;
  const guests = isValidGuests ? parsedGuests : 0;

  const total = selectedMenu ? selectedMenu.price * guests : 0;

  const adjustGuests = (delta: number) => {
    const current = isValidGuests ? parsedGuests : 0;
    const next = Math.max(1, current + delta);
    setGuestsInput(String(next));
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(formatCurrency(total));
    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-olive-50/60">
      <div className="max-w-md mx-auto">
        <Reveal className="text-center">
          <p className="section-label">Calculadora</p>
          <h2 className="section-title mt-3">¿Cuánto tengo que abonar?</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card mt-10 p-7 sm:p-8">
            <label className="block text-xs font-sans tracking-widest2 uppercase text-olive-600 mb-2">
              Menú
            </label>
            <select
              value={menuId}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setMenuId(e.target.value)}
              className="w-full rounded-xl border border-olive-300/60 bg-ivory px-4 py-3.5 font-sans text-base text-ink focus:outline-none focus:ring-2 focus:ring-olive-500/40 min-h-[48px]"
            >
              {menus.map((menu) => (
                <option key={menu.id} value={menu.id}>
                  {menu.name}
                </option>
              ))}
            </select>

            <label className="block text-xs font-sans tracking-widest2 uppercase text-olive-600 mt-6 mb-2">
              Cantidad de personas
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => adjustGuests(-1)}
                aria-label="Restar persona"
                className="w-11 h-11 flex-shrink-0 rounded-full border border-olive-300 flex items-center justify-center text-olive-700 active:scale-95 transition-transform"
              >
                <Minus size={17} />
              </button>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                step={1}
                value={guestsInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setGuestsInput(e.target.value)}
                className="w-full text-center rounded-xl border border-olive-300/60 bg-ivory px-4 py-3.5 font-sans text-lg text-ink focus:outline-none focus:ring-2 focus:ring-olive-500/40 min-h-[48px]"
                aria-label="Cantidad de personas"
              />
              <button
                type="button"
                onClick={() => adjustGuests(1)}
                aria-label="Sumar persona"
                className="w-11 h-11 flex-shrink-0 rounded-full border border-olive-300 flex items-center justify-center text-olive-700 active:scale-95 transition-transform"
              >
                <Plus size={17} />
              </button>
            </div>
            {!isValidGuests && (
              <p className="mt-2 text-xs text-red-700/80 font-sans">
                Ingresá un número entero mayor a 0.
              </p>
            )}

            <div className="mt-7 pt-6 border-t border-olive-300/30 space-y-1.5">
              <div className="flex justify-between text-sm font-sans text-ink/65">
                <span>Precio por persona</span>
                <span>{selectedMenu ? formatCurrency(selectedMenu.price) : "—"}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-sm font-sans tracking-widest2 uppercase text-olive-700">Total</span>
                <span className="font-display text-3xl text-ink">{formatCurrency(total)}</span>
              </div>
            </div>

            <button type="button" onClick={handleCopy} className="btn-secondary w-full mt-6">
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copiado ✓" : "Copiar total"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
