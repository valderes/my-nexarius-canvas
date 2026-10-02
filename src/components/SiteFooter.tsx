import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm tracking-[0.28em] text-foreground">NEXARIUS</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Não existe crescimento isolado. Todo resultado nasce de uma conexão
              entre atração, conversão e expansão.
            </p>
          </div>
          <nav aria-label="Serviços" className="flex flex-col gap-2.5 text-sm">
            <p className="section-label mb-1">Serviços</p>
            <Link to="/meta-ads" className="text-muted-foreground transition-colors hover:text-foreground">
              Gestão de Meta Ads
            </Link>
            <Link to="/google-ads" className="text-muted-foreground transition-colors hover:text-foreground">
              Gestão de Google Ads
            </Link>
            <Link to="/revops" className="text-muted-foreground transition-colors hover:text-foreground">
              RevOps e expansão
            </Link>
            <Link to="/landing-pages" className="text-muted-foreground transition-colors hover:text-foreground">
              Landing pages e criativos
            </Link>
          </nav>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © 2026 NEXARIUS
          </p>
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            ATRAIR · CONVERTER · EXPANDIR
          </p>
        </div>
      </div>
    </footer>
  );
}
