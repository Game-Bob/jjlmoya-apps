import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Cocktail-Balancer',
    subtitle: 'Mixologie: Balance & Rezepte',
    description:
        'Professioneller Rechner für Balance, Alkoholgehalt (ABV), Brix und klassische Cocktailrezepte.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixologie: Balance & Rezepte',
        philosophy:
            'Steigern Sie die Konsistenz Ihrer Bar mit VESP: dem ultimativen technischen Werkzeug für Barkeeper und Mixologie-Enthusiasten, die wissenschaftliche Perfektion in jedem Glas suchen.',
        price: 'Gratis',
        priceLabel: 'Keine Abonnements • Sofortiger Zugriff',
    },
    techSpecs: {
        label: 'Präzisions-Mixologie',
        conceptMain: 'TECHNIK DER,',
        conceptHighlight: 'QUALITÄT.',
        description:
            'Professioneller Rechner für Balance, Alkoholgehalt (ABV), Brix und klassische Cocktailrezepte.',
        specsLabel: 'Technische Spezifikationen',
        features: [
            {
                title: 'ABV/Brix-Balance',
                text: 'Dichte und Alkoholgehalt kontrollieren.',
            },
            {
                title: 'Ohne Registrierung',
                text: 'Vollständige lokale Offline-Privatsphäre.',
            },
            {
                title: 'Bar-Modus',
                text: 'Schnelles Ablesen bei gedämpftem Licht.',
            },
        ],
        tableRows: [
            { label: 'DICHTE', value: 'ANALYTISCH' },
            { label: 'GRAD (ABV)', value: 'KALIBRIERT' },
            { label: 'ZUCKER (BRIX)', value: 'ECHTZEIT' },
        ],
    },
    benefits: {
        titleMain: 'Motor der',
        titleHighlight: 'Balance.',
        description:
            'Visualisieren Sie die Balance zwischen Alkohol, Zucker und Säure durch technische Berechnungen, die für die Branche entwickelt wurden.',
        items: [
            {
                title: 'Wissenschaftliche Balance',
                text: 'Exakte Berechnungen zwischen Alkohol, Zucker und Säure.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Verdünnungskalibrierung',
                text: 'Anpassung nach Technik: Shake, Stir oder Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Klassische Bibliothek',
                text: 'Über 70 Klassiker mit physikalisch-chemischen Daten.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Creator',
                text: 'Entwerfen und speichern Sie Ihre eigenen Signaturen.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP-Ökosystem',
        subtitle: 'Mixologie & Standardisierung',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Service',
        titleHighlight: 'PERFEKT.',
        cta: 'Jetzt verfügbar',
    },
};
