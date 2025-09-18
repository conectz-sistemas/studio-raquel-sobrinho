export default function CTAButton({ children, href, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl2 px-5 py-2 font-semibold transition-colors shadow-soft ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

