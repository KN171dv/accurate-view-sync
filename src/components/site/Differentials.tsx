import { Reveal } from "./Reveal";

const ITEMS = [
  { n: "01", title: "Precisão", text: "Processo medido, sem atalho e sem improviso." },
  {
    n: "02",
    title: "Produtos de alta performance",
    text: "Insumos e películas selecionados para veículos de alto padrão.",
  },
  {
    n: "03",
    title: "Atendimento personalizado",
    text: "Cada projeto é conduzido de perto, do diagnóstico à entrega.",
  },
  {
    n: "04",
    title: "Cuidado em cada detalhe",
    text: "O acabamento é avaliado painel a painel antes de sair da garagem.",
  },
];

export function Differentials() {
  return (
    <section className="section-pad border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Diferenciais</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="heading-xl mt-4 max-w-2xl text-[clamp(2rem,5.5vw,4rem)]">
            Por que confiar seu carro à <span className="text-gradient-brand">Kleber's</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1}>
              <div className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-card md:p-9">
                <span className="heading-xl text-4xl text-muted-foreground/40 transition-colors duration-500 group-hover:text-primary">
                  {it.n}
                </span>
                <div className="mt-6 h-px w-8 bg-gradient-brand transition-all duration-500 group-hover:w-16" />
                <h3 className="heading-xl mt-6 text-xl">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
