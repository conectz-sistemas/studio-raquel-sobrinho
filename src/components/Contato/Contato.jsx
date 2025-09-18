import { motion } from "framer-motion";
import Section from "../UI/Section.jsx";
import SectionTitle from "../effects/SectionTitle.jsx";
import { Phone, Instagram, MapPin } from "lucide-react";

/** Stagger para a grade de cartões */
const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/** Tilt/fade ao entrar */
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

export default function Contato() {
  const whatsapp =
    "https://wa.me/556198321749?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Studio%20Raquel%20Sobrinho.";
  const instagram = "https://www.instagram.com/studioraquelsobrinho";
  // encode do apóstrofo em D'alva -> D%27alva
  const endereco =
    "https://www.google.com/maps?q=Parque+Estrela+D%27alva+VI,+Quadra+501,+Lote+18,+Novo+Gama+(GO)+72860-464";

  return (
    <Section id="contato" variant="white">
      <SectionTitle>Contato</SectionTitle>
      <p className="mt-2 max-w-xl opacity-90">
        Fale com a gente e garanta seu horário.
      </p>

      <motion.div
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* WhatsApp */}
        <motion.a
          variants={cardEnter}
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp"
          className="flex items-center gap-3 rounded-xl2 border border-accent/30 bg-bg p-4 shadow-soft transition
                     hover:-translate-y-1 hover:shadow-lg hover:bg-accent/10"
        >
          <Phone className="text-primary" size={22} />
          <div>
            <div className="font-semibold text-primary">WhatsApp</div>
            <div className="text-sm text-text/80">+55 61 99832-1749</div>
          </div>
        </motion.a>

        {/* Instagram */}
        <motion.a
          variants={cardEnter}
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar perfil no Instagram"
          className="flex items-center gap-3 rounded-xl2 border border-accent/30 bg-bg p-4 shadow-soft transition
                     hover:-translate-y-1 hover:shadow-lg hover:bg-accent/10"
        >
          <Instagram className="text-primary" size={22} />
          <div>
            <div className="font-semibold text-primary">Instagram</div>
            <div className="text-sm text-text/80">@studioraquelsobrinho</div>
          </div>
        </motion.a>

        {/* Endereço / Google Maps */}
        <motion.a
          variants={cardEnter}
          href={endereco}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver endereço no Google Maps"
          className="flex items-center gap-3 rounded-xl2 border border-accent/30 bg-bg p-4 shadow-soft transition
                     hover:-translate-y-1 hover:shadow-lg hover:bg-accent/10"
        >
          <MapPin className="text-primary" size={22} />
          <div>
            <div className="font-semibold text-primary">Endereço</div>
            <div className="text-sm text-text/80">
              Parque Estrela D'alva VI, Q 501, Lote 18<br />
              Novo Gama (GO) — 72860-464
            </div>
          </div>
        </motion.a>
      </motion.div>
    </Section>
  );
}
