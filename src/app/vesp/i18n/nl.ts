import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Cocktail-balancer',
    subtitle: 'Mixology: Balans & Recepten',
    description:
        'Professionele calculator voor balans, ABV, Brix en klassieke cocktailrecepten.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixology: Balans & Recepten',
        philosophy:
            'Verhoog de consistentie van uw bar met VESP: de ultieme technische tool voor bartenders en mixology-enthousiastelingen die wetenschappelijke perfectie in elk glas zoeken.',
        price: 'Gratis',
        priceLabel: 'Geen abonnementen • Directe toegang',
    },
    techSpecs: {
        label: 'Precisie-Mixology',
        conceptMain: 'TECHNIEK VAN,',
        conceptHighlight: 'KWALITEIT.',
        description:
            'Professionele calculator voor balans, ABV, Brix en klassieke cocktailrecepten.',
        specsLabel: 'Technische Specificaties',
        features: [
            {
                title: 'ABV/Brix-balans',
                text: 'Dichtheid en alcoholgehalte controleren.',
            },
            {
                title: 'Geen Registratie',
                text: 'Volledige lokale offline privacy.',
            },
            {
                title: 'Bar-modus',
                text: 'Snel aflezen bij gedimd licht.',
            },
        ],
        tableRows: [
            { label: 'DICHTHEID', value: 'ANALYTISCH' },
            { label: 'GRAAD (ABV)', value: 'GEKALIBREERD' },
            { label: 'SUIKER (BRIX)', value: 'REAL-TIME' },
        ],
    },
    benefits: {
        titleMain: 'Motor van',
        titleHighlight: 'balans.',
        description:
            'Visualiseer de balans tussen alcohol, suiker en zuurgraad via technische berekeningen die zijn ontworpen voor de industrie.',
        items: [
            {
                title: 'Wetenschappelijke Balans',
                text: 'Exacte berekeningen tussen alcohol, suiker en zuurgraad.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Verdunningskalibratie',
                text: 'Aanpassing per techniek: Shake, Stir of Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Klassieke Bibliotheek',
                text: 'Meer dan 70 klassiekers met fysisch-chemische gegevens.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Creator',
                text: 'Ontwerp en bewaar uw eigen signaturen.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP-ecosysteem',
        subtitle: 'Mixology & Standaardisatie',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Service',
        titleHighlight: 'PERFECT.',
        cta: 'Nu beschikbaar',
    },
};
