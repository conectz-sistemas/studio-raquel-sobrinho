import { motion } from "framer-motion";
import Section from "../components/UI/Section.jsx";
import { Reveal } from "../components/effects/Reveal.jsx";
import SectionTitle from "../components/effects/SectionTitle.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import FinalCTA from "../components/CTA/FinalCTA.jsx";
import Contato from "../components/Contato/Contato.jsx";

/** Container variants para atrasos escalonados (stagger) */
const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // intervalo entre itens
      delayChildren: 0.05,   // atraso inicial do primeiro
    },
  },
};

/** Card variants: tilt leve + fade/slide ao entrar */
const cardEnter = {
  hidden: { opacity: 0, y: 24, rotateZ: 1.5, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ServiceCard({ title, desc }) {
  return (
    <motion.div
      variants={cardEnter}
      className="group rounded-xl2 border border-accent/30 bg-white p-6 shadow-soft transition
                 hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="font-display text-xl text-primary">{title}</h3>
      <p className="mt-2 opacity-90">{desc}</p>
      <div className="mt-4 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-24" />
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* 1) SERVIÇOS — com título animado + grid com stagger */}
      <Section id="servicos" variant="white">
        <SectionTitle>Serviços</SectionTitle>
        <Reveal delay={0.06}>
          <p className="mt-2 max-w-2xl opacity-90">
            Penteados para eventos, cortes, finalizações e cuidados capilares.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ServiceCard
            title="Penteado Evento"
            desc="Construções modernas e clássicas, fixação confortável e acabamento impecável."
          />
          <ServiceCard
            title="Noiva & Madrinhas"
            desc="Teste, consultoria de estilo e execução no grande dia com foco em durabilidade."
          />
          <ServiceCard
            title="Corte & Finalização"
            desc="Cortes personalizados e finalização que valoriza o caimento natural."
          />
        </motion.div>
      </Section>

      {/* 2) PORTFÓLIO */}
      <Portfolio />

      {/* 3) DEPOIMENTOS */}
      <Testimonials />

      {/* 4) SOBRE — também com título animado e leve stagger no bloco */}
      <Section id="sobre" variant="light">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <SectionTitle>Sobre o Studio</SectionTitle>
          <motion.div
            variants={cardEnter}
            className="mt-4 rounded-xl2 border border-accent/20 bg-white/75 p-8 shadow-soft backdrop-blur-sm"
          >
            <p className="max-w-3xl opacity-90">
              Atendimento personalizado, produtos premium e um espaço pensado para você se sentir única.
              Nossa missão é realçar sua beleza com técnica, sensibilidade estética e cuidado em cada detalhe.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* 5) CONTATO */}
      <Contato />

      {/* 6) CTA FINAL */}
      <FinalCTA />
    </>
  );
}
