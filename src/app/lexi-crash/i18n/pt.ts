import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Forme palavras, supere desafios e evite o colapso.',
    description: 'Teste sua agilidade mental no puzzle de palavras definitivo. Combine letras em alta velocidade e evite o colapso.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'A palavra do dia está disponível agora',
        subtitle: 'O puzzle de palavras definitivo. Um jogo rápido e infinito projetado para mentes ágeis.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Baixar agora em',
    },
    gameModes: {
        titleMain: 'EXPERIÊNCIA',
        titleHighlight: '10/10',
        subtitle: 'Não é apenas mais um jogo de palavras. Um desafio visual e mental para quem não se contenta com o básico.',
        crash: {
            title: 'Adrenalina Pura',
            description: 'Forme palavras sob pressão. As letras não esperam. Limpe o tabuleiro antes que o caos te supere.',
            alt: 'Modo Crash',
        },
        relax: {
            title: 'Maestria Mental',
            description: 'Leve o seu tempo. Sem pressão visual, apenas você e o tabuleiro. Encontre as combinações mais valiosas.',
            alt: 'Modo Relax',
        },
        daily: {
            title: 'Desafio Global',
            description: 'Uma palavra secreta por dia. Todos competem para ser o mais rápido. Você pode liderar o ranking?',
            alt: 'Desafio Diário',
        },
    },
    socialProof: {
        titleMain: 'JUNTE-SE AO',
        titleHighlight: 'MOVIMENTO',
        subtitle: 'Milhares de mentes já estão desafiando o colapso. Acompanhe seu progresso, quebre recordes e domine o léxico global.',
        challengesLabel: 'Desafios Superados',
        wordsLabel: 'Palavras',
        ratingLabel: 'Avaliação',
        feedUser1: '@Alex94',
        feedAction1: 'acabou de quebrar o recorde no Modo Crash',
        feedUser2: '@Marta_Lex',
        feedAction2: 'encontrou a palavra do dia',
        screenshotAlt: 'Captura de tela do LexiCrash',
    },
    roadmap: {
        titleMain: 'VOTE SUA',
        titleHighlight: 'PRIORIDADE',
        subtitle: 'Queremos ouvir você. Escolha qual seção devemos priorizar na próxima atualização.',
        items: [
            {
                title: 'Modos de jogo',
                description: 'Novas mecânicas e tabuleiros temáticos para expandir a experiência tátil.',
                tag: 'Imersão',
            },
            {
                title: 'Modo História',
                description: 'Uma jornada épica pelo léxico com desafios narrativos e desbloqueáveis.',
                tag: 'Narrativa',
            },
            {
                title: 'Rankings',
                description: 'Compita com o mundo inteiro e prove quem é o verdadeiro mestre das palavras.',
                tag: 'Social',
            },
        ],
        voteLabel: 'Clique para votar',
        votedLabel: 'Marcado como prioridade',
        feedbackTitle: 'Tem uma ideia?',
        feedbackSub: 'Escreva para nós e ajude-nos a melhorar o LexiCrash.',
    },
    finalCta: {
        titleMain: 'VOCÊ VAI EVITAR',
        titleHighlight: 'O COLAPSO?',
        subtitle: 'O desafio diário está ativo. Não deixe as letras vencerem hoje.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Baixar em',
        ratingText: '+5/5 avaliado pela comunidade',
    },
};
