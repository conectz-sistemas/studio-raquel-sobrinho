import { useState, useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Section from "../UI/Section.jsx";
import Lightbox from "../Lightbox/Lightbox.jsx";
import SmartImage from "../media/SmartImage.jsx";

/* Importa grupos de formatos (se não tiver webp/avif, pode omitir) */
import p1jpg from "../../assets/portfolio/p1.jpg";
import p1webp from "../../assets/portfolio/p1.webp?url";
import p1avif from "../../assets/portfolio/p1.avif?url";

import p2jpg from "../../assets/portfolio/p2.jpg";
import p2webp from "../../assets/portfolio/p2.webp?url";
import p2avif from "../../assets/portfolio/p2.avif?url";

import p3jpg from "../../assets/portfolio/p3.jpg";
import p3webp from "../../assets/portfolio/p3.webp?url";
import p3avif from "../../assets/portfolio/p3.avif?url";

import p4jpg from "../../assets/portfolio/p2.jpg";
import p4webp from "../../assets/portfolio/p2.webp?url";
import p4avif from "../../assets/portfolio/p2.avif?url";

import p5jpg from "../../assets/portfolio/p3.jpg";
import p5webp from "../../assets/portfolio/p3.webp?url";
import p5avif from "../../assets/portfolio/p3.avif?url";

import p6jpg from "../../assets/portfolio/p1.jpg";
import p6webp from "../../assets/portfolio/p1.webp?url";
import p6avif from "../../assets/portfolio/p1.avif?url";

/* Card com parallax no hover + SmartImage */
function ParallaxCard({ sources, title, tag, onOpen }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [6, -6]);
  const rotateY = useTransform(x, [-40, 40], [-6, 6]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(((px - rect.width / 2) / (rect.width / 2)) * 40);
    y.set(((py - rect.height / 2) / (rect.height / 2)) * 40);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      className="group relative w-full select-none rounded-xl2 border border-accent/20 bg-white shadow-soft will-change-transform"
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <SmartImage
        avif={sources.avif}
        webp={sources.webp}
        jpg={sources.jpg}
        alt={title}
        aspect="aspect-[4/5]"
      />

      {/* Overlay marsala/dourado no hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
           style={{ background: "linear-gradient(180deg, rgba(138,21,56,0.35) 0%, rgba(207,166,107,0.25) 100%)" }} />
      {/* Legenda */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
        <div className="rounded-xl2 border border-white/70 bg-white/80 px-3 py-2 text-sm backdrop-blur">
          <div className="font-display text-primary leading-none">{title}</div>
          {tag && <div className="mt-1 text-xs text-text/70">{tag}</div>}
        </div>
      </div>
    </motion.button>
  );
}

export default function Portfolio() {
  const items = useMemo(() => ([
    { title: "Noiva Clássico",    tag: "Coque baixo • Longa duração", sources: { avif: p1avif, webp: p1webp, jpg: p1jpg } },
    { title: "Glam Ondas",        tag: "Ondas abertas • Glossy",      sources: { avif: p2avif, webp: p2webp, jpg: p2jpg } },
    { title: "Madrinha Elegante", tag: "Semi-preso • Volumetria",     sources: { avif: p3avif, webp: p3webp, jpg: p3jpg } },
    { title: "Editorial",         tag: "Textura • Styling",           sources: { avif: p4avif, webp: p4webp, jpg: p4jpg } },
    { title: "Trança Festiva",    tag: "Fios polidos • Detalhe joia", sources: { avif: p5avif, webp: p5webp, jpg: p5jpg } },
    { title: "Dia a Dia",         tag: "Finalização natural • Brilho",sources: { avif: p6avif, webp: p6webp, jpg: p6jpg } },
  ]), []);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  return (
    <>
      <Section variant="white" id="portfolio" className="pt-4">
        <h2 className="font-display text-3xl relative inline-block">
          Portfólio
          <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-accent" />
        </h2>
        <p className="mt-2 max-w-2xl opacity-90">
          Seleção de penteados e finalizações — do clássico ao moderno.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <ParallaxCard key={i} {...it} onOpen={() => openAt(i)} />
          ))}
        </div>
      </Section>

      {/* Lightbox usa as versões JPG/WebP/AVIF também */}
      <Lightbox
        isOpen={open}
        items={items.map(it => ({ src: it.sources.jpg || it.sources.webp || it.sources.avif, title: it.title, tag: it.tag }))}
        index={idx}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
