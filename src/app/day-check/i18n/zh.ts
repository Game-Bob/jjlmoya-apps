import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: 日数计数器',
    subtitle: '时间，成就艺术。',
    description:
        '以优雅极简的设计管理您最特别时刻的倒计时。假期、纪念日或目标：让每一秒都充满意义。',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: 日数计数器',
        titleStart: '每一',
        titleItalic: '秒',
        titleEnd: '都是胜利。',
        subtitle:
            '使用 Store 中最优雅的工具可视化您的目标并庆祝您的坚持。',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: '状态：紧急',
        ctaTitle: '是时候使用',
        ctaHighlight: 'Day Check: 日数计数器',
        ctaButton: '立即行动',
        daysLabel: '天',
        hoursLabel: '小时',
        minsLabel: '分',
        segsLabel: '秒',
        sinceLabel: '开始于',
        targetLabel: '剩余',
        cards: [
            { label: '戒烟天数', type: 'since', emoji: '\u2728', tag: '健康' },
            { label: '日本之旅', type: 'target', emoji: '\uD83C\uDF38', tag: '旅行' },
            { label: '健身打卡', type: 'since', emoji: '\uD83D\uDD25', tag: '健身' },
        ],
    },
    benefits: {
        titleMain: '习惯 ',
        titleHighlight: '心理学。',
        description:
            'Day Check 利用视觉强化将自律转化为一场自我超越的游戏。每一秒都是您承诺的见证。',
        items: [
            {
                title: '倒计时与正计时',
                text: '追踪从任何重要日期开始的剩余时间（倒计时）或已过去的时间（正计时）。',
                icon: 'mdi:timer-sand',
            },
            {
                title: '原生小组件',
                text: '通过优雅实用的桌面组件，让您的重要事件在主屏幕上始终可见。',
                icon: 'mdi:widgets',
            },
            {
                title: '磨砂玻璃设计',
                text: '现代化的磨砂玻璃界面，具有迷人的模糊效果和充满活力的渐变。',
                icon: 'mdi:blur',
            },
            {
                title: '完全隐私',
                text: '您的个人数据和事件仅存储在设备本地。您的生活由您掌控。',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: '真实应用演示',
    },
    footer: {
        badge: '现已推出',
        titleMain: '掌控您的',
        titleHighlight: '时间。',
        subtitle:
            '今天就开始使用 Day Check 可视化您的目标。',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
