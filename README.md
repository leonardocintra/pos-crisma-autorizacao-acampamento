# Acampamento Pós-Crisma 2026

Guia digital do acampamento das Paróquias São Pedro e Menino Jesus de Praga, de **24 a 29 de novembro de 2026**. Reúne roteiro, jogos e escala da vigia das refeições em um único lugar — sem banco de dados, sem login e sem depender de PDF perdido no WhatsApp.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Identidade do acampamento, próximos momentos e entradas para as três seções |
| `/roteiro` | Linha do tempo de 24 a 29/11, celebrações, leitores, cantos e orientações |
| `/jogos` | Quatro noites temáticas, estações, padrinhos, regras, penalidades e pontuação |
| `/escala` | Vigia das refeições e vigia noturna, por dia, refeição e turno |

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção (todas as rotas são estáticas)
npm run start   # servir o build
npm run lint    # Biome
```

## Onde fica o conteúdo

Todo o conteúdo fica em módulos TypeScript tipados:

- `src/data/schedule.ts` — roteiro, celebrações e orientações.
- `src/data/games.ts` — noites, estações, equipes, regras e pontuação.
- `src/data/meal-duty.ts` — escala da vigia das refeições e avisos.
- `src/data/night-duty.ts` — turnos da vigia noturna de quarta a sábado.

Para corrigir um horário, nome ou regra, edite o arquivo correspondente. A interface é composta por Server Components; a única ilha de cliente é a navegação que marca a seção ativa.

Os PDFs originais estão em `acampamento/` (fonte histórica) e também em `public/docs/` (links no rodapé do site).

## Design

- Mobile-first, desenhado para 390 px, com barra de navegação inferior e área de toque adequada.
- Paleta creme, verde-floresta e dourado; Fraunces para títulos e Manrope para o corpo.
- Tailwind CSS 4 processado via PostCSS (`postcss.config.mjs`), compatível com builds Turbopack e webpack.
- Detalhes expansíveis usam `<details>/<summary>` nativos: o conteúdo essencial continua acessível sem JavaScript.
- O protótipo visual foi explorado no OpenDesign e implementado em Next.js 16 + Tailwind CSS 4.

## Planejamento

A mudança está documentada em `openspec/changes/add-camp-guide-site/`:

- `proposal.md` — problema, escopo e capabilities.
- `specs/` — contratos de comportamento de visão geral, roteiro, jogos e escala.
- `design.md` — decisões técnicas.
- `tasks.md` — plano de implementação.

Valide com:

```bash
openspec validate add-camp-guide-site
```
