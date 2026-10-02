import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "../components/CtaSection";
import { OrbitSpheres } from "../components/OrbitSpheres";
import { whatsappLink } from "../lib/whatsapp";

export const Route = createFileRoute("/revops")({
  head: () => ({
    meta: [
      { title: "RevOps e expansão de receita — Nexarius" },
      {
        name: "description",
        content:
          "Consultoria de RevOps: funil, CRM e dados conectados para expandir a receita dentro da sua própria base de clientes.",
      },
      { property: "og:title", content: "RevOps e expansão de receita — Nexarius" },
      {
        property: "og:description",
        content:
          "Funil, CRM e dados trabalhando juntos para vender mais para quem já confia em você.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/revops" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/revops" }],
  }),
  component: RevopsPage,
});

const frentes = [
  {
    n: "01",
    titulo: "Diagnóstico do funil",
    texto: "Mapeamento de onde a receita escapa: leads esquecidos, follow-up falho, oportunidades sem dono.",
  },
  {
    n: "02",
    titulo: "CRM e processos",
    texto: "Organização do CRM e das rotinas comerciais para que nenhuma oportunidade dependa da memória de ninguém.",
  },
  {
    n: "03",
    titulo: "Expansão na base",
    texto: "Estratégias de recompra, upsell e reativação para crescer dentro da base que você já conquistou.",
  },
  {
    n: "04",
    titulo: "Dados e previsibilidade",
    texto: "Indicadores de funil claros para decidir com números: conversão por etapa, ciclo de venda, LTV.",
  },
];

function RevopsPage() {
  return (
    <main>
      <section className="hero-noise relative border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
              SERVIÇO · REVOPS
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              A receita mais barata está <em className="not-italic text-amber">dentro</em> da sua base.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              RevOps é o terceiro movimento do método Nexarius: depois de atrair e
              converter, expandir. Funil, CRM e dados conectados para vender mais
              para quem já confia em você.
            </p>
            <div className="mt-9">
              <a
                href={whatsappLink("Olá! Quero saber mais sobre o trabalho de RevOps da Nexarius.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-amber/90"
              >
                Quero expandir minha base <span aria-hidden="true">→</span>
              </a>
              <p className="mt-4 font-mono text-xs tracking-widest text-muted-foreground">
                DIAGNÓSTICO INICIAL GRATUITO · SEM COMPROMISSO
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <OrbitSpheres size={300} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="section-label">01 / Frentes de trabalho</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {frentes.map((f) => (
            <article key={f.n} className="rounded-xl border border-border bg-card p-8">
              <p className="font-mono text-xs tracking-[0.28em] text-gold">{f.n}</p>
              <h2 className="mt-4 text-lg font-bold text-foreground">{f.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="section-label">02 / Sinais de que você precisa disso</p>
          <ul className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-expansao" aria-hidden="true" />
              Você investe em atrair clientes, mas não sabe o que acontece com eles depois da primeira compra.
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-expansao" aria-hidden="true" />
              O comercial depende de planilhas soltas e da memória de cada vendedor.
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-expansao" aria-hidden="true" />
              Não existe um número confiável para conversão do funil, ciclo de venda ou valor do cliente ao longo do tempo.
            </li>
          </ul>
        </div>
      </section>

      <CtaSection
        title="Crescer não é só buscar clientes novos."
        lead="Conte como é seu funil hoje e receba um diagnóstico inicial de onde a receita está escapando."
        button="Quero um diagnóstico de RevOps"
        message="Olá! Quero um diagnóstico do meu funil e da minha operação comercial."
      />
    </main>
  );
}
