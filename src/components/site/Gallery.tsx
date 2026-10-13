import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type Photo = { src: string; alt: string; caption?: string; w: number; h: number };

export function Gallery({ photos }: { photos: Photo[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const move = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [idx, close, move]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {photos.map((p, i) => (
          <button key={p.src + i} onClick={() => setIdx(i)} className={`group relative overflow-hidden rounded-2xl bg-muted ${i === 0 ? "col-span-2 row-span-2" : ""}`} aria-label={`Ampliar: ${p.alt}`}>
            <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            {p.caption && <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 text-left text-xs text-ink-foreground">{p.caption}</span>}
          </button>
        ))}
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label={photos[idx].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4" onClick={close}>
          <button onClick={close} aria-label="Fechar" autoFocus className="absolute right-4 top-4 rounded-full bg-ink-foreground/10 p-2 text-ink-foreground"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Anterior" className="absolute left-4 rounded-full bg-ink-foreground/10 p-3 text-ink-foreground"><ChevronLeft /></button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={photos[idx].src} alt={photos[idx].alt} className="max-h-[80vh] rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-ink-foreground/80">{photos[idx].caption ?? photos[idx].alt} · {idx + 1}/{photos.length}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Próxima" className="absolute right-4 rounded-full bg-ink-foreground/10 p-3 text-ink-foreground"><ChevronRight /></button>
        </div>
      )}
    </>
  );
}
