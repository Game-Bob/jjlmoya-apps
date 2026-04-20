import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Contador de Dias',
    subtitle: 'O tempo, tornado arte.',
    description:
        'Gira a contagem decrescente para os seus momentos mais especiais com um design elegante e minimalista. Férias, aniversários ou objetivos: faça cada segundo contar.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Contador de Dias',
        titleStart: 'Cada ',
        titleItalic: 'segundo',
        titleEnd: 'é uma vitória.',
        subtitle:
            'Visualize as suas metas e celebre os seus recordes com a ferramenta mais elegante da Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'ESTADO: URGENTE',
        ctaTitle: 'Tempo para usares o',
        ctaHighlight: 'Day Check: Contador de Dias',
        ctaButton: 'Faz agora',
        daysLabel: 'Dias',
        hoursLabel: 'Horas',
        minsLabel: 'Mins',
        segsLabel: 'Segs',
        sinceLabel: 'DESDE',
        targetLabel: 'FALTAM',
        cards: [
            { label: 'Dias sem fumar', type: 'since', emoji: '\u2728', tag: 'SAÚDE' },
            { label: 'Viagem ao Japão', type: 'target', emoji: '\uD83C\uDF38', tag: 'VIAGENS' },
            { label: 'Série no Ginásio', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psicologia do ',
        titleHighlight: 'Hábito.',
        description:
            'Day Check utiliza o reforço visual para transformar a disciplina num jogo de superação. Cada segundo é uma prova do teu compromisso.',
        items: [
            {
                title: 'Contagem Decrescente e Progressiva',
                text: 'Acompanha o tempo que falta (Count down) ou o tempo que passou (Count up) desde qualquer data importante.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Widgets Nativos',
                text: 'Mantém os teus eventos sempre visíveis no ecrã principal com widgets elegantes e funcionais.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Design Glassmorphism',
                text: 'Interface moderna com efeitos de vidro, desfoques e gradientes vibrantes que encantam a vista.',
                icon: 'mdi:blur',
            },
            {
                title: 'Privacidade Total',
                text: 'Os teus dados pessoais e eventos ficam no teu dispositivo. A tua vida é privada.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'A App Real',
    },
    footer: {
        badge: 'DISPONÍVEL AGORA',
        titleMain: 'Domina o teu',
        titleHighlight: 'Tempo.',
        subtitle:
            'Começa hoje mesmo a visualizar as tuas metas com o Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
