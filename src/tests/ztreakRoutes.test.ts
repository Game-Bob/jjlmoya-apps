import { describe, expect, it } from 'vitest';
import { ztreakPageUrl } from '../app/ztreak/routes';
import { ZTREAK_APP } from '../app/ztreak';

describe('Ztreak section navigation', () => {
    it.each(['/es/ztreak', '/es/ztreak/'])('builds stable child links from %s', base => {
        expect(ztreakPageUrl(base, 'app')).toBe('/es/ztreak/app/');
        expect(ztreakPageUrl(base, 'privacy')).toBe('/es/ztreak/privacy/');
        expect(ztreakPageUrl(base, 'terms')).toBe('/es/ztreak/terms/');
        expect(ztreakPageUrl(base)).toBe('/es/ztreak/');
    });
    it('supports future nested feature pages', () => {
        expect(ztreakPageUrl('/es/ztreak', 'features/shield')).toBe('/es/ztreak/features/shield/');
    });
    it.each(['https://example.com', '//example.com', '/es/ztreak?x=1', '/es/ztreak#app'])('rejects invalid base %s', base => {
        expect(() => ztreakPageUrl(base, 'app')).toThrow();
    });
    it.each(['../app', '/app', 'app?x=1', 'app#x', 'app//child'])('rejects invalid page %s', page => {
        expect(() => ztreakPageUrl('/es/ztreak', page)).toThrow();
    });
    it('declares the complete section with unique paths and page loaders', async () => {
        expect(ZTREAK_APP.pages?.map(page => page.id)).toEqual(['app', 'privacy', 'terms']);
        const pages = ZTREAK_APP.pages ?? [];
        expect(new Set(pages.map(page => page.path)).size).toBe(pages.length);
        for (const page of pages) expect((await page.Component()).default).toBeDefined();
    });
});
