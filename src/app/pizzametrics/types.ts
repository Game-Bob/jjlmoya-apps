export interface PizzametricsHero {
    titleMain: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    downloadOnStore: string;
    downloadOnPlay: string;
    downloadLabelStore: string;
    downloadLabelPlay: string;
    tagline: string;
}

export interface PizzametricsShowCaseFeature {
    title: string;
    description: string;
}

export interface PizzametricsShowCase {
    feature1: PizzametricsShowCaseFeature;
    feature2: PizzametricsShowCaseFeature;
    feature3: PizzametricsShowCaseFeature;
}

export interface PizzametricsEmpathy {
    title: string;
    quote1: string;
    quote2: string;
    quote3: string;
}

export interface PizzametricsPantry {
    title: string;
    titleHighlight: string;
    description: string;
    descriptionHighlight: string;
    missionTitle: string;
    missionSubtitle: string;
}

export interface PizzametricsGallery {
    title: string;
    titleHighlight: string;
    imageAlt: string;
}

export interface PizzametricsShorts {
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
}

export interface PizzametricsTransparency {
    quoteMain: string;
    quoteHighlight: string;
    description: string;
}

export interface PizzametricsFooter {
    titleMain: string;
    titleHighlight: string;
    privacyLabel: string;
    termsLabel: string;
}

export interface PizzametricsLandingContent {
    hero: PizzametricsHero;
    showCase: PizzametricsShowCase;
    empathy: PizzametricsEmpathy;
    pantry: PizzametricsPantry;
    gallery: PizzametricsGallery;
    shorts: PizzametricsShorts;
    transparency: PizzametricsTransparency;
    footer: PizzametricsFooter;
}
