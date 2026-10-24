# Design

## Context

O PDF atual é gerado em `src/lib/generate-pdf.ts` com o `jsPDF` (v4.2.1), em português, com os textos do acampamento fixos no código. Todo o texto é desenhado alinhado à esquerda em uma coluna única, com funções auxiliares (`addCenteredText`, `addSectionTitle`, `addField`, `addAccentField`, `addParagraph`, `addSignatureField`) que não usam caixas, fundos ou colunas. O resultado desperdiça a largura da folha A4 e não destaca os dados críticos de saúde.

A interface pública (`DadosFormulario`, `parseFormData`, `generatePDF(dados)`) não muda — o formulário HTML (`formulario-autorizacao.tsx`) continua chamando `generatePDF` da mesma forma. Ver a motivação e o "quê" em `proposal.md` e os requisitos testáveis em `specs/geracao-pdf-autorizacao/spec.md`.

Restrição de referência: os JPEGs dos documentos da paróquia (`documento/doc-1.jpeg`, `doc-2.jpeg`) não são legíveis por este agente; a estrutura do formulário impresso foi inferida a partir das transcrições em Markdown (`documento/*.md`). O layout proposto segue a organização dessas transcrições.

## Goals / Non-Goals

**Goals:**
- Reusar o código de layout do PDF em um conjunto pequeno de primitivas ("drawing helpers") que renderizam caixas, faixas de título, rodapé e cabeçalho.
- Distribuir os campos em **duas colunas** nas seções de dados (responsável, jovem, cuidados médicos, medicação de emergência) para aproveitar a largura da A4.
- Destacar visualmente dados críticos de saúde (tipo sanguíneo, alergias, restrições, remédios) com fundo colorido e maior peso tipográfico.
- Repetir cabeçalho institucional e rodapé numerado em **todas** as páginas.
- Manter o mesmo conteúdo textual e os mesmos campos; só muda a apresentação.

**Non-Goals:**
- Não alterar `DadosFormulario`, `parseFormData` ou o formulário HTML.
- Não adicionar campos novos nem remover os existentes.
- Não adicionar dependências novas (sem `jspdf-autotable`, sem logo em imagem).
- Não mudar os textos institucionais fixos (hotel, período, destino).

## Decisions

### D1: Primitivas de desenho compartilhadas em vez de caixas ad-hoc
Criar helpers internos no módulo (não exportados, ao lado de `generatePDF`): `drawSection` (faixa de título com fundo), `drawField` (label + valor com box opcional), `drawDataGrid` (grade de duas colunas), `drawHeader`/`drawFooter` (repetidos a cada página), `drawHighlightBox` (destaca dado crítico).
- **Por quê**: o código atual repete posicionamento manual (`y += ...`) em cada chamada; um conjunto único de helpers centraliza margens, largura útil, quebra de página e estilo (cores/fontes), reduzindo regressões e tornando o ajuste visual iterativo.
- **Alternativas consideradas**: `jspdf-autotable` (gera tabelas prontas) — descartado por ser dependência nova e dar menos controle fino do visual pretendido; HTML→PDF com `html2canvas` — descartado (não está no projeto e não preservaria nitidez de texto em todas as páginas).

### D2: Grade de duas colunas com altura dinâmica por seção
Os campos de responsável, jovem, cuidados médicos e medicação de emergência são desenhados em 2 colunas (largura útil dividida ao meio), preenchendo a primeira coluna e, quando o espaço vertical da seção acabar, dividindo a seção em blocos por página em vez de misturar seções.
- **Por quê**: aproveita a largura da A4 (reduz de ~40 linhas verticais para ~20), atendendo o requisito de aproveitamento de folha; "masculino/feminino" como nas fichas médicas da paróquia.
- **Alternativas**: tabela com `jspdf` nativo (colunas com x fixo) — efetivamente o mesmo, porém helper próprio é mais flexível para campos com altura variável (texto longo).

### D3: Destaque por caixa colorida e fonte maior para dados críticos
Tipo sanguíneo renderizado como um "chip" (box arredondado preenchido com cor de acento, texto branco, fonte ~16pt). Alergias, restrições, diabetes, convulsão e remédios desenhados com `drawHighlightBox` (preenchimento claro + borda de acento) quando o valor não for "Não".
- **Por quê**: a equipe médica precisa localizar esses dados de relance (requisito "Dados críticos em destaque"); o destaque com cor não interfere na impressão preto-e-branco (mantém contraste via caixa + texto escuro/bold).
- **Alternativa**: negrito simples — já existe hoje e é insuficiente, daí a necessidade de fundo.

### D4: Cabeçalho/rodapé desenhados a cada `addPage`
Envolver a criação de página num helper `newPage()` que, além de `doc.addPage()` e reset de `y`, desenha o cabeçalho institucional (faixa no topo com título do documento e grupo "Jovens do Crisma / Pós-Crisma") e o rodapé (nota legal + numeração `Página X`, obtida via `doc.getNumberOfPages()`).
- **Por quê**: requisito de cabeçalho/rodapé em todas as páginas; concentrar no `newPage` garante consistência e evita páginas órfãs.
- **Alternativa**: plugin `jspdf` de header/footer — não há plugin confiável no projeto; desenho manual é simples e testável.

### D5: Layout das duas páginas
- **Página 1 (Autorização)**: cabeçalho institucional em destaque → parágrafo de autorização (responsável, endereço, jovem, destino, período) já em frases contínuas do texto atual → box "Autorização de uso de imagem (Sim/Não)" → parágrafo legal (transporte/hospedagem, maior de idade) → bloco de assinatura no fim da folha.
- **Página 2 (Dados e saúde)**: resumo da viagem (box com hotel/período/destino) → dados do responsável (2 colunas) → dados do jovem (2 colunas) → cuidados médicos (2 colunas, com destaque dos críticos) → remédios → medicação de emergência (2 colunas) → assinatura se couber, senão `newPage`.
- Barras verticais de conteúdo desenhadas com `doc.rect`/`doc.roundedRect`; linhas com `doc.line`.

## Risks / Trade-offs

- **[Conteúdo longo estoura a folha]** → O helper de grade calcula antecipadamente a altura necessária via `getTextDimensions`/`splitTextToSize` e chama `newPage()` antes de desenhar; testes manuais com dados completos (incluindo 4 remédios) validam as quebras.
- **[Duas colunas misturam seções se não houver espaço]** → Cada seção desenha sua grade de colunas em blocos; se a seção não cabe na página, a página é quebrada **antes** de iniciar a seção (controle de bloco), nunca no meio de um campo.
- **[Impressão em preto e branco perde a cor]** → Destaques usam caixa clara + texto bold escuro, mantendo contraste sem depender de cor.
- **[Documentos de referência (JPEG) não lidos diretamente]** → Layout baseado nas transcrições markdown; comparação visual com os JPEGs é tarefa manual de QA na implementação (ver `tasks.md`).

## Migration Plan

- Sem migração de dados: o PDF é gerado por chamada única `generatePDF(dados)`. Rollback = reverter `src/lib/generate-pdf.ts` para o commit anterior; nenhuma outra mudança de código é necessária. O arquivo é o único ponto de contato com a API pública do formulário.

## Open Questions

- Nenhum que altere specs, abordagem ou tarefas: decisões de visual (tonalidade exata da cor de acento, raio das caixas) podem ser ajustadas durante a implementação sem mudar o contrato.
