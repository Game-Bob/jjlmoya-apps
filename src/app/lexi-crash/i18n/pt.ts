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
        artNote: 'Seu próximo desafio aconchegante está esperando',
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
                title: 'Classificação',
                description: 'Compita com o mundo inteiro e prove quem é o verdadeiro mestre das palavras.',
                tag: 'Comunidade',
            },
        ],
        voteLabel: 'Clique para votar',
        votedLabel: 'Marcado como prioridade',
        feedbackTitle: 'Tem uma ideia?',
        feedbackSub: 'Escreva para nós e ajude-nos a melhorar o LexiCrash.',
    },
    finalCta: {
        titleMain: 'A SUA PRÓXIMA',
        titleHighlight: 'PALAVRA ESPERA POR VOCÊ',
        subtitle: 'Abra o LexiCrash, encontre seu ritmo e aproveite algumas palavras sem pressa.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Baixar em',
        downloadAction: 'Baixar',
        ratingText: 'Uma pausa gostosa de palavras, querida pela comunidade',
    },
    cozyFeatures: {
        eyebrow: 'O RITMO ACONCHEGANTE',
        titleMain: 'JOGUE UM POUCO.',
        titleHighlight: 'VOLTE FELIZ.',
        subtitle: 'Um ritmo de palavras calmo e colorido para pausas rápidas, foco tranquilo e aqueles momentos de “só mais uma palavra”.',
        cards: [
            { title: 'Encontre seu ritmo', description: 'Partidas rápidas, tabuleiros claros e combinações gostosas desde a primeira palavra.', alt: 'Cena do Modo Crash' },
            { title: 'Mantenha a sequência brilhando', description: 'Cada palavra traz uma faísca. Faça combos, limpe o tabuleiro e aproveite seu progresso.', alt: 'Cena do Modo Crash' },
            { title: 'Construa sua sequência', description: 'Volte para a Palavra do Dia, comemore suas melhores descobertas e veja seu mundo crescer.', alt: 'Progresso e estatísticas do LexiCrash' },
        ],
    },
    storyShowcase: {
        eyebrow: 'UM PEQUENO MUNDO DE PALAVRAS',
        titleMain: 'SEU PEQUENO',
        titleHighlight: 'UNIVERSO DE PALAVRAS.',
        subtitle: 'Nuvens suaves, peças divertidas e pequenas comemorações transformam cada rodada em um lugar para voltar.',
        ariaLabel: 'Recursos do LexiCrash',
        bannerAlt: 'LexiCrash em um universo de palavras colorido e aconchegante',
        pills: ['Rituais diários', 'Desafios aconchegantes', 'Melhores marcas'],
    },
};
