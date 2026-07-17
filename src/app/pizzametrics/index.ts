import type { AppDefinition } from '../../types';
import { pizzametricsEntry } from './entry';

export * from './entry';

export const PIZZAMETRICS_APP: AppDefinition = {
    entry: pizzametricsEntry,
    LandingComponent: () => import('./landing.astro'),
};
