import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import logo from "@/assets/klebers-logo.png.asset.json";
import { BRAND, NAV_LINKS, whatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt={`${BRAND.name} logo`}
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 object-contain"
            />
            <div className="leading-none">
              <p className="heading-xl text-base tracking-[0.16em]">Kleber's</p>
              <p className="font-script text-lg text-gradient-brand">Garage</p>
            </div>
          </div>
          <p className="mt-5 font-script text-xl text-muted-foreground">{BRAND.slogan}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Car Detail, PPF e Customização para veículos de alto padrão.
          </p>
        </div>

        <nav>
          <p className="eyebrow">Navegação</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Contato</p>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                +55 19 3833-3301
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram size={16} className="mt-0.5 shrink-0 text-primary" />
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {BRAND.instagramHandle}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{BRAND.openingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline" />
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
        </p>
        <p className="font-display uppercase tracking-[0.24em]">
          {BRAND.yearsInMarket}+ anos de tradição
        </p>
      </div>
    </footer>
  );
}
