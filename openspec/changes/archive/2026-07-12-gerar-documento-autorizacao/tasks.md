## 1. Fundação e Dados

- [x] 1.1 Instalar `jspdf` e `@types/jspdf`; garantir que o TypeScript reconheça os tipos.
- [x] 1.2 Adicionar `data/padrinhos.json` e `data/paroquias.json` seguindo as estruturas do SPEC.
- [x] 1.3 Criar um módulo de constantes compartilhado com metadados do retiro (datas, rodapé) para reuso nas páginas e no gerador de PDF.

## 2. Layout e Navegação

- [x] 2.1 Implementar o layout do App Router com header/footer globais e links para Landing, Contato e Autorização.
- [x] 2.2 Construir o hero da landing e seções de apoio descrevendo o retiro e apontando para o CTA de autorização.
- [x] 2.3 Implementar a página de contato com cards dos canais e um CTA de volta ao formulário de autorização.

## 3. Experiência do Formulário de Autorização

- [x] 3.1 Definir o schema de dados do formulário (tipos + validação) cobrindo participante, responsáveis, padrinhos e saúde conforme o documento físico.
- [x] 3.2 Implementar a UI do formulário em `/autorizacao` com layout mobile-first, validação inline e suporte à percepção de progresso.
- [x] 3.3 Ligar os selects de padrinho e paróquia aos JSONs, exibindo padrinho+madrinha com nome/cidade da paróquia.

## 4. Geração do PDF

- [x] 4.1 Implementar helpers do jsPDF que desenhem o template de duas páginas (títulos, parágrafos, áreas de assinatura, rodapé) usando coordenadas em milímetros.
- [x] 4.2 Conectar os helpers ao envio do formulário, liberando a geração apenas após validar os dados e disparando o download no cliente.
- [x] 4.3 Garantir que o PDF escreva o crédito do rodapé do retiro e reserve o bloco de assinatura compatível com o gov.br.

## 5. QA e Polimento

- [ ] 5.1 Fazer smoke test de todas as rotas em breakpoints mobile e desktop, confirmando footer, fluxos de CTA e downloads do PDF.
- [ ] 5.2 Registrar quaisquer textos pendentes (descrição da landing, dados de contato) para acompanhamento antes do lançamento.
