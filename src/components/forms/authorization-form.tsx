"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { FORM_COPY, OBSERVATION_LIMIT } from "@/lib/constants";
import type { PadrinhoOption } from "@/lib/data";
import {
  type AuthorizationFormData,
  authorizationFormSchema,
} from "@/lib/form-schema";
import { generateAuthorizationPdf } from "@/lib/pdf/generator";

type AuthorizationFormProps = {
  readonly padrinhos: readonly PadrinhoOption[];
};

export function AuthorizationForm({ padrinhos }: AuthorizationFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<AuthorizationFormData>({
    resolver: zodResolver(authorizationFormSchema),
    defaultValues: {
      participantName: "",
      participantBirthDate: "",
      participantDocument: "",
      participantCommunity: "",
      guardianPrimaryName: "",
      guardianPrimaryDocument: "",
      guardianPrimaryPhone: "",
      guardianPrimaryEmail: "",
      guardianSecondaryName: "",
      guardianSecondaryPhone: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      padrinhoId: "",
      healthPlan: "",
      allergies: "",
      medications: "",
      observacoes: "",
      authorizeMedicalCare: false,
      termsAccepted: false,
    },
  });

  const observacoesValue = watch("observacoes") ?? "";

  const onSubmit = async (values: AuthorizationFormData) => {
    try {
      const selectedPadrinho = padrinhos.find(
        (item) => item.id === values.padrinhoId,
      );
      generateAuthorizationPdf({ data: values, padrinho: selectedPadrinho });
      setStatus("success");
      reset({ ...values, authorizeMedicalCare: true, termsAccepted: true });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const renderError = (message?: string) =>
    message ? <p className="text-sm text-rose-600">{message}</p> : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-3xl bg-white p-6 shadow-lg"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Formulário único
        </h2>
        <p className="text-sm text-zinc-600">{FORM_COPY.intro}</p>
      </div>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900">
          Dados do participante
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Nome completo
            </label>
            <input
              {...register("participantName")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
              placeholder="Nome do(a) participante"
            />
            {renderError(errors.participantName?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Data de nascimento
            </label>
            <input
              type="date"
              {...register("participantBirthDate")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.participantBirthDate?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Documento (RG/CPF)
            </label>
            <input
              {...register("participantDocument")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.participantDocument?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Comunidade ou grupo na paróquia
            </label>
            <input
              {...register("participantCommunity")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
              placeholder="Ex.: Crisma 2025"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900">Responsáveis</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Responsável principal
            </label>
            <input
              {...register("guardianPrimaryName")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.guardianPrimaryName?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Documento do responsável
            </label>
            <input
              {...register("guardianPrimaryDocument")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.guardianPrimaryDocument?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Telefone principal
            </label>
            <input
              {...register("guardianPrimaryPhone")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
              placeholder="(16) 99999-0000"
            />
            {renderError(errors.guardianPrimaryPhone?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">E-mail</label>
            <input
              type="email"
              {...register("guardianPrimaryEmail")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.guardianPrimaryEmail?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Responsável adicional (opcional)
            </label>
            <input
              {...register("guardianSecondaryName")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Telefone adicional
            </label>
            <input
              {...register("guardianSecondaryPhone")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900">
          Contato de emergência
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">Nome</label>
            <input
              {...register("emergencyContactName")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.emergencyContactName?.message)}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Telefone
            </label>
            <input
              {...register("emergencyContactPhone")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            {renderError(errors.emergencyContactPhone?.message)}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900">Padrinhos</h3>
        <div className="space-y-1">
          <label className="text-sm font-medium text-zinc-700">
            Selecione o casal de padrinhos
          </label>
          <select
            {...register("padrinhoId")}
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
          >
            <option value="">Escolha um padrinho cadastrado</option>
            {padrinhos.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          {renderError(errors.padrinhoId?.message)}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900">Saúde</h3>
        <p className="text-sm text-zinc-600">{FORM_COPY.medicalNotice}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Plano de saúde (se houver)
            </label>
            <input
              {...register("healthPlan")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Alergias
            </label>
            <input
              {...register("allergies")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Medicações
            </label>
            <input
              {...register("medications")}
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Observações (máx. {OBSERVATION_LIMIT} caracteres)
            </label>
            <textarea
              {...register("observacoes")}
              className="min-h-[120px] w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
            />
            <div className="flex items-center justify-between text-xs text-zinc-500">
              {renderError(errors.observacoes?.message)}
              <span>
                {observacoesValue.length}/{OBSERVATION_LIMIT}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl bg-rose-50 p-4 text-sm text-zinc-700">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("authorizeMedicalCare")}
            className="mt-1 h-4 w-4 rounded border-zinc-300"
          />
          <span>{FORM_COPY.consentText}</span>
        </label>
        {renderError(errors.authorizeMedicalCare?.message)}

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("termsAccepted")}
            className="mt-1 h-4 w-4 rounded border-zinc-300"
          />
          <span>
            Declaro ter lido todas as orientações enviadas pela coordenação do
            acampamento e estou ciente das regras de convivência.
          </span>
        </label>
        {renderError(errors.termsAccepted?.message)}
      </section>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-600">
          Após revisar os dados, clique para gerar o PDF com a autorização.
        </p>
        <button
          type="submit"
          className="rounded-full bg-rose-600 px-8 py-3 font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Gerando PDF..." : "Gerar PDF"}
        </button>
      </div>

      {status === "success" && (
        <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
          PDF gerado com sucesso! Confira o download no seu navegador.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Não foi possível gerar o PDF. Tente novamente e verifique se todos os
          campos estão preenchidos.
        </p>
      )}
    </form>
  );
}
