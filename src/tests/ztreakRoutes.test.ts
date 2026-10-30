import { describe, expect, it } from 'vitest';
import { localizedZtreakGooglePlayUrl, ztreakPageUrl, ztreakWebAppUrl } from '../app/ztreak/routes';
import { ZTREAK_APP } from '../app/ztreak';

describe('Ztreak section navigation', () => {
    it.each([['es', 'es_419'], ['en', 'en'], ['fr', 'fr'], ['zh', 'zh']])('localizes the Google Play hl parameter for %s', (locale, language) => {
        const url = new URL(localizedZtreakGooglePlayUrl(locale) ?? '');
        expect(url.origin + url.pathname).toBe('https://play.google.com/store/apps/details');
        expect(url.searchParams.get('id')).toBe('com.gamebob.ztreak');
        expect(url.searchParams.get('hl')).toBe(language);
        expect([...url.searchParams.keys()]).toEqual(['id', 'hl']);
    });
    it.each(['/es/ztreak', '/es/ztreak/'])('builds stable child links from %s', base => {
        expect(ztreakPageUrl(base, 'app')).toBe('/es/ztreak/app/');
        expect(ztreakPageUrl(base, 'privacy')).toBe('/es/ztreak/privacy/');
        expect(ztreakPageUrl(base, 'terms')).toBe('/es/ztreak/terms/');
        expect(ztreakPageUrl(base)).toBe('/es/ztreak/');
    });
    it('supports future nested feature pages', () => {
        expect(ztreakPageUrl('/es/ztreak', 'features/shield')).toBe('/es/ztreak/features/shield/');
    });
    it.each([
        ['es', 'www.jjlmoya.es', 'https://www.jjlmoya.es/apps/web/ztreak/'],
        ['en', 'www.gamebob.dev', 'https://www.gamebob.dev/apps/web/ztreak/'],
        ['fr', 'www.gamebob.dev', 'https://www.gamebob.dev/fr/apps/web/ztreak/'],
        ['de', 'www.gamebob.dev', 'https://www.gamebob.dev/de/apps/web/ztreak/'],
        ['it', 'www.gamebob.dev', 'https://www.gamebob.dev/it/apps/web/ztreak/'],
        ['pt', 'www.gamebob.dev', 'https://www.gamebob.dev/pt/apps/web/ztreak/'],
        ['nl', 'www.gamebob.dev', 'https://www.gamebob.dev/nl/apps/web/ztreak/'],
        ['sv', 'www.gamebob.dev', 'https://www.gamebob.dev/sv/apps/web/ztreak/'],
        ['pl', 'www.gamebob.dev', 'https://www.gamebob.dev/pl/apps/web/ztreak/'],
        ['id', 'www.gamebob.dev', 'https://www.gamebob.dev/id/apps/web/ztreak/'],
        ['tr', 'www.gamebob.dev', 'https://www.gamebob.dev/tr/apps/web/ztreak/'],
        ['ru', 'www.gamebob.dev', 'https://www.gamebob.dev/ru/apps/web/ztreak/'],
        ['ja', 'www.jjlmoya.es', 'https://www.gamebob.dev/ja/apps/web/ztreak/'],
        ['ko', 'www.gamebob.dev', 'https://www.gamebob.dev/ko/apps/web/ztreak/'],
        ['zh', 'www.gamebob.dev', 'https://www.gamebob.dev/zh/apps/web/ztreak/'],
    ] as const)('routes the %s landing CTA to its standalone MFE', (locale, host, expected) => {
        expect(ztreakWebAppUrl(locale, host)).toBe(expected);
    });
    it.each(['https://example.com', '//example.com', '/es/ztreak?x=1', '/es/ztreak#app'])('rejects invalid base %s', base => {
        expect(() => ztreakPageUrl(base, 'app')).toThrow();
    });
    it.each(['../app', '/app', 'app?x=1', 'app#x', 'app//child'])('rejects invalid page %s', page => {
        expect(() => ztreakPageUrl('/es/ztreak', page)).toThrow();
    });
    it('declares the complete section with unique paths and page loaders', async () => {
        expect(ZTREAK_APP.pages?.map(page => page.id)).toEqual(['privacy', 'terms']);
        const pages = ZTREAK_APP.pages ?? [];
        expect(new Set(pages.map(page => page.path)).size).toBe(pages.length);
        for (const page of pages) expect((await page.Component()).default).toBeDefined();
    });
});
