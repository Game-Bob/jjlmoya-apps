import { ztreakEntry } from './entry';

export function ztreakPageUrl(basePath: string, page = ''): string {
    if (!basePath.startsWith('/') || basePath.startsWith('//') || /[?#]/.test(basePath)) throw new Error('Expected a local app base path');
    if (page && !/^[a-z0-9-]+(?:[/][a-z0-9-]+)*$/.test(page)) throw new Error('Invalid app page path');
    return basePath.replace(/[/]+$/, '') + '/' + (page ? page + '/' : '');
}

export function localizedZtreakGooglePlayUrl(locale: string): string | undefined {
    const storeUrl = ztreakEntry.stores.googlePlay;
    if (!storeUrl) return undefined;

    const url = new URL(storeUrl);
    url.searchParams.set('hl', locale === 'es' ? 'es_419' : locale);
    return url.toString();
}
