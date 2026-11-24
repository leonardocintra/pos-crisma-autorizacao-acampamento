# camp-games Specification

## Purpose

Organiza as quatro noites de jogos e a caça ao tesouro, com contexto, estações, responsáveis, regras, penalidades e pontuação acessíveis no celular.

## Requirements

### Requirement: As quatro noites temáticas estão identificadas

A página de jogos SHALL listar as noites de quarta, quinta, sexta e sábado com tema, data, horário de início e um resumo do contexto.

#### Scenario: Visão geral das noites

- **WHEN** o visitante abre `/jogos`
- **THEN** vê os cards "X-Men: Sala do Perigo", "Homem-Aranha: Noite de Terror", "Programa Silvio Santos" e "Caça ao Tesouro — Operação AVT"

### Requirement: Cada estação informa local, responsáveis e prova

Toda estação de jogo SHALL exibir nome, local, padrinhos responsáveis, dinâmica, regras, penalidades e critério de pontuação.

#### Scenario: Estação da Tempestade

- **WHEN** o visitante expande a estação da Tempestade
- **THEN** encontra o local "Sala de jogos", os padrinhos, a dinâmica do Jenga gigante, as regras e a pontuação de 20 pontos

### Requirement: Os detalhes de jogo são navegáveis por âncoras

Cada noite e cada estação SHALL ter uma âncora estável que permita abrir diretamente aquele conteúdo.

#### Scenario: Link direto para uma noite

- **WHEN** alguém acessa `/jogos#homem-aranha`
- **THEN** a página posiciona a noite do Homem-Aranha em destaque

### Requirement: As equipes e suas cores são apresentadas

A página SHALL listar as dez equipes do acampamento com suas cores para consulta durante os jogos.

#### Scenario: Consulta das equipes

- **WHEN** o visitante procura a sua equipe
- **THEN** encontra Verde Escuro, Verde Neon, Prata, Amarelo, Pink, Vermelho, Azul Céu, Verde Água, Roxo e Preto

### Requirement: Conteúdo de apoio dos jogos é preservado

A página SHALL manter materiais de apoio relevantes, como a fórmula do fluido de teia, as ações do dado de Loki, os enigmas da caça e as listas de padrinhos.

#### Scenario: Fórmula da teia

- **WHEN** o visitante abre a noite do Homem-Aranha
- **THEN** consegue ler os ingredientes e o passo a passo da fórmula do fluido de teia
