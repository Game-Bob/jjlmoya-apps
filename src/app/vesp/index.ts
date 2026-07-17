import type { AppDefinition } from '../../types';
import { vespEntry } from './entry';

export * from './entry';

export const VESP_APP: AppDefinition = {
    entry: vespEntry,
    LandingComponent: () => import('./landing.astro'),
};
