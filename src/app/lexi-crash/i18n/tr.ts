import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Kelimeler oluştur, meydan okumaları geç ve çöküşü önle.',
    description: 'Nihai kelime bulmacasında zihinsel çevikliğini test et. Tam hızda harfleri birleştir ve çöküşü önle.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Günün kelimesi artık mevcut',
        subtitle: 'Nihai kelime bulmacası. Çevik zihinler için tasarlanmış hızlı ve sonsuz bir oyun.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Hemen indir',
    },
    gameModes: {
        titleMain: 'DENEYİM',
        titleHighlight: '10/10',
        subtitle: 'Bu sadece başka bir kelime oyunu değil. Temel olanla yetinmeyenler için görsel ve zihinsel bir meydan okuma.',
        crash: {
            title: 'Saf Adrenalin',
            description: 'Baskı altında kelimeler oluştur. Harfler beklemez. Kaos seni geçmeden tahtayı temizle.',
            alt: 'Crash Modu',
        },
        relax: {
            title: 'Zihinsel Ustalık',
            description: 'Zamanını al. Görsel baskı yok, sadece sen ve tahta. En değerli kombinasyonları bul.',
            alt: 'Rahatla Modu',
        },
        daily: {
            title: 'Küresel Meydan Okuma',
            description: 'Her gün bir gizli kelime. Herkes en hızlı olmak için yarışır. Sıralamayı liderleyebilir misin?',
            alt: 'Günlük Meydan Okuma',
        },
    },
    socialProof: {
        titleMain: 'HAREKETE',
        titleHighlight: 'KATIL',
        subtitle: 'Binlerce zihin zaten çöküşe meydan okuyor. İlerlemenizi takip et, rekorlar kır ve küresel sözlüğe hükmet.',
        challengesLabel: 'Tamamlanan Meydan Okumalar',
        wordsLabel: 'Kelimeler',
        ratingLabel: 'Puan',
        feedUser1: '@Alex94',
        feedAction1: 'az önce Crash Modunda rekoru kırdı',
        feedUser2: '@Marta_Lex',
        feedAction2: 'günün kelimesini buldu',
        screenshotAlt: 'LexiCrash Ekran Görüntüsü',
    },
    roadmap: {
        titleMain: 'ÖNCELİĞİNİ',
        titleHighlight: 'OY VER',
        subtitle: 'Seni duymak istiyoruz. Bir sonraki güncellemede hangi bölümü önceliklendirmemiz gerektiğini seç.',
        items: [
            {
                title: 'Oyun Modları',
                description: 'Dokunsal deneyimi genişletmek için yeni mekanikler ve tematik tahtalar.',
                tag: 'Sürükleyicilik',
            },
            {
                title: 'Hikaye Modu',
                description: 'Anlatı meydan okumaları ve açılabilirlerle sözlük boyunca destansı bir yolculuk.',
                tag: 'Anlatı',
            },
            {
                title: 'Sıralamalar',
                description: 'Tüm dünyayla yarış ve kelimelerin gerçek ustasının kim olduğunu kanıtla.',
                tag: 'Sosyal',
            },
        ],
        voteLabel: 'Oy vermek için tıkla',
        votedLabel: 'Öncelik olarak işaretlendi',
        feedbackTitle: 'Bir fikrin mi var?',
        feedbackSub: 'Bize yaz ve LexiCrash\'ı geliştirmemize yardım et.',
    },
    finalCta: {
        titleMain: 'ÇÖKÜŞÜ',
        titleHighlight: 'ÖNLEYEBİLECEK MİSİN?',
        subtitle: 'Günlük meydan okuma aktif. Harflerin bugün kazanmasına izin verme.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'İndir',
        ratingText: 'Topluluk tarafından +5/5 puanlandı',
    },
};
