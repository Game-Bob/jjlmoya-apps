import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Балансировщик Коктейлей',
    subtitle: 'Миксология: Баланс и Рецепты',
    description:
        'Профессиональный калькулятор баланса, ABV, Brix и классических рецептов миксологии.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Миксология: Баланс и Рецепты',
        philosophy:
            'Повысьте стабильность вашего бара с VESP: непревзойденным техническим инструментом для барменов и любителей миксологии, стремящихся к научному совершенству в каждом бокале.',
        price: 'Бесплатно',
        priceLabel: 'Без подписок • Мгновенный доступ',
    },
    techSpecs: {
        label: 'Прецизионная Миксология',
        conceptMain: 'ТЕХНИКА,',
        conceptHighlight: 'КАЧЕСТВО.',
        description:
            'Профессиональный калькулятор баланса, ABV, Brix и классических рецептов миксологии.',
        specsLabel: 'Технические характеристики',
        features: [
            {
                title: 'Баланс ABV/Brix',
                text: 'Контроль плотности и содержания алкоголя.',
            },
            {
                title: 'Без регистрации',
                text: 'Полная локальная конфиденциальность офлайн.',
            },
            {
                title: 'Режим Бара',
                text: 'Быстрое чтение при приглушенном свете.',
            },
        ],
        tableRows: [
            { label: 'ПЛОТНОСТЬ', value: 'АНАЛИТИЧЕСКАЯ' },
            { label: 'ГРАДУС (ABV)', value: 'КАЛИБРОВАННЫЙ' },
            { label: 'САХАР (BRIX)', value: 'В РЕАЛЬНОМ ВРЕМЕНИ' },
        ],
    },
    benefits: {
        titleMain: 'Двигатель',
        titleHighlight: 'баланса.',
        description:
            'Визуализируйте баланс между алкоголем, сахаром и кислотностью с помощью технических расчетов, разработанных для индустрии.',
        items: [
            {
                title: 'Научный баланс',
                text: 'Точные расчеты между алкоголем, сахаром и кислотностью.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Калибровка разбавления',
                text: 'Настройка по технике: Shake, Stir или Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Классическая библиотека',
                text: 'Более 70 классических рецептов с данными.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Создатель',
                text: 'Создавайте и сохраняйте свои авторские рецепты.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Экосистема VESP',
        subtitle: 'Миксология и Стандартизация',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Сервис',
        titleHighlight: 'ИДЕАЛЬНЫЙ.',
        cta: 'Доступно сейчас',
    },
};
