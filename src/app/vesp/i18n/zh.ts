import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: 鸡尾酒平衡器',
    subtitle: '调酒学：平衡与配方',
    description:
        '专业鸡尾酒平衡计算器，支持 ABV、Brix 及经典调酒配方。',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: '调酒学：平衡与配方',
        philosophy:
            '使用 VESP 提升吧台的一致性：为追求每杯酒都达到科学完美的调酒师和调酒爱好者打造的终极技术工具。',
        price: '免费',
        priceLabel: '无需订阅 • 立即访问',
    },
    techSpecs: {
        label: '精密调酒学',
        conceptMain: '技术成就，',
        conceptHighlight: '品质。',
        description:
            '专业鸡尾酒平衡计算器，支持 ABV、Brix 及经典调酒配方。',
        specsLabel: '技术规格',
        features: [
            {
                title: 'ABV/Brix 平衡',
                text: '控制密度和酒精含量。',
            },
            {
                title: '无需注册',
                text: '完全本地离线隐私。',
            },
            {
                title: '吧台模式',
                text: '昏暗灯光下快速读取。',
            },
        ],
        tableRows: [
            { label: '密度', value: '分析级' },
            { label: '度数 (ABV)', value: '已校准' },
            { label: '含糖量 (BRIX)', value: '实时' },
        ],
    },
    benefits: {
        titleMain: '平衡',
        titleHighlight: '引擎。',
        description:
            '通过专为行业设计的技术计算，可视化酒精、糖分和酸度之间的平衡。',
        items: [
            {
                title: '科学平衡',
                text: '酒精、糖分和酸度之间的精确计算。',
                icon: 'mdi:flask-outline',
            },
            {
                title: '稀释校准',
                text: '按技术调整：摇和、搅拌或直调。',
                icon: 'mdi:water-percent',
            },
            {
                title: '经典库',
                text: '拥有理化数据的 70 多种经典配方。',
                icon: 'mdi:book-open-variant',
            },
            {
                title: '创造者',
                text: '设计并保存您自己的签名配方。',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP 生态系统',
        subtitle: '调酒学与标准化',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: '服务',
        titleHighlight: '完美。',
        cta: '即将登陆应用商店',
    },
};
