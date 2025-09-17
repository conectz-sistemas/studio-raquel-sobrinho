import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLockBodyScroll from "../../hooks/useLockBodyScroll.js";

export default function Lightbox({ isOpen, items, index, onClose, onPrev, onNext }) {
  useLockBodyScroll(isOpen);

  // teclado: ESC fecha, ← → navega
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* container impede clique de fechar na imagem */}
          <motion.div
            className="relative mx-3 w-full max-w-5xl"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[index].src}
              alt={items[index].title ?? "Foto"}
              className="max-h-[80vh] w-full rounded-xl2 object-contain shadow-2xl"
            />

            {/* legendas */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="rounded-xl2 border border-white/40 bg-black/35 px-3 py-2 text-white backdrop-blur">
                <div className="font-display">{items[index].title}</div>
                {items[index].tag && <div className="text-sm opacity-80">{items[index].tag}</div>}
              </div>
            </div>

            {/* controles */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl2 bg-white/80 px-3 py-2 text-primary hover:bg-white"
              aria-label="Anterior"
            >‹</button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl2 bg-white/80 px-3 py-2 text-primary hover:bg-white"
              aria-label="Próximo"
            >›</button>
            <button
              onClick={onClose}
              className="absolute right-2 top-2 rounded-xl2 bg-white/85 px-3 py-1 text-primary hover:bg-white"
              aria-label="Fechar"
            >✕</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
