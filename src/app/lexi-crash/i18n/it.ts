import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Forma parole, supera sfide ed evita il collasso.',
    description: 'Metti alla prova la tua agilità mentale nel puzzle di parole definitivo. Combina lettere a tutta velocità ed evita il collasso.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'La parola del giorno è disponibile ora',
        subtitle: 'Il puzzle di parole definitivo. Un gioco veloce e infinito progettato per menti agili.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Scarica ora su',
    },
    gameModes: {
        titleMain: 'ESPERIENZA',
        titleHighlight: '10/10',
        subtitle: 'Non è solo un altro gioco di parole. Una sfida visiva e mentale per chi non si accontenta del minimo.',
        crash: {
            title: 'Adrenalina Pura',
            description: 'Forma parole sotto pressione. Le lettere non aspettano. Pulisci il tabellone prima che il caos ti sopraffaccia.',
            alt: 'Modalità Crash',
        },
        relax: {
            title: 'Maestria Mentale',
            description: 'Prenditi il tuo tempo. Nessuna pressione visiva, solo tu e il tabellone. Trova le combinazioni più preziose.',
            alt: 'Modalità Relax',
        },
        daily: {
            title: 'Sfida Globale',
            description: 'Una parola segreta ogni giorno. Tutti competono per essere i più veloci. Puoi guidare la classifica?',
            alt: 'Sfida Quotidiana',
        },
    },
    socialProof: {
        titleMain: 'UNISCITI AL',
        titleHighlight: 'MOVIMENTO',
        subtitle: 'Migliaia di menti stanno già sfidando il collasso. Traccia i tuoi progressi, batti i record e domina il lessico globale.',
        challengesLabel: 'Sfide Superate',
        wordsLabel: 'Parole',
        ratingLabel: 'Valutazione',
        feedUser1: '@Alex94',
        feedAction1: 'ha appena battuto il record in Modalità Crash',
        feedUser2: '@Marta_Lex',
        feedAction2: 'ha trovato la parola del giorno',
        screenshotAlt: 'Screenshot di LexiCrash',
    },
    roadmap: {
        titleMain: 'VOTA LA TUA',
        titleHighlight: 'PRIORITÀ',
        subtitle: 'Vogliamo sentirti. Scegli quale sezione prioritizzare nel prossimo aggiornamento.',
        items: [
            {
                title: 'Modalità di gioco',
                description: 'Nuove meccaniche e tabelloni tematici per espandere l\'esperienza tattile.',
                tag: 'Immersione',
            },
            {
                title: 'Modalità Storia',
                description: 'Un viaggio epico attraverso il lessico con sfide narrative e sbloccabili.',
                tag: 'Narrativa',
            },
            {
                title: 'Classifiche',
                description: 'Sfida il mondo intero e dimostra chi è il vero maestro delle parole.',
                tag: 'Sociale',
            },
        ],
        voteLabel: 'Clicca per votare',
        votedLabel: 'Segnato come priorità',
        feedbackTitle: 'Hai un\'idea?',
        feedbackSub: 'Scrivici e aiutaci a migliorare LexiCrash.',
    },
    finalCta: {
        titleMain: 'EVITERAI IL',
        titleHighlight: 'COLLASSO?',
        subtitle: 'La sfida quotidiana è attiva. Non lasciare che le lettere vincano oggi.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Scarica su',
        ratingText: '+5/5 valutato dalla community',
    },
};
