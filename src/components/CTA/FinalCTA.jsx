import CTAButton from "../UI/CTAButton.jsx";
import Section from "../UI/Section.jsx";

export default function FinalCTA() {
  return (
    <Section container={false} variant="white" id="agende" className="py-0">
      <div
        className="mx-auto max-w-6xl rounded-xl2 px-4 py-14 md:py-20 text-white shadow-soft"
        style={{
          background:
            "linear-gradient(135deg, rgba(138,21,56,0.95) 0%, rgba(207,166,107,0.85) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Reserve seu horário e descubra sua melhor versão
          </h2>
          <p className="mt-3 text-white/90">
            Atendimento personalizado, técnicas profissionais e acabamento impecável.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton className="bg-white text-primary hover:bg-white/90">
              Agendar via WhatsApp
            </CTAButton>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl2 border border-white/80 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Ver informações de contato
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
