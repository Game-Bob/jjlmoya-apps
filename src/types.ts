export type KnownLocale =
    | 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt'
    | 'nl' | 'sv' | 'pl' | 'id' | 'tr' | 'ru'
    | 'ja' | 'ko' | 'zh';

export type LocaleLoader<T> = () => Promise<T>;
export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface AppCardContent {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
}

export interface AppEntry {
    id: string;
    isGame: boolean;
    shorts?: string[];
    stores: {
        googlePlay?: string;
        appStore?: string;
    };
    i18n: LocaleMap<AppCardContent>;
}

export interface AppDefinition {
    entry: AppEntry;
    LandingComponent: () => Promise<{ default: unknown }>;
    ChangelogComponent?: () => Promise<{ default: unknown }>;
}
