import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../UI/Section.jsx";

const testimonials = [
  {
    quote:
      "Meu penteado de noiva ficou impecável do começo ao fim. Atendimento carinhoso e extremamente profissional.",
    author: "Ana Luiza",
    role: "Noiva • Casamento Campo Belo",
  },
  {
    quote:
      "Fiz ondas glam para um evento. Resultado elegante, com brilho e zero frizz nas fotos.",
    author: "Marcela Ribeiro",
    role: "Convidada • Gala Beneficente",
  },
  {
    quote:
      "Consultoria certeira para o meu tipo de cabelo. Saí me sentindo confiante e leve.",
    author: "Jéssica Moraes",
    role: "Cliente • Finalização natural",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[idx];

  return (
    <Section variant="light" id="depoimentos">
      <h2 className="font-display text-3xl">Depoimentos</h2>
      <p className="mt-2 max-w-2xl opacity-90">
        Experiências reais — confiança que se conquista no detalhe.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={prev}
          className="rounded-xl2 border border-accent px-3 py-2 hover:bg-accent/10"
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-xl2 border border-accent/30 bg-white/80 p-6 shadow-soft"
            >
              <div className="text-2xl italic leading-relaxed text-primary/90">
                “{item.quote}”
              </div>
              <div className="mt-4 text-sm">
                <span className="font-semibold">{item.author}</span>
                <span className="opacity-70"> — {item.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="rounded-xl2 border border-accent px-3 py-2 hover:bg-accent/10"
          aria-label="Próximo"
        >
          ›
        </button>
      </div>

      {/* bolinhas de navegação */}
      <div className="mt-4 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full ${
              i === idx ? "bg-primary" : "bg-accent/40"
            }`}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
