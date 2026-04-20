import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Licznik Dni',
    subtitle: 'Czas, zamieniony w sztukę.',
    description:
        'Zarządzaj odliczaniem do najważniejszych chwil dzięki eleganckiemu i minimalistycznemu designowi. Wakacje, rocznice lub cele: niech każda sekunda się liczy.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Licznik Dni',
        titleStart: 'Każda ',
        titleItalic: 'sekunda',
        titleEnd: 'to zwycięstwo.',
        subtitle:
            'Wizualizuj swoje cele i świętuj swoje postępy dzięki najmilszemu dla oka narzędziu w Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATUS: PILNE',
        ctaTitle: 'Czas, abyś użył',
        ctaHighlight: 'Day Check: Licznik Dni',
        ctaButton: 'Zrób to teraz',
        daysLabel: 'Dni',
        hoursLabel: 'Godz',
        minsLabel: 'Min',
        segsLabel: 'Sek',
        sinceLabel: 'OD DNIA',
        targetLabel: 'ZOSTAŁO',
        cards: [
            { label: 'Dni bez palenia', type: 'since', emoji: '\u2728', tag: 'ZDROWIE' },
            { label: 'Podróż do Japonii', type: 'target', emoji: '\uD83C\uDF38', tag: 'PODRÓŻE' },
            { label: 'Seria na siłowni', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psychologia ',
        titleHighlight: 'Nawyku.',
        description:
            'Day Check wykorzystuje wizualne wzmocnienie, aby przekształcić dyscyplinę w grę o samodoskonalenie. Każda sekunda jest dowodem Twojego zaangażowania.',
        items: [
            {
                title: 'Odliczanie w dół i w górę',
                text: 'Śledź czas, który pozostał (Count down) lub czas, który upłynął (Count up) od dowolnej ważnej daty.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Natywne Widgety',
                text: 'Miej swoje wydarzenia zawsze na widoku na ekranie głównym dzięki eleganckim i funkcjonalnym widgetom.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Design Glassmorphism',
                text: 'Nowoczesny interfejs z efektami szkła, rozmyciami i żywymi gradientami, które cieszą oko.',
                icon: 'mdi:blur',
            },
            {
                title: 'Całkowita Prywatność',
                text: 'Twoje dane osobowe i wydarzenia zostają na Twoim urządzeniu. Twoje życie jest prywatne.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'Prawdziwa Aplikacja',
    },
    footer: {
        badge: 'DOSTĘPNE TERAZ',
        titleMain: 'Opanuj swój',
        titleHighlight: 'Czas.',
        subtitle:
            'Zacznij wizualizować swoje cele już dziś dzięki Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
