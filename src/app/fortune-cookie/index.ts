import type { AppDefinition } from '../../types';
import { fortuneCookieEntry } from './entry';

export * from './entry';

export const FORTUNE_COOKIE_APP: AppDefinition = {
    entry: fortuneCookieEntry,
    LandingComponent: () => import('./landing.astro'),
};
