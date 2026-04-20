import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fortune-cookie',
    title: 'フォーチュンクッキー',
    subtitle: '一瞬のタッチで決まる運命。',
    description: '一日に一度のタッチ。それを大切に。名言を集めるのではなく、継続を集めるのです。',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'ほとんどの人は待つことができません。あなたはできます。',
        description: '一日に一度のタッチ。それを大切に。名言を集めるのではなく、継続を集めるのです。',
        scanLabel: 'スキャンしてダウンロード',
    },
    challenge: {
        title: 'デイリーチャレンジ。',
        crystalLabel: 'クリスタル',
        standardLabel: 'スタンダード',
        lunarLabel: 'ルナ',
        quote: '今日、デジタルワールドが新しいチャンスを解き放ちました。',
        quoteNote: 'アプリ内でのみ限定公開、残り',
        quoteHighlight: '24時間',
    },
    streak: {
        title: '聖なる継続。',
        description: '名言を集めるのではなく、継続を集めるのです。',
        descriptionHighlight: 'あなたの物語は日々刻まれていきます。',
        countdownPrefix: '今日のクッキーの期限まで：',
        tomorrowNote: 'でも大丈夫、明日になればまた新しいのが届きます',
        altarLabel: 'あなたの祭壇',
        nextMilestoneLabel: '次のマイルストーン',
        todayLabel: '今日',
        dayPrefix: '日目',
    },
    showcase: {
        titleStart: '運命の',
        titleHighlight: '輝き',
        titleEnd: '。',
        description: '金、翡翠、そして黒の紙。それらは単なるメッセージではなく、あなたの継続と直感の証なのです。',
    },
    events: {
        title: '期間限定イベント。',
        subtitle: '運命は季節とともに移り変わります。新しいクッキー、新しいメッセージ、新しい運。',
        items: [
            {
                name: 'バレンタインデー',
                description: '愛が漂っています... そして、あなたの運勢にも。ロマンチックなクッキーを見つけて。',
                date: '2月14日',
            },
            {
                name: '午年',
                description: '黄金の龍と共に幸運を祝おう。繁栄の年のための特別なクッキー。',
                date: '2月17日',
            },
        ],
    },
    shorts: {
        title: '配信中。',
        comingSoonCookies: '近日公開 — 他のクッキー',
        comingSoonEvents: '近日公開 — 新イベント',
    },
    footer: {
        title: 'あなたも参加しませんか？',
        subtitle: 'ワンクリックであなたの継続が始まります。',
        downloadPrefix: 'ダウンロード：',
    },
};
