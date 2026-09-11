import { useEffect, useState } from "react";
import { MapPin, UtensilsCrossed, Home, Wallet, Menu, X } from "lucide-react";

const DESKTOP_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#menu", label: "Menú" },
  { href: "#pago", label: "Pago" },
  { href: "#dress-code", label: "Dress Code" },
  { href: "#regalos", label: "Regalos" },
];

const MOBILE_QUICK_LINKS = [
  { href: "#inicio", label: "Inicio", Icon: Home },
  { href: "#ubicacion", label: "Lugar", Icon: MapPin },
  { href: "#menu", label: "Menú", Icon: UtensilsCrossed },
  { href: "#pago", label: "Pago", Icon: Wallet },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navegación superior (desktop + botón de menú mobile) */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-ivory/90 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(76,82,51,0.2)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" className="font-display text-lg sm:text-xl text-olive-700 tracking-wide">
            F <span className="text-earth-500">&amp;</span> M
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {DESKTOP_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans tracking-wide text-ink/80 hover:text-olive-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-olive-700"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Menú mobile a pantalla completa */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-ivory/98 backdrop-blur-sm flex flex-col items-center justify-center gap-7 md:hidden">
          {DESKTOP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-olive-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Barra inferior flotante con accesos rápidos, solo mobile */}
      <nav
        aria-label="Accesos rápidos"
        className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-ivory/95 backdrop-blur-md border-t border-earth-400/20 pb-[env(safe-area-inset-bottom)]"
      >
        <ul className="grid grid-cols-4">
          {MOBILE_QUICK_LINKS.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="flex flex-col items-center justify-center gap-1 py-2.5 text-olive-700 min-h-[56px]"
              >
                <Icon size={19} strokeWidth={1.6} />
                <span className="text-[11px] font-sans tracking-wide">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
