export function formatDayCheckDate(date: Date, locale: string): string {
    return date.toLocaleDateString(locale, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
}
