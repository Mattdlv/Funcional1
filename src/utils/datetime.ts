// Utilidades de fecha/hora. Argentina no usa horario de verano desde 2009
// y su offset es fijo: UTC-03:00. Construimos la fecha del evento como un
// instante UTC correspondiente a esa hora local, para que el countdown sea
// correcto sin importar en qué zona horaria esté el dispositivo del invitado.

const ARGENTINA_UTC_OFFSET_HOURS = -3;

/**
 * Combina una fecha ISO (YYYY-MM-DD) y una hora "HH:mm" interpretadas en
 * horario de Argentina (UTC-3) y devuelve el instante equivalente en UTC.
 */
export function argentinaDateTimeToUtc(isoDate: string, time: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);

  // Fecha/hora "naive" tratada como si fuese UTC, luego restamos el offset
  // (offset negativo) para obtener el instante UTC real.
  const naiveUtcMs = Date.UTC(year, month - 1, day, hours, minutes, 0);
  const realUtcMs = naiveUtcMs - ARGENTINA_UTC_OFFSET_HOURS * 60 * 60 * 1000;
  return new Date(realUtcMs);
}

export function formatIcsDate(date: Date): string {
  // Formato UTC requerido por el estándar iCalendar: YYYYMMDDTHHMMSSZ
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}` +
    `T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`
  );
}
