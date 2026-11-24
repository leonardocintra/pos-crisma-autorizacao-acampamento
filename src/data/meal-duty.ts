export type MealDuty = {
  meal: "Café da manhã" | "Almoço" | "Jantar";
  people: string[];
};

export type DutyDay = {
  id: string;
  weekday: string;
  date: string;
  meals: MealDuty[];
};

export const mealDuty: DutyDay[] = [
  {
    id: "quarta",
    weekday: "Quarta-feira",
    date: "25/11",
    meals: [
      {
        meal: "Jantar",
        people: ["Leonardo Cintra e Juliana", "Adilson e Célia"],
      },
    ],
  },
  {
    id: "quinta",
    weekday: "Quinta-feira",
    date: "26/11",
    meals: [
      {
        meal: "Café da manhã",
        people: ["Daniel e Geisla", "Breno Moreti"],
      },
      {
        meal: "Almoço",
        people: ["Fábio Vicente e Carla"],
      },
      {
        meal: "Jantar",
        people: ["Luciano e Luciana Neves", "Breno Silva e Letícia"],
      },
    ],
  },
  {
    id: "sexta",
    weekday: "Sexta-feira",
    date: "27/11",
    meals: [
      {
        meal: "Café da manhã",
        people: ["Aryana e William"],
      },
      {
        meal: "Almoço",
        people: ["Alexandre Brida e Silvana", "Sérgio e Rita"],
      },
      {
        meal: "Jantar",
        people: ["Etiene e Luciana Totoli", "Gislaine e Maria Isabel"],
      },
    ],
  },
  {
    id: "sabado",
    weekday: "Sábado",
    date: "28/11",
    meals: [
      {
        meal: "Café da manhã",
        people: ["Fábio e Juliana"],
      },
      {
        meal: "Almoço",
        people: ["Beto e Dalva", "Marcos Petri", "Andréia"],
      },
      {
        meal: "Jantar",
        people: ["Leonardo e Isabela"],
      },
    ],
  },
  {
    id: "domingo",
    weekday: "Domingo",
    date: "29/11",
    meals: [
      {
        meal: "Café da manhã",
        people: ["Fernando e Heliene"],
      },
      {
        meal: "Almoço",
        people: ["Michel e Fabiana", "Roberto e Sueli"],
      },
    ],
  },
];

export const dutyWarnings = [
  {
    title: "Todos os padrinhos ajudam",
    body: "No momento de colocar as malas nos ônibus, todos os padrinhos ajudam a ficar de olho nos jovens.",
  },
  {
    title: "Vigia é presença",
    body: "A escala vale para as refeições do dia. Se precisar trocar, combine antes com a pessoa e avise a coordenação.",
  },
];
