import type { AppDefinition } from '../../types';
import { fastTaskEntry } from './entry';

export * from './entry';

export const FAST_TASK_APP: AppDefinition = {
    entry: fastTaskEntry,
    LandingComponent: () => import('./landing.astro'),
};
