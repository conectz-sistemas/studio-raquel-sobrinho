import Logo from "../UI/Logo.jsx";
import CTAButton from "../UI/CTAButton.jsx";
import useScrollSpy from "../../hooks/useScrollSpy.js";

function NavLink({ href, active, children }) {  // ← aceita children
  const base =
    "relative inline-block px-1 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 text-text";
  const cls = `${base} ${active ? "text-primary bg-accent/10" : "hover:text-primary"}`;

  return (
    <a href={href} className={`group ${cls}`} aria-current={active ? "page" : undefined}>
      <span className="relative inline-block overflow-hidden">
        {/* texto visível */}
        <span className="relative z-10">{children}</span> {/* ← renderiza children */}

        {/* underline base (dourado) */}
        <span
          className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-0 bg-accent transition-[width] duration-300
                      group-hover:w-full group-focus-visible:w-full ${active ? "w-full" : ""}`}
        />

        {/* feixe dourado (pincel animado) */}
        <span
          className="pointer-events-none absolute -bottom-[3px] left-0 h-[5px] w-36 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 animate-beam"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,240,210,0.9) 40%, rgba(207,166,107,1) 60%, rgba(255,255,255,0) 100%)",
            filter: "blur(0.3px)",
          }}
        />
      </span>
    </a>
  );
}

export default function Header() {
  const active = useScrollSpy(["servicos", "portfolio", "sobre", "contato"]);

  const Link = ({ href, id, children }) => (
    <NavLink href={href} active={active === id}>{children}</NavLink> // ← sem span extra
  );

  const whatsapp =
    "https://wa.me/556198321749?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Studio%20Raquel%20Sobrinho.";

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-accent/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <Logo size={28} />
          <span className="font-display text-lg tracking-wide text-primary">
            Studio Raquel Sobrinho
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicos" id="servicos">Serviços</Link>
          <Link href="#portfolio" id="portfolio">Portfólio</Link>
          <Link href="#sobre" id="sobre">Sobre</Link>
          <Link href="#contato" id="contato">Contato</Link>
        </nav>

        {/* Agendar com o mesmo efeito (underline/feixe) */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative ml-4 inline-flex items-center rounded-xl2 bg-accent px-5 py-2 font-semibold text-bg shadow-soft transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          <span className="relative inline-block overflow-hidden">
            <span className="relative z-10">Agendar</span>
            <span className="pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-0 bg-white/90 transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full" />
            <span
              className="pointer-events-none absolute -bottom-[3px] left-0 h-[4px] w-24 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 animate-beam"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)",
                filter: "blur(0.3px)",
              }}
            />
          </span>
        </a>
      </div>
    </header>
  );
}
