import { useCallback, useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      update(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [update]);

  return (
    <section id="antes-depois" className="section-pad border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Antes e depois</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="heading-xl mt-4 text-[clamp(2.2rem,6vw,4.5rem)]">
                A <span className="text-gradient-brand">transformação</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs text-sm text-muted-foreground">
              Arraste o divisor para comparar. Toque e arraste também funciona no celular.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="relative mt-12 aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-sm border border-border"
            onPointerDown={(e) => {
              dragging.current = true;
              update(e.clientX);
            }}
          >
            <img
              src={afterImg}
              alt="Veículo após o serviço da Kleber's Garage"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Veículo antes do serviço"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute left-4 top-4 rounded-sm bg-background/70 px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
              Antes
            </span>
            <span className="absolute right-4 top-4 rounded-sm bg-background/70 px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.24em] text-primary backdrop-blur">
              Depois
            </span>

            <div
              className="absolute inset-y-0 w-px bg-gradient-brand"
              style={{ left: `${pos}%` }}
            >
              <div className="shadow-ember absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-gradient-brand">
                <span className="font-display text-xs text-primary-foreground">‹ ›</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
