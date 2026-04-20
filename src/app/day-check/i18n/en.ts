import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Day Counter',
    subtitle: 'Time, made art.',
    description:
        'Manage the countdown to your most special moments with an elegant and minimalist design. Vacations, anniversaries, or goals: make every second count.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Day Counter',
        titleStart: 'Every ',
        titleItalic: 'second',
        titleEnd: 'is a victory.',
        subtitle:
            'Visualize your goals and celebrate your streaks with the most elegant tool in the Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATUS: URGENT',
        ctaTitle: 'Time for you to use',
        ctaHighlight: 'Day Check: Day Counter',
        ctaButton: 'Do it now',
        daysLabel: 'Days',
        hoursLabel: 'Hours',
        minsLabel: 'Mins',
        segsLabel: 'Secs',
        sinceLabel: 'SINCE',
        targetLabel: 'LEFT',
        cards: [
            { label: 'Days without smoking', type: 'since', emoji: '\u2728', tag: 'HEALTH' },
            { label: 'Trip to Japan', type: 'target', emoji: '\uD83C\uDF38', tag: 'TRAVEL' },
            { label: 'Gym Streak', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psychology of ',
        titleHighlight: 'the Habit.',
        description:
            'Day Check: Day Counter uses visual reinforcement to transform discipline into a game of self-improvement. Every second is a testament to your commitment.',
        items: [
            {
                title: 'Count Down and Count Up',
                text: 'Track the time left (Count down) or the time passed (Count up) since any important date.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Native Widgets',
                text: 'Keep your events always visible on your home screen with elegant and functional widgets.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Glassmorphism Design',
                text: 'Modern interface with glass effects, blurs, and vibrant gradients that delight the eye.',
                icon: 'mdi:blur',
            },
            {
                title: 'Total Privacy',
                text: 'Your personal data and events stay on your device. Your life is private.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'The Real App',
    },
    footer: {
        badge: 'AVAILABLE NOW',
        titleMain: 'Master your',
        titleHighlight: 'Time.',
        subtitle:
            'Start visualizing your goals today with Day Check: Day Counter.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
