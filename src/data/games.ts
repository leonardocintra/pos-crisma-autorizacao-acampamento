export type GameAccent = "plum" | "ocean" | "rose" | "gold";

export type DialogueLine = { speaker: string; line: string };

export type ExtraBlock = {
  title: string;
  intro?: string;
  items?: string[];
  numbered?: boolean;
};

export type Station = {
  id: string;
  name: string;
  local: string;
  leaders: string;
  support?: string;
  summary?: string;
  dynamics: string[];
  rules?: string[];
  penalties?: string[];
  scoring?: string[];
  enigma?: string;
  scare?: string;
  note?: string;
  dialogue?: DialogueLine[];
  extras?: ExtraBlock[];
};

export type GameNight = {
  id: string;
  weekday: string;
  date: string;
  start: string;
  title: string;
  subtitle: string;
  tagline: string;
  accent: GameAccent;
  context: string;
  theater?: DialogueLine[];
  teamRooms?: { room: string; teams: string }[];
  stationsLabel: string;
  stations: Station[];
  supportStaff?: { title: string; names: string[] };
  finale?: { title: string; text: string };
  notes?: string[];
  extras?: ExtraBlock[];
};

export const teams = [
  { name: "Verde Escuro", color: "#24503c", text: "#f7f3ea" },
  { name: "Verde Neon", color: "#a6d64f", text: "#1c1b17" },
  { name: "Prata", color: "#b9bcc0", text: "#1c1b17" },
  { name: "Amarelo", color: "#e5b93c", text: "#1c1b17" },
  { name: "Pink", color: "#d96a9c", text: "#1c1b17" },
  { name: "Vermelho", color: "#b63a3a", text: "#f7f3ea" },
  { name: "Azul Céu", color: "#6aa9d8", text: "#1c1b17" },
  { name: "Verde Água", color: "#7fc8b5", text: "#1c1b17" },
  { name: "Roxo", color: "#6b4a8f", text: "#f7f3ea" },
  { name: "Preto", color: "#22201d", text: "#f7f3ea" },
] as const;

export const commonScoring = [
  "1º lugar: 20 pontos",
  "2º lugar: 15 pontos",
  "3º lugar: 10 pontos",
  "Demais equipes: 5 pontos",
];

