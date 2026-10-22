import { ZTREAK_APP } from './app/ztreak';
import type { AppDefinition } from './types';
import { fortuneCookieEntry } from './app/fortune-cookie/entry';
import { pizzametricsEntry } from './app/pizzametrics/entry';
import { vespEntry } from './app/vesp/entry';
import { dayCheckEntry } from './app/day-check/entry';
import { fastTaskEntry } from './app/fast-task/entry';

import { sauceLabEntry } from './app/sauce-lab/entry';

export const ALL_APP_DEFINITIONS: AppDefinition[] = [
    ZTREAK_APP,
    {
        entry: sauceLabEntry,
        LandingComponent: () => import('./app/sauce-lab/landing.astro'),
    },
    {
        entry: fortuneCookieEntry,
        LandingComponent: () => import('./app/fortune-cookie/landing.astro'),
    },
    {
        entry: pizzametricsEntry,
        LandingComponent: () => import('./app/pizzametrics/landing.astro'),
    },
    {
        entry: vespEntry,
        LandingComponent: () => import('./app/vesp/landing.astro'),
    },
    {
        entry: dayCheckEntry,
        LandingComponent: () => import('./app/day-check/landing.astro'),
    },
    {
        entry: fastTaskEntry,
        LandingComponent: () => import('./app/fast-task/landing.astro'),
    },
];
