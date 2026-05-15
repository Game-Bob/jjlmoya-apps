import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Iconic Sauce Recipes',
    description: 'Master the art of the saucier with 100+ iconic recipes and a professional culinary atlas.',
    slug: 'sauce-lab',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'The Art of the Saucier',
        subtitle: '+100 iconic sauces. One culinary masterpiece.',
        priceLabel: '100% Free · No Subscriptions',
        comingSoon: 'Coming Soon to Stores',
    },
    philosophy: {
        label: 'Philosophy',
        title: 'Culinary Heritage',
        description: 'SauceLab is not just a recipe book. It is a curated atlas of flavor, designed for the modern chef who values precision, history, and the science of the saucier. We believe that mastery of the sauce is the foundation of culinary excellence.',
    },
    benefits: {
        titleMain: 'Master the',
        titleHighlight: 'Foundation',
        items: [
            {
                title: '+100 Iconic Recipes',
                text: 'From the five Mother Sauces to exotic global derivatives. Every recipe is tested for professional precision.',
                icon: 'chef-hat',
            },
            {
                title: 'Chemistry of Taste',
                text: 'Understand the "why" behind the taste. Precise ingredients and clear, professional instructions.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Your kitchen companion works everywhere. No internet needed to craft the perfect sauce.',
                icon: 'wifi-off',
            },
            {
                title: 'Zero trackers',
                text: 'No ads, no subscriptions, no data collection. Just pure culinary excellence.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'The Lineage',
        titleMain: 'Sacred',
        titleHighlight: 'Hierarchy',
        description: 'Explore the genealogical tree of sauces. From the foundational Mother Sauces to their infinite derivatives.',
        items: [
            {
                name: 'Béchamel',
                base: 'Milk + White Roux',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'White Stock + Blond Roux',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Brown Stock + Brown Roux',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Egg Yolk + Butter Emulsion',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomato',
                base: 'Tomato + White Stock/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'The Science',
        titleMain: 'Molecular',
        titleHighlight: 'Precision',
        description: 'Cooking is physics and chemistry. Master the technical forces that create the perfect texture and flavor profile.',
        items: [
            {
                title: 'Emulsification',
                description: 'The art of binding oil and water. Learn the stability secrets of Hollandaise and Mayonnaise.',
            },
            {
                title: 'Reduction',
                description: 'Concentrating flavor through evaporation. Achieve the perfect "nappé" consistency.',
            },
            {
                title: 'Thickening',
                description: 'From classic Rouxs to modern starch suspensions and vegetable purées.',
            },
            {
                title: 'Balance',
                description: 'The science of adjusting acidity, salt, and fat to hit the perfect gustatory note.',
            },
        ],
    },
    atlas: {
        label: 'Gastro Cartography',
        titleMain: 'Explore the',
        titleHighlight: 'World',
        description: 'Discover the roots of every flavor through an immersive regional atlas. From French classics to Asian fermentations and Latin American salsas.',
    },
    fix: {
        label: 'Fix Mode',
        titleMain: 'Professional',
        titleHighlight: 'Recovery',
        description: 'Every chef encounters a sauce that breaks. Our dedicated Fix section guides you through recovery techniques.',
        steps: [
            {
                num: '01',
                title: 'Identify the break',
                description: 'Is it curdled, too thin, or over-seasoned? Diagnostic is the first step.',
            },
            {
                num: '02',
                title: 'Apply the fix',
                description: 'Temperature adjustments or emulsifier balance. Professional techniques at your disposal.',
            },
            {
                num: '03',
                title: 'Final polish',
                description: 'Adjusting consistency and final seasoning for a perfect restoration.',
            },
        ],
    },
    gallery: {
        title: 'Interface',
    },
};
