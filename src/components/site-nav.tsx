"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenIcon,
  GamepadIcon,
  HomeIcon,
  UtensilsIcon,
} from "@/components/icons";

const items = [
  { href: "/", label: "Início", short: "Início", icon: HomeIcon },
  { href: "/roteiro", label: "Roteiro", short: "Roteiro", icon: BookOpenIcon },
  { href: "/jogos", label: "Jogos", short: "Jogos", icon: GamepadIcon },
  { href: "/escala", label: "Escala", short: "Escala", icon: UtensilsIcon },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav({
  variant = "bottom",
}: {
  variant?: "top" | "bottom";
}) {
  const pathname = usePathname();

  if (variant === "top") {
    return (
      <nav
        aria-label="Navegação principal"
        className="hidden items-center gap-1 md:flex"
      >
        {items.map(({ href, label }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "bg-forest text-cream"
                  : "text-muted hover:bg-forest/5 hover:text-forest"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line/80 bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 text-[0.6875rem] font-semibold tracking-wide transition-colors ${
                  active ? "text-forest" : "text-muted hover:text-forest"
                }`}
              >
                <span
                  className={`flex h-8 w-12 items-center justify-center rounded-full transition-colors ${
                    active ? "bg-forest/10" : ""
                  }`}
                >
                  <Icon className="h-[1.35rem] w-[1.35rem]" />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
