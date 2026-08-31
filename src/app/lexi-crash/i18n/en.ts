import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Form words, beat challenges and avoid the collapse.',
    description: 'Test your mental agility in the ultimate word puzzle. Combine letters at full speed and avoid the collapse.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'A little word game for your daily reset',
        subtitle: 'Find words, build satisfying chains and enjoy a bright little world made for taking your time.',
        artNote: 'Your next cozy challenge is waiting',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Get it now on',
    },
    gameModes: {
        titleMain: 'PLAY IT',
        titleHighlight: 'YOUR WAY',
        subtitle: 'Three gentle ways to play, from quick bursts of focus to a slower, calmer word hunt.',
        crash: {
            title: 'Crash',
            description: 'Make words, keep the chain glowing and clear the board before the letters pile up.',
            alt: 'Crash Mode',
            kicker: 'Fast & bright',
        },
        relax: {
            title: 'Relax',
            description: 'Settle in and look around. No rush, just satisfying combinations waiting to be found.',
            alt: 'Relax Mode',
            kicker: 'Slow & soft',
        },
        daily: {
            title: 'Daily',
            description: 'A fresh little challenge every day. Find your rhythm and see how far your streak can grow.',
            alt: 'Daily Challenge',
            kicker: 'A new treat daily',
        },
    },
    socialProof: {
        titleMain: 'MAKE WORDS',
        titleHighlight: 'FEEL GOOD',
        subtitle: 'The new Cozy update makes every move easier to read, nicer to feel and a little more rewarding.',
        challengesLabel: 'Challenges Beaten',
        wordsLabel: 'Words',
        ratingLabel: 'Rating',
        feedUser1: '@Alex94',
        feedAction1: 'just found a six-letter chain',
        feedUser2: '@Marta_Lex',
        feedAction2: 'just finished today’s challenge',
        screenshotAlt: 'LexiCrash Cozy gameplay',
    },
    roadmap: {
        titleMain: 'HELP SHAPE',
        titleHighlight: 'WHAT COMES NEXT',
        subtitle: 'Tell us what would make your next little word break even better.',
        items: [
            {
                title: 'Game Modes',
                description: 'More playful ways to build words, chain moves and fill the board with tiny celebrations.',
                tag: 'Play',
            },
            {
                title: 'Story Mode',
                description: 'A gentle journey through a growing collection of word worlds and unlockable moments.',
                tag: 'Story',
            },
            {
                title: 'Rankings',
                description: 'A friendly place to compare streaks, celebrate clever finds and keep improving.',
                tag: 'Together',
            },
        ],
        voteLabel: 'Tap to vote',
        votedLabel: 'Your priority',
        feedbackTitle: 'Have a cozy idea?',
        feedbackSub: 'Send it our way and help shape LexiCrash.',
    },
    finalCta: {
        titleMain: 'YOUR NEXT',
        titleHighlight: 'WORD IS WAITING',
        subtitle: 'Open LexiCrash, find your flow and make a few minutes feel like yours again.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Download on',
        downloadAction: 'Download',
        ratingText: 'A warm little word break, loved by the community',
    },
    cozyFeatures: {
        eyebrow: 'THE COZY LOOP',
        titleMain: 'PLAY A LITTLE.',
        titleHighlight: 'COME BACK HAPPY.',
        subtitle: 'A calm, colourful word-game rhythm built for quick breaks, quiet focus and those “one more word” moments.',
        cards: [
            { title: 'Find your flow', description: 'Short games, clear boards and satisfying combinations that feel good from the first word.', alt: 'Crash Mode word-game scene' },
            { title: 'Keep the chain glowing', description: 'Every word adds a little spark. Chase combos, clear the board and enjoy the gentle burst of progress.', alt: 'Crash Mode word-game scene' },
            { title: 'Build a gentle streak', description: 'Come back for the Daily Word, celebrate your best finds and watch your word world grow.', alt: 'LexiCrash progress and statistics' },
        ],
    },
    storyShowcase: {
        eyebrow: 'A SMALL WORLD OF WORDS',
        titleMain: 'YOUR LITTLE',
        titleHighlight: 'WORD UNIVERSE.',
        subtitle: 'Soft clouds, playful tiles and tiny celebrations turn every round into a place you’ll want to visit again.',
        ariaLabel: 'LexiCrash features',
        bannerAlt: 'LexiCrash in a colourful cozy word-game universe',
        pills: ['Daily rituals', 'Cozy challenges', 'Personal bests'],
    },
};
