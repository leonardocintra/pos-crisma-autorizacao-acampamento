## Purpose
TBD

## Requirements

### Requirement: Página de contato lista os canais principais
O sistema DEVE expor a rota `/contato` com os canais oficiais (telefone, WhatsApp e e-mail, mesmo que provisórios) para que os responsáveis saibam como falar com os organizadores.

#### Scenario: Responsável visita a página de contato
- **WHEN** um usuário abre `/contato`
- **THEN** ele vê entradas identificadas para telefone, WhatsApp e e-mail com links acionáveis (tel:/wa.me/mailto)

### Requirement: Página de contato deixa claras expectativas de resposta
A página DEVE informar o prazo esperado de resposta e a janela de atendimento de cada canal para reduzir dúvidas.

#### Scenario: Usuário lê nota sobre disponibilidade
- **WHEN** o usuário lê o texto do card de contato
- **THEN** ele encontra a mensagem indicando quando as respostas costumam ser enviadas (ex.: "Responderemos em até 24h")

### Requirement: Página de contato oferece CTA para o formulário
A página DEVE conter um botão secundário que retorne ao formulário de autorização para manter o fluxo descoberto.

#### Scenario: Responsável precisa voltar ao formulário
- **WHEN** ele clica no CTA em `/contato`
- **THEN** o app navega para `/autorizacao` sem recarregar o site
