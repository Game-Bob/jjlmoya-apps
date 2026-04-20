import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Task Capture',
    subtitle: 'Write. Send. Forget. Peace.',
    description:
        'Capture bugs, ideas or tasks in 3 seconds. Send notes to GitHub, Make or Linear via chat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Write. Send. Forget. Peace.',
        priceLabel: 'One-time professional purchase',
    },
    concept: {
        label: 'The Philosophy',
        main: 'ZERO FRICTION,',
        highlighted: 'ABSOLUTE SPEED.',
        philosophy:
            'Fast Task is not a heavy project manager. It\u2019s your ultra-fast input channel so nothing interrupts your focus.',
        highlights: [
            { label: 'Speed', value: '<3s' },
            { label: 'Integrations', value: 'Native' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimize your',
        titleHighlight: 'daily workflow.',
        items: [
            {
                title: 'Capture in 3 seconds',
                text: 'Works like chat: open, write and send. No forms, no mandatory fields.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Pro Integrations',
                text: 'Connect your projects directly with GitHub, Linear or Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Radical Privacy',
                text: 'Your tokens and tasks live on your device. No intermediate servers, no tracking.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Offline-First Mode',
                text: 'Send tasks even without coverage. The app syncs them in the background when you\u2019re back online.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'From thought to action in',
        steps: [
            {
                label: 'Write',
                desc: 'Open the app and capture your idea on the fly.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Context',
                desc: 'Automatically formatted and enriched.',
                icon: 'mdi:brain',
            },
            {
                label: 'Sent',
                desc: 'Straight to your integration, ready for production.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Open Ecosystem',
        titleMain: 'Native',
        titleHighlight: 'Integrations',
        description:
            'Fast Task connects directly with the tools you already use. No intermediaries, no latency.',
        ctaTitle: 'Need a specific integration?',
        ctaLinkText: 'Contact support',
        comingSoon: 'Coming soon',
    },
    earlyAdopter: {
        badge: 'Early Adopter Program',
        titleMain: 'We\u2019ll give it to',
        titleHighlight: 'you.',
        description:
            'We\u2019re looking for real feedback from demanding professionals. If you commit to using the app and giving us your honest opinion, the license is yours. For life.',
        countLabel: 'Remaining Licenses',
        countNote: 'Only for the first 100 who write to us demonstrating real interest.',
        cta: 'I WANT MY LICENSE',
    },
    enterprise: {
        label: 'Enterprise Solutions',
        titleMain: 'Want an app for your',
        titleHighlight: 'company?',
        description:
            'We transform the productivity of high-performance teams. Native tools with the same DNA of speed and efficiency as Fast Task, adapted to your organization.',
        featureTitle: 'Custom Ecosystem',
        featureText:
            'Integrations with Salesforce, SAP, Jira Enterprise and proprietary databases.',
        cta: 'Let\u2019s talk?',
    },
    gallery: {
        title: 'Preview',
    },
    footer: {
        line1: 'Write.',
        line2: 'Forget.',
        line3: 'Peace.',
        subtitle: 'Eliminate friction from your day',
    },
};
