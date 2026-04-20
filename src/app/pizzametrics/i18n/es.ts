import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'La precisión que tu masa merece.',
    description:
        'Calcula ingredientes, temperaturas de agua y tiempos de fermentación con precisión científica. Diseñada para pizzaiolos que buscan resultados profesionales en cada horneado.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Calculadora de Pizza Napolitana:',
        titleHighlight: 'Precisión de Maestro',
        titleEnd: 'en tu Bolsillo.',
        subtitle:
            'Ajusta hidratación, levadura y tiempos de fermentación según la temperatura real de tu cocina. Compatible con Biga, Poolish y masa directa.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Descargar en',
        downloadLabelPlay: 'Disponible en',
        tagline: 'Diseñada para entusiastas de la técnica',
    },
    showCase: {
        feature1: {
            title: 'Ajuste por Clima',
            description: 'Calcula la levadura exacta según si hace frío o calor.',
        },
        feature2: {
            title: 'Gestión de Prefermentos',
            description: 'Controla Biga y Poolish sin cálculos manuales complejos.',
        },
        feature3: {
            title: 'Registro de Amasados',
            description: 'Guarda tus recetas y fotos para aprender de cada horneado.',
        },
    },
    empathy: {
        title: 'Sabemos lo que se siente...',
        quote1: '¿Masa sobrefermentada por el calor? Pizzametrics ajusta los tiempos por ti.',
        quote2:
            '¿Luchando con los porcentajes del panadero? Nosotros hacemos los números, tú haces el arte.',
        quote3:
            '¿Te quedaste sin harina? La sección "Pantry" te avisa antes de que empieces a amasar.',
    },
    pantry: {
        title: 'Tu Biblioteca de',
        titleHighlight: 'Harinas',
        description:
            'No todas las harinas absorben el agua igual. En tu Despensa puedes gestionar tus harinas por marca y fuerza (W). La app utiliza esta información técnica para ajustar los cálculos y garantizar un cornicione perfecto.',
        descriptionHighlight: 'Despensa',
        missionTitle: 'Misión Global',
        missionSubtitle: 'Una herramienta profesional para una comunidad global de pizzaiolos.',
    },
    gallery: {
        title: 'Interfaz',
        titleHighlight: 'Pro',
        imageAlt: 'Vista Real de la App',
    },
    shorts: {
        titleMain: 'La App en',
        titleHighlight: 'Movimiento',
        subtitle:
            'Echa un vistazo rápido a cómo Pizzametrics transforma tu cocina en un laboratorio de precisión.',
    },
    transparency: {
        quoteMain: 'Creada por un amante de la pizza,',
        quoteHighlight: 'para amantes de la pizza.',
        description:
            'Pizzametrics nace para eliminar las libretas manchadas de harina y los errores de cálculo. Solo datos precisos para tu próximo cornicione.',
    },
    footer: {
        titleMain: 'Únete a la',
        titleHighlight: 'Revolución Científica',
        privacyLabel: 'Política de Privacidad',
        termsLabel: 'Términos y Condiciones',
    },
};
