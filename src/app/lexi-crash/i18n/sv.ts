import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Bilda ord, klara utmaningar och undvik kollapsen.',
    description: 'Testa din mentala smidighet i det ultimata ordpusslet. Kombinera bokstäver i full fart och undvik kollapsen.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Dagens ord är nu tillgängligt',
        subtitle: 'Det ultimata ordpusslet. Ett snabbt och oändligt spel för snabbtänkta.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Ladda ner på',
    },
    gameModes: {
        titleMain: 'UPPLEVELSE',
        titleHighlight: '10/10',
        subtitle: 'Det är inte bara ytterligare ett ordspel. En visuell och mental utmaning för dem som inte nöjer sig med det grundläggande.',
        crash: {
            title: 'Ren Adrenalin',
            description: 'Bilda ord under press. Bokstäverna väntar inte. Rensa spelplanen innan kaoset tar över.',
            alt: 'Crash-läge',
        },
        relax: {
            title: 'Mental Mästerskap',
            description: 'Ta din tid. Inget visuellt tryck, bara du och spelplanen. Hitta de mest värdefulla kombinationerna.',
            alt: 'Relax-läge',
        },
        daily: {
            title: 'Global Utmaning',
            description: 'Ett hemligt ord varje dag. Alla tävlar om att vara snabbast. Kan du leda ranglistan?',
            alt: 'Daglig utmaning',
        },
    },
    socialProof: {
        titleMain: 'GÅ MED I',
        titleHighlight: 'RÖRELSEN',
        subtitle: 'Tusentals hjärnor utmanar redan kollapsen. Följ dina framsteg, slå rekord och dominera det globala lexikonet.',
        challengesLabel: 'Klarade Utmaningar',
        wordsLabel: 'Ord',
        ratingLabel: 'Betyg',
        feedUser1: '@Alex94',
        feedAction1: 'slog precis rekordet i Crash-läge',
        feedUser2: '@Marta_Lex',
        feedAction2: 'hittade dagens ord',
        screenshotAlt: 'LexiCrash Skärmbild',
    },
    roadmap: {
        titleMain: 'RÖSTA DIN',
        titleHighlight: 'PRIORITET',
        subtitle: 'Vi vill höra dig. Välj vilken del vi ska prioritera i nästa uppdatering.',
        items: [
            {
                title: 'Spellägen',
                description: 'Nya mekaniker och tematiska spelplaner för att utöka den taktila upplevelsen.',
                tag: 'Upplevelse',
            },
            {
                title: 'Berättelseläge',
                description: 'En episk resa genom lexikonet med narrativa utmaningar och upplåsbara föremål.',
                tag: 'Berättelse',
            },
            {
                title: 'Rankningar',
                description: 'Tävla med hela världen och bevisa vem som är den sanne mästaren av ord.',
                tag: 'Social',
            },
        ],
        voteLabel: 'Klicka för att rösta',
        votedLabel: 'Markerad som prioritet',
        feedbackTitle: 'Har du en idé?',
        feedbackSub: 'Skriv till oss och hjälp oss förbättra LexiCrash.',
    },
    finalCta: {
        titleMain: 'KOMMER DU ATT UNDVIKA',
        titleHighlight: 'KOLLAPSEN?',
        subtitle: 'Den dagliga utmaningen är aktiv. Låt inte bokstäverna vinna idag.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Ladda ner på',
        ratingText: '+5/5 betygsatt av communityn',
    },
};
