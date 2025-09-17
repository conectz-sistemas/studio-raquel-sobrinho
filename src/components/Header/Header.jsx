import Logo from "../UI/Logo.jsx";
import CTAButton from "../UI/CTAButton.jsx";
import useScrollSpy from "../../hooks/useScrollSpy.js";

export default function Header() {
  const active = useScrollSpy(["servicos", "portfolio", "sobre", "contato"]);

  const linkBase = "pb-1 transition-colors border-b-2 border-transparent hover:text-primary";
  const linkActive = "text-primary border-accent";

  const cls = (id) => `${linkBase} ${active === id ? linkActive : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-accent/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <Logo size={28} />
          <span className="font-display text-lg tracking-wide text-primary">
            Studio Raquel Sobrinho
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className={cls("servicos")}>Serviços</a>
          <a href="#portfolio" className={cls("portfolio")}>Portfólio</a>
          <a href="#sobre" className={cls("sobre")}>Sobre</a>
          <a href="#contato" className={cls("contato")}>Contato</a>
        </nav>

        <CTAButton className="ml-4 bg-accent text-bg hover:bg-accent/90">
          Agendar
        </CTAButton>
      </div>
    </header>
  );
}
