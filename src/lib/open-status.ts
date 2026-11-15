import type { OpeningHours } from '../content/site';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

export interface StatusCopy {
  openNow: string;
  closedNow: string;
  opensAt: string;
  until: string;
  today: string;
  tomorrow: string;
  weekdayPrefix: string;
  at: string;
  hoursSuffix: string;
}

export interface OpenStatus {
  open: boolean;
  label: string;
  detail: string;
}

const toMinutes = (hhmm: string) => {
  const [h = 0, m = 0] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const formatTime = (hhmm: string, suffix: string) => {
  const [h = '0', m = '00'] = hhmm.split(':');
  return m === '00' ? `${Number(h)} ${suffix}` : `${Number(h)}:${m} ${suffix}`;
};

/** Current weekday index and minutes in the practice's time zone. */
function nowIn(timeZone: string, date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = DAYS.indexOf(get('weekday') as (typeof DAYS)[number]);
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

const slotFor = (hours: OpeningHours[], dayIndex: number) =>
  hours.find((h) => h.days.includes(DAYS[dayIndex] as OpeningHours['days'][number]));

/** Computes "open now / opens next" for a set of weekly opening hours. */
export function getOpenStatus(
  hours: OpeningHours[],
  copy: StatusCopy,
  locale: string,
  timeZone: string,
  date = new Date(),
): OpenStatus {
  const { day, minutes } = nowIn(timeZone, date);
  const today = slotFor(hours, day);

  if (today && minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    return {
      open: true,
      label: copy.openNow,
      detail: `${copy.until} ${formatTime(today.closes, copy.hoursSuffix)}`,
    };
  }

  const weekdayName = new Intl.DateTimeFormat(locale, { weekday: 'long' });
  for (let offset = 0; offset < 8; offset++) {
    const idx = (day + offset) % 7;
    const slot = slotFor(hours, idx);
    if (!slot) continue;
    if (offset === 0 && minutes >= toMinutes(slot.opens)) continue;
    const when =
      offset === 0
        ? copy.today
        : offset === 1
          ? copy.tomorrow
          : `${copy.weekdayPrefix} ${weekdayName.format(new Date(Date.UTC(2024, 0, 7 + idx, 12)))}`;
    return {
      open: false,
      label: copy.closedNow,
      detail: `${copy.opensAt} ${when} ${copy.at} ${formatTime(slot.opens, copy.hoursSuffix)}`,
    };
  }

  return { open: false, label: copy.closedNow, detail: '' };
}
