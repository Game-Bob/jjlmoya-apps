import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100以上のアイコニックなソースレシピ',
    description: '100以上のアイコニックなレシピとプロフェッショナルな料理アトラスで、ソース作りの技術を極めましょう。',
    slug: 'sauce-lab',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'ソース作りの芸術',
        subtitle: '100以上のアイコニックなソース。究極の料理体験を。',
        priceLabel: '100%無料 · サブスクリプションなし',
        comingSoon: 'まもなく各ストアで公開',
    },
    philosophy: {
        label: 'フィロソフィー',
        title: '料理の継承',
        description: 'SauceLabは単なるレシピ本ではありません。精度、歴史、そして科学を重んじる現代のシェフのために作られた、厳選された風味のアトラスです。ソースを極めることは、料理の卓越性の基盤であると私たちは信じています。',
    },
    benefits: {
        titleMain: '技術を',
        titleHighlight: '極める',
        items: [
            {
                title: '100以上のアイコニックなレシピ',
                text: '5つの母なるソースから、世界各国のエキゾチックな派生ソースまで。すべてのレシピがプロの精度で検証されています。',
                icon: 'chef-hat',
            },
            {
                title: '風味の科学',
                text: '美味しさの「理由」を理解する。正確な分量と、明確でプロフェッショナルな手順を提供します。',
                icon: 'beaker',
            },
            {
                title: 'オフライン優先',
                text: 'キッチンではどこでも機能します。完璧なソースを作るのにインターネット接続は必要ありません。',
                icon: 'wifi-off',
            },
            {
                title: 'トラッカーなし',
                text: '広告なし、サブスクなし、データ収集なし。純粋な料理の卓越性のみを追求しています。',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: '系統',
        titleMain: '神聖なる',
        titleHighlight: '階層',
        description: 'ソースの家系図を探索しましょう。基本となる母なるソースから、無限に広がる派生ソースまで。',
        items: [
            {
                name: 'ベシャメル',
                base: '牛乳 + ホワイトルー',
                derivatives: ['モルネー', 'スービーズ', 'オーロラ', 'ナントゥア'],
            },
            {
                name: 'ベルーテ',
                base: '白い出汁 + ブロンドルー',
                derivatives: ['アルマンド', 'シュプレーム', 'ベルシー', 'ノルマンド'],
            },
            {
                name: 'エスパニョール',
                base: '褐色の出汁 + ブラウンルー',
                derivatives: ['ドミグラス', 'ボルドレーズ', 'ロベール', 'シャスール'],
            },
            {
                name: 'オランデーズ',
                base: '卵黄 + バターエマルション',
                derivatives: ['ベアルネーズ', 'ムスリーヌ', 'マルテーズ', 'ショロン'],
            },
            {
                name: 'トマト',
                base: 'トマト + ホワイトストック/ルー',
                derivatives: ['プロヴァンサル', 'ポルトガル', 'マリナーラ', 'ボロネーゼ'],
            },
        ],
    },
    chemistry: {
        label: 'サイエンス',
        titleMain: '分子レベルの',
        titleHighlight: '精度',
        description: '料理は物理と化学です。完璧なテクスチャと風味を生み出す技術的な力をマスターしましょう。',
        items: [
            {
                title: '乳化',
                description: '油と水を結びつける芸術。オランデーズやマヨネーズの安定の秘訣を学びます。',
            },
            {
                title: '煮詰め（リダクション）',
                description: '蒸発によって風味を凝縮させる。完璧な「ナッペ」の濃度を実現します。',
            },
            {
                title: 'とろみ付け',
                description: '伝統的なルーから、現代的な澱粉サスペンション、野菜のピューレまで。',
            },
            {
                title: 'バランス',
                description: '酸味、塩分、脂肪分を調整し、完璧な味のノートを打つための科学。',
            },
        ],
    },
    atlas: {
        label: 'ガストロ・カートグラフィー',
        titleMain: '世界を',
        titleHighlight: '探索する',
        description: '没入型の地域アトラスを通じて、あらゆる風味のルーツを発見しましょう。フランスの古典からアジアの発酵まで。',
    },
    fix: {
        label: 'Fixモード',
        titleMain: 'プロの',
        titleHighlight: 'リカバリー',
        description: 'どんなシェフでもソースが分離することに遭遇します。専用のFixセクションがリカバリー技術をガイドします。',
        steps: [
            {
                num: '01',
                title: '原因の特定',
                description: '分離しているのか、薄すぎるのか、それとも味付けが濃すぎるのか？診断が第一歩です。',
            },
            {
                num: '02',
                title: '修正の適用',
                description: '温度調整や乳化剤のバランス。プロの技術を自在に。',
            },
            {
                num: '03',
                title: '最終仕上げ',
                description: '濃度と味付けを調整し、完璧に復元します。',
            },
        ],
    },
    gallery: {
        title: 'インターフェース',
    },
};
