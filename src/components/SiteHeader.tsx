import { Link } from "@tanstack/react-router";
import { WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from "../lib/whatsapp";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/meta-ads", label: "Meta Ads" },
  { to: "/google-ads", label: "Google Ads" },
  { to: "/revops", label: "RevOps" },
  { to: "/landing-pages", label: "Landing pages" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Nexarius, início">
          <span className="flex items-end gap-[3px]" aria-hidden="true">
            <i className="block h-2 w-2 rounded-full bg-sphere-atracao" />
            <i className="block h-2 w-2 rounded-full bg-sphere-conversao" />
            <i className="block h-2 w-2 rounded-full bg-sphere-expansao" />
          </span>
          <span className="font-mono text-sm font-medium tracking-[0.28em] text-foreground">
            NEXARIUS
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-amber" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-amber/90"
        >
          Falar no WhatsApp <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
