import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'gluckskeks',
    title: 'Glückskeks',
    subtitle: 'Dein Schicksal mit nur einem Fingertipp.',
    description: 'Ein Fingertipp pro Tag. Lass ihn zählen. Du sammelst keine Zitate, du sammelst Beständigkeit.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'Die meisten wissen nicht, wie man wartet. Du schon.',
        description: 'Ein Fingertipp pro Tag. Lass ihn zählen. Du sammelst keine Zitate, du sammelst Beständigkeit.',
        scanLabel: 'Zum Herunterladen scannen',
    },
    challenge: {
        title: 'Die tägliche Herausforderung.',
        crystalLabel: 'Kristall',
        standardLabel: 'Standard',
        lunarLabel: 'Lunar',
        quote: 'Heute hat die digitale Welt eine neue Chance freigeschaltet.',
        quoteNote: 'Nur in der App verfügbar für die nächsten',
        quoteHighlight: '24 Stunden',
    },
    streak: {
        title: 'Die heilige Serie.',
        description: 'Du sammelst keine Zitate, du sammelst Beständigkeit.',
        descriptionHighlight: 'Deine Geschichte wird Tag für Tag geschrieben.',
        countdownPrefix: 'Der heutige Keks endet in:',
        tomorrowNote: 'Aber keine Sorge, morgen gibt es einen neuen',
        altarLabel: 'Dein Altar',
        nextMilestoneLabel: 'Nächster Meilenstein',
        todayLabel: 'HEUTE',
        dayPrefix: 'Tag',
    },
    showcase: {
        titleStart: 'Der',
        titleHighlight: 'Glanz',
        titleEnd: 'des Schicksals.',
        description: 'Gold-, Jade- und Schwarzpapiere. Es sind keine einfachen Botschaften; es sind die Trophäen deiner Beständigkeit und deiner Intuition.',
    },
    events: {
        title: 'Temporäre Events.',
        subtitle: 'Das Schicksal ändert sich mit den Jahreszeiten. Neue Kekse, neue Botschaften, neues Glück.',
        items: [
            {
                name: 'Valentinstag',
                description: 'Liebe liegt in der Luft... und in deinem Glück. Finde die romantischen Kekse.',
                date: '14. Feb.',
            },
            {
                name: 'Jahr des Pferdes',
                description: 'Feiere das Glück mit dem goldenen Drachen. Spezialkekse für ein wohlhabendes Jahr.',
                date: '17. Feb.',
            },
        ],
    },
    shorts: {
        title: 'Jetzt verfügbar.',
        comingSoonCookies: 'Demnächst — Mehr Kekse',
        comingSoonEvents: 'Demnächst — Neue Events',
    },
    footer: {
        title: 'Bist du dabei?',
        subtitle: 'Deine Serie beginnt mit einem Klick.',
        downloadPrefix: 'Herunterladen auf',
    },
};
