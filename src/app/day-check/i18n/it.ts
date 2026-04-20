import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Contatore di Giorni',
    subtitle: 'Il tempo, fatto arte.',
    description:
        'Gestisci il conto alla rovescia per i tuoi momenti più speciali con un design elegante e minimalista. Vacanze, anniversari o obiettivi: dai valore a ogni secondo.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Contatore di Giorni',
        titleStart: 'Ogni ',
        titleItalic: 'secondo',
        titleEnd: 'è una vittoria.',
        subtitle:
            'Visualizza i tuoi obiettivi e celebra i tuoi traguardi con lo strumento più elegante dello Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATO: URGENTE',
        ctaTitle: 'È tempo di usare',
        ctaHighlight: 'Day Check: Contatore di Giorni',
        ctaButton: 'Fallo ora',
        daysLabel: 'Giorni',
        hoursLabel: 'Ore',
        minsLabel: 'Min',
        segsLabel: 'Sec',
        sinceLabel: 'DAL',
        targetLabel: 'MANCANO',
        cards: [
            { label: 'Giorni senza fumo', type: 'since', emoji: '\u2728', tag: 'SALUTE' },
            { label: 'Viaggio in Giappone', type: 'target', emoji: '\uD83C\uDF38', tag: 'VIAGGI' },
            { label: 'Serie in palestra', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psicologia dell\'',
        titleHighlight: 'Abitudine.',
        description:
            'Day Check utilizza il rinforzo visivo para trasformare la disciplina in un gioco di superamento. Ogni secondo è una prova del tuo impegno.',
        items: [
            {
                title: 'Conto alla Rovescia e Progressivo',
                text: 'Traccia il tempo che manca (Count down) o il tempo passato (Count up) da qualsiasi data importante.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Widget Nativi',
                text: 'Mantieni i tuoi eventi sempre visibili sulla schermata home con widget eleganti e funzionali.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Design Glassmorphism',
                text: 'Interfaccia moderna con effetti vetro, sfocature e gradienti vibranti che incantano la vista.',
                icon: 'mdi:blur',
            },
            {
                title: 'Privacy Totale',
                text: 'I tuoi dati personali e gli eventi rimangono sul tuo dispositivo. La tua vita è privata.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'L\'App Reale',
    },
    footer: {
        badge: 'DISPONIBILE ORA',
        titleMain: 'Domina il tuo',
        titleHighlight: 'Tempo.',
        subtitle:
            'Inizia oggi stesso a visualizzare i tuoi obiettivi con Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
