import { dayCheckEntry } from './app/day-check/entry';
import { fastTaskEntry } from './app/fast-task/entry';
import { fortuneCookieEntry } from './app/fortune-cookie/entry';
import { lexiCrashEntry } from './app/lexi-crash/entry';
import { pizzametricsEntry } from './app/pizzametrics/entry';
import { sauceLabEntry } from './app/sauce-lab/entry';
import { vespEntry } from './app/vesp/entry';

export const ALL_APP_ENTRIES = [
    sauceLabEntry,
    fortuneCookieEntry,
    lexiCrashEntry,
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
    AppEntry,
} from './types';
