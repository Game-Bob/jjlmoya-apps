import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Dagräknare',
    subtitle: 'Tid, skapad som konst.',
    description:
        'Hantera nedräkningen till dina mest speciella ögonblick med en elegant och minimalistisk design. Semestrar, årsdagar eller mål: låt varje sekund räknas.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Dagräknare',
        titleStart: 'Varje ',
        titleItalic: 'sekund',
        titleEnd: 'är en seger.',
        subtitle:
            'Visualisera dina mål och fira dina framsteg med det mest eleganta verktyget i Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATUS: BRÅDSKANDE',
        ctaTitle: 'Dags för dig att använda',
        ctaHighlight: 'Day Check: Dagräknare',
        ctaButton: 'Gör det nu',
        daysLabel: 'Dagar',
        hoursLabel: 'Tim',
        minsLabel: 'Min',
        segsLabel: 'Sek',
        sinceLabel: 'SEDAN',
        targetLabel: 'KVAR',
        cards: [
            { label: 'Dagar utan rökning', type: 'since', emoji: '\u2728', tag: 'HÄLSA' },
            { label: 'Resa till Japan', type: 'target', emoji: '\uD83C\uDF38', tag: 'RESOR' },
            { label: 'Gym-serie', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psykologin bakom ',
        titleHighlight: 'Vanan.',
        description:
            'Day Check använder visuell förstärkning för att förvandla disciplin till ett spel om självförbättring. Varje sekund är ett bevis på ditt engagemang.',
        items: [
            {
                title: 'Nedräkning och Uppräkning',
                text: 'Spåra tiden som är kvar (Count down) eller tiden som har gått (Count up) sedan valfritt viktigt datum.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Native Widgets',
                text: 'Håll dina händelser alltid synliga på din startskärm med eleganta och funktionella widgets.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Glassmorphism Design',
                text: 'Modern miljö med glaseffekter, oskärpa och levande gradienter som behagar ögat.',
                icon: 'mdi:blur',
            },
            {
                title: 'Total Integritet',
                text: 'Dina personliga data och händelser stannar på din enhet. Ditt liv är privat.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'Den Riktiga Appen',
    },
    footer: {
        badge: 'TILLGÄNGLIG NU',
        titleMain: 'Bemästra din',
        titleHighlight: 'Tid.',
        subtitle:
            'Börja visualisera dina mål idag med Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
