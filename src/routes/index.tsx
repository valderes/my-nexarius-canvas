import { createFileRoute, Link } from "@tanstack/react-router";
import { OrbitSpheres } from "../components/OrbitSpheres";
import { CtaSection } from "../components/CtaSection";
import { whatsappLink } from "../lib/whatsapp";
import magoNexarius from "../assets/mago-nexarius.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexarius — Gestão de tráfego pago com método" },
      {
        name: "description",
        content:
          "Agência de tráfego pago: Meta Ads, Google Ads, RevOps e landing pages. Atrair, converter e expandir — crescimento construído com método, não com palpite.",
      },
      { property: "og:title", content: "Nexarius — Gestão de tráfego pago com método" },
      {
        property: "og:description",
        content:
          "Meta Ads, Google Ads, RevOps e landing pages. Atrair, converter e expandir — crescimento com método.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nexarius",
          description:
            "Agência de gestão de tráfego pago: Meta Ads, Google Ads, RevOps e landing pages.",
          areaServed: "BR",
          knowsAbout: ["Meta Ads", "Google Ads", "RevOps", "Landing Pages", "Tráfego Pago"],
        }),
      },
    ],
  }),
  component: HomePage,
});

const pilares = [
  {
    cor: "text-sphere-atracao",
    borda: "border-sphere-atracao/40",
    nome: "ATRAIR",
    titulo: "Tráfego qualificado, não volume vazio",
    texto:
      "Campanhas de Meta Ads e Google Ads planejadas a partir do seu público real, da sua oferta e do momento de compra de cada pessoa.",
  },
  {
    cor: "text-sphere-conversao",
    borda: "border-sphere-conversao/40",
    nome: "CONVERTER",
    titulo: "Cada clique com um destino claro",
    texto:
      "Landing pages, criativos e mensuração conectados para transformar investimento em leads e vendas — com testes contínuos, não achismo.",
  },
  {
    cor: "text-sphere-expansao",
    borda: "border-sphere-expansao/40",
    nome: "EXPANDIR",
    titulo: "Crescimento dentro da própria base",
    texto:
      "Visão de RevOps: funil, CRM e dados trabalhando juntos para vender mais para quem já confia em você.",
  },
];

const servicos = [
  {
    to: "/meta-ads",
    label: "01",
    nome: "Gestão de Meta Ads",
    texto: "Facebook e Instagram com estrutura de campanhas, públicos e criativos orientados a resultado.",
  },
  {
    to: "/google-ads",
    label: "02",
    nome: "Gestão de Google Ads",
    texto: "Pesquisa, Display e YouTube para capturar quem já procura pelo que você vende.",
  },
  {
    to: "/revops",
    label: "03",
    nome: "RevOps e expansão",
    texto: "Funil, CRM e dados conectados para expandir receita dentro da sua base de clientes.",
  },
  {
    to: "/landing-pages",
    label: "04",
    nome: "Landing pages e criativos",
    texto: "Páginas e peças de anúncio construídas para converter, não apenas para existir.",
  },
] as const;

const etapas = [
  {
    n: "01",
    titulo: "Diagnóstico",
    texto: "Análise da operação atual: oferta, funil, contas de anúncio e dados disponíveis.",
  },
  {
    n: "02",
    titulo: "Planejamento",
    texto: "Estratégia de canais, verba, públicos e metas claras antes de qualquer real investido.",
  },
  {
    n: "03",
    titulo: "Execução",
    texto: "Campanhas, páginas e criativos no ar com acompanhamento próximo nos primeiros ciclos.",
  },
  {
    n: "04",
    titulo: "Otimização",
    texto: "Leitura de dados, testes e ajustes contínuos. Relatórios claros, sem caixa-preta.",
  },
];

const faqs = [
  {
    q: "Vocês prometem um número de vendas?",
    a: "Não. Resultado depende de oferta, mercado, verba e execução. O que a Nexarius garante é método: planejamento, mensuração e otimização contínua, com total transparência sobre o que os dados mostram.",
  },
  {
    q: "Preciso já ter campanhas rodando?",
    a: "Não. O trabalho começa do ponto em que você está: do zero, reorganizando contas existentes ou escalando o que já funciona.",
  },
  {
    q: "As contas de anúncio ficam comigo ou com a agência?",
    a: "Com você. Sempre. Você mantém a propriedade das contas, dos dados e dos públicos — a Nexarius opera dentro da sua estrutura.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "O trabalho é sustentado por resultado e clareza, não por amarras. Os termos são alinhados no diagnóstico, sem fidelidade forçada.",
  },
];

