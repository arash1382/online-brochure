/**
 * Generates an iCalendar (.ics) file content and Google Calendar URL
 * for the concert on Thursday, November 5, 2026 at 21:30 (Asia/Tehran).
 */

export function downloadCalendarEvent(isEn: boolean) {
  const title = isEn
    ? 'New Music in Iran — Works by Alireza Mashayekhi'
    : 'کنسرت موسیقی نو در ایران — اجرای آثار علیرضا مشایخی';
  const description = isEn
    ? 'Concert of contemporary Iranian music featuring works by Alireza Mashayekhi at Vahdat Hall, Tehran. Organized by Tehran Music Group.'
    : 'کنسرت موسیقی نو در ایران؛ اجرای آثاری از علیرضا مشایخی در تالار وحدت تهران. برگزارکننده: گروه موسیقی تهران.';
  const location = isEn
    ? 'Vahdat Hall, Ostad Shahriar St., Hafez Ave., Tehran, Iran'
    : 'تهران، خیابان حافظ، خیابان استاد شهریار، تالار وحدت';

  // Date: November 5, 2026, 21:30 - 23:45 Tehran Time (UTC+3:30)
  // UTC start: 2026-11-05T18:00:00Z, UTC end: 2026-11-05T20:15:00Z
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tehran Music Group//New Music in Iran//FA',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:new-music-in-iran-20261105@tehranmusicgroup.com',
    'DTSTAMP:20261028T000000Z',
    'DTSTART:20261105T180000Z',
    'DTEND:20261105T201500Z',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'new-music-in-iran-concert.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(isEn: boolean): string {
  const title = encodeURIComponent(
    isEn
      ? 'New Music in Iran — Works by Alireza Mashayekhi'
      : 'کنسرت موسیقی نو در ایران — اجرای آثار علیرضا مشایخی'
  );
  const details = encodeURIComponent(
    isEn
      ? 'Concert of contemporary Iranian music featuring works by Alireza Mashayekhi at Vahdat Hall, Tehran. Organized by Tehran Music Group.'
      : 'کنسرت موسیقی نو در ایران؛ اجرای آثاری از علیرضا مشایخی در تالار وحدت تهران. برگزارکننده: گروه موسیقی تهران.'
  );
  const location = encodeURIComponent(
    isEn
      ? 'Vahdat Hall, Ostad Shahriar St., Hafez Ave., Tehran, Iran'
      : 'تهران، تالار وحدت'
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261105T180000Z/20261105T201500Z&details=${details}&location=${location}`;
}
