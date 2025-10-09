import CTAButton from "../UI/CTAButton.jsx";
import Section from "../UI/Section.jsx";

export default function FinalCTA() {
  const whatsapp =
    "https://wa.me/556198321749?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Studio%20Raquel%20Sobrinho.";

  return (
    // removi o pb extra; o botão agora fica dentro do quadro
    <Section container={false} variant="white" id="agende" className="py-0">
      <div
        className="mx-auto max-w-6xl rounded-xl2 px-4 py-16 md:py-24 text-white shadow-soft"
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

          {/* Botão dentro do retângulo */}
          <div className="mt-10 flex justify-center">
            <CTAButton
              href={whatsapp}
              aria-label="Agendar via WhatsApp"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold
                         text-white shadow-lg ring-1 ring-black/5
                         bg-[#25D366] transition transform-gpu hover:brightness-105 hover:-translate-y-0.5
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]/50 focus:ring-offset-transparent"
            >
              Agendar via WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
