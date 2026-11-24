import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  DicesIcon,
  FlameIcon,
  GamepadIcon,
  KeyIcon,
  MapPinIcon,
  ShieldIcon,
  SparklesIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";
import {
  Badge,
  BulletList,
  Callout,
  Detail,
  Eyebrow,
  MetaChip,
  PageHeader,
  SectionHeading,
} from "@/components/ui";
import {
  type GameAccent,
  type GameNight,
  gameNights,
  type Station,
  teams,
} from "@/data/games";

export const metadata: Metadata = {
  title: "Jogos",
  description:
    "As quatro noites de jogos e a caça ao tesouro do Acampamento Pós-Crisma 2026: estações, padrinhos, dinâmicas, regras e pontuação.",
};

const accentStyles: Record<
  GameAccent,
  {
    text: string;
    bg: string;
    softBg: string;
    border: string;
    bar: string;
    badge: "gold" | "clay" | "plum" | "ocean" | "rose";
  }
> = {
  plum: {
    text: "text-plum",
    bg: "bg-plum",
    softBg: "bg-plum/8",
    border: "border-plum/25",
    bar: "bg-plum",
    badge: "plum",
  },
  ocean: {
    text: "text-ocean",
    bg: "bg-ocean",
    softBg: "bg-ocean/8",
    border: "border-ocean/25",
    bar: "bg-ocean",
    badge: "ocean",
  },
  rose: {
    text: "text-rose",
    bg: "bg-rose",
    softBg: "bg-rose/8",
    border: "border-rose/25",
    bar: "bg-rose",
    badge: "rose",
  },
  gold: {
    text: "text-[#8a621c]",
    bg: "bg-gold",
    softBg: "bg-gold/10",
    border: "border-gold/30",
    bar: "bg-gold",
    badge: "gold",
  },
};

