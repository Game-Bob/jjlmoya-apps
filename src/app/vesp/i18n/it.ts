import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Bilanciatore di Cocktail',
    subtitle: 'Mixologia: Bilanciamento & Ricette',
    description:
        'Calcolatore di bilanciamento, ABV, Brix e ricette classiche di mixologia professionale.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixologia: Bilanciamento & Ricette',
        philosophy:
            'Migliora la consistenza del tuo bar con VESP: lo strumento tecnico definitivo per bartender e appassionati di mixologia che cercano la perfezione scientifica in ogni bicchiere.',
        price: 'Gratis',
        priceLabel: 'Senza abbonamenti • Accesso Immediato',
    },
    techSpecs: {
        label: 'Mixologia di Precisione',
        conceptMain: 'TECNICA DI,',
        conceptHighlight: 'QUALITÀ.',
        description:
            'Calcolatore di bilanciamento, ABV, Brix e ricette classiche di mixologia professionale.',
        specsLabel: 'Specifiche Tecniche',
        features: [
            {
                title: 'Bilanciamento ABV/Brix',
                text: 'Controlla la densità e la gradazione alcolica.',
            },
            {
                title: 'Senza Registrazione',
                text: 'Privacy totale locale offline.',
            },
            {
                title: 'Modalità Bar',
                text: 'Lettura rapida sotto luci soffuse.',
            },
        ],
        tableRows: [
            { label: 'DENSITÀ', value: 'ANALITICA' },
            { label: 'GRADO (ABV)', value: 'CALIBRATO' },
            { label: 'ZUCCHERO (BRIX)', value: 'REAL-TIME' },
        ],
    },
    benefits: {
        titleMain: 'Motore di',
        titleHighlight: 'bilanciamento.',
        description:
            'Visualizza l\'equilibrio tra alcol, zucchero e acidità attraverso calcoli tecnici progettati per l\'industria.',
        items: [
            {
                title: 'Bilanciamento Scientifico',
                text: 'Calcoli esatti tra alcol, zucchero e acidità.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Calibrazione Diluizione',
                text: 'Regolazione tecnica: Shake, Stir o Diretto.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Biblioteca Classica',
                text: 'Oltre 70 classici con dati fisico-chimici.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Creatore',
                text: 'Crea e salva le tue firme.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Ecosistema VESP',
        subtitle: 'Mixologia & Standardizzazione',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Servizio',
        titleHighlight: 'PERFETTO.',
        cta: 'Disponibile ora',
    },
};
