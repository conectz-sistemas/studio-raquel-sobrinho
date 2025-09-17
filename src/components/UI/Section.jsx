// Seção com variantes para alternar fundos facilmente
const variants = {
  light: "bg-bg",          // bege claro
  white: "bg-white",       // branco puro
  tinted: "bg-accent/5",   // leve dourado translúcido
};

export default function Section({
  children,
  className = "",
  container = true,
  variant = "light",
  id,
  ...props
}) {
  return (
    <section id={id} className={`${variants[variant]} py-14 md:py-20 ${className}`} {...props}>
      <div className={container ? "mx-auto max-w-6xl px-4" : ""}>{children}</div>
    </section>
  );
}