function NightHeader({ night, index }: { night: GameNight; index: number }) {
  const accent = accentStyles[night.accent];
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-paper shadow-card">
      <div className={`h-1.5 w-full ${accent.bar}`} />
      <div className="relative p-6 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-12 font-display text-[10rem] leading-none text-forest/[0.035] select-none"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={accent.badge}>{night.weekday}</Badge>
            <Badge>{night.date}</Badge>
            <Badge>
              <ClockIcon className="h-3 w-3" /> {night.start}
            </Badge>
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-forest sm:text-4xl">
            {night.title}
          </h2>
          <p className={`mt-1 text-sm font-bold ${accent.text}`}>
            {night.subtitle}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/75 sm:text-[0.9375rem]">
            {night.context}
          </p>
          <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
            <MapPinIcon className="h-4 w-4 text-gold" />
            {night.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

function Theater({ night }: { night: GameNight }) {
  if (!night.theater?.length) return null;
  return (
    <Detail
      summary="Roteiro do teatro inicial"
      hint={`${night.theater.length} falas`}
      className="mt-4 rounded-2xl border border-line bg-paper px-4 py-2 shadow-sm"
    >
      <ol className="space-y-3 px-1 pt-2 pb-3">
        {night.theater.map((line, index) => (
          <li
            key={`${line.speaker}-${index}`}
            className="text-sm leading-relaxed"
          >
            <span className="font-bold text-forest">{line.speaker}: </span>
            <span className="text-ink/80 italic">“{line.line}”</span>
          </li>
        ))}
      </ol>
    </Detail>
  );
}

function TeamRooms({ night }: { night: GameNight }) {
  if (!night.teamRooms?.length) return null;
  return (
    <div className="mt-6 rounded-2xl border border-line bg-cream/60 p-4 sm:p-5">
      <p className="text-[0.625rem] font-bold tracking-[0.18em] text-muted uppercase">
        Salas e confrontos
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {night.teamRooms.map((room) => (
          <li
            key={room.room}
            className="flex flex-col gap-0.5 rounded-xl border border-line bg-paper px-3 py-2"
          >
            <span className="text-xs font-bold text-forest">{room.room}</span>
            <span className="text-[0.6875rem] font-semibold text-muted">
              {room.teams}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Extras({ extras }: { extras?: Station["extras"] }) {
  if (!extras?.length) return null;
  return (
    <div className="mt-4 space-y-3">
      {extras.map((extra) => (
        <div
          key={extra.title}
          className="rounded-xl border border-gold/25 bg-gold-soft/20 p-4"
        >
          <p className="text-[0.625rem] font-bold tracking-[0.16em] text-[#7a5517] uppercase">
            {extra.title}
          </p>
          {extra.intro ? (
            <p className="mt-1 text-xs font-semibold text-ink/70">
              {extra.intro}
            </p>
          ) : null}
          {extra.items ? (
            <ul className="mt-2 space-y-1.5">
              {extra.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-ink/80"
                >
                  <span className="shrink-0 font-bold text-gold-ink">
                    {extra.numbered ? `${index + 1}.` : "•"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function StationCard({
  station,
  index,
  accent,
}: {
  station: Station;
  index: number;
  accent: (typeof accentStyles)[GameAccent];
}) {
  return (
    <article className="group rounded-2xl border border-line bg-paper shadow-sm transition-colors hover:border-forest/20">
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full ${accent.softBg} px-1.5 text-[0.625rem] font-bold ${accent.text}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-base font-bold text-forest">
                {station.name}
              </h4>
            </div>
            <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] font-semibold text-muted">
              <span className="inline-flex items-center gap-1">
                <MapPinIcon className="h-3.5 w-3.5" />
                {station.local}
              </span>
              <span className="inline-flex items-center gap-1">
                <UsersIcon className="h-3.5 w-3.5" />
                {station.leaders}
              </span>
            </p>
          </div>
        </div>

        {station.summary ? (
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            {station.summary}
          </p>
        ) : null}

        {station.enigma ? (
          <blockquote className="mt-3 rounded-xl border-l-2 border-ocean/50 bg-ocean/5 px-3 py-2 text-sm leading-relaxed text-ink/75 italic">
            {station.enigma}
          </blockquote>
        ) : null}

        {station.scare ? (
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-plum/8 px-2.5 py-1 text-[0.6875rem] font-bold text-plum">
            <SparklesIcon className="h-3 w-3" />
            {station.scare}
          </p>
        ) : null}

        <Detail
          summary="Ver dinâmica, regras e pontuação"
          hint="completo"
          className="mt-3 border-t border-line/80 pt-2"
        >
          <div className="space-y-4 pb-2">
            {station.support ? (
              <p className="text-xs font-semibold text-muted">
                Apoio: <span className="text-ink/80">{station.support}</span>
              </p>
            ) : null}

            {station.dialogue?.length ? (
              <div className="rounded-xl bg-cream/70 p-3">
                <p className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                  Diálogo da estação
                </p>
                <div className="mt-2 space-y-2">
                  {station.dialogue.map((line, dialogueIndex) => (
                    <p
                      key={`${line.speaker}-${dialogueIndex}`}
                      className="text-xs leading-relaxed text-ink/75"
                    >
                      <span className="font-bold text-forest">
                        {line.speaker}:{" "}
                      </span>
                      <span className="italic">“{line.line}”</span>
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <p className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                Dinâmica
              </p>
              <div className="mt-2">
                <BulletList items={station.dynamics} />
              </div>
            </div>

            {station.rules?.length ? (
              <div>
                <p className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                  Regras
                </p>
                <div className="mt-2">
                  <BulletList items={station.rules} marker="check" />
                </div>
              </div>
            ) : null}

            {station.penalties?.length ? (
              <div className="rounded-xl border border-clay/20 bg-clay/5 p-3">
                <p className="text-[0.625rem] font-bold tracking-[0.16em] text-clay uppercase">
                  Penalidades
                </p>
                <div className="mt-2">
                  <BulletList items={station.penalties} />
                </div>
              </div>
            ) : null}

            {station.scoring?.length ? (
              <div>
                <p className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                  Pontuação
                </p>
                <div className="mt-2">
                  <BulletList items={station.scoring} marker="check" />
                </div>
              </div>
            ) : null}

            <Extras extras={station.extras} />

            {station.note ? (
              <p className="rounded-xl bg-gold-soft/25 px-3 py-2 text-xs leading-relaxed text-[#6f4d12]">
                {station.note}
              </p>
            ) : null}
          </div>
        </Detail>
      </div>
    </article>
  );
}

export default function JogosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quatro noites · uma caça ao tesouro"
        title={
          <>
            Jogos <span className="italic text-gold-display">2026</span>
          </>
        }
        description="X-Men, Homem-Aranha, Programa Silvio Santos e Operação AVT. Cada noite tem seu teatro, suas estações e suas regras — tudo organizado para abrir no celular no meio do jogo."
        meta={
          <>
            <MetaChip icon={<GamepadIcon className="h-3.5 w-3.5" />}>
              4 noites
            </MetaChip>
            <MetaChip icon={<StarIcon className="h-3.5 w-3.5" />}>
              10 equipes
            </MetaChip>
            <MetaChip icon={<ShieldIcon className="h-3.5 w-3.5" />}>
              29 provas
            </MetaChip>
          </>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <nav
          aria-label="Noites de jogos"
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {gameNights.map((night, index) => {
            const accent = accentStyles[night.accent];
            return (
              <a
                key={night.id}
                href={`#${night.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`}
                />
                <span className="mt-1 flex items-center justify-between gap-2">
                  <span className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                    {night.weekday.replace("-feira", "")} · {night.date}
                  </span>
                  <span className={`font-display text-lg ${accent.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="mt-3 font-display text-lg leading-tight text-forest">
                  {night.title}
                </span>
                <span className="mt-2 flex items-center justify-between text-[0.6875rem] font-semibold text-muted">
                  {night.start}
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </nav>

        <section id="equipes" className="scroll-offset mt-12">
          <SectionHeading
            eyebrow="Times do acampamento"
            title="As dez equipes"
            description="A cor de cada equipe vale para todas as noites e para a caça ao tesouro."
          />
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {teams.map((team) => (
              <li
                key={team.name}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-paper px-3 py-2.5"
              >
                <span
                  className="h-6 w-6 shrink-0 rounded-full border border-ink/10"
                  style={{ backgroundColor: team.color }}
                />
                <span className="text-xs font-bold text-forest">
                  {team.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 space-y-16 sm:space-y-24">
          {gameNights.map((night, index) => {
            const accent = accentStyles[night.accent];
            return (
              <section
                key={night.id}
                id={night.id}
                className="scroll-offset"
                aria-labelledby={`${night.id}-title`}
              >
                <div id={`${night.id}-title`}>
                  <NightHeader night={night} index={index} />
                </div>

                <Theater night={night} />
                <TeamRooms night={night} />

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <Eyebrow>{night.stationsLabel}</Eyebrow>
                    <p className="mt-1 text-sm font-semibold text-forest">
                      {night.stations.length}{" "}
                      {night.stations.length === 1 ? "bloco" : "blocos"} para
                      consultar
                    </p>
                  </div>
                  <span
                    className={`hidden h-px flex-1 ${accent.bar} opacity-25 sm:block`}
                  />
                </div>

                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  {night.stations.map((station, stationIndex) => (
                    <StationCard
                      key={station.id}
                      station={station}
                      index={stationIndex}
                      accent={accent}
                    />
                  ))}
                </div>

                {night.supportStaff ? (
                  <div className="mt-5 rounded-2xl border border-line bg-cream/60 p-4 sm:p-5">
                    <p className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                      {night.supportStaff.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {night.supportStaff.names.map((name) => (
                        <span
                          key={name}
                          className="rounded-full border border-line bg-paper px-2.5 py-1 text-[0.6875rem] font-semibold text-forest/80"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {night.finale ? (
                  <div
                    className={`mt-5 rounded-2xl border p-5 ${accent.border} ${accent.softBg}`}
                  >
                    <p
                      className={`flex items-center gap-2 text-sm font-bold ${accent.text}`}
                    >
                      <FlameIcon className="h-4 w-4" />
                      {night.finale.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">
                      {night.finale.text}
                    </p>
                  </div>
                ) : null}

                {night.notes?.length ? (
                  <div className="mt-5">
                    <Callout tone="info" title="Lembretes da noite">
                      <BulletList items={night.notes} />
                    </Callout>
                  </div>
                ) : null}

                {night.extras?.length ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {night.extras.map((extra) => (
                      <div
                        key={extra.title}
                        className="rounded-2xl border border-line bg-paper p-4"
                      >
                        <p className="text-[0.625rem] font-bold tracking-[0.16em] text-gold-ink uppercase">
                          {extra.title}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {extra.items?.map((item) => (
                            <li
                              key={item}
                              className="text-xs leading-relaxed text-ink/75"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 flex justify-end">
                  <a
                    href="#indice-jogos"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-bold text-forest transition-colors hover:border-forest/30 hover:bg-forest/5"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5 -rotate-90" />
                    Voltar ao índice das noites
                  </a>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-16 border-t border-line pt-10 sm:mt-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow>Depois dos jogos</Eyebrow>
              <h2 className="mt-2 font-display text-2xl text-forest sm:text-3xl">
                A escala também é parte da missão.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                Enquanto as equipes jogam, alguém fica de vigia nas refeições.
                Confira o dia e o horário em que você está escalado.
              </p>
            </div>
            <Link
              href="/escala"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-bold text-cream transition-colors hover:bg-forest-soft"
            >
              Ver escala
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="plum">
              <DicesIcon className="h-3 w-3" /> X-Men
            </Badge>
            <Badge tone="ocean">
              <KeyIcon className="h-3 w-3" /> Homem-Aranha
            </Badge>
            <Badge tone="rose">
              <SparklesIcon className="h-3 w-3" /> Silvio Santos
            </Badge>
            <Badge tone="gold">
              <ShieldIcon className="h-3 w-3" /> Operação AVT
            </Badge>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-relaxed text-muted">
          <CalendarIcon className="mr-1 inline h-3.5 w-3.5" />
          24 a 29 de novembro de 2026 · consulta rápida durante os jogos
        </p>
      </div>
    </>
  );
}
