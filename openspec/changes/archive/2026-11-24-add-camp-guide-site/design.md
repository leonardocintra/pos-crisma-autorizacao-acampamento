# Design

## Context

O repositório é um esqueleto Next.js 16 (App Router, React 19, Tailwind CSS 4, Turbopack) com `cacheComponents` e `partialPrefetching` habilitados. Não há banco de dados, autenticação nem API. O conteúdo de origem são cinco PDFs em `acampamento/`, cuja extração já foi feita e revisada. O site precisa ser publicado como conteúdo estático e consultado principalmente em celulares durante o acampamento.

## Goals / Non-Goals

**Goals:**

- Entregar quatro rotas estáticas: `/`, `/roteiro`, `/jogos` e `/escala`.
- Manter o conteúdo em módulos TypeScript tipados, com uma única fonte de verdade por seção.
- Priorizar leitura em 390 px, com hierarquia clara e detalhes sob demanda.
- Funcionar sem JavaScript para o conteúdo essencial.

**Non-Goals:**

- Edição de conteúdo pelo navegador, painel administrativo ou banco de dados.
- Login, inscrições, pagamentos ou integração com WhatsApp.
- Fotos oficiais do acampamento ou upload de novos PDFs.
- Aplicativo nativo ou funcionamento offline garantido (service worker fica fora do escopo).

## Decisions

### Conteúdo tipado em `src/data/`

O roteiro é modelado como uma lista de dias, cada dia com eventos; cada evento tem horário, título, descrição e detalhes opcionais (liturgia, responsáveis). Jogos são modelados como noites, cada noite com estações; a escala é uma lista de dias com refeições e nomes.

- **Por quê:** os PDFs têm dezenas de nomes e horários; um array tipado evita duplicação entre componentes e torna correções pontuais.
- **Alternativa descartada:** MDX ou JSON. MDX adiciona complexidade de build para dados que são estruturados, e JSON perde a checagem de tipos nas referências entre dias, equipes e estações.

### Server Components por padrão, ilhas de cliente mínimas

As páginas são Server Components. A única ilha de cliente é a navegação que precisa de `usePathname` para o estado ativo. Acordeões usam `<details>/<summary>` nativos.

- **Por quê:** menos JavaScript, conteúdo indexável e funcionamento sem hidratação. O `<details>` nativo resolve o requisito de abrir detalhes sem JavaScript.
- **Alternativa descartada:** biblioteca de acordeão ou tabs controladas por estado. Adicionaria dependência e quebraria a leitura sem JS.

### Navegação fixa no mobile e topo no desktop

Uma barra inferior fixa com quatro destinos no mobile e uma barra horizontal no topo a partir de `md`. O conteúdo recebe `padding-bottom` para não ficar sob a barra.

- **Por quê:** o uso principal é em pé, com uma mão, durante o acampamento.
- **Alternativa descartada:** menu hambúrguer. Esconde a estrutura principal atrás de um toque extra.

### Identidade visual editorial

Paleta creme/verde-floresta/dourado, tipografia serifada nos títulos e sans humanista no corpo, texturas leves e ícones SVG desenhados. Cada noite de jogo recebe um matiz de apoio (roxo, azul, magenta, dourado) sem sair da paleta geral.

- **Por quê:** o conteúdo é um documento de comunidade, não um produto SaaS; a leitura precisa parecer um caderno de acampamento bem editado e continuar legível ao sol.
- **Alternativa descartada:** tema escuro permanente e imagens de heróis licenciadas. Comprometem contraste externo e direitos de imagem.

### Âncoras estáveis

Noites, estações e dias recebem `id` em kebab-case, com `scroll-margin-top` para compensar o cabeçalho fixo. A página de jogos tem um índice de noites.

- **Por quê:** permite compartilhar no WhatsApp um link direto para "a estação da Tempestade" ou "o jogo de sexta".

## Risks / Trade-offs

- **Conteúdo longo pode cansar no celular** → hierarquia em níveis (resumo do dia, evento, detalhe) e detalhes recolhidos por padrão; a escala e os horários ficam sempre visíveis.
- **Nomes e horários dos PDFs podem ter erros de digitação** → normalização editorial documentada; o PDF original permanece em `acampamento/` como referência.
- **Divergência entre roteiro e material de jogo** → o roteiro geral prevalece para horários; o material específico prevalece para regras e locais.
- **Fonte web indisponível no build** → usar uma pilha de fontes do sistema como fallback e manter a identidade pelo contraste tipográfico, não apenas pela família.
- **Conteúdo muda depois da publicação** → dados centralizados; qualquer ajuste é uma edição em um arquivo e um novo deploy.
