import { Instagram as InstagramIcon } from "lucide-react";
import { INSTAGRAM_POSTS } from "@/data/gallery";
import { BRAND } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Instagram() {
  return (
    <section id="instagram" className="section-pad border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Instagram</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="heading-xl mt-4 text-[clamp(2.2rem,6vw,4.5rem)]">
                {BRAND.instagramHandle}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-sm border border-border px-6 py-3 font-display text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon size={16} /> Ver mais no Instagram
            </a>
          </Reveal>
        </div>

        {/* Placeholder até integração real / upload das fotos do feed */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM_POSTS.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.06}>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm border border-border"
              >
                <img
                  src={src}
                  alt={`Publicação do Instagram da Kleber's Garage ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <InstagramIcon size={20} className="text-primary" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
