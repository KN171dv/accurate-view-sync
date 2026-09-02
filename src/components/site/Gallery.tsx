import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { GALLERY } from "@/data/gallery";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="portfolio" className="section-pad border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Portfólio</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="heading-xl mt-4 text-[clamp(2.2rem,6vw,4.5rem)]">
            Trabalhos <span className="text-gradient-brand">selecionados</span>
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-sm border border-border text-left"
              >
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.service}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] ${
                    item.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"
                  }`}
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="heading-xl text-lg">{item.title}</p>
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.26em] text-primary">
                    {item.service}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Fechar"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 rounded-sm border border-border p-2 text-foreground"
            >
              <X size={18} />
            </button>
            <motion.figure
              className="max-h-[88vh] max-w-5xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY[active]?.src}
                alt={GALLERY[active]?.title ?? ""}
                className="max-h-[78vh] w-auto rounded-sm object-contain"
              />
              <figcaption className="mt-4 text-center">
                <span className="heading-xl text-lg">{GALLERY[active]?.title}</span>
                <span className="ml-3 font-display text-[0.65rem] uppercase tracking-[0.26em] text-primary">
                  {GALLERY[active]?.service}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
