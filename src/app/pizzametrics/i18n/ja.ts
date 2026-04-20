import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'あなたの生地にふさわしい精度を。',
    description:
        '科学的な精度で材料、水温、発酵時間を計算します。すべての焼き上がりでプロの結果を求めるピッツァ職人のために設計されています。',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'ナポリピッツァ計算機：',
        titleHighlight: '匠の精度',
        titleEnd: 'をポケットに。',
        subtitle:
            'キッチンの実際の温度に基づいて、加水率、イースト、発酵時間を調整します。ビガ、ポーリッシュ、ダイレクト・ドウ（ストレート法）に対応しています。',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'App Storeから',
        downloadLabelPlay: 'Google Playで',
        scanLabel: 'スキャンしてインストール',
        tagline: '技術を追求する愛好家のための設計',
    },
    showCase: {
        feature1: {
            title: '気候に合わせた調整',
            description: '気温の寒暖に合わせて、正確なイーストの量を計算します。',
        },
        feature2: {
            title: '発酵種の管理',
            description: '複雑な手計算なしで、ビガやポーリッシュをコントロール。',
        },
        feature3: {
            title: '捏ね上げ記録',
            description: 'レシピと写真を保存して、日々の焼き上がりから学びましょう。',
        },
    },
    empathy: {
        title: 'その気持ち、わかります...',
        quote1: '暑さで生地が過発酵に？Pizzametricsがあなたに代わって時間を調整します。',
        quote2:
            'ベーカーズパーセントでお悩みですか？計算は私たちに任せて、あなたはアートに集中してください。',
        quote3:
            '小麦粉が足りない？「パントリー」機能が、捏ね始める前にあなたに知らせます。',
    },
    pantry: {
        title: 'あなたのための',
        titleHighlight: '小麦粉ライブラリ',
        description:
            'すべての小麦粉が同じように水を吸収するわけではありません。「パントリー」では、ブランドや力価（W値）ごとに小麦粉を管理できます。アプリはこの技術データを使用して計算を調整し、完璧なコルニチョーネ（縁）を保証します。',
        descriptionHighlight: 'パントリー',
        missionTitle: 'グローバル・ミッション',
        missionSubtitle: '世界のピッツァ職人コミュニティのためのプロフェッショナルなツール。',
    },
    gallery: {
        title: 'プロ仕様の',
        titleHighlight: 'インターフェース',
        imageAlt: '実際のアプリ画面',
    },
    shorts: {
        titleMain: 'アプリを',
        titleHighlight: '動画で見る',
        subtitle:
            'Pizzametricsがあなたのキッチンをどのように精密なラボ（研究室）に変えるか、ご覧ください。',
    },
    transparency: {
        quoteMain: 'ピッツァを愛する者が、',
        quoteHighlight: 'ピッツァを愛するすべての人のために作りました。',
        description:
            'Pizzametricsは、小麦粉で汚れたメモ帳や計算ミスをなくすために誕生しました。次なるコルニチョーネのために、正確なデータだけを届けます。',
    },
    footer: {
        titleMain: '科学的な',
        titleHighlight: 'ピッツァ革命に参加しよう',
        privacyLabel: 'プライバシーポリシー',
        termsLabel: '利用規約',
        scanLabel: 'スキャンしてダウンロード',
    },
};
