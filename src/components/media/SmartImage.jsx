import { useEffect, useRef, useState } from "react";

/**
 * SmartImage
 * - avif, webp, jpg: urls resolvidas (import do Vite ou caminho público)
 * - alt: texto alternativo
 * - className: classes no <img>
 * - aspect: ex. "aspect-[4/5]" (Tailwind) para manter layout estável
 * - sizes: string sizes para o browser escolher melhor recurso
 * - priority: se true, carrega imediatamente (ignora lazy)
 */
export default function SmartImage({
  avif,
  webp,
  jpg,
  alt = "",
  className = "",
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}) {
  const [inView, setInView] = useState(priority);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (priority) return; // carrega já
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px" } // começa a carregar antes de entrar
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  return (
    <div ref={ref} className={`relative w-full overflow-hidden rounded-xl2 ${aspect}`}>
      {/* Skeleton shimmer */}
      {!loaded && (
        <div className="absolute inset-0 rounded-xl2 bg-neutral-200/60">
          <div
            className="absolute inset-y-0 -left-1/2 w-1/2 bg-white/40"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.6) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div className="absolute inset-y-0 -left-1/2 w-1/2 animate-shimmer" />
        </div>
      )}

      {/* Picture com formatos modernos */}
      {inView && (
        <picture>
          {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
          {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
          <img
            src={jpg || webp || avif}
            alt={alt}
            className={`h-full w-full object-cover ${className}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
          />
        </picture>
      )}
    </div>
  );
}
