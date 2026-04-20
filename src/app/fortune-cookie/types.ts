export interface FortuneCookieHero {
    tagline: string;
    description: string;
    scanLabel: string;
}

export interface FortuneCookieChallenge {
    title: string;
    crystalLabel: string;
    standardLabel: string;
    lunarLabel: string;
    quote: string;
    quoteNote: string;
    quoteHighlight: string;
}

export interface FortuneCookieStreak {
    title: string;
    description: string;
    descriptionHighlight: string;
    countdownPrefix: string;
    tomorrowNote: string;
    altarLabel: string;
    nextMilestoneLabel: string;
    todayLabel: string;
    dayPrefix: string;
}

export interface FortuneCookieShowcase {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
}

export interface FortuneCookieEventItem {
    name: string;
    description: string;
    date: string;
}

export interface FortuneCookieEvents {
    title: string;
    subtitle: string;
    items: FortuneCookieEventItem[];
}

export interface FortuneCookieShorts {
    title: string;
    comingSoonCookies: string;
    comingSoonEvents: string;
}

export interface FortuneCookieFooter {
    title: string;
    subtitle: string;
    downloadPrefix: string;
}

export interface FortuneCookieLandingContent {
    hero: FortuneCookieHero;
    challenge: FortuneCookieChallenge;
    streak: FortuneCookieStreak;
    showcase: FortuneCookieShowcase;
    events: FortuneCookieEvents;
    shorts: FortuneCookieShorts;
    footer: FortuneCookieFooter;
}
