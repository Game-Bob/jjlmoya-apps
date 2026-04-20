import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Équilibreur de Cocktails',
    subtitle: 'Mixologie: Équilibre & Recettes',
    description:
        'Calculateur d\'équilibre, ABV, Brix et recettes classiques de mixologie professionnelle.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixologie: Équilibre & Recettes',
        philosophy:
            'Élevez la consistance de votre bar avec VESP : l\'outil technique ultime pour les bartenders et amateurs de mixologie en quête de perfection scientifique dans chaque verre.',
        price: 'Gratuit',
        priceLabel: 'Sans abonnement • Accès Immédiat',
    },
    techSpecs: {
        label: 'Mixologie de Précision',
        conceptMain: 'TECHNIQUE DE,',
        conceptHighlight: 'QUALITÉ.',
        description:
            'Calculateur d\'équilibre, ABV, Brix et recettes classiques de mixologie professionnelle.',
        specsLabel: 'Spécifications Techniques',
        features: [
            {
                title: 'Équilibre ABV/Brix',
                text: 'Contrôlez la densité et le degré alcoolique.',
            },
            {
                title: 'Sans Inscription',
                text: 'Confidentialité totale locale hors ligne.',
            },
            {
                title: 'Mode Bar',
                text: 'Lecture rapide sous lumières tamisées.',
            },
        ],
        tableRows: [
            { label: 'DENSITÉ', value: 'ANALYTIQUE' },
            { label: 'DEGRÉ (ABV)', value: 'CALIBRÉ' },
            { label: 'SUCRE (BRIX)', value: 'TEMPS RÉEL' },
        ],
    },
    benefits: {
        titleMain: 'Moteur de',
        titleHighlight: 'l\'équilibre.',
        description:
            'Visualisez l\'équilibre entre alcool, sucre et acidité grâce à des calculs techniques conçus pour l\'industrie.',
        items: [
            {
                title: 'Équilibre Scientifique',
                text: 'Calculs exacts entre alcool, sucre et acidité.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Étalonnage de Dilution',
                text: 'Ajustement par technique : Shake, Stir ou Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Bibliothèque Classique',
                text: 'PLUS DE 70 classiques avec données physicochimiques.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Créateur',
                text: 'Créez et sauvegardez vos propres signatures.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Écosystème VESP',
        subtitle: 'Mixologie & Standardisation',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Service',
        titleHighlight: 'PARFAIT.',
        cta: 'Bientôt dans les Stores',
    },
};
