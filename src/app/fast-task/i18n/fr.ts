import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task : Capture de Tâches',
    subtitle: 'Écrivez. Envoyez. Oubliez. La Paix.',
    description:
        'Capturez bugs, idées ou tâches en 3 secondes. Envoyez vos notes vers GitHub, Make ou Linear par chat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Écrivez. Envoyez. Oubliez. La Paix.',
        price: '4,95€',
        priceLabel: 'Paiement unique professionnel',
    },
    concept: {
        label: 'La Philosophie',
        main: 'ZÉRO FRICTION,',
        highlighted: 'VITESSE ABSOLUE.',
        philosophy:
            'Fast Task n\'est pas un gestionnaire de projet lourd. C\'est votre canal d\'entrée ultra-rapide pour que rien n\'interrompe votre concentration.',
        highlights: [
            { label: 'Vitesse', value: '<3s' },
            { label: 'Intégrations', value: 'Natives' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimisez votre flux de',
        titleHighlight: 'travail quotidien.',
        items: [
            {
                title: 'Capture en 3 secondes',
                text: 'Fonctionne comme un chat : vous arrivez, vous écrivez et vous envoyez. Pas de formulaires, pas de champs obligatoires.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Intégrations Pro',
                text: 'Connectez vos projets directement avec GitHub, Linear ou Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Confidentialité Radicale',
                text: 'Vos jetons et vos tâches vivent sur votre appareil. Pas de serveurs intermédiaires, pas de traçage.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Mode Offline-First',
                text: 'Envoyez vos tâches même sans réseau. L\'app synchronise en arrière-plan dès que vous êtes en ligne.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'De la pensée à l\'action en',
        steps: [
            {
                label: 'Écrivez',
                desc: 'Ouvrez l\'app et capturez votre idée à la volée.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Contexte',
                desc: 'Formatage et enrichissement automatiques.',
                icon: 'mdi:brain',
            },
            {
                label: 'Envoyé',
                desc: 'Directement vers votre intégration, prêt pour la production.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Écosystème Ouvert',
        titleMain: 'Intégrations',
        titleHighlight: 'Natives',
        description:
            'Fast Task se connecte directement aux outils que vous utilisez déjà. Sans intermédiaires, sans latence.',
        ctaTitle: 'Besoin d\'une intégration spécifique ?',
        ctaLinkText: 'Contacter le support',
        comingSoon: 'Prochainement',
    },
    earlyAdopter: {
        badge: 'Programme Early Adopter',
        titleMain: 'On vous l\'',
        titleHighlight: 'offre.',
        description:
            'Nous recherchons des retours réels de professionnels exigeants. Si vous vous engagez à utiliser l\'app et à nous donner votre avis sincère, la licence est à vous. À vie.',
        countLabel: 'Licences Restantes',
        countNote: 'Seulement pour les 100 premiers à nous écrire démontrant un réel intérêt.',
        cta: 'JE VEUX MA LICENCE',
    },
    enterprise: {
        label: 'Solutions Entreprise',
        titleMain: 'Vous voulez une app pour votre',
        titleHighlight: 'entreprise ?',
        description:
            'Nous transformons la productivité des équipes de haute performance. Des outils natifs avec le même ADN que Fast Task, adaptés aux besoins de votre organisation.',
        featureTitle: 'Écosystème sur mesure',
        featureText:
            'Intégrations avec Salesforce, SAP, Jira Enterprise et bases de datos propriétaires.',
        cta: 'On en parle ?',
    },
    gallery: {
        title: 'Aperçu',
    },
    footer: {
        line1: 'Écrivez.',
        line2: 'Oubliez.',
        line3: 'La Paix.',
        subtitle: 'Éliminez la friction de votre journée',
    },
};
