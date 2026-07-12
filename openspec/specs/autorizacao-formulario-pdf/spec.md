## Purpose
TBD

## Requirements

### Requirement: Formulário em página única captura todos os campos
A rota `/autorizacao` DEVE renderizar um formulário mobile-first em página única que colete todos os campos presentes em `documento/doc-01.jpeg` e `doc-02.jpeg`, incluindo dados do participante, responsáveis, padrinhos, informações médicas e termos de consentimento.

#### Scenario: Responsável preenche os campos obrigatórios
- **WHEN** o responsável completa todos os campos obrigatórios e toca em "Gerar Documento"
- **THEN** a UI valida as entradas em linha e só habilita a geração do PDF quando os dados obrigatórios estiverem presentes

### Requirement: Seleção de padrinhos usa dados curados com contexto da paróquia
O controle de seleção de padrinhos DEVE ser alimentado por `data/padrinhos.json`, exibindo os nomes de padrinho+madrinha acompanhados do nome da paróquia obtido via `data/paroquias.json`.

#### Scenario: Responsável abre o dropdown de padrinhos
- **WHEN** o usuário abre o select de padrinhos
- **THEN** cada opção mostra "Padrinho & Madrinha — Paróquia Nome (Cidade/UF)"

### Requirement: Gerador de PDF produz duas páginas espelhando o documento físico
Após o envio, o sistema DEVE usar `jspdf` para gerar um PDF de duas páginas com estrutura equivalente às referências, incluindo datas do retiro (25–28/11/2026), dados do participante e todos os parágrafos de consentimento.

#### Scenario: Geração do PDF bem-sucedida
- **WHEN** o responsável dispara a geração com dados válidos
- **THEN** um PDF de duas páginas é baixado localmente, com os dados posicionados para alinhar ao template impresso

### Requirement: PDF inclui área de assinatura e rodapé personalizado
Cada PDF gerado DEVE reservar um bloco de assinatura compatível com a assinatura digital do gov.br e incluir o texto de rodapé "Desenvolvido com amor por Leonardo Cintra (https://leonardocintra.com.br)".

#### Scenario: Responsável revisa o PDF gerado
- **WHEN** o arquivo é aberto em um leitor de PDF
- **THEN** a parte inferior do documento exibe o rodapé exigido e uma linha de assinatura vazia pronta para a assinatura digital
