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
    },
};
