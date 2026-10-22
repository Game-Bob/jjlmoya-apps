import type { AppEntry } from '../../types';
import { contentLoaders } from './content';

export const ztreakEntry: AppEntry = {
    id: 'ztreak',
    isGame: false,
    packageId: 'com.gamebob.ztreak',
    media: { hero: '/assets/apps/ztreak/hero.webp' },
    stores: {},
    i18n: contentLoaders,
};
