import { weddingConfig } from "../config/weddingConfig";
import { argentinaDateTimeToUtc, formatIcsDate } from "./datetime";

const EVENT_TITLE = `Casamiento de ${weddingConfig.couple.bride} & ${weddingConfig.couple.groom}`;
const EVENT_DESCRIPTION = `Celebramos nuestro casamiento. ${weddingConfig.couple.bride} & ${weddingConfig.couple.groom} — 04 de diciembre de 2026.`;

function getEventLocation(): string {
  const { name, address } = weddingConfig.venue;
  return [name, address].filter((part) => part && part !== "[COMPLETAR]").join(", ") || "[COMPLETAR]";
}

function getEventTimes(): { start: Date; end: Date } {
  const start = argentinaDateTimeToUtc(weddingConfig.date, weddingConfig.ceremonyTime);
  const end = new Date(start.getTime() + weddingConfig.eventDurationHours * 60 * 60 * 1000);
  return { start, end };
}

/**
 * Genera la URL de "Agregar a Google Calendar" con los datos del evento.
 */
export function buildGoogleCalendarUrl(): string {
  const { start, end } = getEventTimes();

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${formatIcsDate(start)}/${formatIcsDate(end)}`,
    details: EVENT_DESCRIPTION,
    location: getEventLocation(),
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Genera el contenido de un archivo .ics válido (RFC 5545) para
 * Apple Calendar / Outlook / cualquier cliente compatible.
 */
export function buildIcsContent(): string {
  const { start, end } = getEventTimes();
  const now = formatIcsDate(new Date());
  const uid = `flor-mati-boda-${weddingConfig.date}@wedding`;

  const escapeIcsText = (text: string) =>
    text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Flor & Mati//Boda 04-12-2026//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcsText(EVENT_TITLE)}`,
    `DESCRIPTION:${escapeIcsText(EVENT_DESCRIPTION)}`,
    `LOCATION:${escapeIcsText(getEventLocation())}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  // iCalendar requiere finales de línea CRLF
  return lines.join("\r\n");
}

export function downloadIcsFile(filename = "casamiento-flor-mati.ics"): void {
  const content = buildIcsContent();
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
