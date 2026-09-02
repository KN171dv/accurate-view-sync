import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { whatsappLink } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicos" className="section-pad relative border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">O que fazemos</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="heading-xl mt-4 text-[clamp(2.2rem,6vw,4.5rem)]">
                Nossos <span className="text-gradient-brand">serviços</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Três frentes de trabalho, executadas com o mesmo rigor: proteger, revelar e
              personalizar.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 hover:border-primary/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.name} — ${s.short}`}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--card),transparent_55%)]" />
                  <span className="absolute left-5 top-5 font-display text-xs tracking-[0.3em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="heading-xl text-2xl md:text-3xl">{s.name}</h3>
                  <p className="mt-1 font-display text-[0.7rem] uppercase tracking-[0.24em] text-primary">
                    {s.short}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        <span className="h-px w-5 bg-gradient-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Olá! Gostaria de saber mais sobre ${s.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary"
                  >
                    Saiba mais
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
