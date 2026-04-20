import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'biscoito-da-sorte',
    title: 'Biscoito da Sorte',
    subtitle: 'O seu destino num só toque.',
    description: 'Um só toque por dia. Faça-o valer a pena. Não coleciona frases, coleciona constância.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'A maioria não sabe esperar. Tu sim.',
        description: 'Um só toque por dia. Faça-o valer a pena. Não coleciona frases, coleciona constância.',
        scanLabel: 'Escanear para baixar',
    },
    challenge: {
        title: 'O Desafio Diário.',
        crystalLabel: 'Cristal',
        standardLabel: 'Padrão',
        lunarLabel: 'Lunar',
        quote: 'Hoje o mundo digital libertou uma nova oportunidade.',
        quoteNote: 'Apenas disponível na app durante as próximas',
        quoteHighlight: '24 horas',
    },
    streak: {
        title: 'A Sequência Sagrada.',
        description: 'Não colecionas frases, colecionas constância.',
        descriptionHighlight: 'A tua história escreve-se dia após dia.',
        countdownPrefix: 'O biscoito de hoje termina em:',
        tomorrowNote: 'Mas não te preocupes, amanhã haverá outro',
        altarLabel: 'O Teu Altar',
        nextMilestoneLabel: 'Próximo Marco',
        todayLabel: 'HOJE',
        dayPrefix: 'Dia',
    },
    showcase: {
        titleStart: 'O',
        titleHighlight: 'Brilho',
        titleEnd: 'do Destino.',
        description: 'Papéis de Ouro, Jade e Negro. Não são simples mensagens; são os troféus da tua constância e da tua intuição.',
    },
    events: {
        title: 'Eventos Temporários.',
        subtitle: 'O destino muda com as estações. Novos biscoitos, novas mensagens, nova sorte.',
        items: [
            {
                name: 'Dia dos Namorados',
                description: 'O amor está no ar... e na tua sorte. Encontra os biscoitos românticos.',
                date: '14 Fev',
            },
            {
                name: 'Ano do Cavalo',
                description: 'Celebra a fortuna com o dragão dourado. Biscoitos especiais para um ano próspero.',
                date: '17 Fev',
            },
        ],
    },
    shorts: {
        title: 'Já Disponível.',
        comingSoonCookies: 'Brevemente — Mais Biscoitos',
        comingSoonEvents: 'Brevemente — Novos Eventos',
    },
    footer: {
        title: 'Juntas-te a nós?',
        subtitle: 'A tua sequência começa com um só clique.',
        downloadPrefix: 'Baixar em',
    },
};
