import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  CompassIcon,
  CrossIcon,
  FlameIcon,
  GamepadIcon,
  InfoIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  UsersIcon,
  UtensilsIcon,
} from "@/components/icons";
import {
  Badge,
  Callout,
  Detail,
  MetaChip,
  PageHeader,
  SectionHeading,
} from "@/components/ui";
import { camp, type EventKind, orientations, schedule } from "@/data/schedule";

export const metadata: Metadata = {
  title: "Roteiro",
  description:
    "Roteiro dia a dia do Acampamento Pós-Crisma 2026: horários, celebrações, leitores, cantos, catequeses e orientações.",
};

const kindConfig: Record<
  EventKind,
  {
    label: string;
    icon: typeof CrossIcon;
    dot: string;
    text: string;
  }
> = {
  liturgy: {
    label: "Celebração",
    icon: CrossIcon,
    dot: "bg-gold/15 border-gold/40",
    text: "text-gold-ink",
  },
  meal: {
    label: "Refeição",
    icon: UtensilsIcon,
    dot: "bg-moss/10 border-moss/30",
    text: "text-moss",
  },
  game: {
    label: "Jogo",
    icon: GamepadIcon,
    dot: "bg-plum/10 border-plum/30",
    text: "text-plum",
  },
  formation: {
    label: "Formação",
    icon: BookOpenIcon,
    dot: "bg-ocean/10 border-ocean/30",
    text: "text-ocean",
  },
  logistics: {
    label: "Logística",
    icon: UsersIcon,
    dot: "bg-clay/10 border-clay/30",
    text: "text-clay",
  },
  travel: {
    label: "Deslocamento",
    icon: CompassIcon,
    dot: "bg-clay/10 border-clay/30",
    text: "text-clay",
  },
  rest: {
    label: "Descanso",
    icon: SunIcon,
    dot: "bg-gold/10 border-gold/30",
    text: "text-gold-ink",
  },
  activity: {
    label: "Atividade",
    icon: SparklesIcon,
    dot: "bg-forest/10 border-forest/25",
    text: "text-forest",
  },
};

