export interface VespHero {
    title: string;
    subtitle: string;
    philosophy: string;
    price: string;
    priceLabel: string;
}

export interface VespTechSpecs {
    label: string;
    conceptMain: string;
    conceptHighlight: string;
    description: string;
    specsLabel: string;
    features: { title: string; text: string }[];
    tableRows: { label: string; value: string }[];
}

export interface VespBenefits {
    titleMain: string;
    titleHighlight: string;
    description: string;
    items: { title: string; text: string; icon: string }[];
}

export interface VespEcosystem {
    title: string;
    subtitle: string;
    screenshots: string[];
}

export interface VespFooter {
    titleMain: string;
    titleHighlight: string;
    cta: string;
}

export interface VespLandingContent {
    hero: VespHero;
    techSpecs: VespTechSpecs;
    benefits: VespBenefits;
    ecosystem: VespEcosystem;
    footer: VespFooter;
}
