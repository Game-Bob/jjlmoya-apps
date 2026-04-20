import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Cocktail Balancer',
    subtitle: 'Mixology: Balance & Recipes',
    description:
        'Professional cocktail balance, ABV, Brix calculator and classic recipes.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixology: Balance & Recipes',
        philosophy:
            'Elevate your bar\'s consistency with VESP: the ultimate technical tool for bartenders and mixology enthusiasts seeking scientific perfection in every glass.',
        price: 'Free',
        priceLabel: 'No subscriptions • Instant Access',
    },
    techSpecs: {
        label: 'Precision Mixology',
        conceptMain: 'TECHNIQUE OF,',
        conceptHighlight: 'QUALITY.',
        description:
            'Professional cocktail balance, ABV, Brix calculator and classic recipes.',
        specsLabel: 'Technical Specifications',
        features: [
            {
                title: 'ABV/Brix Balance',
                text: 'Control density and alcohol content.',
            },
            {
                title: 'No Registration',
                text: 'Total local offline privacy.',
            },
            {
                title: 'Bar Mode',
                text: 'Fast reading under dim lights.',
            },
        ],
        tableRows: [
            { label: 'DENSITY', value: 'ANALYTICAL' },
            { label: 'GRADE (ABV)', value: 'CALIBRATED' },
            { label: 'SUGAR (BRIX)', value: 'REAL-TIME' },
        ],
    },
    benefits: {
        titleMain: 'Engine of',
        titleHighlight: 'balance.',
        description:
            'Visualize the balance between alcohol, sugar, and acidity through technical calculations designed for the industry.',
        items: [
            {
                title: 'Scientific Balance',
                text: 'Exact calculations between alcohol, sugar, and acidity.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Dilution Calibration',
                text: 'Adjustment by technique: Shake, Stir, or Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Classic Library',
                text: '70+ classics with physicochemical data.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Creator',
                text: 'Design and save your own signatures.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP Ecosystem',
        subtitle: 'Mixology & Standardization',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Service',
        titleHighlight: 'PERFECT.',
        cta: 'Coming soon to Stores',
    },
};
