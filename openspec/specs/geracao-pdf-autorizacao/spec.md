# geracao-pdf-autorizacao Specification

## Purpose

Define como o PDF de autorização de viagem com ficha de saúde é produzido: layout em folha A4, hierarquia visual, destaques de dados críticos e paginação. Estabelece o contrato de aparência e organização do documento gerado, sem alterar os dados preenchidos.

## Requirements

### Requirement: Documento gerado em folha A4 com estrutura de duas páginas

O PDF gerado SHALL usar o formato A4 (210 x 297 mm) e conter exatamente as duas seções principais: página 1 com a autorização de viagem e página 2 com os dados do participante e as informações médicas.

#### Scenario: Geração do PDF com dados completos
- **WHEN** o usuário preenche todos os campos e gera o documento
- **THEN** o PDF gerado possui página 1 com a autorização e página 2 com a ficha de dados e saúde

#### Scenario: Formato de página
- **WHEN** o usuário abre o PDF gerado
- **THEN** as dimensões da página são A4 (210 x 297 mm)

### Requirement: Preservação integral dos dados informados

O PDF SHALL apresentar todos os dados preenchidos no formulário (responsável, jovem, saúde, remédios, medicação de emergência e autorização de imagem) sem omitir, truncar ou alterar valores.

#### Scenario: Todos os campos aparecem no documento
- **WHEN** o usuário preenche dados completos do responsável, do jovem e da saúde
- **THEN** cada valor preenchido aparece no PDF na seção correspondente

#### Scenario: Remédios adicionados são listados
- **WHEN** o usuário informa um ou mais remédios em tratamento médico
- **THEN** cada remédio aparece no PDF com nome, dose e horário

#### Scenario: Campo vazio não é registrado como dado
- **WHEN** um campo opcional é deixado vazio
- **THEN** o campo aparece no PDF com um marcador indicando ausência de informação (`—`), sem quebrar o layout

### Requirement: Paginação sem perda de conteúdo

O PDF SHALL quebrar páginas automaticamente quando o conteúdo exceder a altura útil da folha, mantendo todo o texto legível e sem sobreposição de elementos.

#### Scenario: Conteúdo excede a altura da página
- **WHEN** a quantidade de campos preenchidos ultrapassa o espaço disponível da página 1
- **THEN** o conteúdo restante continua na página 2 e nenhum texto é cortado ou sobreposto

#### Scenario: Bloco de assinatura na parte inferior
- **WHEN** a página de autorização é renderizada
- **THEN** a linha de assinatura do responsável fica na parte inferior da folha, sem conflitar com o corpo do texto

### Requirement: Cabeçalho e rodapé em todas as páginas

O PDF SHALL exibir, em cada página, um cabeçalho com a identificação institucional (título do documento e grupo) e um rodapé com numeração de página e a nota legal sobre a necessidade dos dados para transporte e hospedagem.

#### Scenario: Página impressa contém cabeçalho e rodapé
- **WHEN** o usuário visualiza qualquer página do PDF
- **THEN** o cabeçalho aparece repetido no topo e o rodapé com numeração aparece no fim de cada página

### Requirement: Hierarquia visual com destaque de seções e dados críticos

O PDF SHALL utilizar elementos visuais (faixas de título, caixas por seção, cor de acento) para destacar títulos de seção e informações críticas de saúde, com atenção especial para tipo sanguíneo, alergias, restrições e remédios.

#### Scenario: Títulos de seção destacados
- **WHEN** o PDF é renderizado
- **THEN** os títulos das seções (Autorização, Responsável Legal, Jovem participante, Cuidados médicos, etc.) aparecem em destaque visual distinto do corpo do texto

#### Scenario: Dados críticos de saúde em destaque
- **WHEN** existem alergias, restrições alimentares, restrição a exercícios, diabetes ou remédios de uso contínuo
- **THEN** esses valores aparecem em destaque visual (fundo ou cor de acento) para chamar atenção da equipe médica

#### Scenario: Tipo sanguíneo em evidência
- **WHEN** o formulário possui tipo sanguíneo preenchido
- **THEN** ele aparece em destaque na página 2, legível à distância

### Requirement: Aproveitamento da largura da folha A4

O PDF SHALL organizar os dados do participante e as informações médicas em duas colunas quando houver espaço, reduzindo a verticalidade excessiva e aproveitando a largura útil da página.

#### Scenario: Campos de saúde em duas colunas
- **WHEN** a página 2 renderiza os campos de saúde
- **THEN** os campos são dispostos lado a lado em duas colunas quando couberem, em vez de uma única coluna vertical

#### Scenario: Linha de texto justificada à largura útil
- **WHEN** textos longos (ex.: parágrafo de autorização) são renderizados
- **THEN** eles ocupam a largura útil da página respeitando as margens, sem estourar a folha
