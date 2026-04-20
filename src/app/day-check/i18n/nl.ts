import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Dagenteller',
    subtitle: 'Tijd, als kunst gemaakt.',
    description:
        'Beheer het aftellen naar uw meest speciale momenten met een elegant en minimalistisch ontwerp. Vakanties, jubilea of doelen: laat elke seconde tellen.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Dagenteller',
        titleStart: 'Elke ',
        titleItalic: 'seconde',
        titleEnd: 'is een overwinning.',
        subtitle:
            'Visualiseer uw doelen en vier uw streaks met de meest elegante tool in de Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATUS: DRINGEND',
        ctaTitle: 'Tijd voor u om',
        ctaHighlight: 'Day Check: Dagenteller',
        ctaButton: 'Doe het nu',
        daysLabel: 'Dagen',
        hoursLabel: 'Uren',
        minsLabel: 'Min',
        segsLabel: 'Sec',
        sinceLabel: 'SINDS',
        targetLabel: 'NOG',
        cards: [
            { label: 'Dagen zonder roken', type: 'since', emoji: '\u2728', tag: 'GEZONDHEID' },
            { label: 'Reis naar Japan', type: 'target', emoji: '\uD83C\uDF38', tag: 'REIZEN' },
            { label: 'Gym Streak', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psychologie van de ',
        titleHighlight: 'Gewoonte.',
        description:
            'Day Check gebruikt visuele versterking om discipline te transformeren in een spel van zelfverbetering. Elke seconde is een bewijs van uw toewijding.',
        items: [
            {
                title: 'Count Down en Count Up',
                text: 'Volg de resterende tijd (Count down) of de verstreken tijd (Count up) vanaf elke belangrijke datum.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Native Widgets',
                text: 'Houd uw evenementen altijd zichtbaar op uw startscherm met elegante en functionele widgets.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Glassmorphism Design',
                text: 'Moderne interface met glaseffecten, blurs en levendige verlopen die het oog strelen.',
                icon: 'mdi:blur',
            },
            {
                title: 'Totale Privacy',
                text: 'Uw persoonlijke gegevens en evenementen blijven op uw apparaat. Uw leven is privé.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'De Echte App',
    },
    footer: {
        badge: 'NU BESCHIKBAAR',
        titleMain: 'Beheers uw',
        titleHighlight: 'Tijd.',
        subtitle:
            'Begin vandaag nog met het visualiseren van uw doelen met Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
