import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Bilde Wörter, bewältige Herausforderungen und vermeide den Kollaps.',
    description: 'Teste deine mentale Agilität im ultimativen Wort-Puzzle. Kombiniere Buchstaben mit Höchstgeschwindigkeit und vermeide den Kollaps.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Das Wort des Tages ist jetzt verfügbar',
        subtitle: 'Das ultimative Wort-Puzzle. Ein schnelles, endloses Spiel für agile Köpfe.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Jetzt herunterladen auf',
    },
    gameModes: {
        titleMain: 'ERLEBNIS',
        titleHighlight: '10/10',
        subtitle: 'Nicht nur ein weiteres Wortspiel. Eine visuelle und mentale Herausforderung für alle, die sich nicht mit dem Minimum zufriedengeben.',
        crash: {
            title: 'Purer Adrenalinstoß',
            description: 'Bilde Wörter unter Druck. Buchstaben warten nicht. Leere das Spielfeld, bevor das Chaos überhandnimmt.',
            alt: 'Crash-Modus',
        },
        relax: {
            title: 'Mentale Meisterschaft',
            description: 'Nimm dir Zeit. Kein visueller Druck, nur du und das Spielfeld. Finde die wertvollsten Kombinationen.',
            alt: 'Entspannungsmodus',
        },
        daily: {
            title: 'Globale Herausforderung',
            description: 'Ein geheimes Wort jeden Tag. Alle wetteifern darum, am schnellsten zu sein. Kannst du die Rangliste anführen?',
            alt: 'Tägliche Herausforderung',
        },
    },
    socialProof: {
        titleMain: 'SCHLIESS DICH DER',
        titleHighlight: 'BEWEGUNG AN',
        subtitle: 'Tausende von Köpfen fordern bereits den Kollaps heraus. Verfolge deinen Fortschritt, breche Rekorde und dominiere das globale Lexikon.',
        challengesLabel: 'Bewältigte Herausforderungen',
        wordsLabel: 'Wörter',
        ratingLabel: 'Bewertung',
        feedUser1: '@Alex94',
        feedAction1: 'hat gerade den Rekord im Crash-Modus gebrochen',
        feedUser2: '@Marta_Lex',
        feedAction2: 'hat das Wort des Tages gefunden',
        screenshotAlt: 'LexiCrash Screenshot',
    },
    roadmap: {
        titleMain: 'WÄHLE DEINE',
        titleHighlight: 'PRIORITÄT',
        subtitle: 'Wir wollen dich hören. Wähle, welchen Bereich wir beim nächsten Update priorisieren sollen.',
        items: [
            {
                title: 'Spielmodi',
                description: 'Neue Mechaniken und thematische Spielfelder für ein erweitertes taktiles Erlebnis.',
                tag: 'Immersion',
            },
            {
                title: 'Story-Modus',
                description: 'Eine epische Reise durch das Lexikon mit narrativen Herausforderungen und Freischaltungen.',
                tag: 'Narrative',
            },
            {
                title: 'Ranglisten',
                description: 'Tritt gegen die ganze Welt an und beweise, wer der wahre Meister der Wörter ist.',
                tag: 'Sozial',
            },
        ],
        voteLabel: 'Zum Abstimmen klicken',
        votedLabel: 'Als Priorität markiert',
        feedbackTitle: 'Hast du eine Idee?',
        feedbackSub: 'Schreib uns und hilf uns, LexiCrash zu verbessern.',
    },
    finalCta: {
        titleMain: 'WIRST DU DEN',
        titleHighlight: 'KOLLAPS VERMEIDEN?',
        subtitle: 'Die tägliche Herausforderung ist aktiv. Lass die Buchstaben heute nicht gewinnen.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Herunterladen auf',
        ratingText: '+5/5 von der Community bewertet',
    },
};
