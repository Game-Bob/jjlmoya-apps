import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Captura de Tarefas',
    subtitle: 'Escreve. Envia. Esquece. Paz.',
    description:
        'Captura bugs, ideias ou tarefas em 3 segundos. Envia notas para GitHub, Make ou Linear por chat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Escreve. Envia. Esquece. Paz.',
        price: '4,95€',
        priceLabel: 'Pagamento único profissional',
    },
    concept: {
        label: 'A Filosofia',
        main: 'ZERO FRICÇÃO,',
        highlighted: 'VELOCIDADE ABSOLUTA.',
        philosophy:
            'A Fast Task não é um gestor de projetos pesado. É o seu canal de entrada ultra-rápido para que nada interrompa o seu foco.',
        highlights: [
            { label: 'Velocidade', value: '<3s' },
            { label: 'Integrações', value: 'Nativas' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Otimize o seu fluxo de',
        titleHighlight: 'trabalho diário.',
        items: [
            {
                title: 'Captura em 3 segundos',
                text: 'Funciona como um chat: chega, escreve e envia. Sem formulários, sem campos obrigatórios.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Integrações Pro',
                text: 'Conecte os seus projetos diretamente com GitHub, Linear ou Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Privacidade Radical',
                text: 'Os seus tokens e tarefas vivem no seu dispositivo. Sem servidores intermédios, sem rastreio.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Modo Offline-First',
                text: 'Envie as suas tarefas mesmo sem rede. A app sincroniza em segundo plano quando voltar a estar online.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Do pensamento à ação em',
        steps: [
            {
                label: 'Escreve',
                desc: 'Abra a app e capture a sua ideia no momento.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Contexto',
                desc: 'É formatado e enriquecido automaticamente.',
                icon: 'mdi:brain',
            },
            {
                label: 'Enviado',
                desc: 'Direto para a sua integração, pronto para produção.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Ecossistema Aberto',
        titleMain: 'Integrações',
        titleHighlight: 'Nativas',
        description:
            'A Fast Task liga-se diretamente às ferramentas que já utiliza. Sem intermediários, sem latência.',
        ctaTitle: 'Precisa de uma integração específica?',
        ctaLinkText: 'Contactar suporte',
        comingSoon: 'Brevemente',
    },
    earlyAdopter: {
        badge: 'Programa Early Adopter',
        titleMain: 'Nós',
        titleHighlight: 'oferecemos.',
        description:
            'Procuramos feedback real de profissionais exigentes. Se se comprometer a usar a app e a dar-nos a sua opinião sincera, a licença é sua. Para a vida toda.',
        countLabel: 'Licenças Restantes',
        countNote: 'Apenas para os primeiros 100 que nos escreverem demonstrando interesse real.',
        cta: 'QUERO A MINHA LICENÇA',
    },
    enterprise: {
        label: 'Soluções Enterprise',
        titleMain: 'Quer uma app para a sua',
        titleHighlight: 'empresa?',
        description:
            'Transformamos a produtividade de equipas de alto rendimento. Ferramentas nativas com o mesmo ADN da Fast Task, adaptadas às necessidades da sua organização.',
        featureTitle: 'Ecossistema por medida',
        featureText:
            'Integrações com Salesforce, SAP, Jira Enterprise e bases de dados proprietárias.',
        cta: 'Vamos conversar?',
    },
    gallery: {
        title: 'Antevisão',
    },
    footer: {
        line1: 'Escreve.',
        line2: 'Esquece.',
        line3: 'Paz.',
        subtitle: 'Elimine a fricção do seu dia',
    },
};
