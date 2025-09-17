import { useEffect, useState } from "react";

/**
 * Observa seções por id e retorna o id da seção atualmente em foco.
 * ids: ex. ["servicos","portfolio","sobre","contato"]
 */
export default function useScrollSpy(ids = []) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pega a que está mais ao centro/visível
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // ativa quando a seção ocupa uma parte central da tela
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return active;
}
