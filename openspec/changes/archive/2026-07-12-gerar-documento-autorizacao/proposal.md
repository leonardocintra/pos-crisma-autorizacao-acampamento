## Why

Com a aproximação do acampamento Pós Crisma em 25–28 de novembro de 2026, a equipe precisa de uma experiência digital que oriente as famílias no processo de autorização, colete informações com precisão e gere um PDF pronto para assinatura via gov.br. Hoje não existe um site centralizado, então os coordenadores recolhem formulários em papel manualmente, o que gera atrasos e erros.

## What Changes

- Construir uma landing page pública que explique a proposta do acampamento e direcione as pessoas para o fluxo de autorização.
- Publicar uma página de contato com canais oficiais para que responsáveis consigam falar com os organizadores facilmente.
- Entregar um formulário de autorização em página única, mobile-first, abastecido com os dados de padrinhos/paróquias e alinhado ao modelo físico existente.
- Gerar um PDF de duas páginas (com campo de assinatura e rodapé obrigatório) usando jsPDF imediatamente após o envio do formulário.
- Disponibilizar fontes de dados JSON estruturadas (`padrinhos.json`, `paroquias.json`) que alimentam os selects e garantem nomes consistentes.

## Capabilities

### New Capabilities
- `landing-page-pos-crisma`: Landing page pública que apresenta o retiro e direciona os usuários ao CTA do formulário de autorização.
- `contato-pos-crisma`: Página de contato com os canais oficiais da equipe do evento.
- `autorizacao-formulario-pdf`: Formulário mobile-first aliado à geração via jsPDF que replica o documento físico, incluindo seleção de padrinho/paróquia, datas do retiro, rodapé e áreas de assinatura.

### Modified Capabilities
- _Nenhuma_

## Impact

- Diretório app do Next.js: novas rotas para landing, contato e formulário de autorização.
- Dados estáticos em `data/` para padrinhos e paróquias consumidos pela UI do formulário.
- Dependências de frontend: adicionar `jspdf` e `@types/jspdf` para criação do PDF.
- Modelos armazenados em `documento/` servem como referência visual para fidelidade de layout.
