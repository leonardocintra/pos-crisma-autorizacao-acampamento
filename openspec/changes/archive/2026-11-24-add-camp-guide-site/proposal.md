# Proposal

## Why

Hoje o roteiro, os jogos e a escala do Acampamento Pós-Crisma 2026 vivem em PDFs soltos no grupo de WhatsApp. Os arquivos se perdem na conversa, cada pessoa abre uma versão diferente e, às vésperas do acampamento (24 a 29/11/2026), ninguém tem uma referência única e consultável no celular.

## What Changes

- Criar um site estático (sem banco de dados) que reúne todo o conteúdo do acampamento em um único lugar.
- Página inicial mobile-first com a identidade do acampamento e três entradas principais: **Roteiro**, **Jogos** e **Escala**.
- Página **Roteiro** com linha do tempo por dia (24 a 29/11), horários, celebrações, leitores, cantos, catequeses e orientações.
- Página **Jogos** com as quatro noites temáticas (X-Men, Homem-Aranha, Programa Silvio Santos e Caça ao Tesouro/AVT), estações, padrinhos, dinâmicas, regras, penalidades e pontuação.
- Página **Escala** com a vigia das refeições por dia e refeição, incluindo os avisos destacados.
- Modelar o conteúdo em arquivos TypeScript tipados em `src/data/`, para que a atualização de um horário ou nome seja feita em um só lugar.
- Navegação fixa no mobile (Início, Roteiro, Jogos, Escala) e layout confortável para leitura em uma mão.
- Conteúdo integral em português do Brasil, acessível (contraste, foco, navegação por teclado, `prefers-reduced-motion`) e legível sem JavaScript.

## Capabilities

### New Capabilities

- `camp-overview`: identidade do acampamento, página inicial, entradas para as três seções e navegação compartilhada.
- `camp-schedule`: roteiro geral dia a dia, celebrações e detalhes litúrgicos.
- `camp-games`: noites de jogos, caça ao tesouro e informações de apoio (equipes, estações, pontuação).
- `camp-meal-duty`: escala da vigia das refeições e avisos operacionais.

### Modified Capabilities

Nenhuma capability existente é modificada.

## Impact

- `src/app/` — novas rotas `/`, `/roteiro`, `/jogos` e `/escala`, layout raiz e estilos globais.
- `src/components/` — componentes de navegação, cartões, linha do tempo, acordeões e tabelas de conteúdo.
- `src/data/` — conteúdo estruturado e tipado extraído dos PDFs em `acampamento/`.
- `src/app/globals.css` — tokens de cor, tipografia e utilitários do tema.
- Sem novas dependências de runtime e sem banco de dados; o site é 100% estático.
- Os PDFs originais permanecem como fonte de verdade histórica; o site passa a ser a referência de consulta.