function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-noise relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
              AGÊNCIA DE TRÁFEGO PAGO
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transforme
              <br />
              <em className="not-italic text-amber">cliques</em> em
              <br />
              crescimento real.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Gestão de Meta Ads, Google Ads, RevOps e landing pages com um método
              que conecta atração, conversão e expansão. Sem palpite. Sem caixa-preta.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={whatsappLink("Olá! Quero mais clientes com tráfego pago. Podemos conversar?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-amber/90"
              >
                Quero mais clientes com tráfego pago <span aria-hidden="true">→</span>
              </a>
              <a
                href="#metodo"
                className="text-sm font-semibold text-foreground underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-amber"
              >
                Conheça o método ↓
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sphere-atracao" /> Meta e Google Ads
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sphere-conversao" /> Foco em conversão
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sphere-expansao" /> Visão de RevOps
              </li>
            </ul>
          </div>

          <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
            <img
              src={magoNexarius}
              alt="O mago Nexarius, personagem da marca, segurando um orbe de luz dourada"
              width={1024}
              height={1024}
              className="w-full max-w-sm drop-shadow-[0_0_60px_oklch(0.75_0.14_85/25%)]"
            />
            <div className="-mt-10">
              <OrbitSpheres size={220} />
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-4 font-mono text-xs tracking-[0.3em] text-muted-foreground sm:gap-8">
            <span className="text-sphere-atracao">ATRAIR</span>
            <i className="h-px w-10 bg-border" aria-hidden="true" />
            <span className="text-sphere-conversao">CONVERTER</span>
            <i className="h-px w-10 bg-border" aria-hidden="true" />
            <span className="text-sphere-expansao">EXPANDIR</span>
          </div>
        </div>
      </section>

      {/* 01 / O PRINCÍPIO */}
      <section id="metodo" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="section-label">01 / O princípio</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Não existe crescimento isolado. Todo resultado nasce de uma conexão.
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Tráfego sem landing page é desperdício. Landing page sem oferta é
              enfeite. Oferta sem expansão da base é crescimento com prazo de
              validade. A Nexarius existe para conectar essas pontas.
            </p>
            <p>
              O método se organiza em três movimentos que se alimentam
              continuamente — como três esferas em órbita, cada uma sustentando
              a outra.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <article key={p.nome} className={`rounded-xl border ${p.borda} bg-card p-7`}>
              <p className={`font-mono text-xs tracking-[0.28em] ${p.cor}`}>{p.nome}</p>
              <h3 className="mt-4 text-lg font-bold text-foreground">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 02 / SERVIÇOS */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="section-label">02 / Serviços</p>
          <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Quatro frentes, um único sistema de crescimento.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {servicos.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-gold/50"
              >
                <p className="font-mono text-xs tracking-[0.28em] text-gold">{s.label}</p>
                <h3 className="mt-4 flex items-center justify-between text-xl font-bold text-foreground">
                  {s.nome}
                  <span className="text-gold transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / COMO EU TRABALHO */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="section-label">03 / Como eu trabalho</p>
        <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
          Processo claro do primeiro dia. Sem caixa-preta.
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e) => (
            <article key={e.n} className="border-t-2 border-gold/60 pt-6">
              <p className="font-mono text-sm tracking-[0.28em] text-gold">{e.n}</p>
              <h3 className="mt-3 text-lg font-bold text-foreground">{e.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-4 rounded-xl border border-border bg-card p-8 sm:grid-cols-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="block text-foreground">Contas sempre suas.</strong>
            Você mantém a propriedade das contas de anúncio, dados e públicos.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="block text-foreground">Relatórios que você entende.</strong>
            O que foi investido, o que voltou e o que será testado em seguida.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="block text-foreground">Sem fidelidade forçada.</strong>
            O trabalho se sustenta por resultado e transparência.
          </p>
        </div>
      </section>

      {/* 04 / DÚVIDAS */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="section-label">04 / Dúvidas frequentes</p>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Clareza antes da decisão.
          </h2>
          <div className="mt-12 divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                  {f.q}
                  <span className="text-gold transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
