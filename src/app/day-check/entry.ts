import type { AppEntry } from '../../types';

export const dayCheckEntry: AppEntry = {
    id: 'day-check',
    isGame: false,
    shorts: ['7yrHoCccCiw', 'BH3hQ2VlPDc'],
    stores: {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.gamebob.daycheck.utility',
        appStore: 'https://apps.apple.com/es/app/day-check-contador-de-d%C3%ADas/id6758218778',
    },
    i18n: {
        es: () => import('./i18n/es').then((m) => m.cardContent),
        de: () => import('./i18n/de').then((m) => m.cardContent),
        en: () => import('./i18n/en').then((m) => m.cardContent),
        fr: () => import('./i18n/fr').then((m) => m.cardContent),
        id: () => import('./i18n/id').then((m) => m.cardContent),
        it: () => import('./i18n/it').then((m) => m.cardContent),
        ja: () => import('./i18n/ja').then((m) => m.cardContent),
        ko: () => import('./i18n/ko').then((m) => m.cardContent),
        nl: () => import('./i18n/nl').then((m) => m.cardContent),
        pl: () => import('./i18n/pl').then((m) => m.cardContent),
        pt: () => import('./i18n/pt').then((m) => m.cardContent),
        ru: () => import('./i18n/ru').then((m) => m.cardContent),
        sv: () => import('./i18n/sv').then((m) => m.cardContent),
        tr: () => import('./i18n/tr').then((m) => m.cardContent),
        zh: () => import('./i18n/zh').then((m) => m.cardContent),
    },
};
