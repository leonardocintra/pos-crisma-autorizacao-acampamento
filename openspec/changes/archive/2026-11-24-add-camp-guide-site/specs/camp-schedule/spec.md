# Spec Delta

## Purpose

Reúne o roteiro oficial do acampamento em uma linha do tempo consultável, preservando horários, celebrações, responsáveis e orientações.

## ADDED Requirements

### Requirement: O roteiro é organizado por dia

A página de roteiro SHALL apresentar os dias na ordem cronológica de 24 a 29 de novembro de 2026, com uma etiqueta de dia e a lista de eventos de cada dia.

#### Scenario: Leitura do primeiro dia

- **WHEN** o visitante abre `/roteiro`
- **THEN** o primeiro bloco é "Terça-feira, 24/11" com o evento das 19h30 de carregar o caminhão na Paróquia São Pedro

### Requirement: Cada evento informa horário e atividade

Todo evento do roteiro SHALL exibir um horário e uma descrição da atividade; eventos sem horário fixo SHALL ser apresentados como parte do bloco do dia a que pertencem.

#### Scenario: Evento com horário

- **WHEN** o visitante lê a quinta-feira
- **THEN** encontra "08h30 — Laudes (Pe. Fábio)" seguido das demais atividades do dia em ordem

### Requirement: Celebrações expõem seus detalhes litúrgicos

Eventos de celebração SHALL permitir consultar leitores, salmos, cantos e demais funções quando essa informação existir no roteiro.

#### Scenario: Detalhes das completas

- **WHEN** o visitante expande as completas de quarta-feira
- **THEN** vê os leitores de cada salmo, a leitura breve e os cantos previstos

### Requirement: O roteiro destaca avisos operacionais

A página SHALL manter visíveis os avisos que afetam a rotina do grupo, como horário de acordar, reuniões de padrinhos e organização do ônibus.

#### Scenario: Reunião de padrinhos

- **WHEN** o visitante percorre a quarta-feira
- **THEN** encontra o aviso de reunião de pauta às 23h e o lanche da noite às 22h30

### Requirement: O roteiro preserva o conteúdo integral dos PDFs

A página SHALL incluir todas as atividades descritas no roteiro geral, sem omitir catequeses, jogos, refeições, celebrações ou deslocamentos.

#### Scenario: Cobertura do domingo

- **WHEN** o visitante chega ao domingo
- **THEN** encontra a eucaristia das 09h, a premiação, o almoço, a organização do ônibus e o retorno às 15h
