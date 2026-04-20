import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Cocktail-balanserare',
    subtitle: 'Mixologi: Balans & Recept',
    description:
        'Professionell kalkylator för balans, ABV, Brix och klassiska cocktailrecept.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixologi: Balans & Recept',
        philosophy:
            'Höj konsistensen i din bar med VESP: det ultimata tekniska verktyget för bartenders och mixologi-entusiaster som söker vetenskaplig perfektion i varje glas.',
        price: 'Gratis',
        priceLabel: 'Inga abonnemang • Omedelbar åtkomst',
    },
    techSpecs: {
        label: 'Precisions-mixologi',
        conceptMain: 'TEKNIK AV,',
        conceptHighlight: 'KVALITET.',
        description:
            'Professionell kalkylator för balans, ABV, Brix och klassiska cocktailrecept.',
        specsLabel: 'Tekniska Specifikationer',
        features: [
            {
                title: 'ABV/Brix-balans',
                text: 'Kontrollera densitet och alkoholhalt.',
            },
            {
                title: 'Ingen Registrering',
                text: 'Total lokal offline-integritet.',
            },
            {
                title: 'Bar-läge',
                text: 'Snabb avläsning under dämpad belysning.',
            },
        ],
        tableRows: [
            { label: 'DENSITET', value: 'ANALYTISK' },
            { label: 'GRAD (ABV)', value: 'KALIBRERAD' },
            { label: 'SOCKER (BRIX)', value: 'REALTID' },
        ],
    },
    benefits: {
        titleMain: 'Motor för',
        titleHighlight: 'balans.',
        description:
            'Visualisera balansen mellan alkohol, socker och syra genom tekniska beräkningar utformade för branschen.',
        items: [
            {
                title: 'Vetenskaplig Balans',
                text: 'Exakta beräkningar mellan alkohol, socker och syra.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Utspädningskalibrering',
                text: 'Justering efter teknik: Shake, Stir eller Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Klassiskt Bibliotek',
                text: 'Över 70 klassiker med fysikalisk-kemiska data.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Skapare',
                text: 'Designa och spara dina egna signaturer.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP-ekosystem',
        subtitle: 'Mixologi & Standardisering',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Service',
        titleHighlight: 'PERFEKT.',
        cta: 'Tillgänglig nu',
    },
};
