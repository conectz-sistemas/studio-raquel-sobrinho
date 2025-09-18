import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../UI/Section.jsx";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Meu penteado de noiva ficou impecável do começo ao fim. Atendimento carinhoso e extremamente profissional.",
    author: "Ana Luiza",
    role: "Noiva • Casamento Campo Belo",
    avatar: "/src/assets/avatars/a1.webp",
  },
  {
    quote:
      "Fiz ondas glam para um evento. Resultado elegante, com brilho e zero frizz nas fotos.",
    author: "Mara Ribeiro",
    role: "Convidada • Gala Beneficente",
    avatar: "/src/assets/avatars/a2.webp",
  },
  {
    quote:
      "Consultoria certeira para o meu tipo de cabelo. Saí me sentindo confiante e leve.",
    author: "Jéssica Moraes",
    role: "Cliente • Finalização natural",
    avatar: "/src/assets/avatars/a3.webp",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  // autoplay com pausa em hover/focus
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, idx]);

  const item = testimonials[idx];

  return (
    <Section variant="light" id="depoimentos">
      <h2 className="font-display text-3xl relative inline-block">
        Depoimentos
        <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-accent" />
      </h2>
      <p className="mt-2 max-w-2xl opacity-90">
        Experiências reais — confiança que se conquista no detalhe.
      </p>

      <div
        className="mt-8 flex items-center gap-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="region"
        aria-roledescription="carrossel de depoimentos"
        aria-live="polite"
        aria-label="Depoimentos de clientes"
      >
        <button
          onClick={prev}
          className="rounded-xl2 border border-accent px-3 py-2 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40"
          aria-label="Depoimento anterior"
        >
          ‹
        </button>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-xl2 border border-accent/30 bg-white/80 p-6 shadow-soft"
            >
              <Quote size={22} className="text-accent" aria-hidden="true" />
              <blockquote className="mt-2 text-2xl italic leading-relaxed text-primary/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/20 text-primary font-semibold">
                    {item.author.slice(0, 1)}
                  </div>
                )}
                <span className="font-semibold">{item.author}</span>
                <span className="opacity-70"> — {item.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="rounded-xl2 border border-accent px-3 py-2 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40"
          aria-label="Próximo depoimento"
        >
          ›
        </button>
      </div>

      {/* bolinhas de navegação, com rótulos acessíveis */}
      <div className="mt-4 flex gap-2" role="tablist" aria-label="Navegação de depoimentos">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full ${i === idx ? "bg-primary" : "bg-accent/40"} focus:outline-none focus:ring-2 focus:ring-accent/40`}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Ir para o depoimento ${i + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
