# tasks

## 1. Fundação visual e navegação

- [x] 1.1 Definir tokens de cor, tipografia, espaçamento e textura em `src/app/globals.css` (Tailwind 4 `@theme`).
- [x] 1.2 Atualizar `src/app/layout.tsx` com metadados em português, `lang="pt-BR"`, skip link e fontes com fallback.
- [x] 1.3 Criar o componente de navegação compartilhada (bottom bar no mobile, topo no desktop) com estado ativo e `aria-current`.
- [x] 1.4 Criar primitivas de UI reutilizáveis: `PageHeader`, `SectionHeading`, `Card`, `Badge`, `Detail` (details/summary) e ícones SVG.

## 2. Conteúdo estruturado

- [x] 2.1 Modelar e preencher o roteiro completo de 24 a 29/11 em `src/data/schedule.ts`, incluindo liturgia e orientações.
- [x] 2.2 Modelar as quatro noites e suas estações em `src/data/games.ts`, com regras, penalidades, pontuação, equipes e materiais de apoio.
- [x] 2.3 Modelar a escala da vigia das refeições em `src/data/meal-duty.ts`, incluindo o aviso geral.
- [x] 2.4 Revisar nomes, horários e referências dos PDFs, normalizando erros evidentes de extração.

## 3. Páginas

- [x] 3.1 Construir `/` com hero, citação, três cartões de seção, próximos momentos e bloco "tudo em um só lugar".
- [x] 3.2 Construir `/roteiro` com linha do tempo por dia, detalhes expansíveis e bloco de orientações.
- [x] 3.3 Construir `/jogos` com índice das noites, cards temáticos, estações detalhadas, equipes e materiais de apoio.
- [x] 3.4 Construir `/escala` com cartões por dia/refeição e destaque dos avisos.
- [x] 3.5 Adicionar metadados específicos e âncoras estáveis em todas as rotas.

## 4. Qualidade

- [x] 4.1 Validar em 360, 390, 768 e 1280 px, sem rolagem horizontal e com alvos de toque adequados.
- [x] 4.2 Verificar contraste, foco visível, navegação por teclado e funcionamento sem JavaScript.
- [x] 4.3 Rodar `npm run lint` e `npm run build` sem erros.
- [x] 4.4 Revisar o resultado contra `openspec/changes/add-camp-guide-site/specs/` e validar a mudança com `openspec validate`.
