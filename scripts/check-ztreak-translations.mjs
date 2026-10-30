import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const locales = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'pl', 'id', 'tr', 'ru', 'ja', 'ko', 'zh'];
const directory = new URL('../src/app/ztreak/i18n/', import.meta.url);
const privacy = JSON.parse(readFileSync(new URL('../src/app/ztreak/privacy.json', import.meta.url), 'utf8'));
const identicalTerms = new Map([
    ['it:navigation.privacy', 'Privacy'],
    ['nl:navigation.privacy', 'Privacy'],
]);

function strings(value, prefix = '') {
    if (typeof value === 'string') return { [prefix]: value };
    assert.ok(value && typeof value === 'object', `Unexpected translation value: ${prefix}`);
    return Object.assign({}, ...Object.entries(value).map(([key, child]) => strings(child, prefix ? `${prefix}.${key}` : key)));
}

function placeholders(value) {
    return [...value.matchAll(/\{([a-zA-Z]+)\}/g)].map(match => match[1]).sort();
}

const documents = Object.fromEntries(locales.map(locale => [locale, JSON.parse(readFileSync(new URL(`${locale}.json`, directory), 'utf8'))]));
assert.deepEqual(Object.keys(privacy).sort(), [...locales].sort(), 'privacy policy locale coverage');
for (const locale of locales) {
    const policy = privacy[locale];
    assert.ok(policy.title.trim(), `${locale}: privacy title`);
    assert.ok(policy.version.trim(), `${locale}: privacy version`);
    assert.equal(policy.sections.length, privacy.en.sections.length, `${locale}: privacy sections`);
    for (const section of policy.sections) {
        assert.ok(section.title.trim(), `${locale}: privacy section title`);
        assert.ok(section.text.trim(), `${locale}: privacy section text`);
    }
}
const reference = strings(documents.en);
const referenceKeys = Object.keys(reference).sort();

for (const locale of locales) {
    const document = documents[locale];
    const leaves = strings(document);
    assert.equal(document.slug, 'ztreak', `${locale}: route identifier`);
    assert.deepEqual(Object.keys(leaves).sort(), referenceKeys, `${locale}: translation keys`);
    assert.equal(document.landingCopy.features.items.length, 6, `${locale}: feature cards`);
    assert.equal(document.termsContent.sections.length, 6, `${locale}: terms sections`);
    for (const [key, value] of Object.entries(leaves)) {
        assert.ok(value.trim(), `${locale}:${key}: empty translation`);
        assert.deepEqual(placeholders(value), placeholders(reference[key]), `${locale}:${key}: interpolation`);
        if (locale === 'en' || key === 'slug') continue;
        const exception = identicalTerms.get(`${locale}:${key}`);
        if (exception !== undefined) {
            assert.equal(value, exception, `${locale}:${key}: outdated identical-term exception`);
            continue;
        }
        assert.notEqual(value, reference[key], `${locale}:${key}: untranslated English text`);
    }
}

console.log(`Ztreak: ${locales.length} locales, ${referenceKeys.length} strings each; keys, interpolation and English-copy audit passed.`);
