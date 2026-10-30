import { ztreakEntry } from './entry';
import type { KnownLocale } from '../../types';

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

export function ztreakWebAppUrl(locale: KnownLocale, siteHost: string): string {
    const host = siteHost.toLowerCase().replace(/:\d+$/, '');
    const spanishSite = (host === 'jjlmoya.es' || host === 'www.jjlmoya.es') && locale === 'es';
    const targetHost = spanishSite ? 'www.jjlmoya.es' : 'www.gamebob.dev';
    const languagePath = locale === 'en' || spanishSite ? '' : locale + '/';
    return `https://${targetHost}/${languagePath}apps/ztreak/app/`;
}
