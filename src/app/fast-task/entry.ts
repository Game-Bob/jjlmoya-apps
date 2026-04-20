import type { AppEntry } from '../../types';

export const fastTaskEntry: AppEntry = {
    id: 'fast-task',
    isGame: false,
    stores: {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.gamebob.fasttask',
        appStore: 'https://apps.apple.com/es/app/fasttask-escribe-olvida-paz/id6759599830',
    },
    i18n: {
        de: () => import('./i18n/de').then((m) => m.cardContent),
        en: () => import('./i18n/en').then((m) => m.cardContent),
        es: () => import('./i18n/es').then((m) => m.cardContent),
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
