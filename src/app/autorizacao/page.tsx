import type { Metadata } from "next";

import { AuthorizationForm } from "@/components/forms/authorization-form";
import { FORM_COPY, RETREAT_METADATA } from "@/lib/constants";
import { PADRINHOS } from "@/lib/data";
import { formatDateRange } from "@/lib/formatters";

export const metadata: Metadata = {
  title: `${RETREAT_METADATA.name} | Autorização digital`,
  description: "Formulário oficial para gerar o PDF de autorização do retiro.",
};

export default function AutorizacaoPage() {
  const dateRange = formatDateRange(
    RETREAT_METADATA.startDate,
    RETREAT_METADATA.endDate,
  );

  return (
    <div className="px-4 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <section className="rounded-3xl bg-zinc-900 p-6 text-white">
          <p className="text-sm uppercase tracking-widest text-rose-200">
            Documento oficial
          </p>
          <h1 className="mt-2 text-3xl font-semibold">
            Autorização digital do Acampamento Pós Crisma
          </h1>
          <p className="mt-3 text-sm text-zinc-200">
            Retiro de {dateRange} — {RETREAT_METADATA.city}/
            {RETREAT_METADATA.state}. {FORM_COPY.intro}
          </p>
        </section>

        <AuthorizationForm padrinhos={PADRINHOS} />
      </div>
    </div>
  );
}
