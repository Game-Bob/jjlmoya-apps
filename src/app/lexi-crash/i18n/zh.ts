import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: '组合单词，完成挑战，避免崩溃。',
    description: '在终极文字拼图中测试你的思维敏捷性。以最快速度组合字母，避免崩溃与失败。',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: '今日单词现已开放',
        subtitle: '终极文字拼图。专为灵活思维设计的快速无限游戏。',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: '立即下载',
    },
    gameModes: {
        titleMain: '游戏体验',
        titleHighlight: '10/10',
        subtitle: '这不仅仅是一个文字游戏。专为不满足于基础的人设计的视觉和思维挑战。',
        crash: {
            title: '纯粹肾上腺素',
            description: '在压力下组合单词。字母不会等待。在混乱压倒你之前清空棋盘。',
            alt: '崩溃模式',
        },
        relax: {
            title: '思维精通',
            description: '慢慢来。没有视觉压力，只有你和棋盘。找到最有价值的组合。',
            alt: '放松模式',
        },
        daily: {
            title: '全球挑战',
            description: '每天一个秘密单词。所有人竞争成为最快。你能领先排行榜吗？',
            alt: '每日挑战',
        },
    },
    socialProof: {
        titleMain: '加入这场',
        titleHighlight: '运动',
        subtitle: '数千个思维已经在挑战崩溃。追踪你的进步，打破记录，主宰全球词汇。',
        challengesLabel: '完成挑战',
        wordsLabel: '单词',
        ratingLabel: '评分',
        feedUser1: '@Alex94',
        feedAction1: '刚刚在崩溃模式中打破了记录',
        feedUser2: '@Marta_Lex',
        feedAction2: '找到了今日单词',
        screenshotAlt: 'LexiCrash截图',
    },
    roadmap: {
        titleMain: '为你的',
        titleHighlight: '优先事项投票',
        subtitle: '我们想听取你的意见。选择我们在下次更新中应该优先处理哪个部分。',
        items: [
            {
                title: '游戏模式',
                description: '新机制和主题棋盘，以扩展触觉体验。',
                tag: '沉浸感',
            },
            {
                title: '故事模式',
                description: '通过词汇的史诗之旅，包含叙事挑战和可解锁内容。',
                tag: '叙事',
            },
            {
                title: '排行榜',
                description: '与全世界竞争，证明谁是真正的文字大师。',
                tag: '社交',
            },
        ],
        voteLabel: '点击投票',
        votedLabel: '已标记为优先',
        feedbackTitle: '有想法吗？',
        feedbackSub: '联系我们，帮助我们改进LexiCrash。',
    },
    finalCta: {
        titleMain: '你能避免',
        titleHighlight: '崩溃吗？',
        subtitle: '每日挑战已激活。今天不要让字母获胜。',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: '下载',
        ratingText: '社区评分+5/5',
    },
};
