import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Сбор Задач',
    subtitle: 'Пиши. Отправляй. Забывай. Покой.',
    description:
        'Фиксируйте баги, идеи или задачи за 3 секунды. Отправляйте заметки в GitHub, Make или Linear через чат.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Пиши. Отправляй. Забывай. Покой.',
        price: '4,95€',
        priceLabel: 'Разовая профессиональная оплата',
    },
    concept: {
        label: 'Философия',
        main: 'НОЛЬ ТРЕНИЯ,',
        highlighted: 'АБСОЛЮТНАЯ СКОРОСТЬ.',
        philosophy:
            'Fast Task — это не громоздкий менеджер проектов. Это ваш сверхбыстрый канал ввода, чтобы ничто не прерывало ваш фокус.',
        highlights: [
            { label: 'Скорость', value: '<3s' },
            { label: 'Интеграции', value: 'Нативные' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Оптимизируйте свой ежедневный',
        titleHighlight: 'воркфлоу.',
        items: [
            {
                title: 'Сбор за 3 секунды',
                text: 'Работает как чат: зашел, написал, отправил. Никаких форм и обязательных полей.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Про-интеграции',
                text: 'Подключайте свои проекты напрямую к GitHub, Linear или Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Радикальная приватность',
                text: 'Ваши токены и задачи хранятся только на вашем устройстве. Никаких промежуточных серверов.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Режим Offline-First',
                text: 'Отправляйте задачи даже без связи. Приложение синхронизируется в фоне, когда вы вернетесь в сеть.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'От мысли к действию за',
        steps: [
            {
                label: 'Пиши',
                desc: 'Открой приложение и зафиксируй идею на лету.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Контекст',
                desc: 'Автоматическое форматирование и обогащение.',
                icon: 'mdi:brain',
            },
            {
                label: 'Отправлено',
                desc: 'Напрямую в вашу интеграцию, готово к работе.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Открытая экосистема',
        titleMain: 'Нативные',
        titleHighlight: 'интеграции',
        description:
            'Fast Task напрямую подключается к инструментам, которые вы уже используете. Без посредников.',
        ctaTitle: 'Нужна специфическая интеграция?',
        ctaLinkText: 'Связаться с поддержкой',
        comingSoon: 'Скоро',
    },
    earlyAdopter: {
        badge: 'Программа Early Adopter',
        titleMain: 'Дарим её',
        titleHighlight: 'вам.',
        description:
            'Мы ищем реальные отзывы от требовательных профессионалов. Если вы готовы использовать приложение и делиться честным мнением, лицензия ваша. Навсегда.',
        countLabel: 'Осталось лицензий',
        countNote: 'Только для первых 100 человек, которые напишут нам, проявив реальный интерес.',
        cta: 'ХОЧУ ЛИЦЕНЗИЮ',
    },
    enterprise: {
        label: 'Enterprise-решения',
        titleMain: 'Нужно приложение для вашей',
        titleHighlight: 'компании?',
        description:
            'Мы трансформируем продуктивность высокопроизводительных команд. Нативные инструменты с ДНК Fast Task, адаптированные под ваши нужды.',
        featureTitle: 'Экосистема под ключ',
        featureText:
            'Интеграции с Salesforce, SAP, Jira Enterprise и проприетарными БД.',
        cta: 'Обсудим?',
    },
    gallery: {
        title: 'Превью',
    },
    footer: {
        line1: 'Пиши.',
        line2: 'Отправляй.',
        line3: 'Покой.',
        subtitle: 'Уберите трение из вашего дня',
    },
};
