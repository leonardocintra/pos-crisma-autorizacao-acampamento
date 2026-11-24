export type EventKind =
  | "liturgy"
  | "meal"
  | "game"
  | "formation"
  | "logistics"
  | "travel"
  | "rest"
  | "activity";

export type DetailGroup = {
  title: string;
  items: { label: string; value: string }[];
};

export type ScheduleEvent = {
  time: string;
  title: string;
  kind: EventKind;
  summary?: string;
  details?: DetailGroup[];
  note?: string;
  highlight?: boolean;
};

export type CampDay = {
  id: string;
  weekday: string;
  date: string;
  dateLabel: string;
  title: string;
  summary: string;
  events: ScheduleEvent[];
};

export const camp = {
  name: "Acampamento Pós-Crisma 2026",
  edition: "2026",
  start: "24 de novembro",
  end: "29 de novembro de 2026",
  period: "24 a 29 de novembro de 2026",
  parishes: ["Paróquia São Pedro", "Paróquia Menino Jesus de Praga"],
  quote: "Servi ao Senhor com alegria, e apresentai-vos a ele com cântico.",
  quoteReference: "Salmos 100:2",
  liturgicalSeason: "Tempo Comum e Advento",
} as const;

export const schedule: CampDay[] = [
  {
    id: "terca",
    weekday: "Terça-feira",
    date: "24/11",
    dateLabel: "24 de novembro",
    title: "Preparação",
    summary:
      "O caminhão sai da Paróquia São Pedro. O acampamento começa a tomar forma.",
    events: [
      {
        time: "19h30",
        title: "Carregar o caminhão",
        kind: "logistics",
        summary:
          "Na Paróquia São Pedro. É o primeiro encontro do grupo antes da viagem.",
        highlight: true,
      },
    ],
  },
  {
    id: "quarta",
    weekday: "Quarta-feira",
    date: "25/11",
    dateLabel: "25 de novembro",
    title: "Chegada e primeiro jogo",
    summary:
      "Celebração penitencial de madrugada, viagem, divisão das equipes e a estreia da Sala do Perigo.",
    events: [
      {
        time: "03h–03h30",
        title: "Chegada para colocar as malas no ônibus",
        kind: "logistics",
        summary: "Encontro no local combinado. As malas seguem no ônibus.",
      },
      {
        time: "04h00",
        title: "Celebração Penitencial",
        kind: "liturgy",
        summary: "Na Igreja São Pedro, antes da saída.",
        details: [
          {
            title: "Celebração",
            items: [
              { label: "Monição ambiental", value: "Fabiana" },
              {
                label: "Canto de entrada",
                value: "Vos tomarei dentre as nações",
              },
              {
                label: "Evangelho",
                value: "Terça: Lc 21, 5-11 · Quarta: Lc 21, 12-19",
              },
              { label: "Cantos", value: "Cantos diversos" },
              { label: "Canto final", value: "Exultai, justos, no Senhor" },
            ],
          },
        ],
      },
      {
        time: "06h00",
        title: "Previsão de saída",
        kind: "travel",
        summary:
          "Laudes no ônibus após a primeira parada e lanches durante o trajeto.",
        highlight: true,
      },
      {
        time: "14h30",
        title: "Chegada no hotel e organização dos quartos",
        kind: "logistics",
        summary: "Logística dos quartos com Fábio, Etiene, Luciana e Breno.",
      },
      {
        time: "15h30",
        title: "Lanche",
        kind: "meal",
      },
      {
        time: "16h30",
        title: "Divisão das equipes",
        kind: "activity",
        summary: "No salão. É aqui que cada jovem descobre a sua cor.",
      },
      {
        time: "17h30",
        title: "Nomes, grito de guerra e bandeiras",
        kind: "activity",
        summary:
          "Na quadra: escolha do nome da equipe, criação do grito e confecção das bandeiras.",
      },
      {
        time: "19h00",
        title: "Jantar",
        kind: "meal",
      },
      {
        time: "20h30",
        title: "Jogo noturno: X-Men — Sala do Perigo",
        kind: "game",
        summary: "Cinco estações de treinamento mutante espalhadas pelo hotel.",
        highlight: true,
      },
      {
        time: "22h00",
        title: "Completas",
        kind: "liturgy",
        details: [
          {
            title: "Liturgia das horas",
            items: [
              { label: "Hino", value: "Leitor: Fabio Vicente" },
              { label: "Salmo 30", value: "Proclamado por Isabela" },
              { label: "Salmo 129 (130)", value: "Proclamado por Célia" },
              { label: "Leitura breve", value: "Ef 4, 26-27 — Fábio Donizete" },
              { label: "Cântico evangélico", value: "Proclamado por Carol" },
              {
                label: "Cântico de Nossa Senhora",
                value: "Maria, pequena Maria",
              },
            ],
          },
        ],
      },
      {
        time: "22h30",
        title: "Lanche da noite",
        kind: "meal",
      },
      {
        time: "23h00",
        title: "Reunião de pauta",
        kind: "logistics",
        summary: "Com todos os padrinhos.",
        highlight: true,
      },
    ],
  },
  {
    id: "quinta",
    weekday: "Quinta-feira",
    date: "26/11",
    dateLabel: "26 de novembro",
    title: "Laudes, jogos e Homem-Aranha",
    summary:
      "Um dia cheio: laudes, jogos, perscruta, experiências e a primeira catequese. À noite, o multiverso pede ajuda.",
    events: [
      {
        time: "06h30",
        title: "Acordar os jovens",
        kind: "rest",
      },
      {
        time: "07h30",
        title: "Café da manhã",
        kind: "meal",
      },
      {
        time: "08h30",
        title: "Laudes com o Pe. Fábio",
        kind: "liturgy",
        summary: "Quinta-feira da 34ª semana do Tempo Comum.",
        details: [
          {
            title: "Liturgia das horas",
            items: [
              { label: "Monição ambiental", value: "Juliana Silva" },
              { label: "Salmo 94", value: "Cantado" },
              { label: "Monição ao 1º salmo", value: "Luciano" },
              { label: "Salmo 79 (80)", value: "Leitor: Leonardo Cintra" },
              {
                label: "Cântico de resposta",
                value: "Vem, o Senhor vestido de majestade",
              },
              { label: "Monição ao 2º salmo", value: "Alexandre Brida" },
              { label: "Cântico Is 12, 1-6", value: "Leitor: Silvana" },
              { label: "Canto de resposta", value: "Louvai ao Senhor" },
              { label: "Monição ao 3º salmo", value: "Erika" },
              { label: "Salmo 80 (81)", value: "Leitor: Etiene" },
              { label: "Canto de resposta", value: "Quando Israel" },
              { label: "Leitura breve", value: "Rm 14, 17-19 — Daniel" },
              { label: "Monição ao evangelho", value: "Rita" },
              { label: "Evangelho", value: "Lc 21, 20-28" },
              { label: "Benedictus", value: "Proclamado" },
              { label: "Preces", value: "Leitor: Luciana Tótoli" },
              { label: "Canto final", value: "Quando o Senhor" },
            ],
          },
        ],
      },
      {
        time: "10h00",
        title: "Jogos",
        kind: "game",
      },
      {
        time: "12h00",
        title: "Almoço",
        kind: "meal",
      },
      {
        time: "14h00",
        title: "Perscruta",
        kind: "formation",
        summary:
          "Uma hora de leitura e partilha de Rm 12, 9-16: o amor nas relações interpessoais.",
      },
      {
        time: "15h30–16h30",
        title: "Experiências",
        kind: "formation",
      },
      {
        time: "16h30 / 17h00",
        title: "Primeira catequese",
        kind: "formation",
        summary:
          "“Todos nascem originais, mas muitos morrem como fotocópias.” Autenticidade do jovem cristão, com o Padre Diego.",
        highlight: true,
      },
      {
        time: "19h00",
        title: "Jantar",
        kind: "meal",
      },
      {
        time: "20h00",
        title: "Jogo noturno: Homem-Aranha — Noite de Terror",
        kind: "game",
        summary:
          "Laboratório do Dr. Octopus, enigmas pela casa e fogueira no terreirão.",
        highlight: true,
      },
      {
        time: "21h30",
        title: "Completas",
        kind: "liturgy",
        details: [
          {
            title: "Liturgia das horas",
            items: [
              { label: "Hino", value: "Leitor: Leonardo Augusto" },
              { label: "Salmo 15", value: "Leitor: Juliana Cintra" },
              { label: "Leitura breve", value: "1Ts 5, 23 — Juliana Silva" },
              { label: "Cântico evangélico", value: "Leitor: Daniel" },
              { label: "Cântico de Nossa Senhora", value: "Regaço acolhedor" },
            ],
          },
        ],
      },
      {
        time: "22h00",
        title: "Lanche noturno",
        kind: "meal",
      },
      {
        time: "22h30",
        title: "Reunião de pauta",
        kind: "logistics",
        highlight: true,
      },
    ],
  },
  {
    id: "sexta",
    weekday: "Sexta-feira",
    date: "27/11",
    dateLabel: "27 de novembro",
    title: "Jogos molhados e Silvio Santos",
    summary:
      "Manhã e tarde de jogos molhados, catequese sobre o anjo da guarda e uma noite de programa de auditório.",
    events: [
      {
        time: "06h30",
        title: "Acordar os jovens",
        kind: "rest",
      },
      {
        time: "07h30",
        title: "Café da manhã",
        kind: "meal",
      },
      {
        time: "08h30",
        title: "Laudes com o Pe. Diego",
        kind: "liturgy",
        summary: "Tempo Comum.",
        details: [
          {
            title: "Liturgia das horas",
            items: [
              { label: "Monição ambiental", value: "Fernando" },
              { label: "Salmo 94", value: "Cantado" },
              { label: "Monição ao 1º salmo", value: "Sérgio" },
              { label: "Salmo 50 (51)", value: "Cantado: Misericórdia, minha" },
              { label: "Monição ao 2º salmo", value: "William" },
              { label: "Cântico Hab 3, 2-4", value: "Leitor: Maria Sueli" },
              { label: "Canto de resposta", value: "O Senhor é meu pastor" },
              { label: "Monição ao 3º salmo", value: "Isabela" },
              { label: "Salmo 147 (147b)", value: "Cantado" },
              { label: "Leitura breve", value: "Jr 30, 20-21 — Carla Cintra" },
              { label: "Monição ao evangelho", value: "Fábio Donizete" },
              { label: "Evangelho", value: "Lc 21, 29-33" },
              { label: "Benedictus", value: "Proclamado" },
              { label: "Preces", value: "Leitor: Roberto Donizete" },
              { label: "Canto final", value: "Graças a Yahweh" },
            ],
          },
        ],
      },
      {
        time: "10h00",
        title: "Jogos molhados",
        kind: "game",
      },
      {
        time: "12h00",
        title: "Almoço",
        kind: "meal",
      },
      {
        time: "13h30",
        title: "Jogos molhados",
        kind: "game",
        summary: "Continuação das provas na água.",
      },
      {
        time: "16h00",
        title: "Lanche",
        kind: "meal",
      },
      {
        time: "16h30",
        title: "Banho e descanso",
        kind: "rest",
      },
      {
        time: "18h00",
        title: "Segunda catequese",
        kind: "formation",
        summary:
          "“O auxílio do anjo da guarda e as batalhas ocultas do dia a dia.” Com Dalva: a quem recorrer, os jovens não estão sozinhos.",
        highlight: true,
      },
      {
        time: "19h00",
        title: "Jantar",
        kind: "meal",
      },
      {
        time: "20h30",
        title: "Noite do Programa Silvio Santos",
        kind: "game",
        summary:
          "Cinco jogos de auditório, show de calouros, Mister M. e muitas pegadinhas.",
        highlight: true,
      },
      {
        time: "21h30",
        title: "Completas",
        kind: "liturgy",
        details: [
          {
            title: "Liturgia das horas",
            items: [
              { label: "Hino", value: "Leitor: Michel" },
              { label: "Salmo 87 (88)", value: "Leitor: Aryana" },
              { label: "Leitura breve", value: "Jr 14, 9 — Célia" },
              { label: "Cântico evangélico", value: "Proclamado por Sérgio" },
              { label: "Cântico de Nossa Senhora", value: "Bendita és tu" },
            ],
          },
        ],
        note: "Orientações da caminhada noturna serão dadas neste momento.",
      },
      {
        time: "22h00",
        title: "Lanche noturno",
        kind: "meal",
      },
      {
        time: "22h30",
        title: "Reunião de pauta",
        kind: "logistics",
        summary: "Com os padrinhos.",
      },
    ],
  },
  {
    id: "sabado",
    weekday: "Sábado",
    date: "28/11",
    dateLabel: "28 de novembro",
    title: "Montanha e caça ao tesouro",
    summary:
      "Caminhada de madrugada, eucaristia na montanha, caça ao tesouro à tarde e adoração à noite.",
    events: [
      {
        time: "03h45",
        title: "Catequese sobre as estrelas",
        kind: "formation",
        summary: "Com o Pe. Fábio, antes da caminhada.",
      },
      {
        time: "04h00",
        title: "Caminhada e terço",
        kind: "travel",
      },
      {
        time: "05h00",
        title: "Eucaristia na montanha",
        kind: "liturgy",
        summary: "Com o Pe. Diego.",
        details: [
          {
            title: "Celebração",
            items: [
              { label: "Monição ambiental", value: "Michel" },
              { label: "Canto de entrada", value: "Senhor, quem entrará" },
              { label: "Monição à 1ª leitura", value: "Luciana Neves" },
              { label: "1ª leitura", value: "Ap 22, 1-7 — Adilson" },
              { label: "Salmo responsorial", value: "Proclamado" },
              { label: "Monição ao evangelho", value: "Gislaine" },
              { label: "Aclamação ao evangelho", value: "Proclamada" },
              { label: "Evangelho", value: "Lc 21, 24-36" },
              { label: "Preces", value: "Alexandre Malta" },
              {
                label: "Canto de paz / ofertório",
                value: "Muitos grãos de trigo",
              },
              {
                label: "Comunhão",
                value: "Belíssimo esposo · Quem nos separará",
              },
              { label: "Canto final", value: "Tu és formoso" },
            ],
          },
        ],
      },
      {
        time: "06h30",
        title: "Café da manhã e descanso para os jovens",
        kind: "meal",
      },
      {
        time: "07h30",
        title: "Organização da caça",
        kind: "logistics",
        summary: "Todos os padrinhos organizam a caça ao tesouro.",
        highlight: true,
      },
      {
        time: "11h30",
        title: "Almoço",
        kind: "meal",
      },
      {
        time: "13h00",
        title: "Caça ao tesouro",
        kind: "game",
        summary:
          "Equipe caça e todos os padrinhos. Operação AVT: doze estações para reunir os cristais temporais.",
        highlight: true,
      },
      {
        time: "17h00",
        title: "Entrega do tesouro",
        kind: "activity",
        summary: "No refeitório. Levar a Bíblia.",
        highlight: true,
      },
      {
        time: "19h00",
        title: "Jantar",
        kind: "meal",
      },
      {
        time: "20h00",
        title: "Terceira catequese",
        kind: "formation",
        summary:
          "“Tende coragem, eu venci o mundo.” Catequese dos super-heróis, com Salete, a partir do livro “Se o super-herói que você ama também pudesse ensinar a sua virtude”.",
        highlight: true,
      },
      {
        time: "21h30",
        title: "Adoração ao Santíssimo",
        kind: "liturgy",
        summary: "Com Mateus. Turiferário e Naveteiro: Breno e Adilson.",
        note: "Deixar tudo arrumado antes da eucaristia.",
      },
      {
        time: "22h30",
        title: "Lanche noturno",
        kind: "meal",
      },
      {
        time: "23h00",
        title: "Reunião de pauta",
        kind: "logistics",
        summary: "Com os padrinhos.",
      },
    ],
  },
  {
    id: "domingo",
    weekday: "Domingo",
    date: "29/11",
    dateLabel: "29 de novembro",
    title: "Advento e retorno",
    summary:
      "Eucaristia do 1º Domingo do Advento, premiação, almoço e volta para casa.",
    events: [
      {
        time: "06h30",
        title: "Acordar os jovens",
        kind: "rest",
      },
      {
        time: "07h30",
        title: "Café da manhã",
        kind: "meal",
      },
      {
        time: "09h00",
        title: "Eucaristia do 1º Domingo do Advento",
        kind: "liturgy",
        summary: "Com o Pe. Fábio.",
        details: [
          {
            title: "Celebração",
            items: [
              { label: "Monição ambiental", value: "Alexandre Malta" },
              { label: "Canto de entrada", value: "O mesmo Deus" },
              { label: "Glória", value: "Cantado" },
              { label: "Monição à 1ª leitura", value: "Carol" },
              {
                label: "1ª leitura",
                value: "Is 63, 16b-17.19b; 64, 2b-7 — Erika",
              },
              { label: "Salmo responsorial", value: "Proclamado" },
              { label: "Monição à 2ª leitura", value: "Heliene" },
              { label: "2ª leitura", value: "1Cor 1, 3-9 — Letícia" },
              { label: "Monição do evangelho", value: "Geisla" },
              { label: "Aclamação ao evangelho", value: "Proclamada" },
              { label: "Evangelho", value: "Mc 13, 33-37" },
              { label: "Preces", value: "Breno Almeida" },
              { label: "Canto de paz", value: "Ó céus, chovei do alto" },
              { label: "Santo", value: "Santo do Advento" },
              {
                label: "Cantos de pão",
                value: "Como ovelha que vê · Quarto canto do servo",
              },
              {
                label: "Cantos de vinho",
                value: "Bendito seja Deus · Sião, mãe de todos os povos",
              },
              { label: "Canto final", value: "Ide e anunciai" },
            ],
          },
          {
            title: "Preparação e ministros",
            items: [
              { label: "Espécies", value: "04 pães e 06 cálices" },
              {
                label: "Ministros",
                value: "William, Michel, Alexandre Malta e Fábio Donizete",
              },
              { label: "Turiferário e Naveteiro", value: "Breno e Adilson" },
            ],
          },
        ],
      },
      {
        time: "12h00",
        title: "Premiação e recados",
        kind: "activity",
        highlight: true,
      },
      {
        time: "13h00",
        title: "Almoço",
        kind: "meal",
      },
      {
        time: "14h00",
        title: "Organização do ônibus",
        kind: "logistics",
      },
      {
        time: "15h00",
        title: "Retorno",
        kind: "travel",
        summary: "Aleluia! Experiências no ônibus e lanche durante a viagem.",
        highlight: true,
      },
    ],
  },
];

export const scheduleHighlights = [
  {
    day: "Terça, 24/11",
    time: "19h30",
    title: "Carregar o caminhão",
    detail: "Paróquia São Pedro",
  },
  {
    day: "Quarta, 25/11",
    time: "04h00",
    title: "Celebração Penitencial",
    detail: "Igreja São Pedro",
  },
  {
    day: "Quarta, 25/11",
    time: "06h00",
    title: "Saída para o acampamento",
    detail: "Laudes no ônibus",
  },
];

export const orientations = [
  {
    title: "Levar a Bíblia",
    body: "No sábado, às 17h, a entrega do tesouro acontece no refeitório e pede a Bíblia em mãos.",
  },
  {
    title: "Reuniões de pauta",
    body: "Quarta às 23h com todos os padrinhos; quinta, sexta e sábado às 22h30 ou 23h, conforme o dia.",
  },
  {
    title: "Caminhada noturna",
    body: "As orientações da caminhada de sábado são dadas na sexta-feira, após as completas.",
  },
  {
    title: "Tudo arrumado",
    body: "Antes da eucaristia de domingo, deixar tudo organizado. A preparação dos pães e cálices é responsabilidade dos ministros.",
  },
];
