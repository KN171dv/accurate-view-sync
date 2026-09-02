import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { BRAND, whatsappLink } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Reação sutil ao cursor (desktop apenas — touch não depende disso)
  const rotX = useSpring(0, { stiffness: 60, damping: 18 });
  const rotY = useSpring(0, { stiffness: 60, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    rotY.set(nx * 6);
    rotX.set(-ny * 4);
  };

  return (
    <section
      id="topo"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rotX.set(0);
        rotY.set(0);
      }}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y, perspective: 1200 }}
        aria-hidden={false}
      >
        <motion.img
          src={heroCar}
          alt="Porsche preto sendo detalhado em garagem premium da Kleber's Garage"
          width={1920}
          height={1080}
          className="h-full w-full scale-110 object-cover"
          style={{ rotateX: rotX, rotateY: rotY }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 2.2, delay: reduce ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_2%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_80%,oklch(0.14_0.006_260/80%),transparent_70%)]" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24"
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 2 }}
        >
          Paulínia · SP — desde 2005
        </motion.p>

        <motion.h1
          className="heading-xl mt-4 text-[clamp(2.6rem,10.5vw,9rem)]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: reduce ? 0 : 2.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Kleber's <span className="text-gradient-brand">Garage</span>
        </motion.h1>

        <motion.div
          className="mt-5 flex flex-col gap-2 md:flex-row md:items-center md:gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduce ? 0 : 2.35 }}
        >
          <p className="font-script text-3xl text-gradient-brand md:text-4xl">{BRAND.slogan}</p>
          <span className="hidden h-6 w-px bg-border md:block" />
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
            Estética automotiva em outro nível
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduce ? 0 : 2.5 }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-ember inline-flex items-center justify-center rounded-sm bg-gradient-brand px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Conhecer nossos serviços
          </a>
        </motion.div>

        <motion.div
          className="mt-14 hidden items-center gap-3 text-muted-foreground md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: reduce ? 0 : 2.8 }}
        >
          <ArrowDown size={16} className="animate-bounce" />
          <span className="font-display text-[0.65rem] uppercase tracking-[0.3em]">Role</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
