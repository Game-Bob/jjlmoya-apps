import type { AppDefinition } from '../../types';
import { ztreakEntry } from './entry';

export { ztreakEntry } from './entry';
export const ZTREAK_APP: AppDefinition = {
    entry: ztreakEntry,
    pages: [
        { id: 'privacy', path: 'privacy', Component: () => import('./pages/Privacy.astro') },
        { id: 'terms', path: 'terms', Component: () => import('./pages/Terms.astro') },
    ],
    LandingComponent: () => import('./landing.astro'),
};
