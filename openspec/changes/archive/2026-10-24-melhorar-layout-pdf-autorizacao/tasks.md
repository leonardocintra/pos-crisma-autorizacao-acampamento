# Tasks

## 1. Primitivas de desenho (layout base)

- [x] 1.1 Refatorar `src/lib/generate-pdf.ts` com um helper `newPage()` que chama `doc.addPage()`, reinicia `y` e desenha cabeçalho institucional e rodapé; verificar o PDF com 2+ páginas exibindo cabeçalho e `Página X` em todas.
- [x] 1.2 Centralizar margens/largura útil (A4) e cores num único lugar do módulo (constantes de layout e paleta); verificar que `doc.internal.pageSize` confere 210 x 297 mm.
- [x] 1.3 Criar helpers `drawSection`, `drawField`, `drawDataGrid` (grade de 2 colunas) e `drawHighlightBox` usando `rect`/`roundedRect`/`getTextDimensions`/`splitTextToSize`; verificar que `npm run lint` passa e nenhum novo helper é exportado fora do módulo.

## 2. Página 1 — Autorização

- [x] 2.1 Redesenhar cabeçalho institucional (faixa de fundo com título do documento e "Jovens do Crisma / Pós-Crisma") e parágrafo de autorização ocupando a largura útil; verificar visualmente que o texto está contido nas margens sem estourar.
- [x] 2.2 Adicionar box de "Autorização de utilização de imagem" com valor Sim/Não em destaque e os parágrafos legais (transporte/hospedagem e maior de idade); verificar que aparecem entre o parágrafo e a assinatura.
- [x] 2.3 Reescrever o bloco de assinatura para alinhar na parte inferior da folha (data, linha, "Assinatura do responsável legal", nome do responsável) sem conflitar com o corpo; verificar o PDF com dados completos.

## 3. Página 2 — Dados e ficha de saúde

- [x] 3.1 Renderizar "Resumo da viagem" como box destacado (hotel, período, destino) e os dados do responsável em 2 colunas; verificar que todos os campos do responsável aparecem e nada é truncado.
- [x] 3.2 Renderizar os dados do jovem em 2 colunas (nome, nascimento, RG, CPF); verificar a presença de todos os valores.
- [x] 3.3 Renderizar "Cuidados médicos" em 2 colunas com `drawHighlightBox` para valores "Sim"/preenchidos (plano, problema, tratamento, convulsão, vacina, alergia, restrições, diabetes/insulina, tipo sanguíneo); verificar que doenças/alergias/restrições ficam destacadas com fundo e o tipo sanguíneo aparece em "chip" destacado.
- [x] 3.4 Renderizar "Tratamentos e remédios" (lista dinâmica com nome/dose/horário) e "Medicação de emergência" (Febre, Dor de cabeça, Dor de garganta, Contusão, Cortes, Diarreia) em 2 colunas; verificar que 4 remédios preenchidos aparecem todos sem sobreposição.

## 4. Paginação e integração

- [x] 4.1 Garantir que o helper de grade quebra para `newPage()` quando a seção não cabe, sem cortar campo no meio; verificar com dados completos (responsável todo preenchido + 4 remédios + medicação de emergência) que nenhum texto é cortado ou sobreposto.
- [x] 4.2 Confirmar que `generatePDF(dados)` e `parseFormData` mantêm assinatura idêntica e que o formulário HTML continua gerando o PDF (`npm run build` sem erros; gerar PDF a partir da página /formulario com dados de teste).
- [x] 4.3 Comparar manualmente o resultado com os documentos impressos da paróquia (`documento/doc-1.jpeg` e `doc-2.jpeg`), conferindo que a estrutura de seções segue a referência e que os destaques críticos de saúde são legíveis à distância; registrar desvios visuais como achado e ajustar cores/fontes se necessário.
