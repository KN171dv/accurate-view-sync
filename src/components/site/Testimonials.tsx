import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { BRAND } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="section-pad border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Depoimentos</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="heading-xl mt-4 text-[clamp(2.2rem,6vw,4.5rem)]">
            Quem confia <span className="text-gradient-brand">o carro</span>
          </h2>
        </Reveal>

        {TESTIMONIALS.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 0.1}>
                <figure className="h-full rounded-sm border border-border bg-card p-7">
                  <Quote size={20} className="text-primary" />
                  <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 font-display text-xs uppercase tracking-[0.22em]">
                    {t.name}
                    {t.car ? <span className="text-muted-foreground"> · {t.car}</span> : null}
                    <span className="ml-2 text-primary">{t.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.12}>
            {/* Placeholder: substituído automaticamente ao preencher src/data/testimonials.ts */}
            <div className="mt-14 flex flex-col items-start gap-6 rounded-sm border border-dashed border-border bg-card/40 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <p className="font-script text-3xl text-gradient-brand">
                  Avaliações reais, em breve
                </p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Estamos reunindo as avaliações publicadas por clientes no Google e no Instagram.
                  Enquanto isso, o portfólio acima fala pela oficina.
                </p>
              </div>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-sm border border-border px-6 py-3 font-display text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                Ver no Instagram
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
