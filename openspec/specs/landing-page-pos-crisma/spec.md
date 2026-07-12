## Purpose
TBD

## Requirements

### Requirement: Hero apresenta visão geral do retiro
A landing page DEVE exibir uma seção hero que resuma o propósito do acampamento Pós Crisma e o cronograma de 25–28 de novembro de 2026, otimizada para visualização mobile-first.

#### Scenario: Visitante abre a landing page
- **WHEN** um responsável acessa `/`
- **THEN** o hero mostra nome do retiro, descrição curta e as datas sem exigir rolagem horizontal em um viewport de 360px de largura

### Requirement: CTA principal leva ao formulário de autorização
A landing page DEVE oferecer um botão destacado que navegue para a página do formulário, permitindo que os responsáveis iniciem o processo digital imediatamente.

#### Scenario: Responsável toca no CTA
- **WHEN** o responsável toca no botão principal indicado para autorização
- **THEN** ele é direcionado para `/autorizacao` na mesma aba

### Requirement: Blocos de conteúdo explicam a logística
A landing DEVE incluir ao menos uma seção descrevendo o que esperar do retiro (atividades, cronograma) e destacar as opções de contato e orientações sobre padrinhos para gerar confiança.

#### Scenario: Usuário rola além do hero
- **WHEN** o usuário desce a página além da dobra
- **THEN** ele vê blocos ou cards adicionais resumindo a logística do acampamento e reforçando como falar com a equipe
