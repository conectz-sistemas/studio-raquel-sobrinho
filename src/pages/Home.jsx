import Section from "../components/UI/Section.jsx";
import { Reveal } from "../components/effects/Reveal.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import FinalCTA from "../components/CTA/FinalCTA.jsx";

function ServiceCard({ title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group rounded-xl2 border border-accent/30 bg-white p-6 shadow-soft transition
                      hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-xl text-primary">{title}</h3>
        <p className="mt-2 opacity-90">{desc}</p>

        {/* Linha decorativa animada */}
        <div className="mt-4 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-24" />
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* 1) SERVIÇOS — fundo branco */}
      <Section id="servicos" variant="white">
        <Reveal as="h2" className="font-display text-3xl relative inline-block">Serviços</Reveal>
        <Reveal delay={0.08}>
          <p className="mt-2 max-w-2xl opacity-90">
            Penteados para eventos, cortes, finalizações e cuidados capilares.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard
            title="Penteado Evento"
            desc="Construções modernas e clássicas, fixação confortável e acabamento impecável."
            delay={0.05}
          />
          <ServiceCard
            title="Noiva & Madrinhas"
            desc="Teste, consultoria de estilo e execução no grande dia com foco em durabilidade."
            delay={0.10}
          />
          <ServiceCard
            title="Corte & Finalização"
            desc="Cortes personalizados e finalização que valoriza o caimento natural."
            delay={0.15}
          />
        </div>
      </Section>
      
      {/* NOVO: Portfólio */}
      <Portfolio />

      <Testimonials />

      {/* 2) SOBRE — bloco destacado */}
      <Section id="sobre" variant="light">
        <Reveal>
          <div className="rounded-xl2 border border-accent/20 bg-white/75 p-8 shadow-soft backdrop-blur-sm">
            <h2 className="font-display text-3xl relative inline-block">Sobre o Studio</h2>
            <p className="mt-3 max-w-3xl opacity-90">
              Atendimento personalizado, produtos premium e um espaço pensado para você se sentir única.
              Nossa missão é realçar sua beleza com técnica, sensibilidade estética e cuidado em cada detalhe.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3) CONTATO — dourado translúcido */}
      <Section id="contato" variant="tinted">
        <Reveal as="h2" className="font-display text-3xl relative inline-block">Contato</Reveal>
        <Reveal delay={0.08}>
          <p className="mt-2 max-w-2xl opacity-90">
            Whatsapp, endereço e horários em breve.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-6">
            <a
              href="https://wa.me/5599999999999?text=Olá%20quero%20agendar%20um%20horário%20no%20Studio%20Raquel%20Sobrinho"
              className="inline-flex items-center justify-center rounded-xl2 bg-primary px-5 py-3 font-semibold text-white shadow-soft hover:bg-primary/90"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />

    </>
  );
}
