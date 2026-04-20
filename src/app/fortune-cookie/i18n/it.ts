import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'biscotto-della-fortuna',
    title: 'Biscotto della Fortuna',
    subtitle: 'Il tuo destino in un solo tocco.',
    description: 'Un solo tocco al giorno. Fallo contare. Non collezioni frasi, collezioni costanza.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'La maggior parte non sa aspettare. Tu sì.',
        description: 'Un solo tocco al giorno. Fallo contare. Non collezioni frasi, collezioni costanza.',
        scanLabel: 'Scansiona per scaricare',
    },
    challenge: {
        title: 'La Sfida Quotidiana.',
        crystalLabel: 'Cristallo',
        standardLabel: 'Standard',
        lunarLabel: 'Lunare',
        quote: 'Oggi il mundo digitale ha liberato una nuova opportunità.',
        quoteNote: 'Disponibile solo nell\'app per le prossime',
        quoteHighlight: '24 ore',
    },
    streak: {
        title: 'La Scia Sacra.',
        description: 'Non collezioni frasi, collezioni costanza.',
        descriptionHighlight: 'La tua storia si scrive giorno dopo giorno.',
        countdownPrefix: 'Il biscotto di oggi scade tra:',
        tomorrowNote: 'Ma non preoccuparti, domani ce ne sarà un altro',
        altarLabel: 'Il Tuo Altare',
        nextMilestoneLabel: 'Prossimo Traguardo',
        todayLabel: 'OGGI',
        dayPrefix: 'Giorno',
    },
    showcase: {
        titleStart: 'Lo',
        titleHighlight: 'Splendore',
        titleEnd: 'del Destino.',
        description: 'Carte Oro, Giada e Nero. Non sono semplici messaggi; sono i trofei della tua costanza e del tuo intuito.',
    },
    events: {
        title: 'Eventi Temporanei.',
        subtitle: 'Il destino cambia con le stagioni. Nuovi biscotti, nuovi messaggi, nuova fortuna.',
        items: [
            {
                name: 'San Valentino',
                description: 'L\'amore è nell\'aria... e nella tua fortuna. Trova i biscotti romantici.',
                date: '14 feb',
            },
            {
                name: 'Anno del Cavallo',
                description: 'Celebra la fortuna con il dragone dorato. Biscotti speciali per un anno prospero.',
                date: '17 feb',
            },
        ],
    },
    shorts: {
        title: 'Già Disponibile.',
        comingSoonCookies: 'Prossimamente — Altri Biscotti',
        comingSoonEvents: 'Prossimamente — Nuovi Eventi',
    },
    footer: {
        title: 'Ti unisci a noi?',
        subtitle: 'La tua serie inizia con un solo clic.',
        downloadPrefix: 'Scarica su',
    },
};
