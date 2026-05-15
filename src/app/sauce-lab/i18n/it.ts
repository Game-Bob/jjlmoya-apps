import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Ricette di Salse Iconiche',
    description: 'Domina l\'arte del salsiere con oltre 100 ricette iconiche e un atlante culinario professionale.',
    slug: 'laboratorio-salse',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'L\'Arte del Salsiere',
        subtitle: '+100 salse iconiche. Un capolavoro culinario.',
        priceLabel: '100% Gratuito · Nessun Abbonamento',
        comingSoon: 'Prossimamente negli store',
    },
    philosophy: {
        label: 'Filosofia',
        title: 'Eredità Culinaria',
        description: 'SauceLab non è solo un ricettario. È un atlante del gusto curato, pensato per lo chef moderno che apprezza la precisione, la storia e la scienza del salsiere. Crediamo che la padronanza della salsa sia il fondamento dell\'eccellenza culinaria.',
    },
    benefits: {
        titleMain: 'Domina le',
        titleHighlight: 'Fondamenta',
        items: [
            {
                title: '+100 Ricette Iconiche',
                text: 'Dalle cinque Salse Madri ai derivati globali esotici. Ogni ricetta è testata per la precisione professionale.',
                icon: 'chef-hat',
            },
            {
                title: 'Chimica del Gusto',
                text: 'Comprendi il "perché" dietro ogni sapore. Ingredienti precisi e istruzioni professionali chiare.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Il tuo compagno di cucina funziona ovunque. Nessuna connessione necessaria per creare la salsa perfetta.',
                icon: 'wifi-off',
            },
            {
                title: 'Zero tracker',
                text: 'Niente pubblicità, niente abbonamenti, nessuna raccolta dati. Solo pura eccellenza culinaria.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'La Stirpe',
        titleMain: 'Gerarchia',
        titleHighlight: 'Sacra',
        description: 'Esplora l\'albero genealogico delle salse. Dalle Salse Madri fondamentali ai loro infiniti derivati.',
        items: [
            {
                name: 'Béchamel',
                base: 'Latte + Roux Bianco',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Fondo Bianco + Roux Biondo',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Fondo Scuro + Roux Scuro',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Tuorlo d\'Uovo + Emulsione di Burro',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomato',
                base: 'Pomodoro + Fondo Bianco/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'La Scienza',
        titleMain: 'Precisione',
        titleHighlight: 'Molecolare',
        description: 'Cucinare è fisica e chimica. Domina le forze tecniche che creano la consistenza e il profilo aromatico perfetti.',
        items: [
            {
                title: 'Emulsione',
                description: 'L\'arte di legare olio e acqua. Impara i segreti di stabilità della Olandese e della Maionese.',
            },
            {
                title: 'Riduzione',
                description: 'Concentrare il sapore attraverso l\'evaporazione. Ottieni la perfetta consistenza "nappé".',
            },
            {
                title: 'Addensamento',
                description: 'Dai Roux classici alle moderne sospensioni di amido e purè di verdure.',
            },
            {
                title: 'Bilanciamento',
                description: 'La scienza di regolare acidità, sale e grassi per colpire la nota gustativa perfetta.',
            },
        ],
    },
    atlas: {
        label: 'Cartografia Gastronomica',
        titleMain: 'Esplora il',
        titleHighlight: 'Mondo',
        description: 'Scopri le radici di ogni sapore attraverso un atlante regionale immersivo. Dai classici francesi alle fermentazioni asiatiche.',
    },
    fix: {
        label: 'Modo Fix',
        titleMain: 'Recupero',
        titleHighlight: 'Professionale',
        description: 'Ogni chef incontra una salsa che si separa. La nostra sezione Fix ti guida attraverso le tecniche di recupero.',
        steps: [
            {
                num: '01',
                title: 'Identifica l\'errore',
                description: 'È impazzita, troppo liquida o troppo condita? La diagnosi è il primo passo.',
            },
            {
                num: '02',
                title: 'Applica il rimedio',
                description: 'Regolazioni di temperatura o bilanciamento degli emulsionanti. Tecniche professionali a tua disposizione.',
            },
            {
                num: '03',
                title: 'Tocco finale',
                description: 'Regolazione della consistenza e condimento finale per un restauro perfetto.',
            },
        ],
    },
    gallery: {
        title: 'Interfaccia',
    },
};
