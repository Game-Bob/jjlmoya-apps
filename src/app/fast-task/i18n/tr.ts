import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Görev Yakalama',
    subtitle: 'Yaz. Gönder. Unut. Huzur.',
    description:
        'Hataları, fikirleri veya görevleri 3 saniyede yakalayın. Notları sohbet üzerinden GitHub, Make veya Linear\'a gönderin.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Yaz. Gönder. Unut. Huzur.',
        price: '4,95€',
        priceLabel: 'Profesyonel tek seferlik ödeme',
    },
    concept: {
        label: 'Felsefe',
        main: 'SIFIR SÜRTÜNME,',
        highlighted: 'MUTLAK HIZ.',
        philosophy:
            'Fast Task hantal bir proje yöneticisi değildir. Odağınızın hiçbir şey tarafından kesintiye uğramaması için ultra hızlı giriş kanalınızdır.',
        highlights: [
            { label: 'Hız', value: '<3 sn' },
            { label: 'Entegrasyon', value: 'Yerel' },
            { label: 'Çevrimdışı', value: 'Öncelikli' },
        ],
    },
    benefits: {
        titleMain: 'Günlük iş akışınızı',
        titleHighlight: 'optimize edin.',
        items: [
            {
                title: '3 Saniyede Yakalayın',
                text: 'Bir sohbet gibi çalışır: Gelin, yazın ve gönderin. Form yok, zorunlu alanlar yok.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Pro Entegrasyonlar',
                text: 'Projelerinizi doğrudan GitHub, Linear veya Make\'e bağlayın.',
                icon: 'mdi:connection',
            },
            {
                title: 'Radikal Gizlilik',
                text: 'Tokenlarınız ve görevleriniz cihazınızda kalır. Aracı sunucu yok, izleme yok.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Offline-First Modu',
                text: 'Çekim gücü olmasa bile görevlerinizi gönderin. Uygulama, tekrar çevrimiçi olduğunuzda arka planda senkronize olur.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Düşünceden eyleme geçiş süresi:',
        steps: [
            {
                label: 'Yaz',
                desc: 'Uygulamayı açın ve fikrinizi anında yakalayın.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Bağlam',
                desc: 'Otomatik olarak formatlanır ve zenginleştirilir.',
                icon: 'mdi:brain',
            },
            {
                label: 'Gönderildi',
                desc: 'Doğrudan entegrasyonunuza, üretime hazır.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Açık Ekosistem',
        titleMain: 'Yerel',
        titleHighlight: 'Entegrasyonlar',
        description:
            'Fast Task, halihazırda kullandığınız araçlara doğrudan bağlanır. Aracı yok, gecikme yok.',
        ctaTitle: 'Özel bir entegrasyona mı ihtiyacınız var?',
        ctaLinkText: 'Destekle iletişime geçin',
        comingSoon: 'Yakında',
    },
    earlyAdopter: {
        badge: 'Early Adopter Programı',
        titleMain: 'Sizin için',
        titleHighlight: 'ücretsiz.',
        description:
            'Titiz profesyonellerden gerçek geri bildirimler bekliyoruz. Uygulamayı kullanmayı ve bize dürüst fikrinizi vermeyi taahhüt ederseniz, lisans sizin. Ömür boyu.',
        countLabel: 'Kalan Lisans Sayısı',
        countNote: 'Yalnızca bize yazarak gerçek ilgisini gösteren ilk 100 kişi için.',
        cta: 'LİSANSIMI İSTİYORUM',
    },
    enterprise: {
        label: 'Kurumsal Çözümler',
        titleMain: 'Şirketiniz için bir uygulama mı',
        titleHighlight: 'istiyorsunuz?',
        description:
            'Yüksek performanslı ekiplerin verimliliğini dönüştürüyoruz. Kuruluşunuzun ihtiyaçlarına göre uyarlanmış, Fast Task ile aynı DNA\'ya sahip yerel araçlar.',
        featureTitle: 'Özel Ekosistem',
        featureText:
            'Salesforce, SAP, Jira Enterprise ve özel veri tabanları ile entegrasyonlar.',
        cta: 'Konuşalım mı?',
    },
    gallery: {
        title: 'Önizleme',
    },
    footer: {
        line1: 'Yaz.',
        line2: 'Gönder.',
        line3: 'Huzur.',
        subtitle: 'Gününüzdeki sürtünmeyi ortadan kaldırın',
    },
};
