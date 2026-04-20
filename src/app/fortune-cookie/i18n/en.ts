import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fortune-cookie',
    title: 'Fortune Cookie',
    subtitle: 'Your destiny in a single tap.',
    description: "One tap a day. Make it count. You don't collect quotes, you collect consistency.",
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'Most don\'t know how to wait. You do.',
        description: 'One tap a day. Make it count. You don\'t collect quotes, you collect consistency.',
        scanLabel: 'Scan to download',
    },
    challenge: {
        title: 'The Daily Challenge.',
        crystalLabel: 'Crystal',
        standardLabel: 'Standard',
        lunarLabel: 'Lunar',
        quote: 'Today the digital world has unlocked a new opportunity.',
        quoteNote: 'Only available in the app for the next',
        quoteHighlight: '24 hours',
    },
    streak: {
        title: 'The Sacred Streak.',
        description: 'You don\'t collect quotes, you collect consistency.',
        descriptionHighlight: 'Your story is written day by day.',
        countdownPrefix: 'Today\'s cookie ends in:',
        tomorrowNote: 'But don\'t worry, there will be another tomorrow',
        altarLabel: 'Your Altar',
        nextMilestoneLabel: 'Next Milestone',
        todayLabel: 'TODAY',
        dayPrefix: 'Day',
    },
    showcase: {
        titleStart: 'The',
        titleHighlight: 'Glow',
        titleEnd: 'of Destiny.',
        description: 'Gold, Jade, and Black papers. They aren\'t just messages; they are the trophies of your consistency and intuition.',
    },
    events: {
        title: 'Seasonal Events.',
        subtitle: 'Destiny changes with the seasons. New cookies, new messages, new luck.',
        items: [
            {
                name: 'Valentine\'s Day',
                description: 'Love is in the air... and in your luck. Find the romantic cookies.',
                date: 'Feb 14',
            },
            {
                name: 'Year of the Horse',
                description: 'Celebrate fortune with the golden dragon. Special cookies for a prosperous year.',
                date: 'Feb 17',
            },
        ],
    },
    shorts: {
        title: 'Now Available.',
        comingSoonCookies: 'Coming Soon — More Cookies',
        comingSoonEvents: 'Coming Soon — New Events',
    },
    footer: {
        title: 'Will you join?',
        subtitle: 'Your streak starts with a single click.',
        downloadPrefix: 'Download on',
    },
};
