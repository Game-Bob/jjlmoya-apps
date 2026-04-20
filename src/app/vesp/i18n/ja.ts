import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: カクテル・バランサー',
    subtitle: 'ミクソロジー：バランスとレシピ',
    description:
        'プロフェッショナルなカクテルバランス、ABV、Brix計算機とクラシックレシピ。',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'ミクソロジー：バランスとレシピ',
        philosophy:
            'VESPでバーのクオリティを一段階引き上げましょう。すべての一杯に科学的な完璧さを求めるバーテンダーやミクソロジー愛好家のための、究極のテクニカルツールです。',
        price: '無料',
        priceLabel: 'サブスクリプションなし • 即時アクセス',
    },
    techSpecs: {
        label: '精密ミクソロジー',
        conceptMain: '技術による、',
        conceptHighlight: '品質。',
        description:
            'プロフェッショナルなカクテルバランス、ABV、Brix計算機とクラシックレシピ。',
        specsLabel: '技術仕様',
        features: [
            {
                title: 'ABV/Brixバランス',
                text: '密度とアルコール度数をコントロール。',
            },
            {
                title: '登録不要',
                text: '完全ローカルオフラインプライバシー。',
            },
            {
                title: 'バーモード',
                text: '薄暗い照明下での素早い読み取り。',
            },
        ],
        tableRows: [
            { label: '密度', value: '解析的' },
            { label: '度数 (ABV)', value: '校正済み' },
            { label: '糖度 (BRIX)', value: 'リアルタイム' },
        ],
    },
    benefits: {
        titleMain: 'バランスの',
        titleHighlight: 'エンジン。',
        description:
            '業界向けに設計されたテクニカルな計算により、アルコール、糖分、酸味のバランスを可視化します。',
        items: [
            {
                title: '科学的バランス',
                text: 'アルコール、糖分、酸味の正確な計算。',
                icon: 'mdi:flask-outline',
            },
            {
                title: '加水率の校正',
                text: '技術（シェイク、ステア、ビルド）に応じた調整。',
                icon: 'mdi:water-percent',
            },
            {
                title: 'クラシック・ライブラリ',
                text: '物理化学データを備えた70以上のレシピ。',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'クリエイター',
                text: '独自のシグネチャーをデザインして保存。',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESPエコシステム',
        subtitle: 'ミクソロジーと標準化',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: '完璧な',
        titleHighlight: 'サービス。',
        cta: '近日ストアに登場予定',
    },
};
