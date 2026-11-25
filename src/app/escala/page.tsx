import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  FlameIcon,
  MoonIcon,
  SunIcon,
  UtensilsIcon,
} from "@/components/icons";
import {
  Callout,
  Eyebrow,
  MetaChip,
  NameChip,
  PageHeader,
  SectionHeading,
} from "@/components/ui";
import { dutyWarnings, type MealDuty, mealDuty } from "@/data/meal-duty";
import { nightDuty, nightDutyInfo } from "@/data/night-duty";

export const metadata: Metadata = {
  title: "Escala",
  description:
    "Escala da vigia das refeições e da vigia noturna do Acampamento Pós-Crisma 2026, por dia e por turno.",
};

const mealStyles: Record<
  MealDuty["meal"],
  { icon: typeof SunIcon; bg: string; text: string }
> = {
  "Café da manhã": {
    icon: SunIcon,
    bg: "bg-gold-soft/40",
    text: "text-[#8a621c]",
  },
  Almoço: { icon: UtensilsIcon, bg: "bg-moss/10", text: "text-moss" },
  Jantar: { icon: FlameIcon, bg: "bg-clay/10", text: "text-clay" },
};

export default function EscalaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vigia das refeições e da noite · 25 a 29 de novembro"
        title={
          <>
            Escala da <span className="italic text-gold-display">vigia</span>
          </>
        }
        description="Quem acompanha cada refeição e cada turno da noite, dia por dia. Confira o seu nome antes de sentar à mesa — e combine qualquer troca com antecedência."
        meta={
          <>
            <MetaChip icon={<CalendarIcon className="h-3.5 w-3.5" />}>
              5 dias
            </MetaChip>
            <MetaChip icon={<UtensilsIcon className="h-3.5 w-3.5" />}>
              12 refeições
            </MetaChip>
            <MetaChip icon={<UtensilsIcon className="h-3.5 w-3.5" />}>
              Café, almoço e jantar
            </MetaChip>
            <MetaChip icon={<MoonIcon className="h-3.5 w-3.5" />}>
              4 noites de vigia
            </MetaChip>
          </>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Callout
            tone="warn"
            title={dutyWarnings[0].title}
            icon={<AlertIcon className="h-5 w-5" />}
          >
            {dutyWarnings[0].body}
          </Callout>
          <Callout
            tone="info"
            title={dutyWarnings[1].title}
            icon={<CheckIcon className="h-5 w-5" />}
          >
            {dutyWarnings[1].body}
          </Callout>
        </div>

        <nav
          aria-label="Seções da escala"
          className="mt-8 flex flex-wrap gap-2"
        >
          <a
            href="#refeicoes"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-paper px-4 text-xs font-bold text-forest transition-colors hover:border-forest/30 hover:bg-forest/5"
          >
            <UtensilsIcon className="h-3.5 w-3.5" />
            Refeições
          </a>
          <a
            href="#vigia-noturna"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-paper px-4 text-xs font-bold text-forest transition-colors hover:border-forest/30 hover:bg-forest/5"
          >
            <MoonIcon className="h-3.5 w-3.5" />
            Vigia noturna
          </a>
        </nav>

        <div className="mt-10">
          <SectionHeading
            id="refeicoes"
            eyebrow="Dia a dia"
            title="Quem fica de olho"
            description="Cada cartão reúne as refeições do dia e os responsáveis pela vigia."
          />
        </div>

        <div className="space-y-4">
          {mealDuty.map((day, dayIndex) => (
            <section
              key={day.id}
              id={`escala-${day.id}`}
              className="scroll-offset overflow-hidden rounded-[1.5rem] border border-line bg-paper shadow-card"
            >
              <div className="flex items-center gap-4 border-b border-line bg-cream/50 px-5 py-4 sm:px-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/30 font-display text-sm font-semibold text-[#7a5517]">
                  {String(dayIndex + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
                  <h2 className="text-lg font-bold text-forest sm:text-xl">
                    {day.weekday}
                  </h2>
                  <span className="font-display text-2xl text-forest/80">
                    {day.date}
                  </span>
                </div>
              </div>

              <div className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {day.meals.map((meal) => {
                  const style = mealStyles[meal.meal];
                  const Icon = style.icon;
                  return (
                    <div key={meal.meal} className="p-5 sm:p-6">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${style.bg} ${style.text}`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-sm font-bold text-forest">
                          {meal.meal}
                        </h3>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {meal.people.map((person) => (
                          <NameChip key={person}>{person}</NameChip>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <section
          id="vigia-noturna"
          className="scroll-offset mt-14 border-t border-line pt-12"
        >
          <SectionHeading
            eyebrow="Depois do jantar"
            title="Vigia noturna"
            description={nightDutyInfo.body}
          />

          <div className="grid items-start gap-4 lg:grid-cols-2">
            {nightDuty.map((day) => (
              <article
                key={day.id}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-paper shadow-card"
              >
                <div className="flex items-center gap-4 border-b border-line bg-forest/5 px-5 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <MoonIcon className="h-5 w-5" />
                  </span>
                  <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold text-forest sm:text-lg">
                      {day.weekday}
                    </h3>
                    <span className="text-xs font-bold tracking-wide text-muted uppercase">
                      {day.date} · {day.shifts.length} turnos
                    </span>
                  </div>
                </div>

                <ol className="divide-y divide-line">
                  {day.shifts.map((shift, shiftIndex) => (
                    <li
                      key={`${shift.time}-${shiftIndex}`}
                      className="grid grid-cols-[6.25rem_1fr] gap-3 px-5 py-3.5"
                    >
                      <span className="pt-1 font-display text-[0.9375rem] leading-tight text-forest">
                        {shift.time}
                      </span>
                      <div>
                        <div className="flex flex-wrap gap-1.5">
                          {shift.people.map((person) => (
                            <NameChip key={person}>{person}</NameChip>
                          ))}
                        </div>
                        {shift.note ? (
                          <p className="mt-2 inline-flex items-start gap-1.5 rounded-lg bg-gold-soft/30 px-2.5 py-1.5 text-[0.6875rem] font-semibold leading-relaxed text-[#6f4d12]">
                            <AlertIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {shift.note}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>

          <div className="mt-4">
            <Callout tone="warn" title="Atenção na sexta-feira">
              O último turno da sexta termina às 3h e é responsável por{" "}
              <strong>acordar os jovens para a Missa</strong>. Nas outras
              noites, a vigia segue até as 7h.
            </Callout>
          </div>
        </section>

        <div className="mt-10 rounded-[1.5rem] border border-forest/15 bg-forest p-6 text-cream sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <Eyebrow>Antes de assumir</Eyebrow>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl">
                A vigia começa antes do primeiro prato.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/75">
                Chegue alguns minutos antes, confira se os jovens estão todos
                presentes e combine com a pessoa que assume depois de você. Na
                noite, o mesmo cuidado: receba o turno, confira o horário e
                passe a vez. A escala é uma forma de cuidar, não uma
                formalidade.
              </p>
            </div>
            <Link
              href="/roteiro"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream px-5 text-sm font-bold text-forest transition-colors hover:bg-gold-soft"
            >
              Ver o roteiro
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            [
              "Confira o dia",
              "A escala muda a cada refeição e a cada turno. Veja o cartão do dia certo.",
            ],
            [
              "Avise a troca",
              "Se não puder, combine com alguém e avise a coordenação.",
            ],
            [
              "Fique de olho",
              "Nos ônibus, todos os padrinhos ajudam com os jovens e as malas.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-paper p-4"
            >
              <p className="text-sm font-bold text-forest">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-muted">
          Escala da vigia das refeições e da noite · Acampamento Pós-Crisma 2026
        </p>
      </div>
    </>
  );
}
