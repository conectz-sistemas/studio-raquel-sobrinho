import CTAButton from "./UI/CTAButton.jsx";
import ParallaxSection from "./effects/ParallaxSection.jsx";
import { Reveal } from "./effects/Reveal.jsx";
import heroImg from "../assets/images/hero.jpg";
import heroAvif from "../assets/images/hero.avif?url";

export default function Hero() {
  return (
    <ParallaxSection
      backgroundUrl={heroAvif}
      height="88vh"
      overlay="linear-gradient(180deg, rgba(138,21,56,0.60) 0%, rgba(15,15,15,0.55) 100%)"
      strength={0.38}
    >
      <div className="max-w-2xl text-white">
        <Reveal as="h1" delay={0.05} className="font-display text-4xl md:text-6xl leading-tight">
          Beleza com <span className="text-accent">sofisticação</span> e
          <br className="hidden md:block" /> presença inesquecível
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 text-lg md:text-xl text-white/90">
            Penteados e cabelos que realçam sua essência — técnica, acabamento e um toque de luxo
            discreto para qualquer ocasião.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton className="bg-accent text-bg hover:bg-accent/90">
              Agendar horário
            </CTAButton>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-xl2 border border-white/80 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ver serviços
            </a>
          </div>
        </Reveal>
      </div>
    </ParallaxSection>
  );
}
