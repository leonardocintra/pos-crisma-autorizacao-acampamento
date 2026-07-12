import { z } from "zod";

import { OBSERVATION_LIMIT } from "@/lib/constants";

const phoneMessage = "Informe um telefone com DDD";
const phoneSchema = z
  .string()
  .min(10, phoneMessage)
  .regex(/^[0-9()+\-\s]+$/, phoneMessage);

export const authorizationFormSchema = z.object({
  participantName: z.string().min(3, "Informe o nome completo do participante"),
  participantBirthDate: z.string().min(8, "Informe a data de nascimento"),
  participantDocument: z.string().min(5, "Informe um documento válido"),
  participantCommunity: z.string().optional(),
  guardianPrimaryName: z
    .string()
    .min(3, "Informe o nome do responsável principal"),
  guardianPrimaryDocument: z.string().min(5, "Documento obrigatório"),
  guardianPrimaryPhone: phoneSchema,
  guardianPrimaryEmail: z.string().email("Informe um e-mail válido"),
  guardianSecondaryName: z.string().optional(),
  guardianSecondaryPhone: z.string().optional(),
  emergencyContactName: z.string().min(3, "Informe um contato de emergência"),
  emergencyContactPhone: phoneSchema,
  padrinhoId: z.string().min(1, "Selecione um padrinho"),
  healthPlan: z.string().optional(),
  allergies: z.string().optional(),
  medications: z.string().optional(),
  observacoes: z
    .string()
    .max(OBSERVATION_LIMIT, `Máximo de ${OBSERVATION_LIMIT} caracteres`)
    .optional(),
  authorizeMedicalCare: z.literal(true, {
    errorMap: () => ({
      message: "É necessário autorizar os cuidados médicos.",
    }),
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({
      message: "Confirme que leu e concorda com os termos do retiro.",
    }),
  }),
});

export type AuthorizationFormSchema = typeof authorizationFormSchema;
export type AuthorizationFormData = z.infer<typeof authorizationFormSchema>;
