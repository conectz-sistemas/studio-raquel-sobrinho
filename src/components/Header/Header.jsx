// src/components/Header/Header.jsx
import { useEffect, useRef, useState } from "react";
import Logo from "../UI/Logo.jsx";
import useScrollSpy from "../../hooks/useScrollSpy.js";

function NavLink({ href, active, theme, children, ...rest }) {
  const isLightOnDark = theme === "lightOnDark"; // header sobre hero (escuro)
  const textBase = isLightOnDark ? "text-white" : "text-text";

  const base =
    "relative inline-block px-1 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40";
  const cls = [
    base,
    active
      ? `${isLightOnDark ? "text-white/95" : "text-primary"} ${isLightOnDark ? "bg-white/10" : "bg-accent/10"}`
      : `${textBase} ${isLightOnDark ? "hover:text-white hover:bg-white/10" : "hover:text-primary hover:bg-accent/10"}`,
    "group",
  ].join(" ");

  // underline + feixe adaptados ao tema
  const underlineColor = isLightOnDark ? "bg-white/90" : "bg-accent";
  const beamStyle = {
    background: isLightOnDark
      ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)"
      : "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,240,210,0.9) 40%, rgba(207,166,107,1) 60%, rgba(255,255,255,0) 100%)",
    filter: "blur(0.3px)",
  };

  return (
    <a href={href} className={cls} aria-current={active ? "page" : undefined} {...rest}>
      <span className="relative inline-block overflow-hidden">
        <span className="relative z-10">{children}</span>
        <span
          className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-0 ${underlineColor}
                      transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full ${active ? "w-full" : ""}`}
        />
        <span
          className="pointer-events-none absolute -bottom-[3px] left-0 h-[4px] w-28 opacity-0
                     group-hover:opacity-100 group-focus-visible:opacity-100 animate-beam"
          style={beamStyle}
        />
      </span>
    </a>
  );
}

export default function Header() {
  const active = useScrollSpy(["servicos", "portfolio", "sobre", "contato"]);
  const headerRef = useRef(null);
  const [theme, setTheme] = useState("darkOnLight"); // 👈 começa PRETO (header claro)
  const [heroBounds, setHeroBounds] = useState({ top: 0, bottom: 0 });
  const SCROLL_TRIGGER = 6; // só troca para branco se rolar um pouquinho

  // calcula bounds do hero e aplica tema conforme scroll
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const computeBounds = () => {
      const rect = hero.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const bottom = top + rect.height;
      setHeroBounds({ top, bottom });
      applyTheme(top, bottom); // aplica imediatamente
    };

    const applyTheme = (top = heroBounds.top, bottom = heroBounds.bottom) => {
      const headerEl = headerRef.current;
      if (!headerEl) return;
      const headerH = headerEl.offsetHeight || 64;
      const y = window.scrollY + headerH;

      const overHero = y >= top && y <= bottom;
      const scrolled = window.scrollY > SCROLL_TRIGGER;

      // só usa “branco” quando estiver sobre o hero E já tiver rolado um pouco
      setTheme(overHero && scrolled ? "lightOnDark" : "darkOnLight");
    };

    computeBounds();
    window.addEventListener("resize", computeBounds, { passive: true });
    window.addEventListener("scroll", () => applyTheme(), { passive: true });
    return () => {
      window.removeEventListener("resize", computeBounds);
      window.removeEventListener("scroll", () => applyTheme());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroBounds.top, heroBounds.bottom]);

  const isLightOnDark = theme === "lightOnDark";
  const Link = ({ href, id, children, ...rest }) => (
    <NavLink href={href} active={active === id} theme={theme} {...rest}>
      {children}
    </NavLink>
  );

  const whatsapp =
    "https://wa.me/556198321749?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Studio%20Raquel%20Sobrinho.";

  return (
    <header
      ref={headerRef}
      className={[
        "sticky top-0 z-50 border-b backdrop-blur-sm transition-colors",
        isLightOnDark ? "bg-transparent border-white/10" : "bg-bg/80 border-accent/20",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <Logo size={28} />
          <span className={`font-display text-lg tracking-wide ${isLightOnDark ? "text-white" : "text-primary"}`}>
            Instituto de Beleza Raquel Sobrinho
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicos" id="servicos">Serviços</Link>
          <Link href="#portfolio" id="portfolio">Portfólio</Link>
          <Link href="#sobre" id="sobre">Sobre</Link>
          <Link href="#contato" id="contato">Contato</Link>

          {/* Agendar seguindo EXATAMENTE o mesmo padrão dos links */}
          <Link
            href={whatsapp}
            id="agendar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar via WhatsApp"
          >
            Agendar
          </Link>
        </nav>
      </div>
    </header>
  );
}
