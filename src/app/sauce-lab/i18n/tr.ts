import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ İkonik Sos Tarifi',
    description: '100\'den fazla ikonik tarif ve profesyonel mutfak atlası ile sos uzmanlığında ustalaşın.',
    slug: 'sos-laboratuvari',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'Sos Uzmanlığı Sanatı',
        subtitle: '+100 ikonik sos. Tek bir mutfak şaheseri.',
        priceLabel: '%100 Ücretsiz · Abonelik Yok',
        comingSoon: 'Yakında uygulama mağazalarında',
    },
    philosophy: {
        label: 'Felsefe',
        title: 'Mutfak Mirası',
        description: 'SauceLab sadece bir tarif kitabı değildir. Hassasiyete, tarihe ve sos uzmanlığının bilimine değer veren modern şefler için tasarlanmış, özenle seçilmiş bir lezzet atlasıdır. Sos ustalığının, mutfak mükemmelliğinin temeli olduğuna inanıyoruz.',
    },
    benefits: {
        titleMain: 'Temellere',
        titleHighlight: 'Hakim Olun',
        items: [
            {
                title: '+100 İkonik Tarif',
                text: 'Beş temel sostan egzotik küresel türevlere kadar. Her tarif profesyonel hassasiyet için test edilmiştir.',
                icon: 'chef-hat',
            },
            {
                title: 'Lezzet Kimyası',
                text: 'Lezzetin ardındaki "neden"i anlayın. Kesin malzemeler ve net, profesyonel talimatlar.',
                icon: 'beaker',
            },
            {
                title: 'Önce Çevrimdışı',
                text: 'Mutfak yardımcınız her yerde çalışır. Mükemmel sosu hazırlamak için internete ihtiyacınız yok.',
                icon: 'wifi-off',
            },
            {
                title: 'Sıfır İzleyici',
                text: 'Reklam yok, abonelik yok, veri toplama yok. Sadece saf mutfak mükemmelliği.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'Soyağacı',
        titleMain: 'Kutsal',
        titleHighlight: 'Hiyerarşi',
        description: 'Sosların soyağacını keşfedin. Temel ana soslardan onların sonsuz türevlerine kadar.',
        items: [
            {
                name: 'Beşamel',
                base: 'Süt + Beyaz Meyane',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velüt',
                base: 'Beyaz Stok + Sarı Meyane',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espanyoll',
                base: 'Kahverengi Stok + Kahverengi Meyane',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Holandez',
                base: 'Yumurta Sarısı + Tereyağı Emülsiyonu',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Domates',
                base: 'Domates + Beyaz Stok/Meyane',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'Bilim',
        titleMain: 'Moleküler',
        titleHighlight: 'Hassasiyet',
        description: 'Yemek pişirmek fizik ve kimyadır. Mükemmel doku ve lezzet profilini oluşturan teknik güçlerde ustalaşın.',
        items: [
            {
                title: 'Emülsifikasyon',
                description: 'Yağ ve suyu birbirine bağlama sanatı. Holandez ve mayonezin stabilite sırlarını öğrenin.',
            },
            {
                title: 'Redüksiyon',
                description: 'Buharlaşma yoluyla lezzeti yoğunlaştırma. Mükemmel "nappé" kıvamına ulaşın.',
            },
            {
                title: 'Koyulaştırma',
                description: 'Klasik meyanelerden modern nişasta süspansiyonlarına ve sebze pürelerine kadar.',
            },
            {
                title: 'Denge',
                description: 'Mükemmel lezzet notasını yakalamak için asitlik, tuz ve yağ ayarlama bilimi.',
            },
        ],
    },
    atlas: {
        label: 'Gastro Kartografi',
        titleMain: 'Dünyayı',
        titleHighlight: 'Keşfedin',
        description: 'Sürükleyici bir bölgesel atlas aracılığıyla her lezzetin kökenlerini keşfedin. Fransız klasiklerinden Asya fermantasyonlarına kadar.',
    },
    fix: {
        label: 'Fix Modu',
        titleMain: 'Profesyonel',
        titleHighlight: 'Kurtarma',
        description: 'Her şef sosunun kesildiği bir anla karşılaşır. Özel Fix bölümümüz kurtarma tekniklerinde size rehberlik eder.',
        steps: [
            {
                num: '01',
                title: 'Sorunu belirleyin',
                description: 'Kesilmiş mi, çok mu sulu yoksa çok mu tuzlu? Teşhis ilk adımdır.',
            },
            {
                num: '02',
                title: 'Çözümü uygulayın',
                description: 'Sıcaklık ayarlamaları veya emülgatör dengesi. Profesyonel teknikler elinizin altında.',
            },
            {
                num: '03',
                title: 'Son dokunuş',
                description: 'Mükemmel bir sonuç için kıvamı ayarlama ve son çeşnilendirme.',
            },
        ],
    },
    gallery: {
        title: 'Arayüz',
    },
};
