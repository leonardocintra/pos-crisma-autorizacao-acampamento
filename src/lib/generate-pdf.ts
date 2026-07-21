import { jsPDF } from "jspdf";

export interface Remedio {
  id: number;
  nome: string;
  dose: string;
  horario: string;
}

export interface DadosFormulario {
  // Dados do responsável
  responsavelNome: string;
  responsavelNacionalidade: string;
  responsavelRg: string;
  responsavelCpf: string;
  responsavelEndereco: string;
  responsavelNumero: string;
  responsavelBairro: string;
  responsavelCidade: string;
  responsavelUf: string;

  // Dados do jovem
  jovemNome: string;
  jovemCidadeNascimento: string;
  jovemEstadoNascimento: string;
  jovemNascimento: string;
  jovemRg: string;
  jovemCpf: string;

  // Dados de saúde
  planoSaude: boolean;
  planoSaudeQual?: string;
  problemaSaude: boolean;
  problemaSaudeQual?: string;
  tratamento: boolean;
  tratamentoQual?: string;
  convulsao: boolean;
  convulsaoSituacao?: string;
  vacinaTetanica: boolean;
  vacinaTetanicaQuando?: string;
  alergia: boolean;
  alergiaQual?: string;
  restricaoExercicios: boolean;
  restricaoExerciciosDetalhes?: string;
  restricaoAlimentar: boolean;
  restricaoAlimentarQual?: string;
  diabetico: boolean;
  usoInsulina?: boolean;
  frequenciaInsulina?: string;
  tratamentoMedico: boolean;
  remedios: Remedio[];
  tipoSanguineo: string;

  // Medicação de emergência
  medicacaoFebre: string;
  medicacaoDorCabeca: string;
  medicacaoDorGarganta: string;
  medicacaoContusao: string;
  medicacaoCorte: string;
  medicacaoDiarreia: string;

  // Autorização
  autorizoImagem: string;
}

export function parseFormData(formData: FormData): DadosFormulario {
  const get = (name: string) => formData.get(name)?.toString() ?? "";

  const remedios: Remedio[] = [];
  const remedioRegex = /^remedioNome-(\d+)$/;

  for (const key of formData.keys()) {
    const match = remedioRegex.exec(key);
    if (match) {
      const id = Number(match[1]);
      remedios.push({
        id,
        nome: get(`remedioNome-${id}`),
        dose: get(`remedioDose-${id}`),
        horario: get(`remedioHorario-${id}`),
      });
    }
  }

  return {
    responsavelNome: get("responsavelNome"),
    responsavelNacionalidade: get("responsavelNacionalidade"),
    responsavelRg: get("responsavelRg"),
    responsavelCpf: get("responsavelCpf"),
    responsavelEndereco: get("responsavelEndereco"),
    responsavelNumero: get("responsavelNumero"),
    responsavelBairro: get("responsavelBairro"),
    responsavelCidade: get("responsavelCidade"),
    responsavelUf: get("responsavelUf"),
    jovemNome: get("jovemNome"),
    jovemCidadeNascimento: get("jovemCidadeNascimento"),
    jovemEstadoNascimento: get("jovemEstadoNascimento"),
    jovemNascimento: get("jovemNascimento"),
    jovemRg: get("jovemRg"),
    jovemCpf: get("jovemCpf"),
    planoSaude: get("planoSaude") === "on",
    planoSaudeQual: get("planoSaudeQual") || undefined,
    problemaSaude: get("problemaSaude") === "on",
    problemaSaudeQual: get("problemaSaudeQual") || undefined,
    tratamento: get("tratamento") === "on",
    tratamentoQual: get("tratamentoQual") || undefined,
    convulsao: get("convulsao") === "on",
    convulsaoSituacao: get("convulsaoSituacao") || undefined,
    vacinaTetanica: get("vacinaTetanica") === "on",
    vacinaTetanicaQuando: get("vacinaTetanicaQuando") || undefined,
    alergia: get("alergia") === "on",
    alergiaQual: get("alergiaQual") || undefined,
    restricaoExercicios: get("restricaoExercicios") === "on",
    restricaoExerciciosDetalhes:
      get("restricaoExerciciosDetalhes") || undefined,
    restricaoAlimentar: get("restricaoAlimentar") === "on",
    restricaoAlimentarQual: get("restricaoAlimentarQual") || undefined,
    diabetico: get("diabetico") === "on",
    usoInsulina: get("usoInsulina") === "on" || undefined,
    frequenciaInsulina: get("frequenciaInsulina") || undefined,
    tratamentoMedico: get("tratamentoMedico") === "on",
    remedios,
    tipoSanguineo: get("tipoSanguineo"),
    medicacaoFebre: get("medicacaoFebre"),
    medicacaoDorCabeca: get("medicacaoDorCabeca"),
    medicacaoDorGarganta: get("medicacaoDorGarganta"),
    medicacaoContusao: get("medicacaoContusao"),
    medicacaoCorte: get("medicacaoCorte"),
    medicacaoDiarreia: get("medicacaoDiarreia"),
    autorizoImagem: get("autorizoImagem"),
  };
}

