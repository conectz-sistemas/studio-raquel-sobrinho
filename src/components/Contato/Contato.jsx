import Section from "../UI/Section.jsx";
import { Phone, Instagram, MapPin } from "lucide-react";

export default function Contato() {
  const whatsapp = "https://wa.me/556198321749?text=Olá! Gostaria de agendar um horário no Studio Raquel Sobrinho.";
  const instagram = "https://www.instagram.com/studioraquelsobrinho";
  const endereco = "https://www.google.com/maps?q=Parque+Estrela+D'alva+VI,+Quadra+501,+Lote+18,+Novo+Gama+(GO)+72860-464";

  return (
    <Section id="contato" variant="white">
      <h2 className="font-display text-3xl relative inline-block">
        Contato
        <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-accent" />
      </h2>
      <p className="mt-2 max-w-xl opacity-90">
        Entre em contato e agende seu horário agora mesmo.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl2 border border-accent/30 bg-bg p-4 shadow-soft hover:bg-accent/10 transition-colors"
        >
          <Phone className="text-primary" size={22} />
          <div>
            <div className="font-semibold text-primary">WhatsApp</div>
            <div className="text-sm text-text/80">+55 61 9832-1749</div>
          </div>
        </a>

        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl2 border border-accent/30 bg-bg p-4 shadow-soft hover:bg-accent/10 transition-colors"
        >
          <Instagram className="text-primary" size={22} />
          <div>
            <div className="font-semibold text-primary">Instagram</div>
            <div className="text-sm text-text/80">@studioraquelsobrinho</div>
          </div>
        </a>

        <a
          href={endereco}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl2 border border-accent/30 bg-bg p-4 shadow-soft hover:bg-accent/10 transition-colors"
        >
          <MapPin className="text-primary" size={22} />
          <div>
            <div className="font-semibold text-primary">Endereço</div>
            <div className="text-sm text-text/80">
              Parque Estrela D'alva VI, Quadra 501, Lote 18<br />
              Novo Gama (GO) — 72860-464
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}
