import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  FlameIcon,
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

export const metadata: Metadata = {
  title: "Escala",
  description:
    "Escala da vigia das refeições do Acampamento Pós-Crisma 2026, por dia e por refeição.",
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
        eyebrow="Vigia das refeições · 25 a 29 de novembro"
        title={
          <>
            Escala da <span className="italic text-gold-display">vigia</span>
          </>
        }
        description="Quem acompanha cada refeição, dia por dia. Confira o seu nome antes de sentar à mesa — e combine qualquer troca com antecedência."
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

        <div className="mt-10">
          <SectionHeading
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

        <div className="mt-10 rounded-[1.5rem] border border-forest/15 bg-forest p-6 text-cream sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <Eyebrow>Antes das refeições</Eyebrow>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl">
                A vigia começa antes do primeiro prato.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/75">
                Chegue alguns minutos antes, confira se os jovens estão todos
                presentes e combine com a pessoa que assume depois de você. A
                escala é uma forma de cuidar, não uma formalidade.
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
              "A escala muda a cada refeição. Veja o cartão do dia certo.",
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
          Escala da vigia das refeições · Acampamento Pós-Crisma 2026
        </p>
      </div>
    </>
  );
}
