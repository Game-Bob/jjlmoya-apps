import type { AppDefinition } from '../../types';
import { lexiCrashEntry } from './entry';

export * from './entry';

export const LEXI_CRASH_APP: AppDefinition = {
    entry: lexiCrashEntry,
    LandingComponent: () => import('./landing.astro'),
};
