import { whatsappLink } from "../lib/whatsapp";

/** Chamada final para ação, reutilizada ao fim de cada página. */
export function CtaSection({
  title = "O próximo ajuste não precisa ser um palpite.",
  lead = "Conte onde sua operação está hoje e receba um diagnóstico inicial do que destrava o seu crescimento: atração, conversão ou expansão.",
  button = "Quero um diagnóstico gratuito",
  message = "Olá! Quero um diagnóstico gratuito da minha operação de tráfego.",
}: {
  title?: string;
  lead?: string;
  button?: string;
  message?: string;
}) {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="section-label">Próximo passo</p>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
        <div className="mt-9">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-amber/90"
          >
            {button} <span aria-hidden="true">→</span>
          </a>
          <p className="mt-4 font-mono text-xs tracking-widest text-muted-foreground">
            RESPOSTA EM ATÉ 1 DIA ÚTIL · SEM COMPROMISSO
          </p>
        </div>
      </div>
    </section>
  );
}
