import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: 日数カウンター',
    subtitle: '時間は、芸術になる。',
    description:
        'エレガントでミニマルなデザインで、大切な瞬間へのカウントダウンを管理しましょう。休暇、記念日、目標：一秒一秒を大切に。',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: 日数カウンター',
        titleStart: 'すべての ',
        titleItalic: '一秒',
        titleEnd: 'が勝利。',
        subtitle:
            'Storeで最もエレガントなツールを使って、目標を可視化し、継続を祝いましょう。',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'ステータス：至急',
        ctaTitle: '今こそ',
        ctaHighlight: 'Day Check: 日数カウンター',
        ctaButton: '今すぐ始める',
        daysLabel: '日',
        hoursLabel: '時間',
        minsLabel: '分',
        segsLabel: '秒',
        sinceLabel: '開始日：',
        targetLabel: '残り：',
        cards: [
            { label: '禁煙日数', type: 'since', emoji: '\u2728', tag: '健康' },
            { label: '日本旅行', type: 'target', emoji: '\uD83C\uDF38', tag: '旅行' },
            { label: 'ジムの継続', type: 'since', emoji: '\uD83D\uDD25', tag: 'フィットネス' },
        ],
    },
    benefits: {
        titleMain: '習慣の ',
        titleHighlight: '心理学。',
        description:
            'Day Checkは視覚的な強化を利用して、規律を自己改善のゲームに変えます。一秒一秒があなたの決意の証です。',
        items: [
            {
                title: 'カウントダウンとカウントアップ',
                text: '大切な日から残り時間（カウントダウン）または経過時間（カウントアップ）を追跡します。',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'ネイティブ・ウィジェット',
                text: 'エレガントで機能的なウィジェットにより、ホーム画面で常にイベントを確認できます。',
                icon: 'mdi:widgets',
            },
            {
                title: 'グラスモーフィズム・デザイン',
                text: 'ガラス効果、ぼかし、鮮やかなグラデーションを駆使した、目を楽しませるモダンなインターフェース。',
                icon: 'mdi:blur',
            },
            {
                title: '完全なプライバシー',
                text: '個人データやイベントはデバイス内に保持されます。あなたの生活は秘密です。',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: '実際のアプリ',
    },
    footer: {
        badge: '配信中',
        titleMain: '時間を',
        titleHighlight: '支配する。',
        subtitle:
            'Day Checkで、今日から目標の可視化を始めましょう。',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
