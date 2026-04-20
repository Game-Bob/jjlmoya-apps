import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Forma palabras, supera retos y evita el colapso.',
    description: 'Pon a prueba tu agilidad mental en el puzzle de palabras definitivo. Combina letras a toda velocidad y evita el colapso.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Palabra del día disponible ahora',
        subtitle: 'El puzzle de palabras definitivo. Un juego rápido, infinito y diseñado para mentes ágiles.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Empieza ahora en',
    },
    gameModes: {
        titleMain: 'EXPERIENCIA',
        titleHighlight: '10/10',
        subtitle: 'No es solo otro juego de palabras. Es un desafío visual y mental diseñado para los que no se conforman con lo básico.',
        crash: {
            title: 'Adrenalina Pura',
            description: 'Forma palabras bajo presión. Las letras no esperan. Despeja el tablero antes de que el caos te supere.',
            alt: 'Modo Crash',
        },
        relax: {
            title: 'Maestría Mental',
            description: 'Tómate tu tiempo. Sin presión visual, solo tú y el tablero. Encuentra las combinaciones más valiosas.',
            alt: 'Modo Relax',
        },
        daily: {
            title: 'Reto Global',
            description: 'Una palabra secreta al día. Todo el mundo compite por ser el más rápido. ¿Podrás liderar el ranking?',
            alt: 'Reto Diario',
        },
    },
    socialProof: {
        titleMain: 'ÚNETE AL',
        titleHighlight: 'MOVIMIENTO',
        subtitle: 'Miles de mentes ya están desafiando al colapso. Visualiza tu progreso, rompe récords y domina el léxico global.',
        challengesLabel: 'Retos Superados',
        wordsLabel: 'Palabras',
        ratingLabel: 'Rating',
        feedUser1: '@Alex94',
        feedAction1: 'acaba de superar el récord en Modo Crash',
        feedUser2: '@Marta_Lex',
        feedAction2: 'ha encontrado la palabra del día',
        screenshotAlt: 'Captura de LexiCrash',
    },
    roadmap: {
        titleMain: 'VOTA TU',
        titleHighlight: 'PRIORIDAD',
        subtitle: 'Queremos escucharte. Elige qué sección deberíamos priorizar en la próxima actualización.',
        items: [
            {
                title: 'Modos de juego',
                description: 'Nuevas mecánicas y tableros temáticos para expandir la experiencia táctil.',
                tag: 'Inmersión',
            },
            {
                title: 'Modo Historia',
                description: 'Un viaje épico a través del léxico con desafíos narrativos y desbloqueables.',
                tag: 'Narrativa',
            },
            {
                title: 'Rankings',
                description: 'Compite con el mundo entero y demuestra quién es el verdadero maestro de las palabras.',
                tag: 'Social',
            },
        ],
        voteLabel: 'Haz clic para votar',
        votedLabel: 'Marcada como prioridad',
        feedbackTitle: '¿Tienes una idea?',
        feedbackSub: 'Escríbenos y ayúdanos a mejorar LexiCrash.',
    },
    finalCta: {
        titleMain: '¿EVITARÁS EL',
        titleHighlight: 'COLAPSO?',
        subtitle: 'El reto diario está activo. No dejes que las letras ganen la partida hoy.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Descargar en',
        ratingText: '+5/5 valorado por la comunidad',
    },
};
