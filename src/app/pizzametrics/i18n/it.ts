import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'La precisione che il tuo impasto merita.',
    description:
        'Calcola ingredienti, temperature dell\'acqua e tempi di fermentazione con precisione scientifica. Progettata per pizzaioli che cercano risultati professionali in ogni cottura.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Calcolatore per Pizza Napoletana:',
        titleHighlight: 'Precisione da Maestro',
        titleEnd: 'in Tasca.',
        subtitle:
            'Regola idratazione, lievito e tempi di fermentazione in base alla temperatura reale della tua cucina. Compatibile con Biga, Poolish e impasto diretto.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Scarica su',
        downloadLabelPlay: 'Disponibile su',
        scanLabel: 'Scansiona per installare ora',
        tagline: 'Progettata per gli appassionati di tecnica',
    },
    showCase: {
        feature1: {
            title: 'Regolazione Climatica',
            description: 'Calcola l\'esatta quantità di lievito in base al caldo o al freddo.',
        },
        feature2: {
            title: 'Gestione Prefermenti',
            description: 'Controlla Biga e Poolish senza calcoli manuali complessi.',
        },
        feature3: {
            title: 'Registro degli Impasti',
            description: 'Salva le tue ricette e foto per imparare da ogni cottura.',
        },
    },
    empathy: {
        title: 'Sappiamo come ci si sente...',
        quote1: 'Impasto sovra-fermentato per il caldo? Pizzametrics regola i tempi per te.',
        quote2:
            'Difficoltà con le percentuali del fornaio? Noi facciamo i calcoli, tu fai l\'arte.',
        quote3:
            'Finita la farina? La sezione "Dispensa" ti avvisa prima di iniziare a impastare.',
    },
    pantry: {
        title: 'La tua Biblioteca delle',
        titleHighlight: 'Farine',
        description:
            'Non tutte le farine assorbono l\'acqua allo stesso modo. Nella tua Dispensa puoi gestire le tue farine per marca e forza (W). L\'app utilizza queste informazioni tecniche per regolare i calcoli e garantire un cornicione perfetto.',
        descriptionHighlight: 'Dispensa',
        missionTitle: 'Missione Globale',
        missionSubtitle: 'Uno strumento professionale per una comunità globale di pizzaioli.',
    },
    gallery: {
        title: 'Interfaccia',
        titleHighlight: 'Pro',
        imageAlt: 'Vista Reale dell\'App',
    },
    shorts: {
        titleMain: 'L\'App in',
        titleHighlight: 'Movimento',
        subtitle:
            'Dai un\'occhiata rapida a come Pizzametrics trasforma la tua cucina in un laboratorio di precisione.',
    },
    transparency: {
        quoteMain: 'Creata da un amante della pizza,',
        quoteHighlight: 'per gli amanti della pizza.',
        description:
            'Pizzametrics nasce per eliminare taccuini macchiati di farina ed errori di calcolo. Solo dati precisi per il tuo prossimo cornicione.',
    },
    footer: {
        titleMain: 'Unisciti alla',
        titleHighlight: 'Rivoluzione Scientifica',
        privacyLabel: 'Informativa sulla Privacy',
        termsLabel: 'Termini e Condizioni',
        scanLabel: 'Scansiona per scaricare',
    },
};
