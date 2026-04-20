import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Contador de Días',
    subtitle: 'El tiempo, hecho arte.',
    description:
        'Gestiona la cuenta atrás para tus momentos más especiales con un diseño elegante y minimalista. Vacaciones, aniversarios o metas: haz que cada segundo cuente.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Contador de Días',
        titleStart: 'Cada ',
        titleItalic: 'segundo',
        titleEnd: 'es una victoria.',
        subtitle:
            'Visualiza tus metas y celebra tus rachas con la herramienta más elegante de la Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'ESTADO: URGENTE',
        ctaTitle: 'Tiempo para que uses',
        ctaHighlight: 'Day Check: Contador de Días',
        ctaButton: 'Hazlo ahora',
        daysLabel: 'Días',
        hoursLabel: 'Horas',
        minsLabel: 'Mins',
        segsLabel: 'Segs',
        sinceLabel: 'DESDE EL',
        targetLabel: 'FALTAN',
        cards: [
            { label: 'Días sin fumar', type: 'since', emoji: '\u2728', tag: 'SALUD' },
            { label: 'Viaje a Japón', type: 'target', emoji: '\uD83C\uDF38', tag: 'VIAJES' },
            { label: 'Racha en el Gym', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psicología del ',
        titleHighlight: 'Hábito.',
        description:
            'Day Check: Contador de Días utiliza el refuerzo visual para transformar la disciplina en un juego de superación. Cada segundo es una prueba de tu compromiso.',
        items: [
            {
                title: 'Cuenta Atrás y Progresiva',
                text: 'Rastrea el tiempo que falta (Count down) o el tiempo que ha pasado (Count up) desde cualquier fecha importante.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Widgets Nativos',
                text: 'Mantén tus eventos siempre visibles en tu pantalla de inicio con widgets elegantes y funcionales.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Diseño Glassmorphism',
                text: 'Interfaz moderna con efectos de vidrio, desenfoques y degradados vibrantes que encantan a la vista.',
                icon: 'mdi:blur',
            },
            {
                title: 'Privacidad Total',
                text: 'Tus datos personales y eventos se quedan en tu dispositivo. Tu vida es privada.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'La App Real',
    },
    footer: {
        badge: 'DISPONIBLE AHORA',
        titleMain: 'Domina tu',
        titleHighlight: 'Tiempo.',
        subtitle:
            'Empieza hoy mismo a visualizar tus metas con Day Check: Contador de Días.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
