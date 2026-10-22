import { ztreakEntry } from './app/ztreak/entry';
import { dayCheckEntry } from './app/day-check/entry';
import { fastTaskEntry } from './app/fast-task/entry';
import { fortuneCookieEntry } from './app/fortune-cookie/entry';
import { pizzametricsEntry } from './app/pizzametrics/entry';
import { sauceLabEntry } from './app/sauce-lab/entry';
import { vespEntry } from './app/vesp/entry';

export const ALL_APP_ENTRIES = [
    ztreakEntry,
    sauceLabEntry,
    fortuneCookieEntry,
    pizzametricsEntry,
    vespEntry,
    dayCheckEntry,
    fastTaskEntry,
];

export type {
    KnownLocale,
    LocaleLoader,
    LocaleMap,
    AppCardContent,
    AppMedia,
    AppEntry,
} from './types';
