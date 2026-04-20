import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Gün Sayacı',
    subtitle: 'Zaman, sanata dönüştü.',
    description:
        'En özel anlarınız için geri sayımı zarif ve minimalist bir tasarımla yönetin. Tatiller, yıldönümleri veya hedefler: her saniyenin kıymetini bilin.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Gün Sayacı',
        titleStart: 'Her ',
        titleItalic: 'saniye',
        titleEnd: 'bir zaferdir.',
        subtitle:
            'Hedeflerinizi görselleştirin ve başarılarınızı Store\'daki en zarif araçla kutlayın.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'DURUM: ACİL',
        ctaTitle: 'Day Check kullanma',
        ctaHighlight: 'vaktin geldi',
        ctaButton: 'Şimdi yap',
        daysLabel: 'Gün',
        hoursLabel: 'Saat',
        minsLabel: 'Dak',
        segsLabel: 'Sn',
        sinceLabel: 'SÜRESİNCE',
        targetLabel: 'KALAN',
        cards: [
            { label: 'Sigarasız günler', type: 'since', emoji: '\u2728', tag: 'SAĞLIK' },
            { label: 'Japonya seyahati', type: 'target', emoji: '\uD83C\uDF38', tag: 'SEYAHAT' },
            { label: 'Spor serisi', type: 'since', emoji: '\uD83D\uDD25', tag: 'FİTNESS' },
        ],
    },
    benefits: {
        titleMain: 'Alışkanlık ',
        titleHighlight: 'Psikolojisi.',
        description:
            'Day Check, disiplini bir kendini geliştirme oyununa dönüştürmek için görsel pekiştirme kullanır. Her saniye bağlılığınızın bir kanıtıdır.',
        items: [
            {
                title: 'Geri ve İleri Sayım',
                text: 'Herhangi bir önemli tarihten itibaren kalan süreyi (Count down) veya geçen süreyi (Count up) takip edin.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Yerel Widget\'lar',
                text: 'Zarif ve işlevsel widget\'larla etkinliklerinizi ana ekranınızda her zaman görünür tutun.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Glassmorphism Tasarımı',
                text: 'Cam efektleri, bulanıklıklar ve göze hitap eden canlı degradeler içeren modern arayüz.',
                icon: 'mdi:blur',
            },
            {
                title: 'Tam Gizlilik',
                text: 'Kişisel verileriniz ve etkinlikleriniz cihazınızda kalır. Hayatınız size özeldir.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'Gerçek Uygulama',
    },
    footer: {
        badge: 'ŞİMDİ İNDİRİLEBİLİR',
        titleMain: 'Zamanına',
        titleHighlight: 'Hükmet.',
        subtitle:
            'Day Check ile hedeflerinizi bugün görselleştirmeye başlayın.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
