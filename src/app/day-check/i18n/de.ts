import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Tagesticker',
    subtitle: 'Zeit, als Kunst gemacht.',
    description:
        'Verwalten Sie den Countdown für Ihre besonderen Momente mit einem eleganten und minimalistischen Design. Urlaub, Jubiläen oder Ziele: Lassen Sie jede Sekunde zählen.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Tagesticker',
        titleStart: 'Jede ',
        titleItalic: 'Sekunde',
        titleEnd: 'ist ein Sieg.',
        subtitle:
            'Visualisieren Sie Ihre Ziele und feiern Sie Ihre Erfolge mit dem elegantesten Tool im Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATUS: DRINGEND',
        ctaTitle: 'Zeit für die Nutzung von',
        ctaHighlight: 'Day Check: Tagesticker',
        ctaButton: 'Jetzt starten',
        daysLabel: 'Tage',
        hoursLabel: 'Std',
        minsLabel: 'Min',
        segsLabel: 'Sek',
        sinceLabel: 'SEIT DEM',
        targetLabel: 'NOCH',
        cards: [
            { label: 'Tage ohne Rauchen', type: 'since', emoji: '\u2728', tag: 'GESUNDHEIT' },
            { label: 'Reise nach Japan', type: 'target', emoji: '\uD83C\uDF38', tag: 'REISEN' },
            { label: 'Fitness-Serie', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psychologie der ',
        titleHighlight: 'Gewohnheit.',
        description:
            'Day Check nutzt visuelle Verstärkung, um Disziplin in ein Spiel der Selbstoptimierung zu verwandeln. Jede Sekunde ist ein Beweis für Ihr Engagement.',
        items: [
            {
                title: 'Countdown und Count-up',
                text: 'Verfolgen Sie die verbleibende Zeit (Count down) oder die vergangene Zeit (Count up) seit jedem wichtigen Datum.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Native Widgets',
                text: 'Halten Sie Ihre Ereignisse mit eleganten und funktionalen Widgets immer auf Ihrem Home-Bildschirm sichtbar.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Glassmorphism-Design',
                text: 'Moderne Benutzeroberfläche mit Glaseffekten, Unschärfen und lebendigen Farbverläufen, die das Auge erfreuen.',
                icon: 'mdi:blur',
            },
            {
                title: 'Absolute Privatsphäre',
                text: 'Ihre persönlichen Daten und Ereignisse bleiben auf Ihrem Gerät. Ihr Leben ist privat.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'Die echte App',
    },
    footer: {
        badge: 'JETZT VERFÜGBAR',
        titleMain: 'Meistern Sie Ihre',
        titleHighlight: 'Zeit.',
        subtitle:
            'Beginnen Sie noch heute damit, Ihre Ziele mit Day Check zu visualisieren.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
