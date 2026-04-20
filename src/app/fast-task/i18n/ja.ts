import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: タスク・キャプチャ',
    subtitle: '書く。送る。忘れる。安らぎ。',
    description:
        '3秒でバグ、アイデア、タスクをキャプチャ。チャット形式で GitHub、Make、Linear へノートを送信。',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: '書く。送る。忘れる。安らぎ。',
        price: '4.95€',
        priceLabel: 'プロフェッショナル向け一括払い',
    },
    concept: {
        label: 'フィロソフィー',
        main: '摩擦ゼロ、',
        highlighted: '圧倒的なスピード。',
        philosophy:
            'Fast Task は重厚なプロジェクト管理ツールではありません。あなたの集中力を何物にも邪魔させない、超高速な入力チャネルです。',
        highlights: [
            { label: 'スピード', value: '<3s' },
            { label: '連携', value: 'ネイティブ' },
            { label: 'オフライン', value: 'First' },
        ],
    },
    benefits: {
        titleMain: '日常のワークフローを',
        titleHighlight: '最適化。',
        items: [
            {
                title: '3秒でキャプチャ',
                text: 'チャットのように動作：開いて、書いて、送るだけ。フォームも必須入力項目もありません。',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'プロ仕様の連携',
                text: 'プロジェクトを GitHub、Linear、Make へ直接接続。',
                icon: 'mdi:connection',
            },
            {
                title: '徹底したプライバシー',
                text: 'トークンやタスクはデバイス内に保存。中間サーバーなし、追跡なし。',
                icon: 'mdi:shield-check',
            },
            {
                title: 'オフライン・ファースト',
                text: '電波がなくても送信可能。オンライン復帰時にバックグラウンドで同期されます。',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: '思考をアクションに変えるまで',
        steps: [
            {
                label: '書く',
                desc: 'アプリを開き、思いついたアイデアを即座にキャプチャ。',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'コンテキスト',
                desc: '自動的にフォーマットされ、情報が補完されます。',
                icon: 'mdi:brain',
            },
            {
                label: '完了',
                desc: '連携ツールへ直接送信。すぐに次の作業へ。',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'オープン・エコシステム',
        titleMain: 'ネイティブ',
        titleHighlight: '連携',
        description:
            'Fast Task は、あなたが既にお使いのツールと直接つながります。仲介なし、遅延なし。',
        ctaTitle: '特定の連携が必要ですか？',
        ctaLinkText: 'サポートに連絡',
        comingSoon: '近日公開',
    },
    earlyAdopter: {
        badge: 'アーリーアダプター・プログラム',
        titleMain: 'ライセンスを',
        titleHighlight: 'プレゼント。',
        description:
            'プロフェッショナルの皆様からのリアルなフィードバックを求めています。アプリを使い、率直な意見をいただけるなら、ライセンスを一生無料で差し上げます。',
        countLabel: '残りライセンス数',
        countNote: '真剣に興味を持っていただいた先着100名様限定。',
        cta: 'ライセンスを受け取る',
    },
    enterprise: {
        label: '法人向けソリューション',
        titleMain: '企業向けの専用アプリを',
        titleHighlight: 'お探しですか？',
        description:
            'ハイパフォーマンス・チームの生産性を変革します。Fast Task のDNAを引き継ぎ、組織のニーズに合わせて最適化されたネイティブツールをご提供します。',
        featureTitle: 'カスタム・エコシステム',
        featureText:
            'Salesforce、SAP、Jira Enterprise、および独自データベースとの連携。',
        cta: '相談してみる',
    },
    gallery: {
        title: 'プレビュー',
    },
    footer: {
        line1: '書く。',
        line2: '忘れる。',
        line3: '安らぎ。',
        subtitle: '日常から摩擦を排除する',
    },
};
