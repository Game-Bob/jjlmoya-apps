import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Счетчик Дней',
    subtitle: 'Время, ставшее искусством.',
    description:
        'Управляйте обратным отсчетом до самых особенных моментов с помощью элегантного и минималистичного дизайна. Отпуск, юбилеи или цели: пусть каждая секунда будет на счету.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Счетчик Дней',
        titleStart: 'Каждая ',
        titleItalic: 'секунда',
        titleEnd: '— это победа.',
        subtitle:
            'Визуализируйте свои цели и празднуйте свои достижения с самым элегантным инструментом в Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'СТАТУС: СРОЧНО',
        ctaTitle: 'Время использовать',
        ctaHighlight: 'Day Check: Счетчик Дней',
        ctaButton: 'Сделать сейчас',
        daysLabel: 'Дней',
        hoursLabel: 'Часов',
        minsLabel: 'Мин',
        segsLabel: 'Сек',
        sinceLabel: 'С МОМЕНТА',
        targetLabel: 'ОСТАЛОСЬ',
        cards: [
            { label: 'Дней без курения', type: 'since', emoji: '\u2728', tag: 'ЗДОРОВЬЕ' },
            { label: 'Поездка в Японию', type: 'target', emoji: '\uD83C\uDF38', tag: 'ПУТЕШЕСТВИЯ' },
            { label: 'Серия в спортзале', type: 'since', emoji: '\uD83D\uDD25', tag: 'ФИТНЕС' },
        ],
    },
    benefits: {
        titleMain: 'Психология ',
        titleHighlight: 'Привычки.',
        description:
            'Day Check использует визуальное подкрепление, чтобы превратить дисциплину в игру по самосовершенствованию. Каждая секунда — доказательство вашей приверженности.',
        items: [
            {
                title: 'Обратный и Прямой отсчет',
                text: 'Отслеживайте время, оставшееся (Count down) или прошедшее (Count up) с любой важной даты.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Нативные виджеты',
                text: 'Держите события всегда на виду на главном экране с помощью элегантных и функциональных виджетов.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Дизайн Glassmorphism',
                text: 'Современный интерфейс с эффектами стекла, размытием и яркими градиентами, радующими глаз.',
                icon: 'mdi:blur',
            },
            {
                title: 'Полная конфиденциальность',
                text: 'Ваши личные данные и события остаются на вашем устройстве. Ваша жизнь приватна.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'Реальное приложение',
    },
    footer: {
        badge: 'ДОСТУПНО СЕЙЧАС',
        titleMain: 'Овладейте своим',
        titleHighlight: 'Временем.',
        subtitle:
            'Начните визуализировать свои цели сегодня с Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
