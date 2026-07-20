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
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - marginLeft - marginRight;
  let y = 20;

  function addCenteredText(text: string, fontSize: number, lineHeight = 1.5) {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      doc.text(line, pageWidth / 2, y, { align: "center" });
      y += fontSize * 0.3528 * lineHeight;
    }
  }

  function addParagraph(text: string, fontSize = 12, lineHeight = 1.5) {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      doc.text(line, marginLeft, y);
      y += fontSize * 0.3528 * lineHeight;
    }
  }

  addCenteredText("Autorização de viagem nacional (menores de idade)", 16);
  addCenteredText("Jovens do Crisma / Pós Crisma - Paróquia São Pedro", 12);
  y += 6;

  addParagraph(
    `Eu, ${dados.responsavelNome}, de nacionalidade ${dados.responsavelNacionalidade}, portador(a) do RG ${dados.responsavelRg} e CPF ${dados.responsavelCpf},`,
  );
  addParagraph(`domiciliado(a) à ${dados.responsavelEndereco},`);
  addParagraph(
    `Nº ${dados.responsavelNumero}, no bairro ${dados.responsavelBairro},`,
  );
  addParagraph(`Cidade ${dados.responsavelCidade} / ${dados.responsavelUf},`);
  addParagraph(`autorizo o(a) jovem ${dados.jovemNome},`);
  addParagraph(
    `nascido(a) na cidade ${dados.jovemCidadeNascimento} / ${dados.jovemEstadoNascimento},`,
  );
  addParagraph(`no dia ${dados.jovemNascimento},`);
  addParagraph(`portador(a) do RG ${dados.jovemRg} e CPF ${dados.jovemCpf},`);
  addParagraph(
    "a empreender viagem nacional com destino à Hotel Fazenda Villa da Fonte, estrada do Kinadi número 355, Palmeiras, cidade Suzano/SP, no dia 25 de novembro de 2026, com retorno no dia 29 de novembro de 2026, para participar do encontro de jovens do Crisma/Pós-Crisma da Paróquia São Pedro (Franca/SP).",
  );

  doc.save("autorizacao-viagem.pdf");
}
