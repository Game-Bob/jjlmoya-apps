import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ 经典酱汁食谱',
    description: '通过 100+ 经典食谱和专业烹饪地图，完美掌握调酱师的艺术。',
    slug: 'sauce-lab',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: '调酱师的艺术',
        subtitle: '100+ 经典酱汁。打造烹饪杰作。',
        priceLabel: '100% 免费 · 无订阅',
        comingSoon: '即将上线各大应用商店',
    },
    philosophy: {
        label: '理念',
        title: '烹饪传承',
        description: 'SauceLab 不仅仅是一本食谱。它是一部精心打造的风味地图，专为重视精准、历史和酱汁科学的现代厨师设计。我们相信，精通酱汁是卓越烹饪的基础。',
    },
    benefits: {
        titleMain: '掌握',
        titleHighlight: '基础',
        items: [
            {
                title: '100+ 经典食谱',
                text: '从五大母酱到异国情调的全球衍生酱汁。每个食谱都经过专业精准度测试。',
                icon: 'chef-hat',
            },
            {
                title: '风味化学',
                text: '理解风味背后的“为什么”。提供精确的配料和清晰、专业的说明。',
                icon: 'beaker',
            },
            {
                title: '离线优先',
                text: '您的厨房伙伴随时随地可用。无需互联网即可制作完美酱汁。',
                icon: 'wifi-off',
            },
            {
                title: '零追踪',
                text: '无广告，无订阅，不收集数据。只有纯粹的烹饪卓越。',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: '传承',
        titleMain: '神圣',
        titleHighlight: '层级',
        description: '探索酱汁的家族树。从基础母酱 d 其无限的衍生产品。',
        items: [
            {
                name: '贝夏梅尔 (Béchamel)',
                base: '牛奶 + 白色面糊 (White Roux)',
                derivatives: ['莫奈酱 (Mornay)', '苏比斯酱 (Soubise)', '极光酱 (Aurore)', '南图亚酱 (Nantua)'],
            },
            {
                name: '维鲁特 (Velouté)',
                base: '白高汤 + 金黄色面糊 (Blond Roux)',
                derivatives: ['德式酱 (Allemande)', '最高酱 (Suprême)', '贝尔西酱 (Bercy)', '诺曼底酱 (Normande)'],
            },
            {
                name: '西班牙酱 (Espagnole)',
                base: '褐高汤 + 褐色面糊 (Brown Roux)',
                derivatives: ['德米格拉斯 (Demi-Glace)', '波尔多酱 (Bordelaise)', '罗伯特酱 (Robert)', '猎人酱 (Chasseur)'],
            },
            {
                name: '荷兰酱 (Hollandaise)',
                base: '蛋黄 + 黄油乳化液',
                derivatives: ['贝尔尼斯酱 (Béarnaise)', '慕斯琳酱 (Mousseline)', '马耳他酱 (Maltaise)', '肖隆酱 (Choron)'],
            },
            {
                name: '番茄酱',
                base: '番茄 + 白高汤/面糊',
                derivatives: ['普罗旺斯酱 (Provençale)', '葡萄牙酱 (Portugaise)', '马里纳拉酱 (Marinara)', '肉酱 (Bolognese)'],
            },
        ],
    },
    chemistry: {
        label: '科学',
        titleMain: '分子级',
        titleHighlight: '精准',
        description: '烹饪是物理和化学。掌握创造完美质地和风味特征的技术力量。',
        items: [
            {
                title: '乳化',
                description: '油水结合的艺术。学习荷兰酱和蛋黄酱的稳定秘诀。',
            },
            {
                title: '浓缩',
                description: '通过蒸发浓缩风味。达到完美的“挂勺”浓度。',
            },
            {
                title: '增稠',
                description: '从经典面糊到现代淀粉悬浮液和蔬菜泥。',
            },
            {
                title: '平衡',
                description: '调节酸度、盐分和脂肪，以达到完美味觉音符的科学。',
            },
        ],
    },
    atlas: {
        label: '风味制图',
        titleMain: '探索',
        titleHighlight: '世界',
        description: '通过沉浸式的地区地图发现每种风味的根源。从法国经典到亚洲发酵。',
    },
    fix: {
        label: '修复模式',
        titleMain: '专业',
        titleHighlight: '恢复',
        description: '每位厨师都会遇到酱汁油水分离的情况。我们的专用修复部分将指导您使用恢复技术。',
        steps: [
            {
                num: '01',
                title: '识别问题',
                description: '是油水分离、太薄还是调味过重？诊断是第一步。',
            },
            {
                num: '02',
                title: '应用修复',
                description: '温度调整或乳化平衡。专业技术供您使用。',
            },
            {
                num: '03',
                title: '最终完善',
                description: '调整浓度和最终调味，实现完美还原。',
            },
        ],
    },
    gallery: {
        title: '界面',
    },
};
