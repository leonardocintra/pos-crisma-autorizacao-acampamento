import type { ReactNode } from "react";
import {
  AlertIcon,
  ChevronDownIcon,
  InfoIcon,
  SparklesIcon,
} from "@/components/icons";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold-ink uppercase">
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line/80 bg-paper">
      <div className="pointer-events-none absolute inset-0 paper-grain opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full border border-gold/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-6 h-40 w-40 rounded-full border border-gold/20"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-14">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
        {meta ? <div className="mt-7 flex flex-wrap gap-2">{meta}</div> : null}
      </div>
    </header>
  );
}

export function MetaChip({
  icon,
  children,
}: {
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/60 px-3 py-1.5 text-xs font-semibold text-forest/80">
      {icon}
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-offset mb-6">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-2 font-display text-2xl text-forest sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "gold" | "forest" | "clay" | "plum" | "ocean" | "rose";
}) {
  const tones = {
    neutral: "border-line bg-cream text-muted",
    gold: "border-gold/30 bg-gold-soft/50 text-[#7a5517]",
    forest: "border-forest/20 bg-forest/8 text-forest",
    clay: "border-clay/25 bg-clay/10 text-clay",
    plum: "border-plum/25 bg-plum/10 text-plum",
    ocean: "border-ocean/25 bg-ocean/10 text-ocean",
    rose: "border-rose/25 bg-rose/10 text-rose",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Callout({
  title,
  children,
  tone = "info",
  icon,
}: {
  title?: string;
  children: ReactNode;
  tone?: "info" | "warn" | "gold" | "forest";
  icon?: ReactNode;
}) {
  const styles = {
    info: "border-ocean/20 bg-ocean/5 text-ocean",
    warn: "border-clay/25 bg-clay/8 text-clay",
    gold: "border-gold/35 bg-gold-soft/35 text-[#6f4d12]",
    forest: "border-forest/20 bg-forest/5 text-forest",
  } as const;

  const DefaultIcon =
    tone === "warn" ? AlertIcon : tone === "gold" ? SparklesIcon : InfoIcon;

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${styles[tone]}`}>
      <div className="flex gap-3">
        <span className="mt-0.5 shrink-0">
          {icon ?? <DefaultIcon className="h-5 w-5" />}
        </span>
        <div className="min-w-0">
          {title ? <p className="font-semibold">{title}</p> : null}
          <div
            className={`text-sm leading-relaxed ${title ? "mt-1" : ""} text-ink/80`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Detail({
  summary,
  children,
  hint,
  className = "",
}: {
  summary: ReactNode;
  children: ReactNode;
  hint?: string;
  className?: string;
}) {
  return (
    <details className={`group ${className}`}>
      <summary className="flex list-none items-center justify-between gap-3 rounded-xl px-1 py-2 text-sm font-bold text-forest transition-colors hover:text-forest-soft">
        <span className="flex items-center gap-2">
          {summary}
          {hint ? (
            <span className="hidden text-[0.6875rem] font-semibold tracking-wide text-muted uppercase sm:inline">
              {hint}
            </span>
          ) : null}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-paper transition-transform duration-200 group-open:rotate-180">
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </summary>
      <div className="detail-body pt-2">{children}</div>
    </details>
  );
}

export function NameChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-forest/85">
      {children}
    </span>
  );
}

export function BulletList({
  items,
  marker = "dot",
}: {
  items: string[];
  marker?: "dot" | "check";
}) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-relaxed text-ink/80"
        >
          <span
            aria-hidden="true"
            className={`mt-[0.45rem] shrink-0 ${
              marker === "check"
                ? "h-1.5 w-3 rotate-[-45deg] border-b-2 border-l-2 border-moss"
                : "h-1.5 w-1.5 rounded-full bg-gold"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
