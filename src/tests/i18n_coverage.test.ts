import { describe, it, expect } from 'vitest';
import { ALL_APP_DEFINITIONS } from '../entries';

const EXPECTED_LOCALES = [
    'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh',
];

describe('i18n Coverage', () => {
    it('should have registered apps', () => {
        expect(ALL_APP_DEFINITIONS.length).toBeGreaterThan(0);
    });

    ALL_APP_DEFINITIONS.forEach(({ entry }) => {
        describe(`App: ${entry.id}`, () => {
            it('should have all 15 required locales', () => {
                const registered = Object.keys(entry.i18n);
                EXPECTED_LOCALES.forEach((locale) => {
                    expect(registered, `App "${entry.id}" missing locale "${locale}"`).toContain(locale);
                });
            });

            it('all locale loaders should be functions', () => {
                EXPECTED_LOCALES.forEach((locale) => {
                    const loader = entry.i18n[locale as keyof typeof entry.i18n];
                    expect(typeof loader, `App "${entry.id}" locale "${locale}" loader not a function`).toBe('function');
                });
            });
        });
    });
});
