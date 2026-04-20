import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: '単語を作り、チャレンジをクリアし、崩壊を防げ。',
    description: '究極のワードパズルで精神的な敏捷性を試せ。フルスピードで文字を組み合わせ、崩壊を防げ。',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: '今日の言葉が利用可能です',
        subtitle: '究極のワードパズル。機敏な頭脳のために設計された速くて無限のゲーム。',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'ダウンロード',
    },
    gameModes: {
        titleMain: '体験',
        titleHighlight: '10/10',
        subtitle: 'ただのワードゲームではありません。基本に満足しない人のための視覚的・精神的なチャレンジ。',
        crash: {
            title: '純粋なアドレナリン',
            description: 'プレッシャーの下で単語を作れ。文字は待ってくれない。カオスに呑まれる前にボードをクリアしろ。',
            alt: 'クラッシュモード',
        },
        relax: {
            title: '精神的な習得',
            description: '時間をかけろ。視覚的プレッシャーなし、あなたとボードだけ。最も価値ある組み合わせを見つけろ。',
            alt: 'リラックスモード',
        },
        daily: {
            title: 'グローバルチャレンジ',
            description: '毎日一つの秘密の言葉。全員が最速を競う。ランキングをリードできるか？',
            alt: 'デイリーチャレンジ',
        },
    },
    socialProof: {
        titleMain: 'ムーブメントに',
        titleHighlight: '参加しよう',
        subtitle: '何千もの頭脳がすでに崩壊に挑んでいる。進捗を追跡し、記録を破り、グローバルな語彙に君臨しろ。',
        challengesLabel: 'クリアしたチャレンジ',
        wordsLabel: '言葉',
        ratingLabel: '評価',
        feedUser1: '@Alex94',
        feedAction1: 'がクラッシュモードで記録を更新しました',
        feedUser2: '@Marta_Lex',
        feedAction2: 'が今日の言葉を見つけました',
        screenshotAlt: 'LexiCrashのスクリーンショット',
    },
    roadmap: {
        titleMain: '優先事項に',
        titleHighlight: '投票しよう',
        subtitle: 'あなたの意見を聞かせてください。次のアップデートで優先すべきセクションを選んでください。',
        items: [
            {
                title: 'ゲームモード',
                description: '触覚体験を拡張するための新しいメカニクスとテーマボード。',
                tag: '没入感',
            },
            {
                title: 'ストーリーモード',
                description: 'ナラティブなチャレンジとアンロック可能なコンテンツを持つ、語彙を通じた壮大な旅。',
                tag: 'ナラティブ',
            },
            {
                title: 'ランキング',
                description: '全世界と競い合い、誰が言葉の真のマスターかを証明しろ。',
                tag: 'ソーシャル',
            },
        ],
        voteLabel: 'クリックして投票',
        votedLabel: '優先事項としてマーク済み',
        feedbackTitle: 'アイデアがありますか？',
        feedbackSub: 'LexiCrashの改善にご協力ください。',
    },
    finalCta: {
        titleMain: '崩壊を',
        titleHighlight: '防げるか？',
        subtitle: 'デイリーチャレンジが始まっている。今日は文字に負けるな。',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'ダウンロード',
        ratingText: 'コミュニティによる+5/5評価',
    },
};