export default function RoteiroPage() {
  return (
    <>
      <PageHeader
        eyebrow="24 a 29 de novembro · Tempo Comum e Advento"
        title={
          <>
            Roteiro <span className="italic text-gold-display">geral</span>
          </>
        }
        description="O dia a dia do acampamento, do carregamento do caminhão à eucaristia do Advento. Toque em uma celebração para ver leitores, salmos e cantos."
        meta={
          <>
            <MetaChip icon={<CalendarIcon className="h-3.5 w-3.5" />}>
              6 dias
            </MetaChip>
            <MetaChip icon={<MapPinIcon className="h-3.5 w-3.5" />}>
              São Pedro · Menino Jesus de Praga
            </MetaChip>
            <MetaChip icon={<FlameIcon className="h-3.5 w-3.5" />}>
              4 noites de jogos
            </MetaChip>
          </>
        }
      />

      <nav
        aria-label="Dias do roteiro"
        className="sticky top-16 z-30 border-b border-line/80 bg-cream/92 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {schedule.map((day) => (
            <a
              key={day.id}
              href={`#dia-${day.id}`}
              className="shrink-0 rounded-full border border-line bg-paper px-3.5 py-2 text-xs font-bold whitespace-nowrap text-forest transition-colors hover:border-forest/30 hover:bg-forest/5"
            >
              {day.weekday.replace("-feira", "")}{" "}
              <span className="font-normal text-muted">{day.date}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Callout
          tone="gold"
          title="Como ler o roteiro"
          icon={<InfoIcon className="h-5 w-5" />}
        >
          Os horários seguem o roteiro geral. Celebrações com o selo{" "}
          <span className="font-semibold">“Ver celebração”</span> abrem os
          detalhes de leitores, salmos e cantos. Onde havia divergência entre o
          roteiro e o material de jogo, vale o horário do roteiro.
        </Callout>

        <div className="mt-12 space-y-14 sm:space-y-20">
          {schedule.map((day, dayIndex) => (
            <section
              key={day.id}
              id={`dia-${day.id}`}
              className="scroll-offset grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-12"
            >
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-center gap-4 lg:block">
                  <p
                    aria-hidden="true"
                    className="font-display text-5xl leading-none text-gold/60 lg:text-6xl"
                  >
                    {String(dayIndex + 1).padStart(2, "0")}
                  </p>
                  <div className="lg:mt-4">
                    <p className="text-[0.6875rem] font-bold tracking-[0.2em] text-muted uppercase">
                      {day.weekday}
                    </p>
                    <p className="mt-1 font-display text-3xl text-forest">
                      {day.date}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-forest/70">
                      {day.title}
                    </p>
                  </div>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                  {day.summary}
                </p>
              </div>

              <ol className="relative border-l border-line">
                {day.events.map((event, eventIndex) => {
                  const config = kindConfig[event.kind];
                  const Icon = config.icon;
                  return (
                    <li
                      key={`${event.time}-${eventIndex}`}
                      className="relative pb-9 pl-7 last:pb-0 sm:pl-9"
                    >
                      <span
                        className={`absolute top-0 -left-[1.125rem] flex h-9 w-9 items-center justify-center rounded-full border bg-paper ${config.dot}`}
                      >
                        <Icon className={`h-4 w-4 ${config.text}`} />
                      </span>

                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <time className="font-display text-xl text-forest sm:text-2xl">
                          {event.time}
                        </time>
                        <Badge
                          tone={event.kind === "liturgy" ? "gold" : "neutral"}
                        >
                          {config.label}
                        </Badge>
                        {event.highlight ? (
                          <span className="text-[0.625rem] font-bold tracking-[0.14em] text-gold-ink uppercase">
                            Destaque
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-2 text-base font-bold text-forest sm:text-lg">
                        {event.title}
                      </h3>

                      {event.summary ? (
                        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink/70">
                          {event.summary}
                        </p>
                      ) : null}

                      {event.details ? (
                        <Detail
                          summary="Ver celebração"
                          hint={`${event.details.reduce(
                            (total, group) => total + group.items.length,
                            0,
                          )} itens`}
                          className="mt-3 max-w-2xl rounded-2xl border border-line bg-paper px-4 py-2 shadow-sm"
                        >
                          <div className="space-y-5 px-1 pt-1 pb-3">
                            {event.details.map((group) => (
                              <div key={group.title}>
                                <p className="text-[0.625rem] font-bold tracking-[0.18em] text-gold-ink uppercase">
                                  {group.title}
                                </p>
                                <dl className="mt-2 divide-y divide-line/70">
                                  {group.items.map((item) => (
                                    <div
                                      key={`${item.label}-${item.value}`}
                                      className="grid gap-0.5 py-2 sm:grid-cols-[9.5rem_1fr] sm:gap-3"
                                    >
                                      <dt className="text-[0.6875rem] font-bold tracking-wide text-muted uppercase">
                                        {item.label}
                                      </dt>
                                      <dd className="text-sm text-ink/85">
                                        {item.value}
                                      </dd>
                                    </div>
                                  ))}
                                </dl>
                              </div>
                            ))}
                          </div>
                        </Detail>
                      ) : null}

                      {event.note ? (
                        <p className="mt-3 flex max-w-2xl gap-2 rounded-xl border border-gold/20 bg-gold-soft/20 px-3 py-2 text-xs leading-relaxed text-[#6f4d12]">
                          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                          {event.note}
                        </p>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>

        <section className="mt-16 border-t border-line pt-12 sm:mt-20">
          <SectionHeading
            eyebrow="Antes de dormir"
            title="Orientações que valem o acampamento inteiro"
            description="Pequenos lembretes que aparecem no roteiro e que ajudam a rotina a funcionar."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {orientations.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-paper p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/8 font-display text-sm font-semibold text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-forest">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-forest/15 bg-forest/5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="font-semibold text-forest">
                  Quer ver as regras dos jogos?
                </p>
                <p className="mt-1 text-sm text-ink/70">
                  Cada noite tem estações, padrinhos, dinâmicas e pontuação.
                </p>
              </div>
            </div>
            <Link
              href="/jogos"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 hover:decoration-gold"
            >
              Abrir os jogos
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-relaxed text-muted">
          {camp.name} · {camp.period} · {camp.liturgicalSeason}
        </p>
      </div>
    </>
  );
}
