import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ctaCar from "@/assets/cta-car.jpg";
import { whatsappLink } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative flex min-h-[80svh] items-center overflow-hidden border-t border-border/60"
    >
      <motion.img
        src={ctaCar}
        alt="Ferrari preta em garagem premium"
        width={1920}
        height={1080}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_10%,oklch(0.14_0.006_260/60%)_55%,transparent)]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10">
        <Reveal>
          <p className="eyebrow">Próximo passo</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="heading-xl mt-5 max-w-3xl text-[clamp(2.4rem,7.5vw,6rem)]">
            Seu carro <span className="text-gradient-brand">merece mais.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
            Agende uma avaliação e descubra o nível Kleber's Garage.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento na Kleber's Garage.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-ember mt-10 inline-flex rounded-sm bg-gradient-brand px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
