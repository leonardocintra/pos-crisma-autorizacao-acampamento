## Context

O repositório já possui um projeto Next.js 16 com App Router, porém sem rotas ou fontes de dados. O SPEC exige três páginas públicas (landing, contato e formulário de autorização) além da geração do documento oficial via jsPDF usando as imagens de referência (`documento/doc-01.jpeg`, `doc-02.jpeg`). Os conjuntos de padrinhos e paróquias precisam ficar em `data/` como arquivos JSON estáticos que alimentam os selects. A experiência deve priorizar layouts mobile, evitar persistência/autenticação e produzir um PDF de duas páginas com campo de assinatura e rodapé personalizado. O layout do PDF pode ser reorganizado para clareza desde que contenha todos os campos do documento físico; as imagens servem como referência visual, não como réplica literal.

## Goals / Non-Goals

**Goals:**
- Construir rotas navegáveis para landing, contato e formulário dentro do App Router.
- Estruturar componentes de UI para que o formulário capture todos os dados do documento físico e gere um PDF fiel ao layout.
- Preencher os selects de padrinho/paróquia a partir dos JSON locais.
- Integrar `jspdf` para renderizar um PDF de duas páginas com datas do retiro, informações de padrinhos, dados dos responsáveis e rodapé.
- Manter a experiência mobile-first com componentes responsivos compartilhados entre as páginas.

**Non-Goals:**
- Persistir envios em banco de dados ou chamar APIs de backend.
- Adicionar autenticação, dashboards ou fluxos de revisão administrativa.
- Implementar suporte multilíngue ou edição de conteúdo via CMS.

## Decisions

1. **Routing & Layout Structure**: Usar o App Router com pastas segmentadas (`app/(public)/page.tsx` para landing, `/contato/page.tsx`, `/autorizacao/page.tsx`). Um layout compartilhado injeta navegação e rodapé consistentes, mantendo cada página isolada e permitindo reuso de componentes como Hero, ContactCard e Form.

2. **Data Loading Strategy**: Armazenar `data/padrinhos.json` e `data/paroquias.json` junto de helpers em TypeScript. Importá-los no runtime Node de componentes server e serializar para componentes client responsáveis pelos selects. Assim evitamos requisições extras e mantemos a fonte de verdade versionada.

3. **Form Architecture**: Implementar o formulário como componente client usando React Hook Form (ou estado controlado) para gerenciar validação e campos condicionais (ex.: seleção de padrinho). O schema replica as seções do documento físico (Participante, Responsáveis, Padrinhos, Saúde). A validação garante campos obrigatórios preenchidos antes de habilitar a geração do PDF.

4. **PDF Generation**: Usar `jspdf` com `@types/jspdf`, trabalhando em milímetros para montar um layout limpo inspirado no template físico. Cada página é desenhada por helpers que posicionam títulos, parágrafos, observações e linhas de assinatura em coordenadas definidas para manter legibilidade. Campos que antes instruíam “anotar observações atrás” passam a ocupar uma área frontal dedicada. Após gerar, o download é acionado no cliente.

5. **Styling System**: Aplicar utilitários tipo Tailwind se disponível; caso contrário, recorrer a CSS Modules com espaçamentos fluídos. Componentes terão stacks responsivos, inputs e botões CTA pensados primeiro para mobile.

6. **Footer & Metadata**: Centralizar metadados do retiro (datas, texto de rodapé) em um módulo de constantes para que footer do site e PDF usem os mesmos valores, garantindo consistência.

## Risks / Trade-offs

- **Fidelidade do layout do PDF** → Mitigar usando as imagens como guia de conteúdo, mas parametrizando as coordenadas em constantes para permitir reorganização sem perder dados obrigatórios.
- **Espaço para observações reorganizado** → Ao mover observações para a frente, texto longo pode quebrar o layout. Mitigar aplicando limite de caracteres e quebra automática de linhas dentro do bloco reservado.
- **Performance da geração client-side** → Formulários grandes em dispositivos modestos podem travar. Mitigar segmentando o desenho em helpers e mantendo os assets leves (sem imagens embutidas inicialmente).
- **Desatualização dos dados estáticos** → JSON de padrinhos/paróquias pode ficar obsoleto. Mitigar isolando os arquivos para que a equipe atualize via PR sem tocar na lógica.
- **Lacunas de acessibilidade** → Inputs customizados podem perder atributos a11y. Mitigar usando controles semânticos, labels e descrevendo a ação de download do PDF para leitores de tela.

## Migration Plan

1. Introduzir a estrutura de rotas, layout compartilhado e componentes placeholder para manter commits revisáveis.
2. Adicionar os arquivos de dados e integrá-los ao formulário, garantindo validação antes de ligar a geração do PDF.
3. Instalar `jspdf`, implementar os helpers do gerador e testar downloads em navegadores desktop/mobile. Manter o botão protegido até o QA aprovar.
4. Finalizar estilos e textos quando a descrição definitiva da landing for enviada.

## Open Questions

- Texto definitivo da landing (hero/seções) ainda depende dos stakeholders.
- Precisa confirmar quais canais (telefone, WhatsApp, e-mail) serão oficiais e seus contatos finais.
- Organizadores exigem alguma telemetria extra sobre tentativas de download ou o registro apenas no cliente é suficiente?
