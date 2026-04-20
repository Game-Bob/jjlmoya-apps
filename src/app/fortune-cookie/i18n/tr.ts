import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fal-kurabiyesi',
    title: 'Fal Kurabiyesi',
    subtitle: 'Kaderin tek bir dokunuşta.',
    description: 'Günde tek bir dokunuş. Sayılmasını sağla. Söz biriktirmiyorsun, istikrar biriktiriyorsun.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'Çoğu kişi beklemeyi bilmez. Sen bilirsin.',
        description: 'Günde tek bir dokunuş. Sayılmasını sağla. Söz biriktirmiyorsun, istikrar biriktiriyorsun.',
        scanLabel: 'İndirmek için tara',
    },
    challenge: {
        title: 'Günlük Meydan Okuma.',
        crystalLabel: 'Kristal',
        standardLabel: 'Standart',
        lunarLabel: 'Ay',
        quote: 'Bugün dijital dünya yeni bir fırsat sundu.',
        quoteNote: 'Sadece uygulamada mevcut, önümüzdeki',
        quoteHighlight: '24 saat',
    },
    streak: {
        title: 'Kutsal Seri.',
        description: 'Söz biriktirmiyorsun, istikrar biriktiriyorsun.',
        descriptionHighlight: 'Hikayen gün be gün yazılıyor.',
        countdownPrefix: 'Bugünkü kurabiye şurada bitiyor:',
        tomorrowNote: 'Ama endişelenme, yarın bir başkası olacak',
        altarLabel: 'Altarın',
        nextMilestoneLabel: 'Sıradaki Dönüm Noktası',
        todayLabel: 'BUGÜN',
        dayPrefix: 'Gün',
    },
    showcase: {
        titleStart: 'Kaderin',
        titleHighlight: 'Işıltısı',
        titleEnd: '.',
        description: 'Altın, Yeşim ve Siyah kağıtlar. Bunlar sadece mesaj değil; istikrarının ve sezginin ödülleridir.',
    },
    events: {
        title: 'Süreli Etkinlikler.',
        subtitle: 'Kader mevsimlerle değişir. Yeni kurabiyeler, yeni mesajlar, yeni şanslar.',
        items: [
            {
                name: 'Sevgililer Günü',
                description: 'Aşk havada... ve şansında. Romantik kurabiyeleri bul.',
                date: '14 Şub',
            },
            {
                name: 'At Yılı',
                description: 'Altın ejderha ile talihi kutla. Müreffeh bir yıl için özel kurabiyeler.',
                date: '17 Şub',
            },
        ],
    },
    shorts: {
        title: 'Şu An Mevcut.',
        comingSoonCookies: 'Yakında — Daha Fazla Kurabiye',
        comingSoonEvents: 'Yakında — Yeni Etkinlikler',
    },
    footer: {
        title: 'Katılıyor musun?',
        subtitle: 'Serin tek bir tıkla başlar.',
        downloadPrefix: 'Şuradan indir:',
    },
};
