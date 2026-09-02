import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import aboutImg from "@/assets/about-detail.jpg";
import { BRAND } from "@/lib/constants";
import { Counter } from "./Counter";
import { MaskReveal, Reveal } from "./Reveal";

const CONCEITOS = [
  "Paixão por automóveis.",
  "Precisão em cada detalhe.",
  "Excelência em cada entrega.",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="sobre" className="section-pad relative">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div ref={ref} className="relative">
          <MaskReveal className="relative overflow-hidden rounded-sm">
            <motion.img
              src={aboutImg}
              alt="Polimento de precisão em pintura de carro esportivo"
              width={1200}
              height={1500}
              loading="lazy"
              style={{ y }}
              className="h-[420px] w-full scale-110 object-cover md:h-[620px]"
            />
          </MaskReveal>
          <div className="pointer-events-none absolute -bottom-6 -right-4 hidden h-24 w-24 border-b border-r border-primary/50 md:block" />
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">Sobre a Kleber's Garage</p>
          </Reveal>

          <div className="mt-6 space-y-1">
            {CONCEITOS.map((c, i) => (
              <Reveal key={c} delay={i * 0.12}>
                <h2 className="heading-xl text-[clamp(1.9rem,4.6vw,3.6rem)]">
                  {i === 2 ? <span className="text-gradient-brand">{c}</span> : c}
                </h2>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Somos uma oficina de estética automotiva dedicada a veículos de alto padrão. Cada
              carro que entra na garagem recebe leitura própria: pintura, superfícies, texturas e
              acabamentos tratados com método, produto correto e tempo de execução respeitado.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-end gap-x-12 gap-y-8">
              <div>
                <div className="flex items-start">
                  <Counter
                    to={BRAND.yearsInMarket}
                    className="heading-xl text-gradient-brand text-[clamp(3.5rem,9vw,6.5rem)] leading-none"
                  />
                  <span className="heading-xl ml-1 mt-2 text-2xl text-primary">+</span>
                </div>
                <p className="mt-2 font-display text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Anos de tradição
                </p>
              </div>

              {/*
                MÉTRICAS ADICIONAIS — descomente e preencha somente com dados confirmados.
                <div>
                  <Counter to={0} className="heading-xl text-gradient-brand text-[clamp(3.5rem,9vw,6.5rem)] leading-none" />
                  <p className="mt-2 font-display text-xs uppercase tracking-[0.28em] text-muted-foreground">Carros atendidos</p>
                </div>
              */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
