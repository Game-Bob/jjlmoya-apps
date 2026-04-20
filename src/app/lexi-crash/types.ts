export interface LexiCrashHero {
    badgeText: string;
    subtitle: string;
    downloadOnPlay: string;
    downloadOnStore: string;
    downloadLabel: string;
}

export interface LexiCrashGameMode {
    title: string;
    description: string;
    alt: string;
}

export interface LexiCrashGameModes {
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    crash: LexiCrashGameMode;
    relax: LexiCrashGameMode;
    daily: LexiCrashGameMode;
}

export interface LexiCrashSocialProof {
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    challengesLabel: string;
    wordsLabel: string;
    ratingLabel: string;
    feedUser1: string;
    feedAction1: string;
    feedUser2: string;
    feedAction2: string;
    screenshotAlt: string;
}

export interface LexiCrashRoadmapItem {
    title: string;
    description: string;
    tag: string;
}

export interface LexiCrashRoadmap {
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    items: [LexiCrashRoadmapItem, LexiCrashRoadmapItem, LexiCrashRoadmapItem];
    voteLabel: string;
    votedLabel: string;
    feedbackTitle: string;
    feedbackSub: string;
}

export interface LexiCrashFinalCTA {
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    downloadOnPlay: string;
    downloadOnStore: string;
    downloadLabel: string;
    ratingText: string;
}

export interface LexiCrashLandingContent {
    hero: LexiCrashHero;
    gameModes: LexiCrashGameModes;
    socialProof: LexiCrashSocialProof;
    roadmap: LexiCrashRoadmap;
    finalCta: LexiCrashFinalCTA;
}
