import type { AppDefinition } from '../../types';
import { dayCheckEntry } from './entry';

export * from './entry';

export const DAY_CHECK_APP: AppDefinition = {
    entry: dayCheckEntry,
    LandingComponent: () => import('./landing.astro'),
};