export const gameNights: GameNight[] = [
  {
    id: "x-men",
    weekday: "Quarta-feira",
    date: "25/11",
    start: "20h30",
    title: "X-Men: Sala do Perigo",
    subtitle: "Uma noite de treinamento mutante",
    tagline:
      "O Professor Xavier precisa de novos mutantes para estabilizar o multiverso.",
    accent: "plum",
    context:
      "O Professor Xavier detecta perturbações em várias linhas temporais ao mesmo tempo. Os X-Men dividem os jovens em equipes e transformam o hotel na Sala do Perigo: cinco estações de treinamento, cada uma comandada por um mutante.",
    theater: [
      {
        speaker: "Professor Xavier",
        line: "Isso é impossível… Estou detectando perturbações em várias linhas temporais ao mesmo tempo. Todo o multiverso está em perigo!",
      },
      { speaker: "Professor Xavier", line: "A mim, meus X-Men!" },
      {
        speaker: "Professor Xavier",
        line: "Detectei informações de que o multiverso está prestes a enfrentar um grande perigo! As linhas do tempo estão instáveis… algo grande está começando!",
      },
      {
        speaker: "Ciclope",
        line: "O que podemos fazer para ajudar, Professor?",
      },
      {
        speaker: "Professor Xavier",
        line: "Vamos treinar esses novos mutantes!",
      },
      { speaker: "Polaris", line: "Mas eles são muitos! Como faremos?" },
      {
        speaker: "Jean Grey",
        line: "Já sei! Vamos dividi-los em equipes e fazer um treinamento em massa na Sala do Perigo!",
      },
      {
        speaker: "Tempestade",
        line: "Ótima ideia, Jean! Vocês estão prontos para receber o treinamento dos X-Men?",
      },
    ],
    teamRooms: [
      { room: "Sala da Tempestade", teams: "Verde Escuro × Verde Neon" },
      { room: "Sala da Jean Grey", teams: "Prata × Amarelo" },
      { room: "Sala do Ciclope", teams: "Pink × Vermelho" },
      { room: "Sala da Polaris", teams: "Azul Céu × Verde Água" },
      { room: "Sala do Professor Xavier", teams: "Roxo × Preto" },
    ],
    stationsLabel: "Estações",
    stations: [
      {
        id: "tempestade",
        name: "Treinamento da Tempestade",
        local: "Sala de jogos (mesas de sinuca)",
        leaders: "Tempestade: Érika",
        support: "Heliene · Luciana Totoli · Silvana · Maria Isabel",
        summary: "Jenga gigante: manter a torre de pé sob pressão.",
        dynamics: [
          "Cada equipe forma uma fila que define a ordem dos jogadores. As equipes alternam os turnos: jogador 1 da equipe A, jogador 1 da equipe B, jogador 2 da equipe A, e assim por diante.",
          "O jogador escolhe uma caixa, retira da torre e coloca no topo sem deixar as demais caírem. Pode tocar apenas na caixa que vai remover.",
        ],
        rules: [
          "A primeira caixa tocada pelo jogador é a que deve ser retirada. Ele não pode tocar em nenhuma outra durante a jogada.",
          "A caixa retirada deve ser colocada com cuidado no topo, seguindo o padrão de cruzamento das camadas.",
          "Se caírem até 3 caixas, o jogador que derrubou deve reposicioná-las no topo antes de passar a vez.",
          "Se caírem mais de 3 caixas, a equipe adversária ganha a rodada, a torre é remontada pelos padrinhos e uma nova partida começa.",
          "Se houver mais de uma partida em 7 minutos, a equipe que vencer mais partidas ganha 20 pontos.",
          "Se houver apenas uma partida, ou empate, e a torre continuar de pé aos 7 minutos, a equipe da última jogada bem-sucedida vence e leva os 20 pontos.",
          "Em caso de empate, cada equipe ganha 10 pontos.",
          "A equipe pode opinar enquanto o seu participante estiver jogando.",
        ],
        penalties: [
          "Tocar em outro bloco que não seja o que está sendo removido: a equipe perde 1 ponto.",
        ],
        scoring: ["Vitória: 20 pontos", "Empate: 10 pontos para cada equipe"],
      },
      {
        id: "jean-grey",
        name: "Treinamento da Jean Grey",
        local: "Quadra",
        leaders: "Jean Grey: Aryana",
        support: "Fabiana · Sérgio · Geisla · Beto · Isabela",
        summary: "Circuito vendado e explosão dos balões da Fênix.",
        dynamics: [
          "Na quadra são montados dois circuitos iguais, um para cada equipe.",
          "A equipe atravessa o percurso vendada e de mãos dadas, guiada apenas pelo capitão, que é o único sem a venda.",
          "O percurso é construído com cordas, criando desafios para abaixar, pular e superar obstáculos até o final.",
          "Ao terminar, os participantes estouram os 15 balões presos na quadra — uma cor para cada equipe, amarelo ou azul — representando o despertar da Fênix.",
          "Ganha 20 pontos a equipe que completar o percurso e apertar o botão primeiro.",
        ],
        rules: [
          "Todos devem estar vendados.",
          "Todos devem estar de mãos dadas.",
          "Os participantes devem ser guiados apenas pelo capitão.",
          "O botão só pode ser apertado depois de estourar todos os balões.",
        ],
        penalties: [
          "Tirar a venda antes de completar o percurso: −2 pontos.",
          "Atrapalhar a equipe adversária: −2 pontos.",
          "Alguém que não for o capitão tentar dar instruções: −2 pontos.",
          "Soltar as mãos: −1 ponto.",
          "Não estourar todos os balões e apertar o botão: não pontua.",
        ],
        scoring: ["Vitória: 20 pontos"],
      },
      {
        id: "ciclope",
        name: "Treinamento do Ciclope",
        local: "Casa de vidro",
        leaders: "Ciclope: William",
        support: "Breno Silva · Leonardo · Juliana Rosa",
        summary: "Laser, dez espelhos e um alvo no centro.",
        dynamics: [
          "Cada equipe recebe uma mesa com um laser de brinquedo ligado e fixo, 10 espelhos e 1 alvo.",
          "O objetivo é criar um percurso com o laser refletido nos 10 espelhos até atingir o centro do alvo.",
        ],
        rules: [
          "É obrigatório usar todos os espelhos.",
          "Cada jogador fica responsável por movimentar apenas 1 espelho, mas pode opinar no posicionamento dos demais.",
          "A equipe que conseguir em menos tempo ganha 20 pontos.",
          "Se nenhuma equipe concluir a prova em 7 minutos, a equipe que posicionou mais espelhos refletindo o laser ganha 10 pontos.",
          "Não usar todos os espelhos, mas acertar o alvo: 7 pontos.",
        ],
        penalties: [
          "Mexer na posição do laser: −5 pontos.",
          "Atrapalhar a equipe adversária: −2 pontos.",
        ],
        scoring: [
          "Conclusão mais rápida: 20 pontos",
          "Mais espelhos refletindo: 10 pontos",
          "Alvo sem todos os espelhos: 7 pontos",
        ],
      },
      {
        id: "polaris",
        name: "Treinamento da Polaris",
        local: "Refeitório",
        leaders: "Polaris: Gislaine · Magneto: Daniel",
        support: "Juliana · Letícia",
        summary:
          "Bolinhas magnéticas e fichas: cada grude vale ponto para o adversário.",
        dynamics: [
          "As equipes formam filas à direita e à esquerda do tabuleiro, definindo a ordem de jogada. Ao lado fica um pote com bolinhas magnéticas.",
          "Tira-se cara ou coroa para decidir quem começa.",
          "O padrinho liga o cronômetro; um integrante de cada equipe coloca uma bolinha por vez, alternando entre as equipes.",
        ],
        rules: [
          "Quando as bolinhas grudarem, o jogador da equipe adversária ganha uma ficha para cada bolinha que grudou; as bolinhas voltam para o pote.",
          "A equipe que ganhou as fichas reinicia colocando a primeira bolinha.",
          "A equipe com mais fichas no final ganha 20 pontos.",
          "Se as bolinhas grudarem antes de colocar no tabuleiro, a outra equipe ganha a ficha da mesma forma.",
        ],
        penalties: [
          "Se o jogador demorar demais para colocar a bolinha, o padrinho inicia uma contagem de 5 segundos; ao final, ele é obrigado a colocar a bolinha ou perde uma ficha para a outra equipe.",
        ],
        scoring: ["Mais fichas: 20 pontos"],
      },
      {
        id: "professor-xavier",
        name: "Professor Xavier: o desafio mental",
        local: "Varanda redonda",
        leaders: "Professor Xavier: Fábio Donizete",
        support: "Mateus · Sueli · Rita",
        summary:
          "Dez caixas, três escolhas e um interrogatório psicológico de cinco minutos.",
        dynamics: [
          "Fase 1 — Consenso e escolha (2 minutos): cada equipe tem 10 caixas. Os 10 integrantes entram em consenso para escolher exatamente 3 caixas.",
          "Fase 2 — Interrogatório e negociação (5 minutos): o padrinho mediador faz as mesmas 3 perguntas para as duas equipes, separadamente. Cada resposta tem 30 segundos.",
          "Pergunta 1: quer trocar a caixa X por alguma outra caixa que não foi escolhida? A troca só pode ser feita por uma das 7 caixas restantes do estoque inicial da própria equipe.",
          "Pergunta 2: quer trocar 1 caixa sua por uma caixa escolhida do adversário? As duas equipes precisam concordar; se uma disser sim e a outra não, a troca não acontece.",
          "Pergunta 3: a equipe pode abrir UMA caixa para ver o conteúdo, mas o padrinho confisco outra caixa e a substitui por uma Caixa Secreta que nenhuma equipe viu. Se aceitar a espiada, não pode dar como confisco a caixa que acabou de olhar; o conteúdo visto deve ficar em sigilo absoluto.",
          "Ao final, as caixas de cada equipe são abertas e os pontos somados. Quem somar mais ganha 20 pontos.",
        ],
        rules: [
          "O padrinho mediador faz as perguntas para as equipes separadamente.",
          "Encerrado o tempo de debate e dada a resposta, a decisão é trancada. A equipe não pode voltar atrás.",
        ],
        penalties: [
          "Estourar o tempo de escolha: o padrinho escolhe as 3 caixas aleatoriamente.",
          "As equipes não podem se comunicar entre si, trocar informações ou sabotar o raciocínio do time adversário: −2 pontos.",
        ],
        scoring: ["Maior soma de pontos nas caixas: 20 pontos"],
      },
    ],
    supportStaff: {
      title: "Apoio e deslocamento",
      names: [
        "Apoio: Carol e Alexandre",
        "Fábio Vicente",
        "Adilson",
        "Michel",
        "Fernando",
        "Alexandre Brida",
        "Breno Moreti",
        "Carla",
        "Luciana Neves",
        "Célia",
        "Etiene",
      ],
    },
    notes: [
      "Cada estação tem 3 minutos de explicação, 7 minutos de execução e 5 minutos de deslocamento entre os jogos.",
    ],
  },
  {
    id: "homem-aranha",
    weekday: "Quinta-feira",
    date: "26/11",
    start: "20h00",
    title: "Homem-Aranha: Noite de Terror",
    subtitle: "O multiverso esqueceu quem é Peter Parker",
    tagline:
      "Recuperar as provas antes que os vilões publiquem a identidade do Homem-Aranha.",
    accent: "ocean",
    context:
      "O Dr. Estranho tem flashes da identidade apagada do Homem-Aranha e descobre que os inimigos também estão começando a lembrar. Cada vilão guardou uma prova. Antes de sair, os jovens passam pelo laboratório do Dr. Octopus para fabricar o fluido de teia.",
    theater: [
      { speaker: "Homem-Aranha", line: "Por que você me chamou aqui?" },
      {
        speaker: "Dr. Estranho",
        line: "Peter, ainda bem que você veio. Algo de muito grave está acontecendo no multiverso e preciso conversar com você.",
      },
      {
        speaker: "Homem-Aranha",
        line: "O quê? Você lembra minha verdadeira identidade? Mas como isso é possível?",
      },
      {
        speaker: "Dr. Estranho",
        line: "Tenho visto flashes das coisas que foram apagadas, inclusive da sua identidade. Meus inimigos também têm visto esses flashes e podem acabar lembrando de quem é você.",
      },
      {
        speaker: "Homem-Aranha",
        line: "Se isso acontecer, minha família e meus amigos estarão em perigo novamente, e tudo que fizemos até agora terá sido em vão.",
      },
      {
        speaker: "Dr. Estranho",
        line: "Cada inimigo guardou uma prova sobre a sua identidade. Se eles se lembrarem, vão publicá-las no Jornal Diário e revelar você outra vez!",
      },
      {
        speaker: "Homem-Aranha",
        line: "Preciso recuperar essas provas antes que seja tarde demais!",
      },
      {
        speaker: "Dr. Estranho",
        line: "Aqui estão os locais que consegui identificar. Mas antes, vocês precisam ir ao laboratório do Dr. Octopus: lá encontrarão algo para se defender.",
      },
    ],
    stationsLabel: "Fases e locais",
    stations: [
      {
        id: "dr-octopus",
        name: "Fase 1 — Laboratório do Dr. Octopus",
        local: "Coreto (Rua dos Chalés, próximo ao lago grande)",
        leaders: "Cientistas: Carol, Heliene, Silvana e Sueli",
        support: "Dr. Octopus: Alexandre Brida",
        summary: "Fabricar o fluido de teia em 5 minutos e receber o lançador.",
        dynamics: [
          "Quatro padrinhos de jaleco distribuem para os capitães um kit com materiais e instruções. Não explicam como fazer; apenas entregam o material e avisam que as instruções estão no kit.",
          "Após todos estarem prontos, marcar 5 minutos para a fabricação da teia.",
          "As equipes mostram o resultado aos cientistas. Uma boa teia vale 10 pontos.",
          "O cientista entrega o lançador de teias (spray de serpentina) e a folha com as pistas para recuperar o arquivo e as provas.",
          "O Dr. Octopus fica escondido perto do laboratório e assusta as equipes na saída.",
        ],
        extras: [
          {
            title: "Fórmula do fluido de teia",
            intro: "Ingredientes",
            items: [
              "10 ml de resina",
              "5 ml de ativador de teia",
              "20 ml de H₂O",
              "15 g de NaHCO₃ (bicarbonato de sódio)",
            ],
          },
          {
            title: "Passo a passo",
            numbered: true,
            items: [
              "Com a seringa, coloque no copo a resina, o ativador de teia e a água.",
              "Coloque no copo toda a quantidade de NaHCO₃ que está na garrafinha.",
              "Use a colher para misturar com cuidado até que se forme a teia no meio do líquido.",
              "Pegue a teia com os dedos e estique para testar a elasticidade, mostrando a um dos cientistas.",
            ],
          },
        ],
        note: "Agitar bem o lançador antes de usar. Nunca deixar o padrinho que acompanha a equipe para trás.",
        scoring: ["Boa teia: 10 pontos"],
      },
      {
        id: "dr-lagarto",
        name: "Local 1 — Laboratório do Dr. Lagarto",
        local: "Piscina coberta",
        leaders: "Carla e Isabela",
        support: "Dr. Lagarto: Mateus",
        summary: "A água que nunca vê o céu.",
        enigma:
          "“Sou um lugar onde a água nunca vê o céu. Aquecido e úmido, assim como todo réptil gosta.”",
        dynamics: [
          "O padrinho confere o enigma e entrega o arquivo de provas para a equipe.",
        ],
        scare: "Mateus, como Dr. Lagarto, assusta a equipe.",
      },
      {
        id: "venom",
        name: "Local 2 — Esconderijo do Venom",
        local: "Capela",
        leaders: "Michel e Fabiana",
        support: "Venom: Leonardo",
        summary: "Um lugar de devoção esconde o simbionte.",
        enigma:
          "“Entre paredes de silêncio e um altar de oração, esconde-se uma criatura que não conhece a redenção. Onde muitos procuram a luz e encontram a paz, um ser sombrio se esconde, observando por trás. Não procurem nas trevas de uma caverna ou porão… O esconderijo do simbionte está em um lugar de devoção!”",
        dynamics: [
          "O padrinho confere o enigma e entrega uma foto com um código.",
        ],
        scare: "Leonardo, como Venom, assusta a equipe.",
      },
      {
        id: "osborn",
        name: "Local 3 — Mansão Osborn",
        local: "Frente do teatro",
        leaders: "Etiene e Breno Moreti",
        support: "Duende Verde: Fábio Vicente",
        summary: "Riqueza, poder e um palco.",
        enigma:
          "“Sou uma morada de riqueza, poder e ambição, onde os Osborn escondem seus segredos e sua escuridão. Não tenho quartos, nem portas para entrar, mas tenho um palco onde muitos vêm se apresentar. Procurem o lugar onde as histórias ganham voz, pois a mansão dos Osborn espera por vós!”",
        dynamics: [
          "O padrinho confere o enigma e entrega uma foto com um código.",
        ],
        scare: "Fábio Vicente, como Duende Verde, assusta a equipe.",
      },
      {
        id: "homem-areia",
        name: "Local 4 — Esconderijo do Homem Areia",
        local: "Varanda redonda",
        leaders: "Célia e Gislaine",
        support: "Homem Areia: Adilson",
        summary: "Curvas, encontros e grãos.",
        enigma:
          "“Meu corpo é feito de curvas, não tenho cantos nem paredes, sou um lugar de encontros, desafios e muitas aventuras. Aqui se esconde alguém que não teme o vento, pois seu corpo se desfaz e se espalha pelo tempo. Entre grãos e poeira, ele pode se camuflar…”",
        dynamics: [
          "O padrinho confere o enigma e entrega uma foto com um código.",
        ],
        scare: "Adilson, como Homem Areia, assusta a equipe.",
      },
      {
        id: "gata-negra",
        name: "Local 5 — Esconderijo da Gata Negra",
        local: "Quadra",
        leaders: "Luciana Neves e Rita",
        support: "Gata Negra: Luciana Totoli",
        summary: "Disputas, movimentos e sombras.",
        enigma:
          "“Sou um lugar de disputas, movimentos e agilidade, onde os mais rápidos demonstram sua habilidade. Mas cuidado com quem anda nas sombras: uma ladra habilidosa pode estar à espreita.”",
        dynamics: [
          "O padrinho confere o enigma e entrega uma folha com o alfabeto alfanumérico.",
        ],
        scare: "Luciana Totoli, como Gata Negra, assusta a equipe.",
      },
      {
        id: "caneta",
        name: "Local 6 — Resgate da caneta",
        local: "Refeitório",
        leaders: "Aryana, Juliana, Letícia e Juliana Cintra",
        summary: "O último enigma leva a equipe ao refeitório.",
        enigma: "“Local onde fazemos todas as refeições.”",
        dynamics: [
          "No refeitório, os padrinhos entregam uma caneta para cada equipe desvendar os enigmas e preencher o arquivo.",
          "As provas devem ser coladas na ordem certa para formar a frase que indica o local da queima de arquivos.",
          "Ao terminar, entregar os arquivos para conferência e aguardar a liberação do padrinho para ir ao destino final.",
          "Equipes que colarem as provas na ordem correta ganham 10 pontos.",
        ],
        note: "Resposta do arquivo: “A queima de arquivos vai acontecer perto da floresta!”",
        scoring: ["Arquivo na ordem correta: 10 pontos"],
      },
    ],
    finale: {
      title: "Fogueira — Terreirão",
      text: "Dr. Estranho e Homem-Aranha esperam na fogueira com William e Beto. Depois de recuperar as provas, todos repetem o feitiço: “Pelo poder do multiverso! Que o passado seja apagado! Que nenhuma prova sobreviva!”. Um integrante de cada equipe joga o arquivo no fogo e a missão é concluída.",
    },
    supportStaff: {
      title: "Padrinhos para acompanhar as equipes",
      names: [
        "Daniel",
        "Geisla",
        "Fábio Donizete",
        "Luciano",
        "Sérgio",
        "Breno Silva",
        "Alexandre Malta",
        "Érika",
        "Maria Isabel",
        "Andréia",
      ],
    },
    extras: [
      {
        title: "Elenco",
        items: [
          "Dr. Estranho: Fernando",
          "Homem-Aranha: Padre Diego",
          "Dr. Octopus: Alexandre Brida",
          "Dr. Lagarto: Mateus",
          "Venom: Leonardo",
          "Duende Verde: Fábio Vicente",
          "Homem Areia: Adilson",
          "Gata Negra: Luciana Totoli",
          "Fogueira: William e Beto",
        ],
      },
    ],
    notes: [
      "A noite começa às 20h, conforme o roteiro geral.",
      "As equipes precisam manter o padrinho que as acompanha sempre por perto.",
    ],
  },
  {
    id: "silvio-santos",
    weekday: "Sexta-feira",
    date: "27/11",
    start: "20h30",
    title: "Programa Silvio Santos",
    subtitle: "Uma noite de auditório",
    tagline:
      "Cinco jogos, show de calouros, Mister M. e as pegadinhas clássicas no telão.",
    accent: "rose",
    context:
      "No teatro, o Programa Silvio Santos ganha vida com apresentações e atrações inspiradas nos quadros que marcaram época. As equipes disputam cinco jogos sorteados, sempre entre duas equipes, com o mesmo teto de 20 pontos por jogo.",
    extras: [
      {
        title: "Elenco",
        items: [
          "Silvio Santos: Roberto (Beto)",
          "Assistentes de palco: Carol e Aryana",
          "Jurados: Juliana (Elke Maravilha), William (Chaves), Fabiana (Sônia Lima), Isabela (Flor)",
          "Calouros: Fernando e Geisla (Lady Gaga e Bruno Mars); Sérgio e Carla (Calypso)",
          "Mister M.: Leonardo",
        ],
      },
      {
        title: "Atrações da noite",
        items: [
          "Silvio Santos jogando aviãozinho valendo ponto",
          "Show do Mister M.",
          "Pegadinhas clássicas no telão",
          "Show de calouros",
        ],
      },
    ],
    stationsLabel: "Jogos",
    stations: [
      {
        id: "qual-e-a-musica",
        name: "Jogo 1 — Qual é a música?",
        local: "Teatro",
        leaders: "Apresentação: Silvio Santos e assistentes",
        summary: "Identificar a melodia e correr até o microfone.",
        dynamics: [
          "Duas equipes são sorteadas para disputar.",
          "São selecionadas 12 músicas. Em cada rodada, toca apenas a melodia.",
          "As equipes formam uma fila. Um participante de cada equipe por rodada deve identificar a música e correr até o microfone para responder o nome da música, cantar um trecho ou dizer quem canta.",
          "Quem chegar primeiro ao microfone tem o direito de responder.",
        ],
        rules: [
          "Acerto vale 1 ponto para a equipe.",
          "Se errar, o outro participante tem direito à resposta.",
          "Ao final das 12 músicas, soma-se a pontuação de cada equipe.",
          "Equipes com 11 integrantes escolhem 1 para jogar duas vezes.",
          "A equipe com mais acertos ganha 20 pontos.",
        ],
        penalties: [
          "Soprar a resposta do jovem que está jogando: −2 pontos.",
          "Resposta falada antes de chegar ao microfone não vale ponto.",
        ],
      },
      {
        id: "tres-pontinhos",
        name: "Jogo 2 — Jogo dos três pontinhos",
        local: "Teatro",
        leaders: "Apresentação: Silvio Santos e assistentes",
        summary: "Três dicas para uma palavra.",
        dynamics: [
          "Duas equipes são sorteadas para disputar.",
          "Em cada rodada, são apresentadas três dicas que levam a uma palavra.",
          "A primeira equipe tenta acertar com uma dica. Se não acertar, o padrinho passa a vez para a outra equipe e dá a segunda dica. Se ainda não acertar, a vez volta para a primeira equipe e dá a terceira dica.",
        ],
        rules: [
          "Acertar com 1, 2 ou 3 dicas vale 1 ponto.",
          "Serão 12 rodadas.",
          "A equipe com mais acertos ganha 20 pontos.",
        ],
        penalties: ["Soprar a resposta: −3 pontos."],
      },
      {
        id: "qual-e-o-preco",
        name: "Jogo 3 — Qual é o preço?",
        local: "Teatro",
        leaders: "Apresentação: Silvio Santos e assistentes",
        summary: "Chegar o mais perto possível do valor real de mercado.",
        dynamics: [
          "Duas equipes são sorteadas para disputar.",
          "O apresentador exibe uma imagem no telão para as duas equipes ao mesmo tempo.",
          "As equipes têm 1 minuto para avaliar o item, debater e definir um valor exato em reais como palpite oficial.",
          "O valor deve ser escrito na lousa e mostrado quando o apresentador solicitar.",
          "O apresentador revela o preço real. A equipe cujo palpite chegar mais perto, para mais ou para menos, ganha a rodada e leva 1 ponto.",
        ],
        rules: [
          "O palpite deve ser um consenso do grupo e estar escrito de forma clara na lousa. Palpites ditos após o tempo esgotado não valem.",
          "Vence a menor diferença matemática em relação ao valor real.",
          "Se as duas equipes anotarem exatamente o mesmo palpite e ele for próximo do valor real, cada uma recebe 1 ponto.",
          "Se o palpite for muito distante do valor real, nenhuma equipe pontua.",
          "Em caso de diferença matemática igual, a equipe que respondeu o valor abaixo do real ganha o ponto.",
          "As equipes devem escrever seus palpites em segredo.",
          "A equipe com mais acertos ganha 20 pontos.",
        ],
        penalties: [
          "Não ter o palpite escrito até 1 minuto: perde a rodada.",
          "Rasurar o palpite final depois que o cronômetro parar: perde a rodada.",
          "Tentar olhar o palpite do adversário: −1 ponto.",
          "Tentar confundir a equipe adversária: −2 pontos.",
        ],
      },
      {
        id: "ditado-popular",
        name: "Jogo 4 — Ditado popular",
        local: "Teatro",
        leaders: "Apresentação: Silvio Santos e assistentes",
        summary: "Completar o provérbio antes do adversário.",
        dynamics: [
          "As equipes formam uma fila que define a ordem de jogada.",
          "O apresentador lê em voz alta apenas a primeira metade de um ditado popular.",
          "Um participante de cada equipe por rodada identifica o ditado e corre até o microfone para completá-lo.",
          "Quem chegar primeiro ao microfone tem o direito de responder. Se completar perfeitamente, a equipe ganha 1 ponto.",
        ],
        rules: [
          "Só vale a resposta falada no microfone.",
          "O participante tem no máximo 5 segundos para iniciar e concluir a resposta.",
          "Se o jogador que chegou primeiro errar ou estourar o tempo, o direito de resposta passa automaticamente para o integrante da outra equipe.",
          "Enquanto o apresentador dita e os jogadores correm, os outros integrantes devem permanecer em silêncio absoluto.",
          "A equipe com mais acertos ganha 20 pontos.",
        ],
        penalties: [
          "Correr para o microfone antes de o apresentador terminar a primeira metade: largada queimada.",
          "Gritar a resposta ou dar dica do banco de reservas: perde o direito à rodada e −1 ponto.",
          "Atrapalhar a corrida do adversário: −2 pontos.",
          "Derrubar o microfone: −2 pontos.",
        ],
        extras: [
          {
            title: "Ditados da noite",
            numbered: true,
            items: [
              "Água mole em pedra dura, tanto bate até que fura.",
              "Quem espera sempre alcança.",
              "Mais vale um pássaro na mão do que dois voando.",
              "De grão em grão, a galinha enche o papo.",
              "Quem com ferro fere, com ferro será ferido.",
              "Cão que late não morde.",
              "Em boca fechada não entra mosca.",
              "A pressa é inimiga da perfeição.",
              "Antes tarde do que nunca.",
              "Santo de casa não faz milagre.",
              "Cada macaco no seu galho.",
              "Quem não tem cão caça com gato.",
              "Filho de peixe, peixinho é.",
              "O barato sai caro.",
              "Deus ajuda quem cedo madruga.",
            ],
          },
        ],
      },
      {
        id: "troca-ou-nao-troca",
        name: "Jogo 5 — Troca ou não troca?",
        local: "Teatro",
        leaders: "Apresentação: Silvio Santos e assistentes",
        summary: "Um objeto, uma oferta e uma decisão sem ouvir a equipe.",
        dynamics: [
          "Duas equipes são sorteadas para disputar.",
          "Um jogador de cada equipe por vez: jogador 1 da equipe A e jogador 1 da equipe B; depois, os jogadores 2, e assim por diante.",
          "As duas equipes começam com 1 objeto igual. Cada objeto tem uma pontuação diferente, de 2 a 20 pontos.",
          "O participante da vez usa abafadores de ouvido para não ouvir o que acontece na dinâmica.",
          "O apresentador oferece outro objeto ao participante, que está de costas, e ele responde sim ou não para a troca.",
          "Ao final de todas as rodadas, a pontuação do último objeto escolhido é a pontuação da equipe.",
        ],
        penalties: [
          "Se demorar a responder, o apresentador inicia a contagem de 5 segundos; se não responder, permanece com o objeto da rodada anterior.",
          "Os outros integrantes devem ficar em silêncio absoluto. Se tentarem influenciar a resposta: −2 pontos.",
        ],
      },
    ],
    notes: [
      "Ao final do primeiro jogo, Silvio entra jogando aviãozinho e interagindo com a plateia.",
      "Depois do jogo dos três pontinhos, acontece a apresentação do Mister M.",
      "Depois do ditado popular, o telão exibe as pegadinhas clássicas.",
      "O show de calouros acontece depois do Qual é o preço?: duas duplas se apresentam e quem receber a maior nota dos jurados ganha 1 milhão.",
      "Silvio encerra o programa e se despede da plateia.",
    ],
  },
  {
    id: "caca-ao-tesouro",
    weekday: "Sábado",
    date: "28/11",
    start: "13h00",
    title: "Caça ao Tesouro — Operação AVT",
    subtitle: "Doze estações para salvar o multiverso",
    tagline:
      "Agentes da AVT recuperam cristais temporais em estações comandadas por heróis da Marvel.",
    accent: "gold",
    context:
      "Uma ruptura temporal espalhou realidades e cristais temporais. As equipes percorrem doze estações, cada uma com um herói, uma prova e um cristal. No anfiteatro, o Doutor Estranho reúne os cristais e faz a conexão final.",
    stationsLabel: "Estações",
    stations: [
      {
        id: "thor",
        name: "Thor e Valquíria",
        local: "Redondo perto das quadras",
        leaders: "Alexandre e Érika",
        summary: "Encontrar os fragmentos de Mjölnir com o martelo, vendados.",
        dialogue: [
          {
            speaker: "Thor",
            line: "Agentes da AVT, a ruptura temporal atingiu Asgard! Mjölnir foi danificado e seus fragmentos estão espalhados por esta dimensão!",
          },
          {
            speaker: "Valquíria",
            line: "Precisamos da ajuda de vocês para recuperar todos os fragmentos e reunir as peças!",
          },
        ],
        dynamics: [
          "O padrinho entrega o Mjölnir ao jovem, que deve estar vendado; só o capitão dá comandos. Quando todos os jovens jogarem, o capitão define um deles para guiá-lo e é a sua vez de ser vendado.",
          "Os participantes usam o martelo para encontrar e resgatar os fragmentos de metal espalhados pelo território.",
          "Ao encontrar um item, devem levá-lo até o baú de Asgard; ao chegar ao baú, podem tirar a venda e depositar o objeto.",
          "O martelo deve ser passado para o próximo integrante e a equipe continua buscando até o fim dos 5 minutos.",
        ],
        rules: [
          "Apenas o martelo pode tocar nos objetos.",
          "Não vale pegar o metal com as mãos diretamente.",
          "Cada participante deve fazer pelo menos uma busca.",
          "Os objetos recuperados precisam estar dentro da caixa para valer ponto.",
        ],
        penalties: [
          "Pegar objetos diretamente com as mãos: −5 pontos.",
          "Depositar objetos fora do baú: não pontua.",
        ],
        scoring: commonScoring,
      },
      {
        id: "capitao-america",
        name: "Capitão América e Caveira Vermelha",
        local: "Quadra de grama",
        leaders: "Luciano, Sérgio e Luciana",
        summary: "Circuito de duplas e granadas contra as garrafas da HYDRA.",
        dialogue: [
          {
            speaker: "Capitão América",
            line: "Agentes da AVT, a ruptura temporal trouxe de volta uma ameaça perigosa: a HYDRA! Precisamos impedir que ela comprometa ainda mais as linhas do multiverso!",
          },
          {
            speaker: "Caveira Vermelha",
            line: "Vocês acham que podem me deter? Para provar seu valor, terão que superar meu desafio!",
          },
        ],
        dynamics: [
          "Cada equipe é dividida em duplas.",
          "Os dois jovens começam de mãos dadas e percorrem o trajeto em zig-zag entre os cones.",
          "A dupla passa por baixo da rede de mãos dadas, rastejando.",
          "Os bambolês espalhados pelo chão são atravessados pulando com os dois pés juntos, também de mãos dadas.",
          "No fim do percurso ficam as garrafas identificadas como HYDRA. Cada integrante recebe 4 granadas e tenta derrubar a maior quantidade de garrafas, um afilhado por vez. Nesse momento podem soltar as mãos: uma segura o escudo e a outra arremessa.",
          "O padrinho Luciano, caracterizado como Caveira Vermelha, fica em uma área delimitada e tenta atrapalhar, atirando bolinhas de gel.",
          "Assim que os arremessos terminam, a outra dupla inicia o circuito.",
        ],
        rules: ["Os jovens devem manter todo o percurso de mãos dadas."],
        penalties: ["Soltar as mãos durante o percurso: −5 pontos."],
        scoring: commonScoring,
      },
      {
        id: "hulk",
        name: "Hulk e Rocket",
        local: "Quadra de cimento",
        leaders: "Breno Moretti, Fábio (Carla) e Daniel Oliveira",
        summary: "Arremesso de pesos: força com estratégia.",
        dialogue: [
          {
            speaker: "Hulk",
            line: "Hulk está com um problema! A ruptura temporal espalhou objetos por esta dimensão e preciso recuperar minha força!",
          },
          {
            speaker: "Rocket",
            line: "Agentes da AVT, vocês terão que mostrar que são fortes e trabalhar em equipe. Mas cuidado: força sem estratégia não vale nada!",
          },
        ],
        dynamics: [
          "Cada jovem, por vez, usa a pista de arremesso e escolhe um peso.",
          "Depois de colocar a mão no peso, não pode trocar.",
          "Todos arremessam tentando alcançar a maior pontuação, sem ultrapassar a linha de arremesso.",
          "Após jogar, volta para o fim da fila. Só valem os arremessos dentro dos 5 minutos.",
        ],
        penalties: [
          "Escolher um peso e trocar: −2 pontos.",
          "Ultrapassar a linha de arremesso: −2 pontos.",
        ],
        scoring: commonScoring,
      },
      {
        id: "loki",
        name: "Loki e Sylvie",
        local: "Árvores (floresta)",
        leaders: "Etiene e Fabiana",
        summary: "Capturar as variantes de Loki antes que o tempo acabe.",
        dialogue: [
          {
            speaker: "Loki",
            line: "Agentes da AVT, minhas variantes escaparam e estão espalhadas por esta dimensão! E, conhecendo minhas variantes, elas não vão facilitar a vida de vocês!",
          },
          {
            speaker: "Sylvie",
            line: "Vocês precisam capturá-las e levá-las até o baú. Mas cuidado: o dado decidirá os desafios que terão de enfrentar!",
          },
        ],
        dynamics: [
          "A equipe procura as variantes de Loki espalhadas pelo ambiente.",
          "O participante joga o dado e segue os comandos.",
          "Cada participante pode pegar apenas uma variante por vez, exceto se o comando do dado disser diferente, e deve levá-la ao baú antes de buscar outra.",
          "Sempre que retornar ao baú, bate na mão do próximo jogador; então o próximo participante lança o dado e cumpre a ação sorteada antes de continuar procurando.",
          "A equipe continua capturando variantes até o fim dos 5 minutos.",
        ],
        penalties: [
          "Avançar antes de bater na mão: −2 pontos.",
          "Pegar mais de uma variante por vez: −2 pontos.",
          "Não seguir os comandos do dado: perde pontos.",
        ],
        scoring: commonScoring,
        extras: [
          {
            title: "Ações do dado de Loki",
            numbered: true,
            items: [
              "Capture 2 variantes na próxima rodada, uma de cada vez — pode jogar.",
              "Faça 5 polichinelos antes de continuar — pode jogar.",
              "Fique congelado por 10 segundos — pode jogar.",
              "Jogue mais uma rodada — pode jogar duas vezes.",
              "Perca uma variante e devolva-a ao campo — passe a vez.",
              "Recite uma pequena parlenda antes de continuar — pode jogar.",
              "Perca a vez e vá para o fim da fila — passe a vez.",
              "Ganhe imunidade e ignore a próxima penalidade — pode jogar.",
              "Fique parado por 10 segundos fazendo a pose de um personagem da Marvel — pode jogar.",
              "Faça 5 agachamentos antes de continuar — pode jogar.",
              "Escolha quem será o próximo participante a jogar — passa a vez.",
              "Troque de lugar com outro participante — passa a vez.",
              "Não pode buscar uma variante nesta rodada — passa a vez.",
              "Ignore a próxima ação negativa que tirar no dado — pode jogar.",
              "Você está com sorte! Pode buscar duas variantes — pode jogar.",
              "Capture 3 variantes na rodada, uma de cada vez — pode jogar.",
              "Faça 5 flexões antes de continuar — pode jogar.",
              "Pule em um pé só até a variante, se o percurso estiver livre e seguro — pode jogar.",
              "Devolva uma variante ao campo. Se não houver nenhuma, perca a próxima vez — passe a vez.",
              "Jogue o dado novamente e cumpra a nova ação — pode jogar.",
            ],
          },
        ],
      },
      {
        id: "feiticeira",
        name: "Feiticeira Escarlate e Agatha",
        local: "Ao lado do refeitório",
        leaders: "Heliene e Juliana",
        summary: "Atravessar o campo de armadilhas sem pisar na mina.",
        dialogue: [
          {
            speaker: "Wanda",
            line: "Agentes da AVT, uma ruptura temporal atingiu esta dimensão e meus filhos, Billy e Tommy, também foram afetados! Precisamos restaurar essa realidade!",
          },
          {
            speaker: "Agatha",
            line: "Será que vocês conseguem? Duvido que tenham memória e atenção suficientes para atravessar meu campo de armadilhas!",
          },
        ],
        dynamics: [
          "A equipe deve descobrir o caminho seguro até o outro lado do campo. A equipe pode ajudar.",
          "Apenas um participante entra por vez.",
          "O jogador escolhe uma casa e aguarda a confirmação da Wanda. Se acertar, permanece na casa; se errar, pisou na mina.",
          "Em seguida, entra o próximo participante, que deve iniciar o percurso do começo.",
          "Regra principal: se alguém pisar em uma mina, toda a equipe retorna ao início e recomeça a travessia.",
        ],
        penalties: ["Trocar de casa: −2 pontos."],
        scoring: commonScoring,
      },
      {
        id: "wolverine",
        name: "Wolverine e Deadpool",
        local: "Piscina redonda",
        leaders: "Michel, Breno e Adilson",
        summary: "Montar o Deadpool com as pistas resgatadas da piscina.",
        dialogue: [
          {
            speaker: "Wolverine",
            line: "Agentes da AVT, uma ruptura temporal separou o Deadpool do próprio corpo! Precisamos recuperar os fragmentos espalhados por esta dimensão!",
          },
          {
            speaker: "Deadpool (cabeça)",
            line: "Ei! Eu estou perfeitamente bem! Só estou temporariamente sem corpo! Pelo lado positivo, não preciso me preocupar com o que vestir hoje!",
          },
        ],
        dynamics: [
          "Definir quais afilhados entram na piscina; apenas 1 participante por vez.",
          "Ele pode retirar apenas 1 pista.",
          "Entrega a peça para a equipe, que monta o Deadpool no painel ou descarta a pista, caso seja repetida.",
          "O próximo participante entra imediatamente na piscina; não precisa esperar a montagem.",
          "A prova continua até o tempo acabar ou o Deadpool ser montado completamente.",
        ],
        penalties: ["Pegar mais de uma pista: −2 pontos."],
        scoring: commonScoring,
      },
      {
        id: "homem-aranha-caca",
        name: "Homem-Aranha e MJ",
        local: "Refeitório",
        leaders: "Padre Diego, Luciana Neves, Silvana e Sueli",
        summary:
          "Transportar a pizza numa teia de barbante, sem tocar na caixa.",
        dialogue: [
          {
            speaker: "Homem-Aranha",
            line: "Agentes da AVT, uma falha temporal bagunçou esta dimensão e deixou uma missão importante nas minhas mãos. Precisamos transportar esta pizza até o destino final para conseguir acessar um cristal temporal!",
          },
          {
            speaker: "MJ",
            line: "Peter, você tem certeza de que consegue fazer isso? Da última vez que tentou resolver tudo sozinho, quase derrubou metade de um prédio!",
          },
        ],
        dynamics: [
          "Construir uma teia de barbante capaz de transportar a caixa de pizza do ponto de partida até o ponto de entrega, sem que ninguém toque diretamente na caixa.",
          "Todos os 10 participantes devem participar do transporte.",
          "A pizza e a garrafa devem permanecer dentro da caixa durante todo o percurso.",
          "A equipe recebe barbante e tesoura e deve criar uma teia envolvendo a caixa.",
          "É obrigatório que cada participante segure uma parte do barbante, usando somente uma mão.",
          "A equipe caminha até o ponto de entrega mantendo a pizza equilibrada. Se a pizza cair, a equipe retorna ao início e reinicia o transporte.",
        ],
        penalties: [
          "Segurar a caixa com as mãos em vez de sustentá-la apenas pelo barbante: −5 pontos.",
          "Se a pizza cair, a equipe reinicia o trajeto.",
        ],
        scoring: commonScoring,
      },
      {
        id: "guardioes",
        name: "Guardiões da Galáxia",
        local: "Coreto",
        leaders: "Mateus e Carla",
        summary: "Construir uma nave que fique de pé sozinha.",
        dialogue: [
          {
            speaker: "Peter Quill",
            line: "Agentes da AVT, a ruptura do multiverso danificou nossa nave! Precisamos construir outra para continuar nossa missão!",
          },
          {
            speaker: "Mantis",
            line: "Vamos precisar de criatividade e trabalho em equipe. Vocês conseguem nos ajudar?",
          },
        ],
        dynamics: [
          "Todos os integrantes devem participar da construção.",
          "A nave deve ficar em pé sozinha.",
          "Ela deve ter, no mínimo, cabine, duas asas e motores.",
          "A equipe pode decorar a nave como quiser, usando os recursos disponibilizados.",
        ],
        penalties: [
          "Não incluir um dos itens obrigatórios: −2 pontos por item.",
        ],
        scoring: commonScoring,
        note: "Os padrinhos precisam identificar qual nave pertence a cada equipe.",
      },
      {
        id: "capita-marvel",
        name: "Capitã Marvel e Nick Fury",
        local: "Terreirão",
        leaders: "Juliana Cintra, Beto e Leonardo Cintra",
        summary: "Catapulta, energia cósmica e pontaria.",
        dialogue: [
          {
            speaker: "Capitã Marvel",
            line: "Agentes da AVT, a ruptura das linhas temporais liberou uma enorme quantidade de energia cósmica, e ela está ficando instável!",
          },
          {
            speaker: "Nick Fury",
            line: "Precisamos direcionar essa energia para o alvo antes que ela comprometa toda esta dimensão. Vocês têm cinco minutos.",
          },
        ],
        dynamics: [
          "A distância da catapulta até os alvos é de 2 m e 40 cm.",
          "Os participantes formam uma fila e jogam um por vez.",
          "Cada jogador realiza 2 lançamentos, uma bolinha azul e uma dourada, usando a catapulta.",
          "Após lançar, o padrinho libera o próximo jogador.",
        ],
        penalties: ["Ultrapassar a linha de arremesso: −2 pontos."],
        scoring: commonScoring,
      },
      {
        id: "homem-de-ferro",
        name: "Homem de Ferro, Pepper e Shuri",
        local: "Redondo de vidro",
        leaders: "Alexandre Brida, Célia e Geisla",
        summary: "Reativar o Reator Arc montando o circuito elétrico.",
        dialogue: [
          {
            speaker: "Tony Stark",
            line: "Construí uma máquina do tempo, mas estamos sem energia! O Reator Arc foi danificado e precisa ser reativado!",
          },
          {
            speaker: "Shuri",
            line: "Precisamos montar o circuito elétrico corretamente. Acendam a lâmpada e reativem o Reator Arc!",
          },
        ],
        dynamics: [
          "Cada equipe observa os componentes disponíveis e o manual de instruções.",
          "Os participantes montam o circuito elétrico seguindo as orientações do manual.",
          "Todos colaboram, respeitando a vez e as ideias dos colegas.",
          "A equipe avisa o padrinho quando acreditar que o circuito está completo. Ele verifica: se estiver correto, a lâmpada da armadura acende e a missão é concluída.",
          "Se a lâmpada não acender, a equipe pode revisar as conexões e tentar novamente dentro do tempo.",
        ],
        penalties: ["Manusear os materiais de forma inadequada: −5 pontos."],
        scoring: commonScoring,
      },
      {
        id: "viuva-negra",
        name: "Viúva Negra e Gavião Arqueiro",
        local: "Igrejinha",
        leaders: "Isabela, Fábio e Gislaine",
        summary: "Três sistemas de segurança no escuro.",
        dialogue: [
          {
            speaker: "Viúva Negra",
            line: "Agentes da AVT, encontramos um arquivo secreto deixado por uma variante desconhecida. Ele contém a localização de um cristal temporal!",
          },
          {
            speaker: "Gavião Arqueiro",
            line: "Mas o arquivo está protegido por três sistemas de segurança. Precisamos decifrar os códigos para descobrir onde está a chave da missão.",
          },
        ],
        dynamics: [
          "A sala fica toda escura e cada equipe recebe uma lanterna.",
          "A equipe resolve os três enigmas na ordem indicada.",
          "Primeiro desafio: decifrar o código usando a legenda e encontrar a frase correta.",
          "Segundo: usar a lanterna de luz negra para localizar a mensagem escondida.",
          "Terceiro: encontrar e organizar os símbolos fluorescentes para descobrir a pista final.",
          "Com a pista final, localizar a chave e solicitá-la ao padrinho.",
          "Não é permitido pular etapas, receber dicas de fora da equipe ou mexer nos materiais antes da autorização.",
        ],
        penalties: ["Pular etapas: −5 pontos."],
        scoring: commonScoring,
      },
      {
        id: "doutor-destino",
        name: "Teatro final — Doutor Estranho",
        local: "Anfiteatro",
        leaders: "Fernando",
        summary: "Reunir os cristais e girar as chaves dos heróis.",
        dialogue: [
          {
            speaker: "Doutor Estranho",
            line: "Agentes da AVT, chegamos ao momento decisivo! O multiverso continua instável e precisamos restaurar as linhas temporais. Reúnam os cristais que conquistaram durante as estações.",
          },
          {
            speaker: "Doutor Estranho",
            line: "Cada chave representa um herói. Vocês precisarão identificar pela pista e girar a chave correspondente. Que comece a conexão das realidades!",
          },
        ],
        dynamics: [
          "Cada equipe se aproxima e entrega seus cristais ao Doutor Estranho.",
          "Cada chave representa um herói: a equipe identifica pela pista e gira a chave correspondente.",
          "Quando todas ou quase todas as chaves estiverem corretas, o painel acende.",
        ],
        scoring: [
          "Equipe que acender todas as luzes corretamente: 10 pontos.",
          "Demais equipes: 5 pontos.",
        ],
      },
    ],
    finale: {
      title: "Encerramento",
      text: "Com o painel aceso, o Doutor Estranho declara: “Conexões estabelecidas! As linhas temporais estão se alinhando… As realidades estão voltando aos seus lugares!” Em nome da AVT, a missão é cumprida. Os jovens recebem os tubetes personalizados da Marvel com chocolates.",
    },
    notes: [
      "Cada estação tem 3 minutos de explicação e 5 minutos de execução da prova.",
      "Os padrinhos entregam o cristal e o enigma correspondente a cada equipe ao final da estação.",
      "A caça começa às 13h, conforme o roteiro geral, e a entrega do tesouro é às 17h no refeitório.",
    ],
  },
];
