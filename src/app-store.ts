const LOCALE_TO_COUNTRY: Record<string, string> = {
    en: 'us',
    es: 'es',
    fr: 'fr',
    de: 'de',
    it: 'it',
    pt: 'br',
    nl: 'nl',
    sv: 'se',
    pl: 'pl',
    id: 'id',
    tr: 'tr',
    ru: 'ru',
    ja: 'jp',
    ko: 'kr',
    zh: 'cn',
};

export function localizedAppStoreUrl(baseUrl: string, locale: string): string {
    const country = LOCALE_TO_COUNTRY[locale] ?? 'us';
    return baseUrl.replace(/\/[a-z]{2}\/app\//, `/${country}/app/`);
}
