import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Formez des mots, relevez des défis et évitez l\'effondrement.',
    description: 'Testez votre agilité mentale dans le puzzle de mots ultime. Combinez des lettres à toute vitesse et évitez l\'effondrement.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Le mot du jour est disponible maintenant',
        subtitle: 'Le puzzle de mots ultime. Un jeu rapide et infini conçu pour les esprits agiles.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Télécharger sur',
    },
    gameModes: {
        titleMain: 'EXPÉRIENCE',
        titleHighlight: '10/10',
        subtitle: "Ce n'est pas juste un autre jeu de mots. Un défi visuel et mental pour ceux qui ne se contentent pas du minimum.",
        crash: {
            title: 'Adrénaline Pure',
            description: 'Formez des mots sous pression. Les lettres n\'attendent pas. Nettoyez le plateau avant que le chaos ne vous dépasse.',
            alt: 'Mode Crash',
        },
        relax: {
            title: 'Maîtrise Mentale',
            description: 'Prenez votre temps. Pas de pression, juste vous et le plateau. Trouvez les combinaisons les plus précieuses.',
            alt: 'Mode Relax',
        },
        daily: {
            title: 'Défi Mondial',
            description: 'Un mot secret chaque jour. Tout le monde rivalise pour être le plus rapide. Pouvez-vous mener le classement ?',
            alt: 'Défi Quotidien',
        },
    },
    socialProof: {
        titleMain: 'REJOIGNEZ LE',
        titleHighlight: 'MOUVEMENT',
        subtitle: 'Des milliers d\'esprits défient déjà l\'effondrement. Suivez vos progrès, battez des records et dominez le lexique mondial.',
        challengesLabel: 'Défis Relevés',
        wordsLabel: 'Mots',
        ratingLabel: 'Note',
        feedUser1: '@Alex94',
        feedAction1: 'vient de battre le record en Mode Crash',
        feedUser2: '@Marta_Lex',
        feedAction2: 'a trouvé le mot du jour',
        screenshotAlt: 'Capture d\'écran LexiCrash',
    },
    roadmap: {
        titleMain: 'VOTEZ VOTRE',
        titleHighlight: 'PRIORITÉ',
        subtitle: 'Nous voulons vous entendre. Choisissez quelle section prioriser dans la prochaine mise à jour.',
        items: [
            {
                title: 'Modes de jeu',
                description: 'Nouvelles mécaniques et plateaux thématiques pour enrichir l\'expérience tactile.',
                tag: 'Immersion',
            },
            {
                title: 'Mode Histoire',
                description: 'Un voyage épique à travers le lexique avec des défis narratifs et des déblocages.',
                tag: 'Narratif',
            },
            {
                title: 'Classements',
                description: 'Affrontez le monde entier et prouvez qui est le vrai maître des mots.',
                tag: 'Social',
            },
        ],
        voteLabel: 'Cliquez pour voter',
        votedLabel: 'Marqué comme priorité',
        feedbackTitle: 'Une idée ?',
        feedbackSub: 'Écrivez-nous et aidez-nous à améliorer LexiCrash.',
    },
    finalCta: {
        titleMain: 'ÉVITEREZ-VOUS',
        titleHighlight: "L'EFFONDREMENT ?",
        subtitle: 'Le défi quotidien est actif. Ne laissez pas les lettres gagner aujourd\'hui.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Télécharger sur',
        ratingText: '+5/5 évalué par la communauté',
    },
};
