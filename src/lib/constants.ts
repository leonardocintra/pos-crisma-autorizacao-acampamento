export type ContactChannel = {
  readonly id: "whatsapp" | "telefone" | "email";
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly description: string;
};

type IsoDateString =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type RetreatMetadata = {
  readonly name: string;
  readonly editionLabel: string;
  readonly city: string;
  readonly state: string;
  readonly startDate: IsoDateString;
  readonly endDate: IsoDateString;
  readonly theme: string;
  readonly description: string;
};

export const RETREAT_METADATA: RetreatMetadata = {
  name: "Acampamento Pós Crisma",
  editionLabel: "2026",
  city: "Franca",
  state: "SP",
  startDate: "2026-11-25",
  endDate: "2026-11-28",
  theme: "Corações ardentes, pés a caminho",
  description:
    "Quatro dias de oração, oficinas e convivência para os jovens recém crismados renovarem o sim ao Evangelho.",
} as const;

export const FOOTER_CREDIT =
  "Desenvolvido com amor por Leonardo Cintra (https://leonardocintra.com.br)" as const;

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp Pastoral",
    value: "+55 (16) 99999-0000",
    href: "https://wa.me/5516999990000",
    description: "Atendimento diário das 08h às 22h para dúvidas rápidas.",
  },
  {
    id: "telefone",
    label: "Telefone da secretaria",
    value: "+55 (16) 3333-0000",
    href: "tel:+551633330000",
    description:
      "Ligue em horário comercial para falar com a equipe administrativa.",
  },
  {
    id: "email",
    label: "E-mail oficial",
    value: "poscrisma@paroquiasaopedro.org",
    href: "mailto:poscrisma@paroquiasaopedro.org",
    description:
      "Ideal para enviar documentos, declarações e solicitações formais.",
  },
] as const;

export const LANDING_SECTIONS = [
  {
    title: "Experiências intensas de oração",
    description:
      "Celebrações diárias, direção espiritual e trilhas contemplativas ajudam os jovens a viverem um encontro pessoal com Cristo.",
  },
  {
    title: "Estrutura segura e acolhedora",
    description:
      "Equipes de acolhida, enfermaria 24h e alimentação supervisionada garantem tranquilidade para as famílias.",
  },
  {
    title: "Padrinhos presentes em cada passo",
    description:
      "Os padrinhos acompanham os afilhados durante dinâmicas e orações, reforçando o compromisso assumido no Crisma.",
  },
] as const;

export const FORM_COPY = {
  intro:
    "Preencha todos os campos para gerar o documento oficial de autorização. Após revisar os dados, um PDF será criado automaticamente para assinatura digital via gov.br.",
  medicalNotice:
    "Informe alergias, medicamentos e observações importantes para que a equipe de saúde esteja preparada.",
  consentText:
    "Autorizo a participação no Acampamento Pós Crisma e reconheço que quaisquer atendimentos médicos necessários poderão ser realizados pela equipe responsável.",
} as const;

export const OBSERVATION_LIMIT = 600 as const;
