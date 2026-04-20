import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check : Compteur de Jours',
    subtitle: 'Le temps, devenu art.',
    description:
        'Gérez le compte à rebours de vos moments les plus précieux avec un design élégant et minimaliste. Vacances, anniversaires ou objectifs : faites en sorte que chaque seconde compte.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check : Compteur de Jours',
        titleStart: 'Chaque ',
        titleItalic: 'seconde',
        titleEnd: 'est une victoire.',
        subtitle:
            'Visualisez vos objectifs et célébrez vos succès avec l\'outil le plus élégant du Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'ÉTAT : URGENT',
        ctaTitle: 'Il est temps d\'utiliser',
        ctaHighlight: 'Day Check : Compteur de Jours',
        ctaButton: 'Faites-le maintenant',
        daysLabel: 'Jours',
        hoursLabel: 'Heures',
        minsLabel: 'Mins',
        segsLabel: 'Secs',
        sinceLabel: 'DEPUIS LE',
        targetLabel: 'RESTENT',
        cards: [
            { label: 'Jours sans fumer', type: 'since', emoji: '\u2728', tag: 'SANTÉ' },
            { label: 'Voyage au Japon', type: 'target', emoji: '\uD83C\uDF38', tag: 'VOYAGES' },
            { label: 'Série à la salle', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psychologie de l\'',
        titleHighlight: 'Habitude.',
        description:
            'Day Check utilise le renforcement visuel pour transformer la discipline en un jeu de dépassement de soi. Chaque seconde est une preuve de votre engagement.',
        items: [
            {
                title: 'Comptes à Rebours et Progressifs',
                text: 'Suivez le temps restant (Count down) ou le temps passé (Count up) depuis n\'importe quelle date importante.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Widgets Natifs',
                text: 'Gardez vos événements toujours visibles sur votre écran d\'accueil avec des widgets élégants et fonctionnels.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Design Glassmorphism',
                text: 'Interface moderne avec effets de verre, flous et dégradés vibrants qui enchantent le regard.',
                icon: 'mdi:blur',
            },
            {
                title: 'Confidentialité Totale',
                text: 'Vos données personnelles et événements restent sur votre appareil. Votre vie est privée.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'L\'App Réelle',
    },
    footer: {
        badge: 'DISPONIBLE MAINTENANT',
        titleMain: 'Maîtrisez votre',
        titleHighlight: 'Temps.',
        subtitle:
            'Commencez dès aujourd\'hui à visualiser vos objectifs avec Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
