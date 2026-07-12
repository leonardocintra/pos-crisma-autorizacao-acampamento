import Link from "next/link";

import {
  CONTACT_CHANNELS,
  LANDING_SECTIONS,
  RETREAT_METADATA,
} from "@/lib/constants";
import { formatDateRange } from "@/lib/formatters";

const STEPS = [
  {
    title: "Preencha o formulário",
    description:
      "Informe dados do participante, responsáveis, padrinhos e informações médicas para que possamos cuidar de tudo com antecedência.",
  },
  {
    title: "Gere o PDF com um clique",
    description:
      "Após validar os campos, o sistema cria automaticamente o documento oficial em duas páginas, pronto para assinatura no gov.br.",
  },
  {
    title: "Envie para a coordenação",
    description:
      "Compartilhe o PDF com a equipe pastoral ou anexe no e-mail oficial para concluirmos o cadastro do(a) jovem.",
  },
];

export default function HomePage() {
  const dateRange = formatDateRange(
    RETREAT_METADATA.startDate,
    RETREAT_METADATA.endDate,
  );

  return (
    <div className="px-4 py-10">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-lg shadow-rose-100/60">
        <span className="text-sm font-semibold uppercase tracking-widest text-rose-500">
          {RETREAT_METADATA.theme}
        </span>
        <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl">
          Acampamento Pós Crisma {RETREAT_METADATA.editionLabel}
        </h1>
        <p className="text-lg text-zinc-600 md:text-xl">
          {RETREAT_METADATA.description} O retiro acontece entre {dateRange} na
          cidade de {RETREAT_METADATA.city}/{RETREAT_METADATA.state}. Toda a
          autorização agora acontece on-line para garantir agilidade e
          segurança.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/autorizacao"
            className="rounded-full bg-rose-600 px-6 py-3 text-center text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700"
            prefetch
          >
            Gerar documento de autorização
          </Link>
          <Link
            href="/contato"
            className="rounded-full border border-rose-200 px-6 py-3 text-center text-rose-700 hover:bg-rose-50"
            prefetch
          >
            Falar com a equipe
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {CONTACT_CHANNELS.slice(0, 3).map((channel) => (
            <div
              key={channel.id}
              className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4"
            >
              <p className="text-xs uppercase tracking-widest text-rose-500">
                {channel.label}
              </p>
              <p className="text-base font-semibold text-zinc-900">
                {channel.value}
              </p>
              <p className="text-sm text-zinc-500">{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {LANDING_SECTIONS.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">{section.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 w-full max-w-5xl rounded-3xl bg-zinc-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">
          Como funciona a autorização digital
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.title} className="space-y-2">
              <div className="text-sm font-semibold text-rose-200">
                Passo {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-zinc-200">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
