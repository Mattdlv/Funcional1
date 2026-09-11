import { CalendarPlus, CalendarDays } from "lucide-react";
import { buildGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";
import { Reveal } from "./Reveal";

export function CalendarSection() {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-paper">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="section-label">Guardá la fecha</p>
          <h2 className="section-title mt-3">Que no se te pase</h2>
          <p className="mt-4 font-serif text-lg text-ink/75">
            Queremos que este día quede reservado en tu calendario.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <CalendarPlus size={17} />
              Agregar a Google Calendar
            </a>
            <button type="button" onClick={() => downloadIcsFile()} className="btn-secondary">
              <CalendarDays size={17} />
              Agregar al calendario (iPhone)
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
