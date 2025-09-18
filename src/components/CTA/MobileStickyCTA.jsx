import CTAButton from "../UI/CTAButton.jsx";

export default function MobileStickyCTA() {
  const whatsapp =
    "https://wa.me/556198321749?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Studio%20Raquel%20Sobrinho.";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden="false"
    >
      <div
        className="mx-auto max-w-6xl px-4 pb-3"
      >
        <div
          className="rounded-t-xl2 border border-accent/30 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(0,0,0,.12)] backdrop-blur"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm">
              <div className="font-display text-primary">Pronta para o novo visual?</div>
              <div className="text-text/70">Fale com a Raquel e agende agora.</div>
            </div>
            <CTAButton
              href={whatsapp}
              className="bg-accent text-bg hover:bg-accent/90 px-4 py-2"
            >
              WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
