export default function CTAButton({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl2 px-5 py-3 font-semibold
                  bg-primary text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-accent/50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
