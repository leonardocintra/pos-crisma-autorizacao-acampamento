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

// ---------------------------------------------------------------------------
// Layout e paleta (folha A4 / 210 x 297 mm)
// ---------------------------------------------------------------------------
const PAGE_WIDTH = 210;
const MARGIN_X = 16;
const CONTENT_TOP = 17; // início do conteúdo, abaixo do cabeçalho fino
const CONTENT_BOTTOM = 282; // fim do conteúdo, acima do rodapé
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const COLS_GAP = 6;
const COL_WIDTH = (CONTENT_WIDTH - COLS_GAP) / 2;

const COLOR_TEXT: [number, number, number] = [15, 23, 42]; // quase preto (slate-900)
const COLOR_SECONDARY: [number, number, number] = [71, 85, 105]; // cinza-600 (slate-600)
const COLOR_MUTED: [number, number, number] = [100, 116, 139]; // cinza-500 (slate-500)
const COLOR_ACCENT_BG: [number, number, number] = [226, 232, 240]; // cinza-200 (fundo suave)
const COLOR_SLATE_BG: [number, number, number] = [241, 245, 249]; // cinza-100 (faixas)
const COLOR_BORDER: [number, number, number] = [100, 116, 139]; // cinza-500 (bordas)
const COLOR_ALERT: [number, number, number] = [15, 23, 42]; // quase preto (crítico)
const COLOR_ALERT_BG: [number, number, number] = [203, 213, 225]; // cinza-300 (crítico)
const WHITE: [number, number, number] = [255, 255, 255];

// Larguras de borda (impressão P&B)
const BORDER_WIDTH = 0.5;
const BAR_WIDTH = 1.8;

interface GridCell {
  label: string;
  value: string;
  kind?: "accent" | "alert";
}

