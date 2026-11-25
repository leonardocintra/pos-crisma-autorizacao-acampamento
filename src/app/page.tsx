import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  CompassIcon,
  GamepadIcon,
  MapPinIcon,
  SparklesIcon,
  UtensilsIcon,
} from "@/components/icons";
import { teams } from "@/data/games";
import { camp, scheduleHighlights } from "@/data/schedule";

const sections = [
  {
    href: "/roteiro",
    number: "01",
    title: "Roteiro",
    description:
      "O dia a dia do acampamento: horários, refeições, celebrações, leitores, cantos e catequeses.",
    meta: "6 dias · 24 a 29/11",
    icon: BookOpenIcon,
    accent: "text-gold-ink",
    tint: "bg-gold-soft/40",
  },
  {
    href: "/jogos",
    number: "02",
    title: "Jogos",
    description:
      "As quatro noites temáticas e a caça ao tesouro, com estações, padrinhos, regras e pontuação.",
    meta: "4 noites + caça ao tesouro",
    icon: GamepadIcon,
    accent: "text-plum",
    tint: "bg-plum/10",
  },
  {
    href: "/escala",
    number: "03",
    title: "Escala",
    description:
      "Quem fica de vigia nas refeições e nos turnos da noite, dia por dia, para ninguém ficar de fora ou sobrecarregado.",
    meta: "12 refeições + 4 noites",
    icon: UtensilsIcon,
    accent: "text-moss",
    tint: "bg-moss/10",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/80 bg-paper">
        <div className="pointer-events-none absolute inset-0 paper-grain opacity-70" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full border border-gold/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full border border-gold/20"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-12 pb-14 sm:px-6 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pt-20 lg:pb-20">
          <div>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.6875rem] font-bold tracking-[0.2em] text-muted uppercase">
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="h-3.5 w-3.5 text-gold" />
                24–29 de novembro de 2026
              </span>
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-gold/70"
              />
              <span>Tempo Comum e Advento</span>
            </p>

            <h1 className="mt-5 font-display text-[2.9rem] leading-[0.95] tracking-[-0.035em] text-forest sm:text-[4.2rem] lg:text-[5rem]">
              Acampamento
              <span className="block italic text-forest-soft">Pós-Crisma</span>
              <span className="mt-1 flex items-baseline gap-4">
                <span className="text-gold-display">2026</span>
                <span
                  aria-hidden="true"
                  className="mb-2 hidden h-px flex-1 bg-line sm:block"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-ink/75">
              Roteiro, jogos e escala em um só lugar. Chega de procurar PDF no
              grupo do WhatsApp na hora em que todo mundo precisa da mesma
              informação.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/roteiro"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-bold text-cream transition-colors hover:bg-forest-soft"
              >
                Abrir o roteiro
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/jogos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/20 bg-cream/60 px-6 text-sm font-bold text-forest transition-colors hover:bg-cream"
              >
                Ver os jogos
              </Link>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-muted">
              <MapPinIcon className="h-4 w-4 text-gold" />
              {camp.parishes[0]}
              <span aria-hidden="true" className="text-line">
                ·
              </span>
              {camp.parishes[1]}
            </p>
          </div>

          <aside className="relative">
            <div className="absolute -top-5 -left-4 hidden h-24 w-24 rounded-full border border-gold/30 lg:block" />
            <div className="relative rounded-[1.75rem] border border-line bg-cream/80 p-6 shadow-card backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.625rem] font-bold tracking-[0.22em] text-muted uppercase">
                  Guia do acampamento
                </p>
                <CompassIcon className="h-5 w-5 text-gold" />
              </div>
              <p className="mt-4 font-display text-2xl leading-snug text-forest">
                Tudo o que o grupo precisa, sem depender de quem tem o arquivo.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                <div>
                  <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Dias
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-forest">06</dd>
                </div>
                <div>
                  <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Noites de jogo
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-forest">04</dd>
                </div>
                <div>
                  <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Equipes
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-forest">10</dd>
                </div>
                <div>
                  <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Estações na caça
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-forest">12</dd>
                </div>
              </dl>

              <ul
                aria-label="Cores das equipes"
                className="mt-6 flex flex-wrap gap-1.5"
              >
                {teams.map((team) => (
                  <li
                    key={team.name}
                    aria-label={team.name}
                    title={team.name}
                    className="h-4 w-4 rounded-full border border-ink/10"
                    style={{ backgroundColor: team.color }}
                  />
                ))}
              </ul>
              <p className="mt-3 text-[0.6875rem] font-semibold text-muted">
                Dez equipes, uma missão.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold-ink uppercase">
              O guia
            </p>
            <h2 className="mt-2 font-display text-3xl text-forest sm:text-4xl">
              Por onde começar
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted sm:block">
            Três seções, a mesma informação para todo mundo.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-lift sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${section.tint} ${section.accent}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-semibold text-line">
                    {section.number}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl text-forest">
                  {section.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {section.description}
                </p>
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-line/80 pt-4">
                  <span className="text-[0.6875rem] font-bold tracking-wide text-muted uppercase">
                    {section.meta}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-forest transition-all group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold-ink uppercase">
              Antes de sair
            </p>
            <h2 className="mt-2 font-display text-3xl text-forest sm:text-4xl">
              Próximos momentos
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Os primeiros compromissos do acampamento. O roteiro completo tem
              todos os horários, dia por dia.
            </p>
            <Link
              href="/roteiro"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 hover:decoration-gold"
            >
              Ver roteiro completo
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <ol className="divide-y divide-line overflow-hidden rounded-[1.5rem] border border-line bg-paper shadow-card">
            {scheduleHighlights.map((item) => (
              <li
                key={`${item.day}-${item.time}`}
                className="flex gap-4 p-5 sm:p-6"
              >
                <div className="w-20 shrink-0 border-r border-line pr-4">
                  <p className="text-[0.625rem] font-bold tracking-[0.12em] text-gold-ink uppercase">
                    {item.day.split(",")[0]}
                  </p>
                  <p className="mt-1 font-display text-xl text-forest">
                    {item.time}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-forest">{item.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-forest px-6 py-10 text-cream sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 paper-grain opacity-20" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -bottom-24 h-64 w-64 rounded-full border border-cream/15"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold-soft uppercase">
                Tudo em um só lugar
              </p>
              <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight sm:text-4xl">
                O grupo inteiro lendo a mesma página.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-[0.9375rem]">
                {camp.quote}
                <span className="mt-1 block text-[0.625rem] font-bold tracking-[0.18em] text-gold-soft uppercase">
                  {camp.quoteReference}
                </span>
              </p>
            </div>
            <ul className="space-y-3">
              {[
                [
                  "Fim dos arquivos perdidos",
                  "O roteiro e os jogos ficam no mesmo endereço, sempre atualizados.",
                ],
                [
                  "Consulta no celular",
                  "Horários, regras e escala pensados para abrir em uma mão só.",
                ],
                [
                  "A mesma informação",
                  "Padrinhos, jovens e famílias consultam a mesma fonte.",
                ],
              ].map(([title, body]) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-4"
                >
                  <SparklesIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-cream/70">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
