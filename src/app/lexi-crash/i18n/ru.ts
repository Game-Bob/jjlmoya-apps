import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Составляй слова, преодолевай испытания и избегай краха.',
    description: 'Проверь свою умственную ловкость в лучшем словесном пазле. Комбинируй буквы на полной скорости и избегай краха.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Слово дня уже доступно',
        subtitle: 'Лучший словесный пазл. Быстрая, бесконечная игра для гибких умов.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Скачать в',
    },
    gameModes: {
        titleMain: 'ОПЫТ',
        titleHighlight: '10/10',
        subtitle: 'Это не просто очередная словесная игра. Визуальный и умственный вызов для тех, кто не довольствуется минимумом.',
        crash: {
            title: 'Чистый Адреналин',
            description: 'Составляй слова под давлением. Буквы не ждут. Очисти поле до того, как хаос тебя захлестнёт.',
            alt: 'Режим Краш',
        },
        relax: {
            title: 'Умственное Мастерство',
            description: 'Не торопись. Без визуального давления, только ты и поле. Найди самые ценные комбинации.',
            alt: 'Режим Релакс',
        },
        daily: {
            title: 'Глобальный Вызов',
            description: 'Секретное слово каждый день. Все соревнуются за скорость. Сможешь возглавить рейтинг?',
            alt: 'Ежедневный вызов',
        },
    },
    socialProof: {
        titleMain: 'ПРИСОЕДИНЯЙСЯ К',
        titleHighlight: 'ДВИЖЕНИЮ',
        subtitle: 'Тысячи умов уже бросают вызов краху. Отслеживай прогресс, бей рекорды и доминируй в глобальном лексиконе.',
        challengesLabel: 'Пройденных Испытаний',
        wordsLabel: 'Слова',
        ratingLabel: 'Рейтинг',
        feedUser1: '@Alex94',
        feedAction1: 'только что побил рекорд в режиме Краш',
        feedUser2: '@Marta_Lex',
        feedAction2: 'нашёл слово дня',
        screenshotAlt: 'Скриншот LexiCrash',
    },
    roadmap: {
        titleMain: 'ПРОГОЛОСУЙ ЗА СВОЙ',
        titleHighlight: 'ПРИОРИТЕТ',
        subtitle: 'Мы хотим тебя услышать. Выбери, какой раздел мы должны приоритизировать в следующем обновлении.',
        items: [
            {
                title: 'Режимы Игры',
                description: 'Новые механики и тематические поля для расширения тактильного опыта.',
                tag: 'Погружение',
            },
            {
                title: 'Режим Истории',
                description: 'Эпическое путешествие через лексикон с нарративными испытаниями и разблокируемым контентом.',
                tag: 'Нарратив',
            },
            {
                title: 'Рейтинги',
                description: 'Соревнуйся со всем миром и докажи, кто настоящий мастер слов.',
                tag: 'Социальный',
            },
        ],
        voteLabel: 'Нажми для голосования',
        votedLabel: 'Отмечено как приоритет',
        feedbackTitle: 'Есть идея?',
        feedbackSub: 'Напиши нам и помоги улучшить LexiCrash.',
    },
    finalCta: {
        titleMain: 'ИЗБЕЖИШЬ ЛИ ТЫ',
        titleHighlight: 'КРАХА?',
        subtitle: 'Ежедневный вызов активен. Не позволь буквам победить сегодня.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Скачать в',
        ratingText: '+5/5 оценено сообществом',
    },
};
