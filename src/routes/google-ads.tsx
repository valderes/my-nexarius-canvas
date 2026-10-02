import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "../components/CtaSection";
import { whatsappLink } from "../lib/whatsapp";

export const Route = createFileRoute("/google-ads")({
  head: () => ({
    meta: [
      { title: "Gestão de Google Ads — Nexarius" },
      {
        name: "description",
        content:
          "Gestão profissional de Google Ads: campanhas de Pesquisa, Display e YouTube planejadas para capturar quem já procura pelo que você vende.",
      },
      { property: "og:title", content: "Gestão de Google Ads — Nexarius" },
      {
        property: "og:description",
        content:
          "Pesquisa, Display e YouTube com método: capture a demanda que já existe pelo seu produto ou serviço.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/google-ads" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/google-ads" }],
  }),
  component: GoogleAdsPage,
});

const frentes = [
  {
    n: "01",
    titulo: "Rede de Pesquisa",
    texto: "Anúncios para quem já está buscando o que você vende — a demanda mais quente da internet.",
  },
  {
    n: "02",
    titulo: "Display e YouTube",
    texto: "Alcance e remarketing visual para manter sua marca presente ao longo da decisão de compra.",
  },
  {
    n: "03",
    titulo: "Palavras-chave e lances",
    texto: "Pesquisa de termos, correspondências e estratégia de lances ajustada ao seu objetivo e verba.",
  },
  {
    n: "04",
    titulo: "Conversões e relatórios",
    texto: "Configuração de conversões e relatórios diretos: custo por resultado, não métricas de vaidade.",
  },
];

function GoogleAdsPage() {
  return (
    <main>
      <section className="hero-noise relative border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-gold">
            <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
            SERVIÇO · GOOGLE ADS
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            Apareça exatamente quando <em className="not-italic text-amber">procuram</em> por você.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Gestão de Google Ads com visão estratégica: planejamento, criação,
            mensuração e otimização de campanhas conectadas à sua oferta e à sua
            landing page.
          </p>
          <div className="mt-9">
            <a
              href={whatsappLink("Olá! Quero saber mais sobre a gestão de Google Ads da Nexarius.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-amber/90"
            >
              Quero capturar demanda no Google <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 font-mono text-xs tracking-widest text-muted-foreground">
              DIAGNÓSTICO INICIAL GRATUITO · SEM COMPROMISSO
            </p>
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
          <p className="section-label">02 / Quando o Google Ads faz sentido</p>
          <ul className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-atracao" aria-hidden="true" />
              Existe busca ativa pelo seu produto, serviço ou pelo problema que você resolve.
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-conversao" aria-hidden="true" />
              Você precisa de resultados mensuráveis e previsíveis, com custo por conversão sob controle.
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-expansao" aria-hidden="true" />
              Sua landing page está pronta para receber tráfego — ou será construída como parte do trabalho.
            </li>
          </ul>
        </div>
      </section>

      <CtaSection
        title="A busca acontece todos os dias. A questão é quem aparece."
        lead="Conte o que você vende e receba um diagnóstico inicial do potencial do Google Ads para o seu negócio."
        button="Quero um diagnóstico de Google Ads"
        message="Olá! Quero um diagnóstico do potencial do Google Ads para o meu negócio."
      />
    </main>
  );
}
