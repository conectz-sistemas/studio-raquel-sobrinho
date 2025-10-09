export default function Footer() {
  return (
    <footer className="bg-primary text-bg">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <div className="opacity-90">
          © {new Date().getFullYear()} Instituto de Beleza Raquel Sobrinho — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
