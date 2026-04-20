import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'galleta-de-la-fortuna',
    title: 'Galleta de la Fortuna',
    subtitle: 'Tu destino en un solo toque.',
    description: 'Un solo toque al día. Haz que cuente. No coleccionas frases, coleccionas constancia.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'La mayoría no sabe esperar. Tú sí.',
        description: 'Un solo toque al día. Haz que cuente. No coleccionas frases, coleccionas constancia.',
        scanLabel: 'Escanear para descargar',
    },
    challenge: {
        title: 'El Desafío Diario.',
        crystalLabel: 'Cristal',
        standardLabel: 'Estándar',
        lunarLabel: 'Lunar',
        quote: 'Hoy el mundo digital ha liberado una nueva oportunidad.',
        quoteNote: 'Solo disponible en la app durante las próximas',
        quoteHighlight: '24 horas',
    },
    streak: {
        title: 'La Racha Sagrada.',
        description: 'No coleccionas frases, coleccionas constancia.',
        descriptionHighlight: 'Tu historia se escribe día a día.',
        countdownPrefix: 'La galleta de hoy acaba en:',
        tomorrowNote: 'Aunque tranquilidad, mañana habrá otra',
        altarLabel: 'Tu Altar',
        nextMilestoneLabel: 'Próximo Hito',
        todayLabel: 'HOY',
        dayPrefix: 'Día',
    },
    showcase: {
        titleStart: 'El',
        titleHighlight: 'Brillo',
        titleEnd: 'del Destino.',
        description: 'Papeles de Oro, Jade y Negro. No son simples mensajes; son los trofeos de tu constancia y tu intuición.',
    },
    events: {
        title: 'Eventos Temporales.',
        subtitle: 'El destino cambia con las estaciones. Nuevas galletas, nuevos mensajes, nueva suerte.',
        items: [
            {
                name: 'San Valentín',
                description: 'El amor está en el aire... y en tu suerte. Encuentra las galletas románticas.',
                date: '14 Feb',
            },
            {
                name: 'Año del Caballo',
                description: 'Celebra la fortuna con el dragón dorado. Galletas especiales para un año próspero.',
                date: '17 Feb',
            },
        ],
    },
    shorts: {
        title: 'Ya Disponible.',
        comingSoonCookies: 'Próximamente — Más Galletas',
        comingSoonEvents: 'Próximamente — Nuevos Eventos',
    },
    footer: {
        title: '¿Te sumas?',
        subtitle: 'Tu racha empieza con un solo clic.',
        downloadPrefix: 'Descargar en',
    },
};
