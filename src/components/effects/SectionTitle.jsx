import { motion } from "framer-motion";

/**
 * SectionTitle
 * - gradient: quando true, aplica leve gradiente marsala→dourado no texto (moderno e sutil)
 * - underlineWidth: largura final do sublinhado
 */
export default function SectionTitle({
  children,
  className = "",
  underlineWidth = 60,
  gradient = false,
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.h2
        className={`font-display text-3xl ${
          gradient ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" : ""
        }`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.h2>

      {/* sublinhado dourado animado */}
      <motion.div
        className="absolute -bottom-2 left-0 h-[2px] bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: underlineWidth }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      />
    </div>
  );
}
