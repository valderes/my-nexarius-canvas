import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "../components/CtaSection";
import { whatsappLink } from "../lib/whatsapp";

export const Route = createFileRoute("/landing-pages")({
  head: () => ({
    meta: [
      { title: "Landing pages e criativos — Nexarius" },
      {
        name: "description",
        content:
          "Criação e otimização de landing pages e criativos de anúncio construídos para converter: rápidos, claros e orientados a uma única ação.",
      },
      { property: "og:title", content: "Landing pages e criativos — Nexarius" },
      {
        property: "og:description",
        content:
          "Páginas e peças de anúncio feitas para converter, não apenas para existir.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/landing-pages" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/landing-pages" }],
  }),
  component: LandingPagesPage,
});

const frentes = [
  {
    n: "01",
    titulo: "Landing pages que convertem",
    texto: "Uma página, uma promessa, uma ação. Estrutura pensada para CRO: headline clara, prova, quebra de objeções e CTA sem distrações.",
  },
  {
    n: "02",
    titulo: "Rápidas e otimizadas",
    texto: "Páginas leves, com boas práticas de performance e SEO — porque cada segundo de carregamento custa conversão.",
  },
  {
    n: "03",
    titulo: "Criativos para anúncios",
    texto: "Peças para Meta e Google Ads alinhadas à mensagem da campanha e ao estágio do funil de cada público.",
  },
  {
    n: "04",
    titulo: "Teste e melhoria contínua",
    texto: "Variações de headline, oferta e layout testadas com dados reais — a página evolui com o que o mercado responde.",
  },
];

function LandingPagesPage() {
  return (
    <main>
      <section className="hero-noise relative border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-gold">
            <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
            SERVIÇO · LANDING PAGES E CRIATIVOS
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            O clique é só o começo. A <em className="not-italic text-amber">página</em> é onde a venda acontece.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tráfego bem feito para uma página fraca é dinheiro jogado fora. A
            Nexarius constrói landing pages e criativos com um único objetivo:
            converter.
          </p>
          <div className="mt-9">
            <a
              href={whatsappLink("Olá! Quero saber mais sobre landing pages e criativos da Nexarius.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-amber/90"
            >
              Quero uma página que converte <span aria-hidden="true">→</span>
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
          <p className="section-label">02 / Sinais de que sua página está custando vendas</p>
          <ul className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-conversao" aria-hidden="true" />
              As campanhas geram cliques, mas quase ninguém deixa contato ou compra.
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-conversao" aria-hidden="true" />
              A página demora para carregar ou quebra no celular — onde está a maioria do tráfego.
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sphere-conversao" aria-hidden="true" />
              O visitante chega e não entende em cinco segundos o que você oferece e o que deve fazer.
            </li>
          </ul>
        </div>
      </section>

      <CtaSection
        title="Sua próxima campanha merece uma página à altura."
        lead="Mostre sua página atual — ou a ideia que ainda não saiu do papel — e receba um diagnóstico inicial de conversão."
        button="Quero um diagnóstico da minha página"
        message="Olá! Quero um diagnóstico de conversão da minha landing page."
      />
    </main>
  );
}
