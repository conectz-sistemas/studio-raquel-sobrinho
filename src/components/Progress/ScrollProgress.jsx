import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 20,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #8A1538, #CFA66B)" }}
    />
  );
}