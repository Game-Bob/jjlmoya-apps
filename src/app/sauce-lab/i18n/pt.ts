import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Receitas de Molhos Icônicos',
    description: 'Domine a arte do salsiere com mais de 100 receitas icónicas e um atlas culinário profissional.',
    slug: 'laboratorio-molhos',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'A Arte do Salsiere',
        subtitle: '+100 molhos icónicos. Uma obra-prima culinária.',
        priceLabel: '100% Gratuito · Sem Subscrições',
        comingSoon: 'Brevemente nas lojas',
    },
    philosophy: {
        label: 'Filosofia',
        title: 'Herança Culinária',
        description: 'SauceLab não é apenas um livro de receitas. É um atlas de sabor curado, concebido para o chef moderno que valoriza a precisão, a história e a ciência do salsiere. Acreditamos que o domínio do molho é a base da excellência culinária.',
    },
    benefits: {
        titleMain: 'Domine os',
        titleHighlight: 'Fundamentos',
        items: [
            {
                title: '+100 Receitas Icónicas',
                text: 'Dos cinco Molhos Mãe aos derivados globais exóticos. Cada receita é testada para precisão profissional.',
                icon: 'chef-hat',
            },
            {
                title: 'Química do Sabor',
                text: 'Entenda o "porquê" por trás do sabor. Ingredientes precisos e instruções profissionais claras.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'O seu companheiro de cozinha funciona em qualquer lugar. Sem necessidade de internet para criar o molho perfeito.',
                icon: 'wifi-off',
            },
            {
                title: 'Zero rastreadores',
                text: 'Sem anúncios, sem subscrições, sem recolha de dados. Apenas pura excelência culinária.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'A Linhagem',
        titleMain: 'Hierarquia',
        titleHighlight: 'Sagrada',
        description: 'Explore a árvore genealógica dos molhos. Dos Molhos Mãe fundamentais aos seus infinitos derivados.',
        items: [
            {
                name: 'Béchamel',
                base: 'Leite + Roux Branco',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Caldo Branco + Roux Loiro',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Caldo Escuro + Roux Escuro',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Gema de Ovo + Emulsão de Manteiga',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomate',
                base: 'Tomate + Caldo Branco/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'A Ciência',
        titleMain: 'Precisão',
        titleHighlight: 'Molecular',
        description: 'Cozinhar é física e química. Domine as forças técnicas que criam a textura e o perfil de sabor perfeitos.',
        items: [
            {
                title: 'Emulsificação',
                description: 'A arte de ligar óleo e água. Aprenda os segredos de estabilidade do Holandês e da Maionese.',
            },
            {
                title: 'Redução',
                description: 'Concentração de sabor através da evaporação. Alcance a consistência "nappé" perfeita.',
            },
            {
                title: 'Espessamento',
                description: 'De Rouxs clássicos a suspensões de amido modernas e purés de vegetais.',
            },
            {
                title: 'Equilíbrio',
                description: 'A ciência de ajustar a acidez, o sal e a gordura para atingir a nota gustativa perfeita.',
            },
        ],
    },
    atlas: {
        label: 'Cartografia Gastronómica',
        titleMain: 'Explore o',
        titleHighlight: 'Mundo',
        description: 'Descubra as raízes de cada sabor através de um atlas regional imersivo. Dos clássicos franceses às fermentações asiáticas.',
    },
    fix: {
        label: 'Modo Fix',
        titleMain: 'Recuperação',
        titleHighlight: 'Profissional',
        description: 'Todos os chefs encontram um molho que desanda. A nossa secção Fix dedicada guia-o através de técnicas de recuperação.',
        steps: [
            {
                num: '01',
                title: 'Identifique a falha',
                description: 'Está talhado, demasiado líquido ou demasiado temperado? O diagnóstico é o primeiro passo.',
            },
            {
                num: '02',
                title: 'Aplique a correção',
                description: 'Ajustes de temperatura ou equilíbrio de emulsionantes. Técnicas profissionais ao seu dispor.',
            },
            {
                num: '03',
                title: 'Polimento final',
                description: 'Ajuste de consistência e tempero final para uma restauração perfeita.',
            },
        ],
    },
    gallery: {
        title: 'Interface',
    },
};
