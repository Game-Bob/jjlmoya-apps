import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fortune-cookie',
    title: '幸运饼干',
    subtitle: '轻触间，预见命运。',
    description: '每天一次轻触。让它更有意义。你收藏的不是语录，而是坚持与成长。',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: '大多数人不懂得等待。而你懂。',
        description: '每天一次轻触。让它更有意义。你收藏的不是语录，而是坚持。',
        scanLabel: '扫码下载',
    },
    challenge: {
        title: '每日挑战。',
        crystalLabel: '水晶',
        standardLabel: '标准',
        lunarLabel: '月相',
        quote: '今天，数字世界释放了一个新机遇。',
        quoteNote: '仅限应用内，剩余',
        quoteHighlight: '24小时',
    },
    streak: {
        title: '神圣连胜。',
        description: '你收藏的不是语录，而是坚持。',
        descriptionHighlight: '你的故事由每一天书写。',
        countdownPrefix: '今天的饼干截止于：',
        tomorrowNote: '但请放心，明天还会有新的',
        altarLabel: '你的祭坛',
        nextMilestoneLabel: '下一个里程碑',
        todayLabel: '今天',
        dayPrefix: '天',
    },
    showcase: {
        titleStart: '命运的',
        titleHighlight: '光芒',
        titleEnd: '。',
        description: '金、翠、黑三色签纸。它们不仅仅是信息；更是你坚持与直觉的勋章。',
    },
    events: {
        title: '限时活动。',
        subtitle: '命运随季节流转。新饼干，新语录，新运气。',
        items: [
            {
                name: '情人节',
                description: '空气中弥漫着爱... 还有你的好运。寻找浪漫饼干。',
                date: '2月14日',
            },
            {
                name: '马年',
                description: '与金龙一起庆祝好运。为繁荣之年准备的特别饼干。',
                date: '2月17日',
            },
        ],
    },
    shorts: {
        title: '现已开放。',
        comingSoonCookies: '即将推出 — 更多饼干',
        comingSoonEvents: '即将推出 — 新活动',
    },
    footer: {
        title: '加入我们吗？',
        subtitle: '只需点击，开启你的连胜。',
        downloadPrefix: '立刻下载：',
    },
};
