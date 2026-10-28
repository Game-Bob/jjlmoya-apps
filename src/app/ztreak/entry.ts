import type { AppEntry } from '../../types';
import { contentLoaders } from './content';

export const ztreakEntry: AppEntry = {
    id: 'ztreak',
    isGame: false,
    packageId: 'com.gamebob.ztreak',
    media: { hero: '/assets/apps/ztreak/hero.webp' },
    stores: {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.gamebob.ztreak&hl=es_419',
    },
    i18n: contentLoaders,
};
