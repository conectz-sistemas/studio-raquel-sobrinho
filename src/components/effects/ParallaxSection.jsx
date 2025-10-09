import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxSection
 * - backgroundUrl: caminho da imagem (ex: /src/assets/images/hero.jpg)
 * - height: altura da seção (ex: "85vh")
 * - overlay: cor/gradiente por cima da imagem (ex: "linear-gradient(...)" ou "rgba(0,0,0,.35)")
 * - strength: intensidade do parallax (0.1 a 0.6). Desktop usa strength; mobile reduz automaticamente.
 * - children: conteúdo da seção (centralizamos por padrão)
 */
export default function ParallaxSection({
  backgroundUrl,
  height = "85vh",
  overlay = "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
  strength = 0.35,
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // anima enquanto a seção entra/sai da viewport
  });

  // Ajuste de intensidade — reduz no mobile para evitar judder.
  const isMobile =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(max-width: 767px)").matches
      : false;
  const s = isMobile ? Math.max(0.15, strength * 0.5) : strength;

  // move o BG mais devagar que o conteúdo
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", `${s * 30}%`]);

  return (
    <section id="hero" ref={ref} className="relative isolate w-full overflow-hidden">
      {/* Fundo com parallax */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          y: yBg,
          backgroundImage: `${overlay}, url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height,
        }}
      />
      {/* Base para garantir a altura da seção */}
      <div style={{ height }} className="w-full" />
      {/* Conteúdo centralizado */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="pointer-events-auto mx-auto max-w-6xl px-4 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
