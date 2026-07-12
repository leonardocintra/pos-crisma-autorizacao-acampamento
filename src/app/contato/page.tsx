import type { Metadata } from "next";
import Link from "next/link";

import { CONTACT_CHANNELS, RETREAT_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${RETREAT_METADATA.name} | Contato`,
  description:
    "Canais oficiais para falar com a coordenação do Acampamento Pós Crisma.",
};

export default function ContatoPage() {
  return (
    <div className="px-4 py-10">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-3xl bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
          Estamos por perto
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900">
          Fale com a equipe
        </h1>
        <p className="text-base text-zinc-600">
          Use um dos canais abaixo para tirar dúvidas sobre logística,
          pagamentos ou situações específicas envolvendo o participante. As
          respostas acontecem sempre no mesmo dia útil.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => (
            <article
              key={channel.id}
              className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-rose-500">
                {channel.label}
              </h2>
              <a
                href={channel.href}
                className="text-lg font-semibold text-zinc-900 hover:text-rose-600"
              >
                {channel.value}
              </a>
              <p className="text-sm text-zinc-500">{channel.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-2xl bg-rose-50 p-6 text-sm text-zinc-700">
          <p className="font-semibold text-rose-600">
            Tempo de resposta previsto
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>WhatsApp: até 1 hora entre 8h e 22h</li>
            <li>Telefone: atendimento das 8h às 17h (dias úteis)</li>
            <li>Email: retorno em até 24 horas úteis com protocolo</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-rose-200 bg-white/60 p-5 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>
            Pronto para autorizar? Retorne para o formulário único e gere o PDF
            em poucos minutos.
          </span>
          <Link
            href="/autorizacao"
            className="rounded-full bg-rose-600 px-6 py-3 text-center font-semibold text-white hover:bg-rose-700"
            prefetch
          >
            Ir para o formulário
          </Link>
        </div>
      </section>
    </div>
  );
}
