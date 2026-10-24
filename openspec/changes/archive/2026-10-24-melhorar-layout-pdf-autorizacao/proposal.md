# Proposal

## Why

O PDF gerado pelo `generate-pdf.ts` (jsPDF) é funcional, mas visualmente pobre: todo o texto é alinhado à esquerda, sem caixas, sem hierarquia visual clara, com grande desperdício de espaço na folha A4 — nada comparável ao documento impresso da paróquia (arquivos `documento/doc-1.jpeg` e `documento/doc-2.jpeg`). O documento digital precisa de mais destaque visual e melhor aproveitamento da página para ser levado a sério pelo transporte, hospedagem e equipe médica.

## What Changes

- Redesenhar a **página 1** (autorização de viagem): cabeçalho institucional em destaque, parágrafo de autorização com dados em evidência, bloco de autorização de imagem e linha de assinatura do responsável.
- Redesenhar a **página 2** (dados do participante e informações médicas): dados do responsável, do jovem e cuidados médicos dispostos em duas colunas para aproveitar a largura da A4.
- Introduzir elementos visuais do jsPDF que não existem hoje: faixas de título com fundo, caixas/quadros por seção, destaque colorido para informações críticas (tipo sanguíneo, alergias, remédios), rodapé com página e nota legal.
- Melhorar paginação e uso do espaço: cabeçalho/rodapé repetidos por página, controles de quebra de página, sem conteúdo "espremido" no fim da folha.
- **Manter inalterados** todos os dados e textos atuais (`DadosFormulario`, textos fixos do acampamento). Nenhuma mudança de conteúdo — apenas a forma como o PDF é produzido.

## Capabilities

### New Capabilities

- `geracao-pdf-autorizacao`: Capacidade que define como o arquivo PDF de autorização de viagem (com ficha de saúde) é produzido pelo `generate-pdf.ts` — layout, hierarquia visual, destaques, aproveitamento da folha A4 e paginação. Pasa a ser a dona dos requisitos de renderização do PDF conforme o sistema evoluir.

### Modified Capabilities

<!-- Nenhuma capability existente: openspec/specs está vazio. -->

## Impact

- **Código**: `src/lib/generate-pdf.ts` (reescrita do layout; a interface `DadosFormulario` e `parseFormData` permanecem idênticas).
- **Consumidores**: `src/components/formulario-autorizacao.tsx` chama `generatePDF(dados)` — assinatura inalterada, sem impacto no formulário HTML.
- **Dependências**: `jspdf` (já presente, v4.2.1). Sem novas dependências previstas.
- **Artefatos de referência**: `documento/doc-1.jpeg` e `documento/doc-2.jpeg` (documentos impressos da paróquia) — usados como referência visual.
