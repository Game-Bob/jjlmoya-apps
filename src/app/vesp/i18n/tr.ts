import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Kokteyl Dengeleyici',
    subtitle: 'Miksoloji: Denge ve Tarifler',
    description:
        'Profesyonel kokteyl denge, ABV, Brix hesaplayıcı ve klasik tarifler.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Miksoloji: Denge ve Tarifler',
        philosophy:
            'Barınızın sürekliliğini VESP ile artırın: Her kadehte bilimsel mükemmellik arayan barmenler ve miksoloji meraklıları için geliştirilmiş nihai teknik araç.',
        price: 'Ücretsiz',
        priceLabel: 'Abonelik yok • Anında Erişim',
    },
    techSpecs: {
        label: 'Hassas Miksoloji',
        conceptMain: 'TEKNİK VE,',
        conceptHighlight: 'KALİTE.',
        description:
            'Profesyonel kokteyl denge, ABV, Brix hesaplayıcı ve klasik tarifler.',
        specsLabel: 'Teknik Özellikler',
        features: [
            {
                title: 'ABV/Brix Dengesi',
                text: 'Yoğunluğu ve alkol oranını kontrol edin.',
            },
            {
                title: 'Kayıt Gerekmez',
                text: 'Tam çevrimdışı yerel gizlilik.',
            },
            {
                title: 'Bar Modu',
                text: 'Loş ışıkta hızlı okuma.',
            },
        ],
        tableRows: [
            { label: 'YOĞUNLUK', value: 'ANALİTİK' },
            { label: 'DERECE (ABV)', value: 'KALİBRE' },
            { label: 'ŞEKER (BRIX)', value: 'GERÇEK ZAMANLI' },
        ],
    },
    benefits: {
        titleMain: 'Denge',
        titleHighlight: 'motoru.',
        description:
            'Endüstri için tasarlanmış teknik hesaplamalarla alkol, şeker ve asitlik arasındaki dengeyi görselleştirin.',
        items: [
            {
                title: 'Bilimsel Denge',
                text: 'Alkol, şeker ve asitlik arasında tam hesaplamalar.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Seyrelme Kalibrasyonu',
                text: 'Tekniğe göre ayarlama: Shake, Stir veya Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Klasik Kütüphane',
                text: 'Verilerle 70 ÜZERİ klasik tarif.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Oluşturucu',
                text: 'Kendi imzalarınızı tasarlayın ve kaydedin.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP Ekosistemi',
        subtitle: 'Miksoloji ve Standartlaştırma',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Servis',
        titleHighlight: 'MÜKEMMEL.',
        cta: 'Çok yakında Mağazalarda',
    },
};
