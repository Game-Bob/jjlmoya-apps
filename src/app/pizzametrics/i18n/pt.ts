import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'A precisão que a sua massa merece.',
    description:
        'Calcule ingredientes, temperaturas da água e tempos de fermentação com precisão científica. Criada para pizzaiolos que buscam resultados profissionais em cada fornada.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Calculadora de Pizza Napolitana:',
        titleHighlight: 'Precisão de Mestre',
        titleEnd: 'no seu Bolso.',
        subtitle:
            'Ajuste a hidratação, o fermento e os tempos de fermentação de acordo com a temperatura real da sua cozinha. Compatível com Biga, Poolish e massa direta.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Descarregar na',
        downloadLabelPlay: 'Disponível no',
        scanLabel: 'Digitalize para instalar agora',
        tagline: 'Concebida para entusiastas da técnica',
    },
    showCase: {
        feature1: {
            title: 'Ajuste por Clima',
            description: 'Calcule a quantidade exata de fermento conforme o frio ou o calor.',
        },
        feature2: {
            title: 'Gestão de Pré-fermentos',
            description: 'Controle Biga e Poolish sem cálculos manuais complexos.',
        },
        feature3: {
            title: 'Registo de Amassados',
            description: 'Guarde as suas receitas e fotos para aprender com cada fornada.',
        },
    },
    empathy: {
        title: 'Sabemos como é...',
        quote1: 'Massa sobrefermentada devido ao calor? A Pizzametrics ajusta os tempos por si.',
        quote2:
            'Dificuldade com as percentagens do padeiro? Nós fazemos as contas, você faz a arte.',
        quote3:
            'Ficou sem farinha? A secção "Despensa" avisa-o antes de começar a amassar.',
    },
    pantry: {
        title: 'A sua Biblioteca de',
        titleHighlight: 'Farinhas',
        description:
            'Nem todas as farinhas absorvem a água da mesma forma. Na sua Despensa pode gerir as suas farinhas por marca e força (W). A app utiliza esta informação técnica para ajustar os cálculos e garantir um cornicione perfeito.',
        descriptionHighlight: 'Despensa',
        missionTitle: 'Missão Global',
        missionSubtitle: 'Uma ferramenta profissional para uma comunidade global de pizzaiolos.',
    },
    gallery: {
        title: 'Interface',
        titleHighlight: 'Pro',
        imageAlt: 'Vista Real da App',
    },
    shorts: {
        titleMain: 'A App em',
        titleHighlight: 'Movimento',
        subtitle:
            'Veja rapidamente como a Pizzametrics transforma a sua cozinha num laboratório de precisão.',
    },
    transparency: {
        quoteMain: 'Criada por um amante de pizza,',
        quoteHighlight: 'para amantes de pizza.',
        description:
            'A Pizzametrics nasceu para eliminar os cadernos manchados de farinha e os erros de cálculo. Apenas dados precisos para o seu próximo cornicione.',
    },
    footer: {
        titleMain: 'Junte-se à',
        titleHighlight: 'Revolução Científica',
        privacyLabel: 'Política de Privacidade',
        termsLabel: 'Termos e Condições',
        scanLabel: 'Digitalize para descarregar',
    },
};
