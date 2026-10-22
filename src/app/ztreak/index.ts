import type { AppDefinition } from '../../types';
import { ztreakEntry } from './entry';

export { ztreakEntry } from './entry';
export const ZTREAK_APP: AppDefinition = {
    entry: ztreakEntry,
    LandingComponent: () => import('./landing.astro'),
};
