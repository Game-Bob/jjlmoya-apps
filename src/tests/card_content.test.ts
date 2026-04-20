import { describe, it, expect } from 'vitest';
import { ALL_APP_DEFINITIONS } from '../entries';

const MIN_TITLE = 3;
const MAX_TITLE = 60;
const MIN_DESC = 30;
const MAX_DESC = 200;

describe('Card Content Validation', () => {
    ALL_APP_DEFINITIONS.forEach(({ entry }) => {
        describe(`App: ${entry.id}`, () => {
            const locales = Object.keys(entry.i18n);

            locales.forEach((locale) => {
                it(`[${locale}] title and description within length limits`, async () => {
                    const loader = entry.i18n[locale as keyof typeof entry.i18n];
                    const card = await loader!();

                    expect(card.title.length, `[${locale}] title too short`).toBeGreaterThanOrEqual(MIN_TITLE);
                    expect(card.title.length, `[${locale}] title too long`).toBeLessThanOrEqual(MAX_TITLE);
                    expect(card.description.length, `[${locale}] description too short`).toBeGreaterThanOrEqual(MIN_DESC);
                    expect(card.description.length, `[${locale}] description too long`).toBeLessThanOrEqual(MAX_DESC);
                    expect(card.slug.length, `[${locale}] slug empty`).toBeGreaterThan(0);
                    expect(card.subtitle.length, `[${locale}] subtitle empty`).toBeGreaterThan(0);
                });
            });
        });
    });
});
