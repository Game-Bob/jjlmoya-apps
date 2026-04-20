import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Captura de Tareas',
    subtitle: 'Escribe. Env\u00EDa. Olvida. Paz.',
    description:
        'Captura bugs, ideas o tareas en 3 segundos. Env\u00EDa notas a GitHub, Make o Linear por chat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Escribe. Env\u00EDa. Olvida. Paz.',
        priceLabel: 'Pago \u00FAnico profesional',
    },
    concept: {
        label: 'La Filosof\u00EDa',
        main: 'CERO FRICCI\u00D3N,',
        highlighted: 'VELOCIDAD ABSOLUTA.',
        philosophy:
            'Fast Task no es un gestor de proyectos pesado. Es tu canal de entrada ultra-r\u00E1pido para que nada interrumpa tu foco.',
        highlights: [
            { label: 'Velocidad', value: '<3s' },
            { label: 'Integraciones', value: 'Nativas' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimiza tu flujo de',
        titleHighlight: 'trabajo diario.',
        items: [
            {
                title: 'Captura en 3 segundos',
                text: 'Funciona como un chat: llegas, escribes y env\u00EDas. Sin formularios, sin campos obligatorios.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Integraciones Pro',
                text: 'Conecta tus proyectos directamente con GitHub, Linear o Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Privacidad Radical',
                text: 'Tus tokens y tus tareas viven en tu dispositivo. Sin servidores intermedios, sin rastreo.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Modo Offline-First',
                text: 'Env\u00EDa tus tareas incluso sin cobertura. La app sincroniza en segundo plano cuando vuelvas online.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Del pensamiento a la acci\u00F3n en',
        steps: [
            {
                label: 'Escribes',
                desc: 'Abre la app y captura tu idea al vuelo.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Contexto',
                desc: 'Se formatea y enriquece autom\u00E1ticamente.',
                icon: 'mdi:brain',
            },
            {
                label: 'Enviado',
                desc: 'Directo a tu integraci\u00F3n, listo para producci\u00F3n.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Ecosistema Abierto',
        titleMain: 'Integraciones',
        titleHighlight: 'Nativas',
        description:
            'Fast Task se conecta directamente con las herramientas que ya usas. Sin intermediarios, sin latencia.',
        ctaTitle: '\u00BFNecesitas una integraci\u00F3n espec\u00EDfica?',
        ctaLinkText: 'Contactar soporte',
        comingSoon: 'Pr\u00F3ximamente',
    },
    earlyAdopter: {
        badge: 'Early Adopter Program',
        titleMain: 'Te la',
        titleHighlight: 'regalamos.',
        description:
            'Buscamos feedback real de profesionales exigentes. Si te comprometes a usar la app y darnos tu opini\u00F3n sincera, la licencia es tuya. De por vida.',
        countLabel: 'Licencias Restantes',
        countNote: 'Solo para los primeros 100 que nos escriban demostrando inter\u00E9s real.',
        cta: 'QUIERO MI LICENCIA',
    },
    enterprise: {
        label: 'Soluciones Enterprise',
        titleMain: '\u00BFQuieres una app para tu',
        titleHighlight: 'empresa?',
        description:
            'Transformamos la productividad de equipos de alto rendimiento. Herramientas nativas con el mismo ADN de velocidad y eficiencia de Fast Task, adaptadas a tu organizaci\u00F3n.',
        featureTitle: 'Ecosistema a medida',
        featureText:
            'Integraciones con Salesforce, SAP, Jira Enterprise y bases de datos propietarias.',
        cta: '\u00BFHablamos?',
    },
    gallery: {
        title: 'Preview',
    },
    footer: {
        line1: 'Escribe.',
        line2: 'Olvida.',
        line3: 'Paz.',
        subtitle: 'Elimina la fricci\u00F3n de tu d\u00EDa',
    },
};
