import { jsPDF } from "jspdf";

import { FOOTER_CREDIT, RETREAT_METADATA } from "@/lib/constants";
import type { PadrinhoOption } from "@/lib/data";
import { formatDateRange, formatFullDate } from "@/lib/formatters";
import type { AuthorizationFormData } from "@/lib/form-schema";

type PdfPayload = {
  readonly data: AuthorizationFormData;
  readonly padrinho?: PadrinhoOption;
};

const PAGE_MARGIN = 20;
const LINE_HEIGHT = 6;

const normalizeValue = (value?: string | null): string =>
  value && value.trim().length > 0 ? value.trim() : "—";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "participante";

export const generateAuthorizationPdf = ({
  data,
  padrinho,
}: PdfPayload): void => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let cursor = PAGE_MARGIN;

  const addTitle = (text: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(text, PAGE_MARGIN, cursor);
    cursor += LINE_HEIGHT + 2;
  };

  const addSection = (title: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title, PAGE_MARGIN, cursor);
    cursor += LINE_HEIGHT;
  };

  const addField = (label: string, value?: string | null) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(`${label}:`, PAGE_MARGIN, cursor);
    doc.setFont("helvetica", "normal");
    const display = normalizeValue(value);
    doc.text(display, PAGE_MARGIN + 55, cursor);
    cursor += LINE_HEIGHT;
  };

  const addParagraph = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const lines = doc.splitTextToSize(text, 170);
    doc.text(lines, PAGE_MARGIN, cursor);
    cursor += lines.length * (LINE_HEIGHT - 1) + 2;
  };

  const addFooter = () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(FOOTER_CREDIT, PAGE_MARGIN, 287);
  };

  const ensurePageSpace = (spaceNeeded = 40) => {
    if (cursor + spaceNeeded < 270) {
      return;
    }
    doc.addPage();
    cursor = PAGE_MARGIN;
  };

  addTitle(`Autorização ${RETREAT_METADATA.name}`);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(
    `${RETREAT_METADATA.city}/${RETREAT_METADATA.state} • ${formatDateRange(
      RETREAT_METADATA.startDate,
      RETREAT_METADATA.endDate,
    )}`,
    PAGE_MARGIN,
    cursor,
  );
  cursor += LINE_HEIGHT * 2;

  addSection("Dados do participante");
  addField("Nome", data.participantName);
  addField("Data de nascimento", formatFullDate(data.participantBirthDate));
  addField("Documento", data.participantDocument);
  addField("Comunidade/paróquia", data.participantCommunity);

  addSection("Responsáveis");
  addField("Responsável principal", data.guardianPrimaryName);
  addField("Documento", data.guardianPrimaryDocument);
  addField("Telefone", data.guardianPrimaryPhone);
  addField("E-mail", data.guardianPrimaryEmail);
  addField("Responsável adicional", data.guardianSecondaryName);
  addField("Telefone adicional", data.guardianSecondaryPhone);

  addSection("Contato de emergência");
  addField("Nome", data.emergencyContactName);
  addField("Telefone", data.emergencyContactPhone);

  addSection("Padrinhos acompanham");
  addField("Par", padrinho?.label ?? "Selecionado no formulário");

  addSection("Saúde");
  addField("Plano", data.healthPlan);
  addField("Alergias", data.allergies);
  addField("Medicações", data.medications);

  ensurePageSpace(100);
  addSection("Consentimento e observações");
  addParagraph(
    "Confirmo que sou responsável legal pelo participante e autorizo sua participação no Acampamento Pós Crisma, bem como eventuais atendimentos médicos julgados necessários pela equipe local.",
  );

  addParagraph(
    data.observacoes && data.observacoes.trim().length > 0
      ? `Observações adicionais: ${data.observacoes.trim()}`
      : "Observações adicionais: nenhuma informação complementar foi fornecida.",
  );

  cursor += LINE_HEIGHT * 2;
  doc.setDrawColor(120, 120, 120);
  doc.line(40, cursor, 170, cursor);
  cursor += LINE_HEIGHT;
  doc.setFont("helvetica", "normal");
  doc.text("Assinatura digital do responsável (via gov.br)", 55, cursor);

  addFooter();

  const filename = `autorizacao-${slugify(data.participantName)}.pdf`;
  doc.save(filename);
};