export function generatePDF(dados: DadosFormulario): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const hotelName = "Hotel Fazenda Villa da Fonte";
  const tripDates = "25 a 29 de novembro de 2026";
  const destinationSummary =
    "Hotel Fazenda Villa da Fonte, estrada do Kinadi número 355, Palmeiras, Suzano/SP";

  let y = CONTENT_TOP;

  function ensureSpace(requiredHeight: number) {
    if (y + requiredHeight > CONTENT_BOTTOM) {
      newPage();
    }
  }

  function linesFor(
    text: string,
    width: number,
    fontSize: number,
    bold: boolean,
  ) {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(fontSize);
    const wrapped = doc.splitTextToSize(text || "—", width);
    return typeof wrapped === "string" ? [wrapped] : wrapped;
  }

  function newPage() {
    doc.addPage();
    drawHeader();
    drawFooter();
    y = CONTENT_TOP;
  }

  function drawHeader() {
    // Cabeçalho sem fundo preto: apenas título e subtítulo em cinza + linha fina
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...COLOR_TEXT);
    doc.text(
      "AUTORIZAÇÃO DE VIAGEM NACIONAL (MENORES DE IDADE)",
      PAGE_WIDTH / 2,
      7,
      { align: "center" },
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...COLOR_SECONDARY);
    doc.text(
      "Jovens do Crisma / Pós-Crisma – Paróquia São Pedro",
      PAGE_WIDTH / 2,
      11.5,
      { align: "center" },
    );

    doc.setDrawColor(...COLOR_BORDER);
    doc.setLineWidth(BORDER_WIDTH);
    doc.line(MARGIN_X, 14, PAGE_WIDTH - MARGIN_X, 14);
  }

  // Faixa do cabeçalho: tom escuro do azul (independe da paleta de acento)
  function drawFooter() {
    const pageNumber = doc.getNumberOfPages();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...COLOR_MUTED);
    doc.text(
      "Os dados desta autorização são necessários para Transporte e Hospedagem.",
      PAGE_WIDTH / 2,
      283.5,
      { align: "center" },
    );
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLOR_SECONDARY);
    doc.text(`Página ${pageNumber}`, PAGE_WIDTH / 2, 290);
  }

  function drawSection(title: string) {
    ensureSpace(6);
    const bandHeight = 6;
    doc.setFillColor(...COLOR_SLATE_BG);
    doc.roundedRect(MARGIN_X, y, CONTENT_WIDTH, bandHeight, 1, 1, "F");
    doc.setFillColor(...COLOR_BORDER);
    doc.rect(MARGIN_X, y, BAR_WIDTH, bandHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLOR_TEXT);
    doc.text(title.toUpperCase(), MARGIN_X + 5.5, y + 4);
    y += bandHeight + 3;
  }

  interface StyledSegment {
    text: string;
    bold?: boolean;
  }

  function drawRichParagraphBoxed(parts: StyledSegment[], fontSize = 11.5) {
    interface Token {
      text: string;
      bold: boolean;
      width: number;
    }

    const lineHeight = fontSize * 0.3528 * 1.5;
    const maxWidth = CONTENT_WIDTH - 16;

    // Tokeniza em palavras preservando o estilo bold e os espaços originais
    const tokens: Token[] = [];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const spaceWidth = doc.getTextDimensions(" ").w;

    for (const part of parts) {
      const chunks = part.text.match(/([^\s]+|\s+)/g) ?? [];
      for (const chunk of chunks) {
        if (chunk.trim() === "") {
          // run de espaços: um token por caractere de espaço
          for (let i = 0; i < chunk.length; i++) {
            tokens.push({ text: " ", bold: false, width: spaceWidth });
          }
        } else {
          doc.setFont("helvetica", part.bold ? "bold" : "normal");
          doc.setFontSize(fontSize);
          tokens.push({
            text: chunk,
            bold: !!part.bold,
            width: doc.getTextDimensions(chunk).w,
          });
        }
      }
    }

    // Quebra de linha justa (greedy) respeitando os tamanhos medidos
    const lines: Token[][] = [];
    let line: Token[] = [];
    let lineWidth = 0;
    for (const token of tokens) {
      if (line.length > 0 && lineWidth + token.width > maxWidth) {
        lines.push(line);
        line = [];
        lineWidth = 0;
      }
      line.push(token);
      lineWidth += token.width;
    }
    if (line.length) lines.push(line);

    const blockHeight = lines.length * lineHeight + 12;
    ensureSpace(blockHeight);
    doc.setFillColor(...COLOR_ACCENT_BG);
    doc.setDrawColor(...COLOR_BORDER);
    doc.setLineWidth(BORDER_WIDTH);
    doc.roundedRect(MARGIN_X, y, CONTENT_WIDTH, blockHeight, 2, 2, "FD");

    let ty = y + 8;
    for (const lineTokens of lines) {
      let tx = MARGIN_X + 8;
      for (const token of lineTokens) {
        doc.setFont("helvetica", token.bold ? "bold" : "normal");
        doc.setFontSize(fontSize);
        doc.setTextColor(...COLOR_TEXT);
        doc.text(token.text, tx, ty);
        tx += token.width;
      }
      ty += lineHeight;
    }
    y += blockHeight + 5;
  }

  function drawNote(text: string) {
    const lineHeight = 8.5 * 0.3528 * 1.4;
    const valueLines = linesFor(text, CONTENT_WIDTH, 8.5, false);
    ensureSpace(valueLines.length * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...COLOR_MUTED);
    let ty = y + lineHeight;
    for (const line of valueLines) {
      doc.text(line, MARGIN_X, ty);
      ty += lineHeight;
    }
    y = ty + 3;
  }

  function drawChoiceRow(label: string, value: string) {
    const blockHeight = 12;
    ensureSpace(blockHeight);
    doc.setFillColor(...WHITE);
    doc.setDrawColor(...COLOR_BORDER);
    doc.setLineWidth(BORDER_WIDTH);
    doc.roundedRect(MARGIN_X, y, CONTENT_WIDTH, blockHeight, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLOR_SECONDARY);
    doc.text(label.toUpperCase(), MARGIN_X + 7, y + 7.8);
    doc.setTextColor(...COLOR_TEXT);
    doc.text(value.toUpperCase(), PAGE_WIDTH - MARGIN_X - 7, y + 7.8, {
      align: "right",
    });
    y += blockHeight + 5;
  }

  function cellMetrics(cell: GridCell, width: number) {
    const inner = cell.kind ? width - 8 : width;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    const labelText = cell.label.toUpperCase();
    const labelW = doc.getTextDimensions(labelText).w;
    const inline = labelW <= inner * 0.5;
    const valueWidth = inline ? inner - labelW - 5 : inner;
    const valueLines = linesFor(cell.value, valueWidth, 8.5, true);
    const valueH = Math.max(1, valueLines.length) * 3.9;
    const labelLineH = 2.9;
    const height =
      (inline ? Math.max(3.9, valueH) : labelLineH + valueH + 0.4) +
      (cell.kind ? 3.5 : 1.2);
    return { labelW, valueLines, valueWidth, inline, height };
  }

  function drawCell(
    cell: GridCell,
    x: number,
    cellY: number,
    width: number,
    height: number,
  ) {
    const inset = cell.kind ? 4 : 0;

    if (cell.kind) {
      const bg = cell.kind === "alert" ? COLOR_ALERT_BG : COLOR_ACCENT_BG;
      const border = cell.kind === "alert" ? COLOR_ALERT : COLOR_BORDER;
      doc.setFillColor(...bg);
      doc.setDrawColor(...border);
      doc.setLineWidth(BORDER_WIDTH);
      doc.roundedRect(x, cellY, width, height, 1.5, 1.5, "FD");
    }

    const m = cellMetrics(cell, width);
    const textX = x + inset;
    const baseline = cellY + (cell.kind ? 4.5 : 3);
    const labelColor = cell.kind
      ? cell.kind === "alert"
        ? COLOR_ALERT
        : COLOR_SECONDARY
      : COLOR_MUTED;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(...labelColor);
    doc.text(cell.label.toUpperCase(), textX, baseline);

    if (m.inline) {
      const valueX = textX + m.labelW + 5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(...COLOR_TEXT);
      let ty = baseline;
      for (const line of m.valueLines) {
        doc.text(line, valueX, ty);
        ty += 3.9;
      }
    } else {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(...COLOR_TEXT);
      let ty = baseline + 2.9;
      for (const line of m.valueLines) {
        doc.text(line, textX, ty);
        ty += 3.9;
      }
    }
  }

  function drawGrid(cells: GridCell[]) {
    let i = 0;
    while (i < cells.length) {
      const row = cells.slice(i, i + 2);
      let rowHeight = 0;
      for (const cell of row) {
        rowHeight = Math.max(rowHeight, cellMetrics(cell, COL_WIDTH).height);
      }
      ensureSpace(rowHeight);
      let x = MARGIN_X;
      for (const cell of row) {
        drawCell(cell, x, y, COL_WIDTH, rowHeight);
        x += COL_WIDTH + COLS_GAP;
      }
      y += rowHeight;
      i += 2;
    }
    y += 1.5;
  }

  function drawTripBox() {
    // Box compacto em 2 colunas: hotel/período | destino
    const leftCols = [
      { label: "Hotel de hospedagem", value: hotelName },
      { label: "Período", value: tripDates },
    ];
    const right = {
      label: "Destino oficial",
      value: destinationSummary,
    };
    const colWidth = (CONTENT_WIDTH - COLS_GAP) / 2;

    const leftMetrics = leftCols.map((c) =>
      cellMetrics({ ...c, value: c.value }, colWidth),
    );
    const leftHeight = leftMetrics.reduce((acc, m) => acc + m.height + 2, 2);
    const rightMetrics = cellMetrics(right, colWidth);
    const boxHeight = Math.max(leftHeight + 6, rightMetrics.height + 6);

    ensureSpace(boxHeight);
    doc.setFillColor(...COLOR_ACCENT_BG);
    doc.setDrawColor(...COLOR_BORDER);
    doc.setLineWidth(BORDER_WIDTH);
    doc.roundedRect(MARGIN_X, y, CONTENT_WIDTH, boxHeight, 2, 2, "FD");

    let ty = y + 4;
    for (let i = 0; i < leftCols.length; i++) {
      drawCell(
        { ...leftCols[i], value: leftCols[i].value },
        MARGIN_X,
        ty,
        colWidth,
        leftMetrics[i].height,
      );
      ty += leftMetrics[i].height + 2;
    }
    drawCell(
      right,
      MARGIN_X + colWidth + COLS_GAP,
      (y + boxHeight - rightMetrics.height) / 2,
      colWidth,
      rightMetrics.height,
    );

    y += boxHeight + 4;
  }

  function drawBloodChip() {
    const label = "Tipo sanguíneo";
    const blood = dados.tipoSanguineo?.trim() || "Não informado";
    ensureSpace(10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(...COLOR_SECONDARY);
    doc.text(label.toUpperCase(), MARGIN_X, y + 3.6);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    const dims = doc.getTextDimensions(blood);
    const chipWidth = dims.w + 11;
    const chipHeight = 7.5;
    const chipX = MARGIN_X + CONTENT_WIDTH - chipWidth;
    doc.setFillColor(...COLOR_ALERT);
    doc.roundedRect(chipX, y, chipWidth, chipHeight, 3.75, 3.75, "F");
    doc.setTextColor(...WHITE);
    doc.text(blood, chipX + chipWidth / 2, y + chipHeight - 2, {
      align: "center",
    });
    y += chipHeight + 3;
  }

  function drawRemedyRow(index: number, remedio: Remedio) {
    const title = `Remédio ${index + 1}`;
    const value = `${remedio.nome || "Não informado"} • ${
      remedio.dose || "Dose não informada"
    } • ${remedio.horario || "Horário não informado"}`;
    // Linha compacta: título + valor na mesma linha, quebra com indentação
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    const titleW = doc.getTextDimensions(title.toUpperCase()).w;
    const valueWidth = CONTENT_WIDTH - 10 - titleW - 4;
    const valueLines = linesFor(value, valueWidth, 8, true);
    const blockHeight = 2.5 + valueLines.length * 3.6 + 1.5;
    ensureSpace(blockHeight);
    doc.setFillColor(...COLOR_ACCENT_BG);
    doc.setDrawColor(...COLOR_BORDER);
    doc.setLineWidth(BORDER_WIDTH);
    doc.roundedRect(MARGIN_X, y, CONTENT_WIDTH, blockHeight, 1.2, 1.2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(...COLOR_TEXT);
    doc.text(title.toUpperCase(), MARGIN_X + 4, y + 3.6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...COLOR_TEXT);
    let ty = y + 3.6;
    for (const line of valueLines) {
      doc.text(line, MARGIN_X + 4 + titleW + 4, ty);
      ty += 3.6;
    }
    y += blockHeight + 2;
  }

  function drawSignatureField() {
    const blockHeight = 42;
    if (y > CONTENT_BOTTOM - blockHeight) {
      newPage();
    }
    y = CONTENT_BOTTOM - blockHeight;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...COLOR_TEXT);
    const city = dados.responsavelCidade?.trim() || "________________________";
    doc.text(
      `${city}, ${new Date().getDate()} de ${new Date().toLocaleString("pt-BR", { month: "long" })} de ${new Date().getFullYear()}.`,
      MARGIN_X,
      y,
    );
    y += 14;

    const centerX = PAGE_WIDTH / 2;
    const lineWidth = 120;
    doc.setDrawColor(...COLOR_TEXT);
    doc.setLineWidth(0.5);
    doc.line(centerX - lineWidth / 2, y, centerX + lineWidth / 2, y);
    y += 5;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLOR_TEXT);
    doc.text("Assinatura do responsável legal", centerX, y, {
      align: "center",
    });
    y += 5;

    if (dados.responsavelNome?.trim()) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...COLOR_SECONDARY);
      doc.text(dados.responsavelNome, centerX, y, { align: "center" });
    }
  }

  function booleanToText(value: boolean) {
    return value ? "Sim" : "Não";
  }

  function healthCell(
    label: string,
    text: string,
    kind: GridCell["kind"],
  ): GridCell {
    return { label, value: text, kind };
  }

  // =========================================================================
  // Página 1 — Autorização de viagem
  // =========================================================================
  drawHeader();
  drawFooter();
  y = CONTENT_TOP;

  drawSection("Autorização de viagem");

  drawRichParagraphBoxed(
    [
      { text: "Eu, " },
      { text: dados.responsavelNome, bold: true },
      { text: ", autorizo o(a) jovem " },
      { text: dados.jovemNome, bold: true },
      {
        text: ` a viajar com destino ao ${hotelName} em Suzano/SP durante o período de ${tripDates}, para participar do encontro de jovens do Crisma/Pós-Crisma da Paróquia São Pedro.`,
      },
    ],
    11.5,
  );

  drawChoiceRow(
    "Autorização de utilização de imagem (fotos/filmagens)",
    dados.autorizoImagem === "sim" ? "Sim" : "Não",
  );

  drawNote(
    "Os dados desta autorização são necessários para Transporte e Hospedagem. No caso de jovem maior de idade não é necessária assinatura dos pais ou responsável legal.",
  );

  drawSignatureField();

  // =========================================================================
  // Página 2 — Ficha de dados do participante e informações médicas
  // =========================================================================
  newPage();
  drawTripBox();

  drawSection("Responsável legal");
  drawGrid([
    { label: "Nome completo", value: dados.responsavelNome },
    { label: "Nacionalidade", value: dados.responsavelNacionalidade },
    { label: "RG", value: dados.responsavelRg },
    { label: "CPF", value: dados.responsavelCpf },
    {
      label: "Endereço",
      value: `${dados.responsavelEndereco} • Nº ${dados.responsavelNumero}`,
    },
    { label: "Bairro", value: dados.responsavelBairro },
    {
      label: "Cidade / UF",
      value: `${dados.responsavelCidade} / ${dados.responsavelUf}`,
    },
  ]);

  drawSection("Jovem participante");
  drawGrid([
    { label: "Nome completo", value: dados.jovemNome },
    {
      label: "Nascimento",
      value: `${dados.jovemCidadeNascimento} / ${dados.jovemEstadoNascimento} • ${dados.jovemNascimento}`,
    },
    { label: "RG", value: dados.jovemRg },
    { label: "CPF", value: dados.jovemCpf },
  ]);

  drawSection("Cuidados médicos");
  const healthCells: GridCell[] = [
    healthCell(
      "Plano de saúde",
      `${booleanToText(dados.planoSaude)}${
        dados.planoSaudeQual ? ` — ${dados.planoSaudeQual}` : ""
      }`,
      dados.planoSaude ? "accent" : undefined,
    ),
    healthCell(
      "Problemas de saúde",
      `${booleanToText(dados.problemaSaude)}${
        dados.problemaSaudeQual ? ` — ${dados.problemaSaudeQual}` : ""
      }`,
      dados.problemaSaude ? "alert" : undefined,
    ),
    healthCell(
      "Tratamentos em curso",
      `${booleanToText(dados.tratamento)}${
        dados.tratamentoQual ? ` — ${dados.tratamentoQual}` : ""
      }`,
      dados.tratamento ? "alert" : undefined,
    ),
    healthCell(
      "Propensão a convulsões",
      `${booleanToText(dados.convulsao)}${
        dados.convulsaoSituacao ? ` — ${dados.convulsaoSituacao}` : ""
      }`,
      dados.convulsao ? "alert" : undefined,
    ),
    healthCell(
      "Vacina anti-tetânica",
      `${booleanToText(dados.vacinaTetanica)}${
        dados.vacinaTetanicaQuando ? ` — ${dados.vacinaTetanicaQuando}` : ""
      }`,
      dados.vacinaTetanica ? "accent" : undefined,
    ),
    healthCell(
      "Alergias",
      `${booleanToText(dados.alergia)}${
        dados.alergiaQual ? ` — ${dados.alergiaQual}` : ""
      }`,
      dados.alergia ? "alert" : undefined,
    ),
    healthCell(
      "Restrição alimentar",
      `${booleanToText(dados.restricaoAlimentar)}${
        dados.restricaoAlimentarQual ? ` — ${dados.restricaoAlimentarQual}` : ""
      }`,
      dados.restricaoAlimentar ? "alert" : undefined,
    ),
    healthCell(
      "Restrição para exercícios",
      `${booleanToText(dados.restricaoExercicios)}${
        dados.restricaoExerciciosDetalhes
          ? ` — ${dados.restricaoExerciciosDetalhes}`
          : ""
      }`,
      dados.restricaoExercicios ? "alert" : undefined,
    ),
    healthCell(
      "Diabético",
      `${booleanToText(dados.diabetico)}${
        dados.usoInsulina ? " — faz uso de insulina" : ""
      }`,
      dados.diabetico ? "alert" : undefined,
    ),
  ];
  if (dados.usoInsulina) {
    healthCells.push(
      healthCell(
        "Frequência de insulina",
        dados.frequenciaInsulina || "—",
        "alert",
      ),
    );
  }
  drawGrid(healthCells);
  drawBloodChip();

  drawSection("Tratamentos e remédios");
  drawGrid([
    {
      label: "Em tratamento médico",
      value: booleanToText(dados.tratamentoMedico),
    },
  ]);
  if (dados.tratamentoMedico && dados.remedios.length) {
    dados.remedios.forEach((remedio, index) => {
      drawRemedyRow(index, remedio);
    });
  }

  drawSection("Medicação de emergência");
  drawGrid([
    { label: "Febre", value: dados.medicacaoFebre },
    { label: "Dor de cabeça", value: dados.medicacaoDorCabeca },
    { label: "Dor de garganta", value: dados.medicacaoDorGarganta },
    { label: "Contusão muscular", value: dados.medicacaoContusao },
    { label: "Cortes/arranhões", value: dados.medicacaoCorte },
    { label: "Diarreia", value: dados.medicacaoDiarreia },
  ]);

  doc.save("autorizacao-viagem.pdf");
}
