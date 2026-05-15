import type { AppEntry } from '../../types';

export const sauceLabEntry: AppEntry = {
    id: 'sauce-lab',
    isGame: false,
    stores: {
        googlePlay: '',
        appStore: '',
    },
    i18n: {
        en: () => import('./i18n/en').then((m) => m.cardContent),
        es: () => import('./i18n/es').then((m) => m.cardContent),
        de: () => import('./i18n/en').then((m) => m.cardContent),
        fr: () => import('./i18n/en').then((m) => m.cardContent),
        it: () => import('./i18n/en').then((m) => m.cardContent),
        pt: () => import('./i18n/en').then((m) => m.cardContent),
        nl: () => import('./i18n/en').then((m) => m.cardContent),
        sv: () => import('./i18n/en').then((m) => m.cardContent),
        pl: () => import('./i18n/en').then((m) => m.cardContent),
        id: () => import('./i18n/en').then((m) => m.cardContent),
        tr: () => import('./i18n/en').then((m) => m.cardContent),
        ru: () => import('./i18n/en').then((m) => m.cardContent),
        ja: () => import('./i18n/en').then((m) => m.cardContent),
        ko: () => import('./i18n/en').then((m) => m.cardContent),
        zh: () => import('./i18n/en').then((m) => m.cardContent),
    },
};
