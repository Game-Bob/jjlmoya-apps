import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: '面团值得拥有的精准度。',
    description:
        '以科学精度计算配料、水温和发酵时间。专为追求每一炉都具有专业水准的披萨师设计。',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: '拿坡里披萨计算器：',
        titleHighlight: '匠心精度',
        titleEnd: '尽在口袋。',
        subtitle:
            '根据厨房的实际温度调整含水量、酵母和发酵时间。兼容 Biga、Poolish 和直接面团法。',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: '下载于',
        downloadLabelPlay: '下载于',
        scanLabel: '扫码立即安装',
        tagline: '为技术发烧友设计',
    },
    showCase: {
        feature1: {
            title: '气候调整',
            description: '根据天气的冷热计算精确的酵母用量。',
        },
        feature2: {
            title: '预发酵管理',
            description: '无需复杂的手动计算，轻松控制 Biga 和 Poolish。',
        },
        feature3: {
            title: '揉面日志',
            description: '保存你的食谱和照片，从每一次烘焙中学习。',
        },
    },
    empathy: {
        title: '我们懂这种感觉...',
        quote1: '因为太热面团发酵过度？Pizzametrics 会为你自动调整时间。',
        quote2:
            '还在为烘焙百分比苦恼？数学交给我们，你只管创造艺术。',
        quote3:
            '面粉不够了？“面粉库”功能会在你开始揉面之前提醒你。',
    },
    pantry: {
        title: '你的专属',
        titleHighlight: '面粉库',
        description:
            '并非所有面粉的吸水性都相同。在你的面粉库中，你可以按品牌和强度 (W) 管理面粉。应用利用这些技术数据来调整计算，确保完美的饼边 (cornicione)。',
        descriptionHighlight: '面粉库',
        missionTitle: '全球使命',
        missionSubtitle: '为全球披萨师社区打造的专业工具。',
    },
    gallery: {
        title: '专业级',
        titleHighlight: '界面',
        imageAlt: '应用真实界面',
    },
    shorts: {
        titleMain: '应用',
        titleHighlight: '动态演示',
        subtitle:
            '快速预览 Pizzametrics 如何将你的厨房变成精密实验室。',
    },
    transparency: {
        quoteMain: '由披萨爱好者创建，',
        quoteHighlight: '献给所有披萨爱好者。',
        description:
            'Pizzametrics 的诞生是为了告别沾满面粉的笔记本和计算错误。为你下一次完美的饼边提供精准数据。',
    },
    footer: {
        titleMain: '加入',
        titleHighlight: '科学革命',
        privacyLabel: '隐私政策',
        termsLabel: '服务条款',
        scanLabel: '扫码下载',
    },
};
