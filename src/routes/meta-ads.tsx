import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "../components/CtaSection";
import { whatsappLink } from "../lib/whatsapp";

export const Route = createFileRoute("/meta-ads")({
  head: () => ({
    meta: [
      { title: "Gestão de Meta Ads — Nexarius" },
      {
        name: "description",
        content:
          "Gestão profissional de campanhas no Facebook e Instagram Ads: estrutura de campanhas, públicos, criativos e otimização contínua orientada a resultado.",
      },
      { property: "og:title", content: "Gestão de Meta Ads — Nexarius" },
      {
        property: "og:description",
        content:
          "Facebook e Instagram Ads com método: campanhas, públicos e criativos orientados a conversão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/meta-ads" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/meta-ads" }],
  }),
  component: MetaAdsPage,
});

const inclui = [
  {
    n: "01",
    titulo: "Estrutura de campanhas",
    texto: "Organização por objetivo e estágio do funil: prospecção, remarketing e retenção, cada uma com seu papel.",
  },
  {
    n: "02",
    titulo: "Públicos e segmentação",
    texto: "Públicos de interesse, lookalike e remarketing construídos a partir dos seus dados reais.",
  },
  {
    n: "03",
    titulo: "Direção de criativos",
    texto: "Briefings e análise de peças para que o anúncio carregue a mensagem certa para cada público.",
  },
  {
    n: "04",
    titulo: "Mensuração e relatórios",
    texto: "Pixel, eventos de conversão e relatórios claros: o que entrou, o que voltou, o que muda.",
  },
];

const paraQuem = [
  "Negócios locais e e-commerces que precisam de um fluxo previsível de leads e vendas.",
  "Empresas que já anunciam, mas sentem que a verba some sem retorno claro.",
  "Operações que querem profissionalizar a gestão em vez de depender de tentativa e erro.",
];

function MetaAdsPage() {
  return (
    <main>
      <section className="hero-noise relative border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-gold">
            <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
            SERVIÇO · META ADS
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            Facebook e Instagram trabalhando pelo seu <em className="not-italic text-amber">funil</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Gestão completa de campanhas de Meta Ads: da estrutura das contas aos
            criativos, com otimização contínua e relatórios que você realmente entende.
          </p>
          <div className="mt-9">
            <a
              href={whatsappLink("Olá! Quero saber mais sobre a gestão de Meta Ads da Nexarius.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-amber/90"
            >
              Quero escalar com Meta Ads <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 font-mono text-xs tracking-widest text-muted-foreground">
              DIAGNÓSTICO INICIAL GRATUITO · SEM COMPROMISSO
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="section-label">01 / O que está incluído</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {inclui.map((i) => (
            <article key={i.n} className="rounded-xl border border-border bg-card p-8">
              <p className="font-mono text-xs tracking-[0.28em] text-gold">{i.n}</p>
              <h2 className="mt-4 text-lg font-bold text-foreground">{i.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="section-label">02 / Para quem é</p>
          <ul className="mt-10 space-y-5">
            {paraQuem.map((p) => (
              <li key={p} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-atracao" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Seu público já está no Instagram. Falta a estratégia certa."
        lead="Conte como você anuncia hoje e receba um diagnóstico inicial do que destravar nas suas campanhas de Meta Ads."
        button="Quero um diagnóstico de Meta Ads"
        message="Olá! Quero um diagnóstico das minhas campanhas de Meta Ads."
      />
    </main>
  );
}
