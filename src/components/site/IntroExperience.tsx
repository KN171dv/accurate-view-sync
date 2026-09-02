import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import logo from "@/assets/klebers-logo.png.asset.json";
import { BRAND } from "@/lib/constants";

/**
 * Cortina cinematográfica de entrada — some sozinha e libera o Hero.
 */
export function IntroExperience() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 45% at 50% 55%, oklch(0.62 0.2 38 / 22%), transparent 70%)",
            }}
          />
          <motion.img
            src={logo.url}
            alt={`${BRAND.name} logo`}
            width={160}
            height={160}
            className="relative h-28 w-28 object-contain md:h-36 md:w-36"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="relative mt-6 font-script text-2xl text-gradient-brand md:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {BRAND.slogan}
          </motion.p>
          <motion.div
            className="relative mt-8 h-px w-40 origin-left bg-gradient-brand"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
