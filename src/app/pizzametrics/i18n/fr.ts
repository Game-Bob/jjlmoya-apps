import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'La précision que votre pâte mérite.',
    description:
        'Calculez les ingrédients, les températures de l\'eau et les temps de fermentation avec une précision scientifique. Conçu pour les pizzaiolos à la recherche de résultats professionnels à chaque cuisson.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Calculateur de Pizza Napolitaine :',
        titleHighlight: 'Précision de Maître',
        titleEnd: 'dans votre Poche.',
        subtitle:
            'Ajustez l\'hydratation, la levure et les temps de fermentation en fonction de la température réelle de votre cuisine. Compatible avec Biga, Poolish et pâte directe.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Télécharger dans',
        downloadLabelPlay: 'Disponible sur',
        scanLabel: 'Scannez pour installer maintenant',
        tagline: 'Conçu pour les passionnés de technique',
    },
    showCase: {
        feature1: {
            title: 'Ajustement Climatique',
            description: 'Calculez la quantité exacte de levure selon qu\'il fasse froid ou chaud.',
        },
        feature2: {
            title: 'Gestion des Pré-ferments',
            description: 'Contrôlez Biga et Poolish sans calculs manuels complexes.',
        },
        feature3: {
            title: 'Journal de Pétrissage',
            description: 'Enregistrez vos recettes et photos pour apprendre de chaque fournée.',
        },
    },
    empathy: {
        title: 'Nous savons ce que ça fait...',
        quote1: 'Pâte trop fermentée à cause de la chaleur ? Pizzametrics ajuste les temps pour vous.',
        quote2:
            'En difficulté avec les pourcentages du boulanger ? Nous faisons les calculs, vous faites l\'art.',
        quote3:
            'Plus de farine ? La section "Garde-manger" vous alerte avant de commencer à pétrir.',
    },
    pantry: {
        title: 'Votre Bibliothèque de',
        titleHighlight: 'Farines',
        description:
            'Toutes les farines n\'absorbent pas l\'eau de la même manière. Dans votre garde-manger, vous pouvez gérer vos farines par marque et par force (W). L\'application utilise ces données techniques pour ajuster les calculs et garantir une cornicione parfaite.',
        descriptionHighlight: 'Garde-manger',
        missionTitle: 'Mission Globale',
        missionSubtitle: 'Un outil professionnel pour une communauté mondiale de pizzaiolos.',
    },
    gallery: {
        title: 'Interface',
        titleHighlight: 'Pro',
        imageAlt: 'Vue Réelle de l\'App',
    },
    shorts: {
        titleMain: 'L\'App en',
        titleHighlight: 'Mouvement',
        subtitle:
            'Jetez un coup d\'œil rapide sur la façon dont Pizzametrics transforme votre cuisine en un laboratoire de précision.',
    },
    transparency: {
        quoteMain: 'Créé par un amoureux de la pizza,',
        quoteHighlight: 'pour les amoureux de la pizza.',
        description:
            'Pizzametrics est né pour éliminer les carnets tachés de farine et les erreurs de calcul. Juste des données précises pour votre prochaine cornicione.',
    },
    footer: {
        titleMain: 'Rejoignez la',
        titleHighlight: 'Révolution Scientifique',
        privacyLabel: 'Politique de Confidentialité',
        termsLabel: 'Conditions Générales',
        scanLabel: 'Scannez pour télécharger',
    },
};
