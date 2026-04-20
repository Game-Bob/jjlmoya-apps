import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'biscuit-de-la-fortune',
    title: 'Biscuit de la Fortune',
    subtitle: 'Votre destin en un seul geste.',
    description: 'Un seul geste par jour. Faites qu\'il compte. Vous ne collectionnez pas des phrases, vous collectionnez la constance.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'La plupart ne savent pas attendre. Vous, si.',
        description: 'Un seul geste par jour. Faites qu\'il compte. Vous ne collectionnez pas des phrases, vous collectionnez la constance.',
        scanLabel: 'Scanner pour télécharger',
    },
    challenge: {
        title: 'Le Défi Quotidien.',
        crystalLabel: 'Cristal',
        standardLabel: 'Standard',
        lunarLabel: 'Lunaire',
        quote: 'Aujourd\'hui, le monde numérique a libéré une nouvelle opportunité.',
        quoteNote: 'Uniquement disponible dans l\'app pendant les prochaines',
        quoteHighlight: '24 heures',
    },
    streak: {
        title: 'La Série Sacrée.',
        description: 'Vous ne collectionnez pas des phrases, vous collectionnez la constance.',
        descriptionHighlight: 'Votre histoire s\'écrit jour après jour.',
        countdownPrefix: 'Le biscuit d\'aujourd\'hui se termine dans :',
        tomorrowNote: 'Mais rassurez-vous, il y en aura un autre demain',
        altarLabel: 'Votre Autel',
        nextMilestoneLabel: 'Prochaine Étape',
        todayLabel: 'AUJOURD\'HUI',
        dayPrefix: 'Jour',
    },
    showcase: {
        titleStart: 'L\'',
        titleHighlight: 'Éclat',
        titleEnd: 'du Destin.',
        description: 'Papiers d\'Or, Jade et Noir. Ce ne sont pas de simples messages ; ce sont les trophées de votre constance et de votre intuition.',
    },
    events: {
        title: 'Événements Saisonniers.',
        subtitle: 'Le destin change avec les saisons. Nouveaux biscuits, nouveaux messages, nouvelle chance.',
        items: [
            {
                name: 'Saint-Valentin',
                description: 'L\'amour est dans l\'air... et dans votre chance. Trouvez les biscuits romantiques.',
                date: '14 fév.',
            },
            {
                name: 'Année du Cheval',
                description: 'Célébrez la fortune avec le dragon doré. Des biscuits spéciaux pour une année prospère.',
                date: '17 fév.',
            },
        ],
    },
    shorts: {
        title: 'Déjà Disponible.',
        comingSoonCookies: 'Prochainement — Plus de Biscuits',
        comingSoonEvents: 'Prochainement — Nouveaux Événements',
    },
    footer: {
        title: 'Vous nous rejoignez ?',
        subtitle: 'Votre série commence en un seul clic.',
        downloadPrefix: 'Télécharger sur',
    },
};
