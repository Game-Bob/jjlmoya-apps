import type { AppDefinition } from './types';
import { fortuneCookieEntry } from './app/fortune-cookie/entry';
import { lexiCrashEntry } from './app/lexi-crash/entry';
import { pizzametricsEntry } from './app/pizzametrics/entry';
import { vespEntry } from './app/vesp/entry';

export const ALL_APP_DEFINITIONS: AppDefinition[] = [
    {
        entry: fortuneCookieEntry,
        LandingComponent: () => import('./app/fortune-cookie/landing.astro'),
    },
    {
        entry: lexiCrashEntry,
        LandingComponent: () => import('./app/lexi-crash/landing.astro'),
    },
    {
        entry: pizzametricsEntry,
        LandingComponent: () => import('./app/pizzametrics/landing.astro'),
    },
    {
        entry: vespEntry,
        LandingComponent: () => import('./app/vesp/landing.astro'),
    },
];
