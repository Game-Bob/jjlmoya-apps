import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: 任务捕捉',
    subtitle: '书写。发送。遗忘。平静。',
    description:
        '3秒捕捉 Bug、创意或任务。通过聊天将笔记发送至 GitHub、Make 或 Linear。',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: '书写。发送。遗忘。平静。',
        price: '4.95€',
        priceLabel: '专业版一次性付费',
    },
    concept: {
        label: '核心哲学',
        main: '零摩擦，',
        highlighted: '极速输入。',
        philosophy:
            'Fast Task 不是沉重的项目管理器。它是您的超快速输入通道，让任何事情都无法中断您的专注点。',
        highlights: [
            { label: '速度', value: '<3秒' },
            { label: '集成', value: '原生' },
            { label: '离线', value: '优先' },
        ],
    },
    benefits: {
        titleMain: '优化您的日常',
        titleHighlight: '工作流。',
        items: [
            {
                title: '3秒捕捉',
                text: '像聊天一样操作：进入、输入、发送。没有表单，没有必填项。',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: '专业集成',
                text: '将您的项目直接连接到 GitHub、Linear 或 Make。',
                icon: 'mdi:connection',
            },
            {
                title: '极致隐私',
                text: '您的令牌和任务仅存储在设备本地。无中间服务器，无追踪。',
                icon: 'mdi:shield-check',
            },
            {
                title: '离线优先模式',
                text: '即使没有网络也能发送任务。应用会在您恢复在线后进行后台同步。',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: '从思想到落地的距离仅需',
        steps: [
            {
                label: '捕捉',
                desc: '打开应用，立即捕捉您的灵感。',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: '语境',
                desc: '自动格式化并丰富内容。',
                icon: 'mdi:brain',
            },
            {
                label: '已发送',
                desc: '直接发送至您的集成工具，准备就绪。',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: '开放生态',
        titleMain: '原生',
        titleHighlight: '集成',
        description:
            'Fast Task 直接连接您已在使用的工具。无中间商，低延迟。',
        ctaTitle: '需要特定的集成功能？',
        ctaLinkText: '联系支持',
        comingSoon: '敬请期待',
    },
    earlyAdopter: {
        badge: '早期使用者计划',
        titleMain: '免费',
        titleHighlight: '赠送。',
        description:
            '我们正在寻找严谨专业人士的真实反馈。如果您承诺使用该应用并提供诚恳意见，该许可证将由您终身免费拥有。',
        countLabel: '剩余许可证',
        countNote: '仅限前100名展示出真实兴趣并联系我们的用户。',
        cta: '我要领取许可证',
    },
    enterprise: {
        label: '企业级解决方案',
        titleMain: '需要企业专用的',
        titleHighlight: '应用吗？',
        description:
            '我们助力高效团队实现生产力变革。提供具有 Fast Task 同样基因的原生工具，并根据您的组织需求进行定制。',
        featureTitle: '定制生态系统',
        featureText:
            '集成 Salesforce、SAP、Jira Enterprise 及私有数据库。',
        cta: '聊一聊？',
    },
    gallery: {
        title: '预览',
    },
    footer: {
        line1: '书写。',
        line2: '遗忘。',
        line3: '平静。',
        subtitle: '消除日常工作中的摩擦',
    },
};
