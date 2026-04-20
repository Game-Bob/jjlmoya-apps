import type { AppDefinition } from './types';
import { fortuneCookieEntry } from './app/fortune-cookie/entry';

export const ALL_APP_DEFINITIONS: AppDefinition[] = [
    {
        entry: fortuneCookieEntry,
        LandingComponent: () => import('./app/fortune-cookie/landing.astro'),
    },
];
