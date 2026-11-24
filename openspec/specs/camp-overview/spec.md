# camp-overview Specification

## Purpose

Oferece a porta de entrada do guia do acampamento: identidade do encontro, visão geral e navegação compartilhada entre roteiro, jogos e escala.

## Requirements

### Requirement: A página inicial apresenta a identidade do acampamento

A página inicial SHALL exibir o nome do acampamento, o período de 24 a 29 de novembro de 2026, as duas paróquias organizadoras e o versículo do encontro.

#### Scenario: Identificação do acampamento

- **WHEN** um visitante abre a página inicial
- **THEN** ele vê o nome "Acampamento Pós-Crisma 2026", as datas, as paróquias São Pedro e Menino Jesus de Praga e a citação do Salmo 100:2

### Requirement: A página inicial oferece três entradas principais

A página inicial SHALL apresentar Roteiro, Jogos e Escala como as três seções principais, cada uma com um resumo curto do que contém.

#### Scenario: Escolha de uma seção

- **WHEN** o visitante toca no cartão "Jogos"
- **THEN** o site navega para a página de jogos e a seção correspondente aparece como ativa na navegação

### Requirement: A navegação compartilhada alcança todas as seções

Todas as páginas SHALL oferecer acesso direto a Início, Roteiro, Jogos e Escala, indicando visualmente a seção atual.

#### Scenario: Navegação a partir do roteiro

- **WHEN** o visitante está em `/roteiro` e toca em "Escala"
- **THEN** a página da escala é aberta e "Escala" é marcada como ativa

### Requirement: O guia é mobile-first

O layout SHALL ser projetado primeiro para telas de 360 a 430 pixels, com áreas de toque de pelo menos 44 por 44 pixels e texto de leitura sem rolagem horizontal.

#### Scenario: Consulta em um celular

- **WHEN** o site é aberto em uma tela de 390 pixels de largura
- **THEN** o conteúdo ocupa a largura disponível, nenhum texto é cortado e os controles principais ficam ao alcance do polegar

### Requirement: O conteúdo essencial funciona sem JavaScript

Horários, nomes, regras e a escala SHALL permanecer legíveis e navegáveis quando o JavaScript do cliente não executar.

#### Scenario: Detalhes sem JavaScript

- **WHEN** o visitante abre o roteiro com o JavaScript desativado
- **THEN** os horários e títulos dos eventos continuam visíveis e os detalhes podem ser abertos por controles nativos do navegador
