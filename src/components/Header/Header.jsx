import Logo from "../UI/Logo.jsx";
import CTAButton from "../UI/CTAButton.jsx";

export default function Header() {
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
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>

        <CTAButton className="ml-4 bg-accent text-bg hover:bg-accent/90">
          Agendar
        </CTAButton>
      </div>
    </header>
  );
}
