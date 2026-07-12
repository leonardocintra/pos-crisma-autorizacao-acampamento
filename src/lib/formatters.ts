const monthFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "long",
});

const fullDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export const formatFullDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return fullDateFormatter.format(date);
};

export const formatDateRange = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const sameMonth = startDate.getMonth() === endDate.getMonth();

  const startDay = startDate.getDate().toString().padStart(2, "0");
  const endDay = endDate.getDate().toString().padStart(2, "0");
  const endMonth = monthFormatter.format(endDate);
  const startMonth = monthFormatter.format(startDate);

  if (sameMonth) {
    return `${startDay} a ${endDay} de ${endMonth} de ${endDate.getFullYear()}`;
  }

  return `${startDay} de ${startMonth} a ${endDay} de ${endMonth} de ${endDate.getFullYear()}`;
};
