import Link from "next/link";

import { RETREAT_METADATA } from "@/lib/constants";
import { formatDateRange } from "@/lib/formatters";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/contato", label: "Contato" },
  { href: "/autorizacao", label: "Gerar Documento" },
] as const;

export function SiteHeader() {
  const dateRange = formatDateRange(
    RETREAT_METADATA.startDate,
    RETREAT_METADATA.endDate,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <div>
          <Link
            href="/"
            className="text-lg font-semibold text-zinc-900 hover:text-rose-600"
            prefetch
          >
            {RETREAT_METADATA.name} {RETREAT_METADATA.editionLabel}
          </Link>
          <p className="text-sm text-zinc-500">
            {RETREAT_METADATA.city}/{RETREAT_METADATA.state} • {dateRange}
          </p>
        </div>
        <nav className="flex items-center gap-2 text-sm font-medium text-zinc-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-rose-100 hover:text-rose-700"
              prefetch
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
