export interface AppCardContent {
    title: string;
    subtitle: string;
    description: string;
    slug: string;
}

export interface SauceLabHero {
    title: string;
    subtitle: string;
    priceLabel: string;
    comingSoon: string;
}

export interface SauceLabBenefitItem {
    title: string;
    text: string;
    icon: string;
}

export interface SauceLabBenefits {
    titleMain: string;
    titleHighlight: string;
    items: SauceLabBenefitItem[];
}

export interface SauceLabPhilosophy {
    label: string;
    title: string;
    description: string;
}

export interface SauceLabAtlas {
    label: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
}

export interface SauceLabHierarchyItem {
    name: string;
    base: string;
    derivatives: string[];
}

export interface SauceLabHierarchy {
    label: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    items: SauceLabHierarchyItem[];
}

export interface SauceLabChemistryItem {
    title: string;
    description: string;
}

export interface SauceLabChemistry {
    label: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    items: SauceLabChemistryItem[];
}

export interface SauceLabFixStep {
    num: string;
    title: string;
    description: string;
}

export interface SauceLabFix {
    label: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    steps: SauceLabFixStep[];
}

export interface SauceLabGallery {
    title: string;
}

export interface SauceLabLandingContent {
    card: AppCardContent;
    hero: SauceLabHero;
    philosophy: SauceLabPhilosophy;
    benefits: SauceLabBenefits;
    hierarchy: SauceLabHierarchy;
    chemistry: SauceLabChemistry;
    atlas: SauceLabAtlas;
    fix: SauceLabFix;
    gallery: SauceLabGallery;
}
