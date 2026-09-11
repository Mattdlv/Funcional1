const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

const longDateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "America/Argentina/Buenos_Aires",
});

export function formatLongDate(isoDate: string): string {
  // Se agrega hora mediodía para evitar corrimientos de día por huso horario.
  const date = new Date(`${isoDate}T12:00:00`);
  return longDateFormatter.format(date);
}
