import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Equilibrador de Cócteles',
    subtitle: 'Mixología: Balance y Recetas',
    description:
        'Calculadora de balance, ABV, Brix y recetas clásicas de coctelería profesional.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixología: Balance y Recetas',
        philosophy:
            'Eleva la consistencia de tu barra con VESP: la herramienta técnica definitiva para bartenders y aficionados a la mixología que buscan la perfección científica en cada copa.',
        price: 'Gratis',
        priceLabel: 'Sin suscripciones • Acceso Inmediato',
    },
    techSpecs: {
        label: 'Mixología de Precisión',
        conceptMain: 'TÉCNICA DE,',
        conceptHighlight: 'CALIDAD.',
        description:
            'Calculadora de balance, ABV, Brix y recetas clásicas de coctelería profesional.',
        specsLabel: 'Especificaciones Técnicas',
        features: [
            {
                title: 'Balance ABV/Brix',
                text: 'Controla la densidad y el grado alcohólico.',
            },
            {
                title: 'Sin Registros',
                text: 'Privacidad total local sin conexión.',
            },
            {
                title: 'Modo Barra',
                text: 'Lectura rápida bajo luces tenues.',
            },
        ],
        tableRows: [
            { label: 'DENSIDAD', value: 'ANALÍTICA' },
            { label: 'GRADO (ABV)', value: 'CALIBRADO' },
            { label: 'AZÚCAR (BRIX)', value: 'REAL-TIME' },
        ],
    },
    benefits: {
        titleMain: 'Motor de',
        titleHighlight: 'equilibrio.',
        description:
            'Visualiza el balance entre alcohol, azúcar y acidez mediante cálculos técnicos diseñados para la industria.',
        items: [
            {
                title: 'Equilibrio Científico',
                text: 'Cálculos exactos entre alcohol, azúcar y acidez.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Calibración de Dilución',
                text: 'Ajuste por técnica: Shake, Stir o Directo.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Biblioteca Real',
                text: '70+ clásicos con datos fisicoquímicos.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Creador',
                text: 'Diseña y guarda tus propias firmas.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Ecosistema VESP',
        subtitle: 'Mixología & Estandarización',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Servicio',
        titleHighlight: 'PERFECTO.',
        cta: 'Disponible ahora',
    },
};
