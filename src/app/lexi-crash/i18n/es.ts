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
        artNote: 'Tu próximo reto acogedor te está esperando',
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
            kicker: 'Rápido y brillante',
        },
        relax: {
            title: 'Maestría Mental',
            description: 'Tómate tu tiempo. Sin presión visual, solo tú y el tablero. Encuentra las combinaciones más valiosas.',
            alt: 'Modo Relax',
            kicker: 'Suave y sin prisa',
        },
        daily: {
            title: 'Reto Global',
            description: 'Una palabra secreta al día. Todo el mundo compite por ser el más rápido. ¿Podrás liderar el ranking?',
            alt: 'Reto Diario',
            kicker: 'Un reto nuevo cada día',
        },
    },
    socialProof: {
        titleMain: 'ÚNETE AL',
        titleHighlight: 'MOVIMIENTO',
        subtitle: 'Miles de mentes ya están desafiando al colapso. Visualiza tu progreso, rompe récords y domina el léxico global.',
        challengesLabel: 'Retos Superados',
        wordsLabel: 'Palabras',
        ratingLabel: 'Valoración',
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
                title: 'Clasificación',
                description: 'Compite con el mundo entero y demuestra quién es el verdadero maestro de las palabras.',
                tag: 'Comunidad',
            },
        ],
        voteLabel: 'Haz clic para votar',
        votedLabel: 'Marcada como prioridad',
        feedbackTitle: '¿Tienes una idea?',
        feedbackSub: 'Escríbenos y ayúdanos a mejorar LexiCrash.',
    },
    finalCta: {
        titleMain: 'HAZ TUYO',
        titleHighlight: 'EL PRÓXIMO RATO',
        subtitle: 'Abre LexiCrash, encuentra tu ritmo y disfruta de unas palabras sin prisa.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Descargar en',
        downloadAction: 'Descargar',
        ratingText: 'Un ratito acogedor de palabras, querido por la comunidad',
    },
    cozyFeatures: {
        eyebrow: 'EL RITMO ACOGEDOR',
        titleMain: 'JUEGA UN POCO.',
        titleHighlight: 'VUELVE CON UNA SONRISA.',
        subtitle: 'Un ritmo de palabras tranquilo y colorido para desconectar, concentrarte y pensar: una palabra más.',
        cards: [
            { title: 'Encuentra tu ritmo', description: 'Partidas cortas, tableros claros y combinaciones satisfactorias desde la primera palabra.', alt: 'Escena del Modo Crash' },
            { title: 'Mantén la cadena encendida', description: 'Cada palabra añade una chispa. Encadena jugadas, despeja el tablero y disfruta del progreso.', alt: 'Escena del Modo Crash' },
            { title: 'Construye tu racha', description: 'Vuelve por la palabra diaria, celebra tus mejores hallazgos y haz crecer tu universo de palabras.', alt: 'Progreso y estadísticas de LexiCrash' },
        ],
    },
    storyShowcase: {
        eyebrow: 'UN PEQUEÑO MUNDO DE PALABRAS',
        titleMain: 'TU PEQUEÑO',
        titleHighlight: 'UNIVERSO DE PALABRAS.',
        subtitle: 'Nubes suaves, fichas juguetonas y pequeñas celebraciones convierten cada partida en un lugar al que querrás volver.',
        ariaLabel: 'Funciones de LexiCrash',
        bannerAlt: 'LexiCrash en un universo colorido y acogedor de palabras',
        pills: ['Rituales diarios', 'Retos acogedores', 'Mejores marcas'],
    },
};
