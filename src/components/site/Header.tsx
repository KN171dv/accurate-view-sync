import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/klebers-logo.png.asset.json";
import { BRAND, NAV_LINKS, whatsappLink } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3 md:px-10">
        <a href="#topo" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt={`${BRAND.name} logo`}
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="heading-xl text-sm tracking-[0.18em]">Kleber's</span>
            <span className="font-script text-base text-gradient-brand">Garage</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm bg-gradient-brand px-5 py-2.5 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-block"
          >
            Agendar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-display text-sm uppercase tracking-[0.2em] text-muted-foreground last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