export function generatePDF(dados: DadosFormulario): void {
  const doc = new jsPDF();
  const marginLeft = 20;
  const marginRight = 20;
  const marginTop = 20;
  const marginBottom = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = pageWidth - marginLeft - marginRight;
  let y = marginTop;

  const textColor = { r: 15, g: 23, b: 42 };
  const secondaryColor = { r: 75, g: 85, b: 99 };
  const accentColor = { r: 37, g: 99, b: 235 };

  const hotelName = "Hotel Fazenda Villa da Fonte";
  const tripDates = "25 a 29 de novembro de 2026";
  const destinationSummary =
    "Hotel Fazenda Villa da Fonte, estrada do Kinadi número 355, Palmeiras, Suzano/SP";

  function ensureSpace(requiredHeight = 16) {
    if (y + requiredHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  }

  function addCenteredText(text: string, fontSize: number, lineHeight = 1.5) {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      ensureSpace(fontSize * lineHeight + 2);
      doc.text(line, pageWidth / 2, y, { align: "center" });
      y += fontSize * 0.3528 * lineHeight;
    }
    y += 2;
  }

  function addParagraph(text: string, fontSize = 11, lineHeight = 1.4) {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      ensureSpace(fontSize * lineHeight);
      doc.text(line, marginLeft, y);
      y += fontSize * 0.3528 * lineHeight;
    }
    y += 4;
  }

  function addSectionTitle(title: string) {
    ensureSpace(20);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
    doc.text(title, marginLeft, y);
    y += 7;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.7);
    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 10;
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
  }

  function addField(label: string, value: string) {
    const displayValue = value?.trim() ? value : "—";
    ensureSpace(20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(secondaryColor.r, secondaryColor.g, secondaryColor.b);
    doc.text(label, marginLeft, y);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
    const lines = doc.splitTextToSize(displayValue, maxWidth);
    doc.text(lines, marginLeft, y);
    y += lines.length * 5 + 5;
  }

  function addAccentField(label: string, value: string) {
    const primaryValue = value?.trim() ? value : "—";
    ensureSpace(24);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(secondaryColor.r, secondaryColor.g, secondaryColor.b);
    doc.text(label, marginLeft, y);
    y += 4;
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
    doc.text(primaryValue, marginLeft, y);
    y += 12;
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
  }

  function booleanToText(value: boolean) {
    return value ? "Sim" : "Não";
  }

  function addSignatureField() {
    const signatureBlockHeight = 45;
    const bottomLimit = pageHeight - marginBottom;

    if (y > bottomLimit - signatureBlockHeight) {
      doc.addPage();
      y = marginTop;
    }

    y = bottomLimit - signatureBlockHeight;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
    const city = dados.responsavelCidade?.trim() || "________________________";
    doc.text(
      `${city}, ${new Date().getDate()} de ${new Date().toLocaleString("pt-BR", { month: "long" })} de ${new Date().getFullYear()}.`,
      marginLeft,
      y,
    );
    y += 22;

    const centerX = pageWidth / 2;
    const lineWidth = 120;

    doc.setDrawColor(textColor.r, textColor.g, textColor.b);
    doc.setLineWidth(0.5);
    doc.line(centerX - lineWidth / 2, y, centerX + lineWidth / 2, y);
    y += 5;

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(textColor.r, textColor.g, textColor.b);
    doc.text("Assinatura do responsável legal", centerX, y, {
      align: "center",
    });
    y += 5;

    if (dados.responsavelNome?.trim()) {
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(secondaryColor.r, secondaryColor.g, secondaryColor.b);
      doc.text(dados.responsavelNome, centerX, y, { align: "center" });
    }
  }

  addCenteredText("Autorização de viagem nacional (menores de idade)", 16);
  addCenteredText(
    "Jovens do Crisma / Pós Crisma - Paróquia São Pedro",
    12,
    1.2,
  );

  addSectionTitle("Autorização");
  addField("Uso de imagem", dados.autorizoImagem === "sim" ? "Sim" : "Não");
  addParagraph(
    `Eu, ${dados.responsavelNome}, autorizo o(a) jovem ${dados.jovemNome} a viajar com destino ao ${hotelName} em Suzano/SP durante o período de ${tripDates}, para participar do encontro de jovens do Crisma/Pós-Crisma da Paróquia São Pedro.`,
    13,
    1.6,
  );

  addSignatureField();
  doc.addPage();
  y = marginTop;

  addCenteredText("Dados do participante e informações médicas", 14);

  addSectionTitle("Resumo da viagem");
  addAccentField("Hotel de hospedagem", hotelName);
  addAccentField("Período", tripDates);
  addField("Destino oficial", destinationSummary);

  addSectionTitle("Responsável legal");
  addField("Nome completo", dados.responsavelNome);
  addField("Nacionalidade", dados.responsavelNacionalidade);
  addField("RG", dados.responsavelRg);
  addField("CPF", dados.responsavelCpf);
  addField(
    "Endereço",
    `${dados.responsavelEndereco} • Nº ${dados.responsavelNumero}`,
  );
  addField("Bairro", dados.responsavelBairro);
  addField("Cidade / UF", `${dados.responsavelCidade} / ${dados.responsavelUf}`);

  addSectionTitle("Jovem participante");
  addField("Nome completo", dados.jovemNome);
  addField(
    "Nascimento",
    `${dados.jovemCidadeNascimento} / ${dados.jovemEstadoNascimento} • ${dados.jovemNascimento}`,
  );
  addField("RG", dados.jovemRg);
  addField("CPF", dados.jovemCpf);

  addSectionTitle("Cuidados médicos");
  addField(
    "Plano de saúde",
    `${booleanToText(dados.planoSaude)}${dados.planoSaudeQual ? ` — ${dados.planoSaudeQual}` : ""}`,
  );
  addField(
    "Problemas de saúde",
    `${booleanToText(dados.problemaSaude)}${dados.problemaSaudeQual ? ` — ${dados.problemaSaudeQual}` : ""}`,
  );
  addField(
    "Tratamentos em curso",
    `${booleanToText(dados.tratamento)}${dados.tratamentoQual ? ` — ${dados.tratamentoQual}` : ""}`,
  );
  addField(
    "Propensão a convulsões",
    `${booleanToText(dados.convulsao)}${dados.convulsaoSituacao ? ` — ${dados.convulsaoSituacao}` : ""}`,
  );
  addField(
    "Vacina anti-tetânica",
    `${booleanToText(dados.vacinaTetanica)}${dados.vacinaTetanicaQuando ? ` — ${dados.vacinaTetanicaQuando}` : ""}`,
  );
  addField(
    "Alergias",
    `${booleanToText(dados.alergia)}${dados.alergiaQual ? ` — ${dados.alergiaQual}` : ""}`,
  );
  addField(
    "Restrição alimentar",
    `${booleanToText(dados.restricaoAlimentar)}${dados.restricaoAlimentarQual ? ` — ${dados.restricaoAlimentarQual}` : ""}`,
  );
  addField(
    "Restrição para exercícios",
    `${booleanToText(dados.restricaoExercicios)}${dados.restricaoExerciciosDetalhes ? ` — ${dados.restricaoExerciciosDetalhes}` : ""}`,
  );
  addField(
    "Diabético",
    `${booleanToText(dados.diabetico)}${dados.usoInsulina ? ` — Sim` : ""}`,
  );
  if (dados.usoInsulina) {
    addField("Frequência de insulina", dados.frequenciaInsulina || "—");
  }
  addField("Tipo sanguíneo", dados.tipoSanguineo);

  addSectionTitle("Tratamentos e remédios");
  if (dados.tratamentoMedico && dados.remedios.length) {
    dados.remedios.forEach((remedio, index) => {
      addField(
        `Remédio ${index + 1}`,
        `${remedio.nome || "Não informado"} • ${
          remedio.dose || "Dose não informada"
        } • ${remedio.horario || "Horário não informado"}`,
      );
    });
    addField("Em tratamento médico", "Sim");
  } else {
    addField("Em tratamento médico", booleanToText(dados.tratamentoMedico));
  }

  addSectionTitle("Medicação de emergência");
  addField("Febre", dados.medicacaoFebre);
  addField("Dor de cabeça", dados.medicacaoDorCabeca);
  addField("Dor de garganta", dados.medicacaoDorGarganta);
  addField("Contusão muscular", dados.medicacaoContusao);
  addField("Cortes/arranhões", dados.medicacaoCorte);
  addField("Diarreia", dados.medicacaoDiarreia);

  addSignatureField();

  doc.save("autorizacao-viagem.pdf");
}
