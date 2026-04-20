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
        badgeText: "Today's word is now available",
        subtitle: 'The ultimate word puzzle. A fast, infinite game designed for agile minds.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Get it now on',
    },
    gameModes: {
        titleMain: 'EXPERIENCE',
        titleHighlight: '10/10',
        subtitle: "Not just another word game. A visual and mental challenge designed for those who don't settle for basics.",
        crash: {
            title: 'Pure Adrenaline',
            description: 'Form words under pressure. Letters never wait. Clear the board before chaos overwhelms you.',
            alt: 'Crash Mode',
        },
        relax: {
            title: 'Mental Mastery',
            description: 'Take your time. No visual pressure, just you and the board. Find the most valuable combinations.',
            alt: 'Relax Mode',
        },
        daily: {
            title: 'Global Challenge',
            description: "A secret word every day. Everyone competes to be the fastest. Can you lead the ranking?",
            alt: 'Daily Challenge',
        },
    },
    socialProof: {
        titleMain: 'JOIN THE',
        titleHighlight: 'MOVEMENT',
        subtitle: 'Thousands of minds are already challenging the collapse. Track your progress, break records and dominate the global lexicon.',
        challengesLabel: 'Challenges Beaten',
        wordsLabel: 'Words',
        ratingLabel: 'Rating',
        feedUser1: '@Alex94',
        feedAction1: 'just broke the record in Crash Mode',
        feedUser2: '@Marta_Lex',
        feedAction2: 'found the word of the day',
        screenshotAlt: 'LexiCrash Screenshot',
    },
    roadmap: {
        titleMain: 'VOTE YOUR',
        titleHighlight: 'PRIORITY',
        subtitle: 'We want to hear you. Choose which section we should prioritize in the next update.',
        items: [
            {
                title: 'Game Modes',
                description: 'New mechanics and themed boards to expand the tactile experience.',
                tag: 'Immersion',
            },
            {
                title: 'Story Mode',
                description: 'An epic journey through the lexicon with narrative challenges and unlockables.',
                tag: 'Narrative',
            },
            {
                title: 'Rankings',
                description: 'Compete with the whole world and prove who is the true master of words.',
                tag: 'Social',
            },
        ],
        voteLabel: 'Click to vote',
        votedLabel: 'Marked as priority',
        feedbackTitle: 'Have an idea?',
        feedbackSub: 'Write to us and help us improve LexiCrash.',
    },
    finalCta: {
        titleMain: 'WILL YOU AVOID',
        titleHighlight: 'THE COLLAPSE?',
        subtitle: 'The daily challenge is active. Do not let the letters win today.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Download on',
        ratingText: '+5/5 rated by the community',
    },
};
