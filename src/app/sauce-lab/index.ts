import type { AppDefinition } from '../../types';
import { sauceLabEntry } from './entry';

export * from './entry';

export const SAUCE_LAB_APP: AppDefinition = {
    entry: sauceLabEntry,
    LandingComponent: () => import('./landing.astro'),
};
