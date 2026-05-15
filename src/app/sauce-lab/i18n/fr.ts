import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Recettes de Sauces Iconiques',
    description: 'Maîtrisez l\'art du saucier avec plus de 100 recettes iconiques et un atlas culinaire professionnel.',
    slug: 'laboratoire-sauces',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'L\'Art du Saucier',
        subtitle: '+100 sauces iconiques. Un chef-d\'œuvre culinaire.',
        priceLabel: '100% Gratuit · Sans Abonnement',
        comingSoon: 'Bientôt disponible en magasin',
    },
    philosophy: {
        label: 'Philosophie',
        title: 'Héritage Culinaire',
        description: 'SauceLab n\'est pas seulement un livre de recettes. C\'est un atlas des saveurs soigné, conçu pour le chef moderne qui valorise la précision, l\'héritage et la science du saucier. Nous pensons que la maîtrise de la sauce est le fondement de l\'excellence culinaire.',
    },
    benefits: {
        titleMain: 'Maîtrisez les',
        titleHighlight: 'Fondements',
        items: [
            {
                title: '+100 Recettes Iconiques',
                text: 'Des cinq Sauces Mères aux dérivés mondiaux exotiques. Chaque recette est testée pour une précision professionnelle.',
                icon: 'chef-hat',
            },
            {
                title: 'Chimie du Goût',
                text: 'Comprenez le "pourquoi" derrière le goût. Des ingrédients précis et des instructions professionnelles claires.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Votre compagnon de cuisine fonctionne partout. Pas besoin d\'internet pour créer la sauce parfaite.',
                icon: 'wifi-off',
            },
            {
                title: 'Zéro traceur',
                text: 'Sans publicité, sans abonnement, sans collecte de données. Juste l\'excellence culinaire pure.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'La Lignée',
        titleMain: 'Hiérarchie',
        titleHighlight: 'Sacrée',
        description: 'Explorez l\'arbre généalogique des sauces. Des Sauces Mères fondatrices à leurs dérivés infinis.',
        items: [
            {
                name: 'Béchamel',
                base: 'Lait + Roux Blanc',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Fond Blanc + Roux Blond',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Fond Brun + Roux Brun',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Jaune d\'Œuf + Émulsion de Beurre',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomate',
                base: 'Tomate + Fond Blanc/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'La Science',
        titleMain: 'Précision',
        titleHighlight: 'Moléculaire',
        description: 'Cuisiner, c\'est de la physique et de la chimie. Maîtrisez les forces techniques qui créent la texture et le profil de saveur parfaits.',
        items: [
            {
                title: 'Émulsification',
                description: 'L\'art de lier l\'huile et l\'eau. Apprenez les secrets de stabilité de la Hollandaise et de la Mayonnaise.',
            },
            {
                title: 'Réduction',
                description: 'Concentration des saveurs par évaporation. Obtenez la consistance "nappé" parfaite.',
            },
            {
                title: 'Épaississement',
                description: 'Des Rouxs classiques aux suspensions d\'amidon modernes et purées de légumes.',
            },
            {
                title: 'Équilibre',
                description: 'La science de l\'ajustement de l\'acidité, du sel et du gras pour atteindre la note gustative parfaite.',
            },
        ],
    },
    atlas: {
        label: 'Gastro Cartographie',
        titleMain: 'Explorez le',
        titleHighlight: 'Monde',
        description: 'Découvrez les racines de chaque saveur à travers un atlas régional immersif. Des classiques français aux fermentations asiatiques.',
    },
    fix: {
        label: 'Mode Fix',
        titleMain: 'Récupération',
        titleHighlight: 'Professionnelle',
        description: 'Chaque chef rencontre une sauce qui tranche. Notre section Fix dédiée vous guide à travers les techniques de récupération.',
        steps: [
            {
                num: '01',
                title: 'Identifier le problème',
                description: 'Est-elle tranchée, trop liquide ou trop assaisonnée ? Le diagnostic est la première étape.',
            },
            {
                num: '02',
                title: 'Appliquer la solution',
                description: 'Ajustements de température ou équilibre des émulsifiants. Des techniques professionnelles à votre disposition.',
            },
            {
                num: '03',
                title: 'Finition finale',
                description: 'Ajustement de la consistance et assaisonnement final pour une restauration parfaite.',
            },
        ],
    },
    gallery: {
        title: 'Interface',
    },
};
