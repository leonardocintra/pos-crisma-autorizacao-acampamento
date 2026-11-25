export type NightShift = {
  time: string;
  people: string[];
  note?: string;
};

export type NightDutyDay = {
  id: string;
  weekday: string;
  date: string;
  shifts: NightShift[];
};

export const nightDuty: NightDutyDay[] = [
  {
    id: "quarta",
    weekday: "Quarta-feira",
    date: "25/11",
    shifts: [
      { time: "22h–23h30", people: ["Juliana (Fábio)", "Heliene"] },
      { time: "23h30–1h", people: ["Maria Isabel", "Aryana"] },
      { time: "1h–2h30", people: ["Beto", "Sergio"] },
      { time: "2h30–4h", people: ["Marcos P.", "Daniel"] },
      { time: "4h–5h30", people: ["Geisla", "Gianna"] },
      { time: "5h30–7h", people: ["Dalva", "Andreia"] },
    ],
  },
  {
    id: "quinta",
    weekday: "Quinta-feira",
    date: "26/11",
    shifts: [
      { time: "22h–23h30", people: ["Fábio", "Fábio V."] },
      { time: "23h30–1h", people: ["Breno (Letícia)", "Mateus"] },
      { time: "1h–2h30", people: ["Willian", "Michel"] },
      { time: "2h30–4h", people: ["Carla", "Silvana"] },
      { time: "4h–5h30", people: ["Maria Rita", "Fabiana"] },
      { time: "5h30–7h", people: ["Carol", "Isabela"] },
    ],
  },
  {
    id: "sexta",
    weekday: "Sexta-feira",
    date: "27/11",
    shifts: [
      { time: "22h–0h", people: ["Fernando", "Adilson"] },
      { time: "0h–1h30", people: ["Lídia", "Fátima"] },
      {
        time: "1h30–3h",
        people: ["Luciana (Etiene)", "Célia"],
        note: "Acordar os jovens para a Missa.",
      },
    ],
  },
  {
    id: "sabado",
    weekday: "Sábado",
    date: "28/11",
    shifts: [
      { time: "22h–23h30", people: ["Juliana (Léo)", "Érika"] },
      { time: "23h30–1h", people: ["Luciano", "Alexandre M"] },
      { time: "1h–2h30", people: ["Etiene", "Leonardo (Isabela)"] },
      { time: "2h30–4h", people: ["Breno (Suzi)", "Leonardo (Juliana)"] },
      { time: "4h–5h30", people: ["Gislaine", "Luciana"] },
      { time: "5h30–7h", people: ["Beto (Dalva)", "Alexandre (Silvana)"] },
    ],
  },
];

export const nightDutyInfo = {
  title: "Como funciona a vigia noturna",
  body: "A vigia começa depois do jantar e cobre a noite em turnos de uma hora e meia. Na quarta, quinta e sábado vai até as 7h; na sexta, termina às 3h, quando a equipe acorda os jovens para a Missa.",
} as const;
