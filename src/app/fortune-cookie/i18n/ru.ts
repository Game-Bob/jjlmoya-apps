import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pechenye-predskazaniy',
    title: 'Печенье с предсказанием',
    subtitle: 'Твоя судьба в одно касание.',
    description: 'Одно касание в день. Сделай его важным. Ты собираешь не фразы, ты собираешь настойчивость.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'Большинство не умеет ждать. Ты умеешь.',
        description: 'Одно касание в день. Сделай его важным. Ты собираешь не фразы, ты собираешь настойчивость.',
        scanLabel: 'Сканируй, чтобы скачать',
    },
    challenge: {
        title: 'Ежедневный вызов.',
        crystalLabel: 'Кристальное',
        standardLabel: 'Стандартное',
        lunarLabel: 'Лунное',
        quote: 'Сегодня цифровой мир открыл новую возможность.',
        quoteNote: 'Доступно только в приложении в течение следующих',
        quoteHighlight: '24 часов',
    },
    streak: {
        title: 'Священная серия.',
        description: 'Ты собираешь не фразы, ты собираешь настойчивость.',
        descriptionHighlight: 'Твоя история пишется день за днем.',
        countdownPrefix: 'Сегодняшнее печенье закончится через:',
        tomorrowNote: 'Но не волнуйся, завтра будет другое',
        altarLabel: 'Твой Алтарь',
        nextMilestoneLabel: 'Следующая веха',
        todayLabel: 'СЕГОДНЯ',
        dayPrefix: 'День',
    },
    showcase: {
        titleStart: '',
        titleHighlight: 'Сияние',
        titleEnd: ' судьбы.',
        description: 'Золотая, нефритовая и черная бумага. Это не просто сообщения; это трофеи твоей настойчивости и интуиции.',
    },
    events: {
        title: 'Временные события.',
        subtitle: 'Судьба меняется со сменой времен года. Новое печенье, новые послания, новая удача.',
        items: [
            {
                name: 'День святого Валентина',
                description: 'Любовь витает в воздухе... и в твоей удаче. Найди романтическое печенье.',
                date: '14 фев',
            },
            {
                name: 'Год Лошади',
                description: 'Празднуй удачу с золотым драконом. Специальное печенье для процветающего года.',
                date: '17 фев',
            },
        ],
    },
    shorts: {
        title: 'Уже доступно.',
        comingSoonCookies: 'Скоро — Больше печенья',
        comingSoonEvents: 'Скоро — Новые события',
    },
    footer: {
        title: 'Присоединишься?',
        subtitle: 'Твоя серия начинается с одного клика.',
        downloadPrefix: 'Скачать в',
    },
};
