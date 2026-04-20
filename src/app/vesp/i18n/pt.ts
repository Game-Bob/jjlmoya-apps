import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Equilibrador de Coquetéis',
    subtitle: 'Mixologia: Equilíbrio & Receitas',
    description:
        'Calculadora de equilíbrio, ABV, Brix e receitas clássicas de mixologia profissional.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixologia: Equilíbrio & Receitas',
        philosophy:
            'Melhore a consistência do seu bar com VESP: a ferramenta técnica definitiva para bartenders e aficionados da mixologia que procuram a perfeição científica em cada copo.',
        price: 'Grátis',
        priceLabel: 'Sem assinaturas • Acesso Imediato',
    },
    techSpecs: {
        label: 'Mixologia de Precisão',
        conceptMain: 'TÉCNICA DE,',
        conceptHighlight: 'QUALIDADE.',
        description:
            'Calculadora de equilíbrio, ABV, Brix e receitas clássicas de mixologia profissional.',
        specsLabel: 'Especificações Técnicas',
        features: [
            {
                title: 'Equilíbrio ABV/Brix',
                text: 'Controle a densidade e o teor alcoólico.',
            },
            {
                title: 'Sem Registo',
                text: 'Privacidade total local offline.',
            },
            {
                title: 'Modo Bar',
                text: 'Leitura rápida sob luzes suaves.',
            },
        ],
        tableRows: [
            { label: 'DENSIDADE', value: 'ANALÍTICA' },
            { label: 'GRAU (ABV)', value: 'CALIBRADO' },
            { label: 'AÇÚCAR (BRIX)', value: 'REAL-TIME' },
        ],
    },
    benefits: {
        titleMain: 'Motor de',
        titleHighlight: 'equilíbrio.',
        description:
            'Visualize o equilíbrio entre álcool, açúcar e acidez através de cálculos técnicos concebidos para a indústria.',
        items: [
            {
                title: 'Equilíbrio Científico',
                text: 'Cálculos exatos entre álcool, açúcar e acidez.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Calibração de Diluição',
                text: 'Ajuste por técnica: Shake, Stir ou Direto.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Biblioteca Clássica',
                text: 'MAIS DE 70 clássicos com dados físico-químicos.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Criador',
                text: 'Desenhe e guarde as suas próprias assinaturas.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Ecossistema VESP',
        subtitle: 'Mixologia & Padronização',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Serviço',
        titleHighlight: 'PERFEITO.',
        cta: 'Brevemente nas Stores',
    },
};
