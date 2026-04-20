export interface FastTaskHero {
    title: string;
    subtitle: string;
    priceLabel: string;
}

export interface FastTaskHighlight {
    label: string;
    value: string;
}

export interface FastTaskConcept {
    label: string;
    main: string;
    highlighted: string;
    philosophy: string;
    highlights: FastTaskHighlight[];
}

export interface FastTaskBenefitItem {
    title: string;
    text: string;
    icon: string;
}

export interface FastTaskBenefits {
    titleMain: string;
    titleHighlight: string;
    items: FastTaskBenefitItem[];
}

export interface FastTaskSimulationStep {
    label: string;
    desc: string;
    icon: string;
}

export interface FastTaskSimulation {
    titleBefore: string;
    steps: FastTaskSimulationStep[];
}

export interface FastTaskIntegrations {
    label: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    ctaTitle: string;
    ctaLinkText: string;
    comingSoon: string;
}

export interface FastTaskEarlyAdopter {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    countLabel: string;
    countNote: string;
    cta: string;
}

export interface FastTaskEnterprise {
    label: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    featureTitle: string;
    featureText: string;
    cta: string;
}

export interface FastTaskGallery {
    title: string;
}

export interface FastTaskFooter {
    line1: string;
    line2: string;
    line3: string;
    subtitle: string;
}

export interface FastTaskLandingContent {
    hero: FastTaskHero;
    concept: FastTaskConcept;
    benefits: FastTaskBenefits;
    simulation: FastTaskSimulation;
    integrations: FastTaskIntegrations;
    earlyAdopter: FastTaskEarlyAdopter;
    enterprise: FastTaskEnterprise;
    gallery: FastTaskGallery;
    footer: FastTaskFooter;
}
