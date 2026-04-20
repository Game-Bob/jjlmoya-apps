import { describe, it, expect } from 'vitest';
import { ALL_APP_DEFINITIONS } from '../entries';
import type { AppCardContent } from '../types';

const SHARING_LOCALES = ['ja', 'ko', 'zh'];
const BRAND_SLUG_APPS = ['lexi-crash', 'pizzametrics', 'vesp'];

interface ValidateParams {
    appId: string;
    locale: string;
    card: AppCardContent;
    enSlug: string;
    slugs: Map<string, string>;
}

const validateLocaleSlug = ({ appId, locale, card, enSlug, slugs }: ValidateParams) => {
    expect(
        card.slug,
        `App "${appId}" locale "${locale}" invalid slug ("${card.slug}"). Must be a-z, 0-9, and -.`,
    ).toMatch(/^[a-z0-9-]+$/);

    if (locale === 'en') return;
    if (BRAND_SLUG_APPS.includes(appId)) return;

    if (SHARING_LOCALES.includes(locale)) {
        expect(
            card.slug,
            `App "${appId}" locale "${locale}" must share the en slug ("${enSlug}").`,
        ).toBe(enSlug);
    } else {
        expect(
            card.slug,
            `App "${appId}" locale "${locale}" must differ from en slug ("${enSlug}").`,
        ).not.toBe(enSlug);

        if (slugs.has(card.slug)) {
            const prev = slugs.get(card.slug);
            expect(false, `App "${appId}" locales "${locale}" and "${prev}" share slug "${card.slug}".`).toBe(true);
        }
        slugs.set(card.slug, locale);
    }
};

describe('Slug Uniqueness and Localization', () => {
    ALL_APP_DEFINITIONS.forEach(({ entry }) => {
        describe(`App: ${entry.id}`, () => {
            it('every locale should have a valid, translated slug', async () => {
                const slugs = new Map<string, string>();
                const locales = Object.keys(entry.i18n);

                let enSlug = '';
                if (locales.includes('en')) {
                    const enCard = await entry.i18n.en!();
                    enSlug = enCard.slug;
                }

                for (const locale of locales) {
                    const loader = entry.i18n[locale as keyof typeof entry.i18n];
                    const card = await loader!();
                    validateLocaleSlug({ appId: entry.id, locale, card, enSlug, slugs });
                }
            });
        });
    });
});
