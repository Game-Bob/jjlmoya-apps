import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'The precision your dough deserves.',
    description:
        'Calculate ingredients, water temperatures, and fermentation times with scientific precision. Designed for pizzaiolos seeking professional results in every bake.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Neapolitan Pizza Calculator:',
        titleHighlight: 'Master Precision',
        titleEnd: 'in your Pocket.',
        subtitle:
            'Adjust hydration, yeast, and fermentation times based on your kitchen\'s actual temperature. Compatible with Biga, Poolish, and direct dough.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Download on',
        downloadLabelPlay: 'Available on',
        scanLabel: 'Scan to install now',
        tagline: 'Designed for technical enthusiasts',
    },
    showCase: {
        feature1: {
            title: 'Climate Adjustment',
            description: 'Calculate exact yeast amounts based on whether it\'s hot or cold.',
        },
        feature2: {
            title: 'Preferment Management',
            description: 'Control Biga and Poolish without complex manual calculations.',
        },
        feature3: {
            title: 'Kneading Log',
            description: 'Save your recipes and photos to learn from every bake.',
        },
    },
    empathy: {
        title: 'We know how it feels...',
        quote1: 'Over-fermented dough because of the heat? Pizzametrics adjusts the times for you.',
        quote2:
            'Struggling with baker\'s percentages? We do the math, you create the art.',
        quote3:
            'Ran out of flour? The "Pantry" section alerts you before you start kneading.',
    },
    pantry: {
        title: 'Your Library of',
        titleHighlight: 'Flours',
        description:
            'Not all flours absorb water the same way. In your Pantry, you can manage your flours by brand and strength (W). The app uses this technical data to adjust calculations and guarantee a perfect cornicione.',
        descriptionHighlight: 'Pantry',
        missionTitle: 'Global Mission',
        missionSubtitle: 'A professional tool for a global community of pizzaiolos.',
    },
    gallery: {
        title: 'Pro',
        titleHighlight: 'Interface',
        imageAlt: 'Real App View',
    },
    shorts: {
        titleMain: 'The App in',
        titleHighlight: 'Motion',
        subtitle:
            'Take a quick look at how Pizzametrics transforms your kitchen into a precision laboratory.',
    },
    transparency: {
        quoteMain: 'Created by a pizza lover,',
        quoteHighlight: 'for pizza lovers.',
        description:
            'Pizzametrics was born to eliminate flour-stained notebooks and calculation errors. Just accurate data for your next cornicione.',
    },
    footer: {
        titleMain: 'Join the',
        titleHighlight: 'Scientific Revolution',
        privacyLabel: 'Privacy Policy',
        termsLabel: 'Terms and Conditions',
        scanLabel: 'Scan to download',
    },
};
