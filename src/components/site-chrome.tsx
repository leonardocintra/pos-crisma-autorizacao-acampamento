import Link from "next/link";
import { CrossIcon } from "@/components/icons";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/20 bg-forest text-cream transition-colors group-hover:bg-forest-soft">
            <CrossIcon className="h-4 w-4" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-lg font-semibold text-forest">
              Pós-Crisma
            </span>
            <span className="mt-1 block text-[0.625rem] font-bold tracking-[0.22em] text-muted uppercase">
              Acampamento 2026
            </span>
          </span>
        </Link>

        <SiteNav variant="top" />

        <span className="hidden rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-muted sm:inline-flex md:hidden">
          24–29 nov
        </span>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-parchment/40 pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl text-forest">
              Acampamento Pós-Crisma <span className="italic">2026</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Paróquia São Pedro e Paróquia Menino Jesus de Praga. Um só lugar
              para o roteiro, os jogos e a escala.
            </p>
          </div>
          <p className="max-w-xs text-sm font-medium text-forest/80 italic">
            &ldquo;Servi ao Senhor com alegria, e apresentai-vos a ele com
            cântico.&rdquo;
            <span className="mt-1 block text-xs font-bold tracking-[0.18em] text-muted not-italic uppercase">
              Salmos 100:2
            </span>
          </p>
        </div>

        <details className="group mt-8 border-t border-line/80 pt-4">
          <summary className="flex w-fit items-center gap-2 text-xs font-bold text-muted transition-colors hover:text-forest">
            Documentos originais
            <span className="text-[0.625rem] font-semibold tracking-wide uppercase">
              PDF
            </span>
          </summary>
          <ul className="mt-3 grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Roteiro geral", "/docs/roteiro-geral.pdf"],
              ["Escala da vigia", "/docs/escala-vigia-refeicoes.pdf"],
              ["Jogo X-Men", "/docs/jogo-x-men.pdf"],
              ["Jogo Homem-Aranha", "/docs/jogo-homem-aranha.pdf"],
              ["Jogo Silvio Santos", "/docs/jogo-silvio-santos.pdf"],
              ["Caça ao tesouro", "/docs/caca-ao-tesouro.pdf"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted underline decoration-line underline-offset-2 transition-colors hover:text-forest hover:decoration-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-xl text-[0.6875rem] leading-relaxed text-muted">
            Os PDFs originais ficam disponíveis como registro. Para consultar
            durante o acampamento, use as páginas deste site.
          </p>
        </details>
      </div>
    </footer>
  );
}
