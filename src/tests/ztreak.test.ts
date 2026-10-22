import { describe, expect, it } from 'vitest';
import { contentLoaders, loadZtreakContent } from '../app/ztreak/content';
import { ztreakEntry } from '../app/ztreak/entry';
import { ALL_APP_DEFINITIONS } from '../entries';
import { ALL_APP_ENTRIES } from '../data';

const locales = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'pl', 'id', 'tr', 'ru', 'ja', 'ko', 'zh'];

describe('Ztreak app integration', () => {
    it('registers one shared landing and runtime in both existing registries', () => {
        expect(ALL_APP_ENTRIES.filter(entry => entry.id === 'ztreak')).toEqual([ztreakEntry]);
        expect(ALL_APP_DEFINITIONS.filter(app => app.entry.id === 'ztreak')).toHaveLength(1);
        expect(Object.keys(ztreakEntry.i18n).sort()).toEqual([...locales].sort());
        expect(Object.keys(contentLoaders).sort()).toEqual([...locales].sort());
    });

    it.each(Object.entries(contentLoaders))('has complete localized landing content for %s', async (locale, load) => {
        const content = await load();
        const english = await loadZtreakContent('en');
        expect(Object.keys(content).sort()).toEqual(Object.keys(english).sort());
        expect(content.slug).toBe('ztreak');
        expect(content.title).toContain('Ztreak');
        expect(content.features).toHaveLength(4);
        for (const value of [content.title, content.subtitle, content.description, content.start, content.close, content.privacy, content.nativeNote]) {
            expect(value.trim().length).toBeGreaterThan(0);
        }
        for (const feature of content.features) {
            expect(feature.title.trim()).not.toBe('');
            expect(feature.text.trim()).not.toBe('');
        }
        if (locale !== 'en') {
            expect(content.description).not.toBe(english.description);
            expect(content.nativeNote).not.toBe(english.nativeNote);
        }
    });
});
