export interface DayCheckHero {
    badge: string;
    titleStart: string;
    titleItalic: string;
    titleEnd: string;
    subtitle: string;
    downloadOnStore: string;
    downloadOnPlay: string;
}

export interface DayCheckCard {
    label: string;
    type: 'since' | 'target';
    offsetMonths?: number;
    offsetWeeks?: number;
    accentVar: string;
    emoji: string;
    tag: string;
    sinceLabel: string;
    countLabel: string;
}

export interface DayCheckCards {
    statusLabel: string;
    ctaTitle: string;
    ctaHighlight: string;
    ctaButton: string;
    daysLabel: string;
    hoursLabel: string;
    minsLabel: string;
    segsLabel: string;
    sinceLabel: string;
    targetLabel: string;
    cards: { label: string; type: 'since' | 'target'; emoji: string; tag: string }[];
}

export interface DayCheckBenefit {
    title: string;
    text: string;
    icon: string;
}

export interface DayCheckBenefits {
    titleMain: string;
    titleHighlight: string;
    description: string;
    items: DayCheckBenefit[];
}

export interface DayCheckVideos {
    title: string;
}

export interface DayCheckFooter {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    downloadOnStore: string;
    downloadOnPlay: string;
}

export interface DayCheckLandingContent {
    hero: DayCheckHero;
    cards: DayCheckCards;
    benefits: DayCheckBenefits;
    videos: DayCheckVideos;
    footer: DayCheckFooter;
}
