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
        artNote: '下一个舒适的挑战正在等你',
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
        titleMain: '你的下一个',
        titleHighlight: '单词正在等你',
        subtitle: '打开 LexiCrash，找到自己的节奏，轻松享受几分钟的文字时光。',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: '下载',
        downloadAction: '下载',
        ratingText: '社区喜爱的温暖文字时光',
    },
    cozyFeatures: {
        eyebrow: '舒适的文字节奏',
        titleMain: '玩一会儿，',
        titleHighlight: '开心地再回来。',
        subtitle: '适合短暂休息、安静专注，以及“再来一个词”的轻松多彩文字游戏节奏。',
        cards: [
            { title: '找到自己的节奏', description: '短小的游戏、清晰的棋盘，从第一个单词开始就让人感到满足。', alt: '崩溃模式游戏画面' },
            { title: '让连锁闪闪发光', description: '每个单词都会带来一点火花。追逐连击，清空棋盘，享受进步的温柔奖励。', alt: '崩溃模式游戏画面' },
            { title: '轻松累积连胜', description: '回来挑战每日单词，庆祝你的精彩发现，看着文字世界慢慢成长。', alt: 'LexiCrash进度和统计数据' },
        ],
    },
    storyShowcase: {
        eyebrow: '一个由单词组成的小世界',
        titleMain: '你的小小',
        titleHighlight: '文字宇宙。',
        subtitle: '柔软的云朵、俏皮的方块和小小的庆祝，让每一局都变成想再次回来的地方。',
        ariaLabel: 'LexiCrash功能',
        bannerAlt: '色彩缤纷又舒适的文字世界中的LexiCrash',
        pills: ['每日习惯', '舒适挑战', '个人最佳成绩'],
    },
};
