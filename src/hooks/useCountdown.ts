import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function computeCountdown(target: Date): CountdownValue {
  const diffMs = target.getTime() - Date.now();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Cuenta regresiva en tiempo real hasta la fecha `target` (instante UTC ya
 * calculado). Se actualiza cada segundo mientras la fecha no haya llegado.
 */
export function useCountdown(target: Date): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() => computeCountdown(target));

  useEffect(() => {
    if (value.isPast) return;

    const interval = window.setInterval(() => {
      setValue(computeCountdown(target));
    }, 1000);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.getTime()]);

  return value;
}
