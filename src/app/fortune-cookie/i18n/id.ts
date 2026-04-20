import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'kue-keberuntungan',
    title: 'Kue Keberuntungan',
    subtitle: 'Nasibmu dalam satu sentuhan.',
    description: 'Satu sentuhan sehari. Jadikan itu berharga. Kamu tidak mengoleksi kutipan, kamu mengoleksi konsistensi.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'Kebanyakan orang tidak tahu cara menunggu. Kamu tahu.',
        description: 'Satu sentuhan sehari. Jadikan itu berharga. Kamu tidak mengoleksi kutipan, kamu mengoleksi konsistensi.',
        scanLabel: 'Pindai untuk mengunduh',
    },
    challenge: {
        title: 'Tantangan Harian.',
        crystalLabel: 'Kristal',
        standardLabel: 'Standar',
        lunarLabel: 'Lunar',
        quote: 'Hari ini dunia digital telah membuka peluang baru.',
        quoteNote: 'Hanya tersedia di aplikasi selama',
        quoteHighlight: '24 jam ke depan',
    },
    streak: {
        title: 'Runtutan Suci.',
        description: 'Kamu tidak mengoleksi kutipan, kamu mengoleksi konsistensi.',
        descriptionHighlight: 'Kisahmu ditulis hari demi hari.',
        countdownPrefix: 'Kue hari ini berakhir dalam:',
        tomorrowNote: 'Tapi tenang, besok akan ada yang lain',
        altarLabel: 'Altarmu',
        nextMilestoneLabel: 'Pencapaian Berikutnya',
        todayLabel: 'HARI INI',
        dayPrefix: 'Hari',
    },
    showcase: {
        titleStart: 'Kilauan ',
        titleHighlight: 'Takdir',
        titleEnd: '.',
        description: 'Kertas Emas, Giok, dan Hitam. Itu bukan sekadar pesan; itu adalah trofi dari konsistensi dan intuisimu.',
    },
    events: {
        title: 'Acara Musiman.',
        subtitle: 'Takdir berubah seiring musim. Kue baru, pesan baru, keberuntungan baru.',
        items: [
            {
                name: 'Hari Valentine',
                description: 'Cinta ada di udara... dan dalam keberuntunganmu. Temukan kue-kue romantis.',
                date: '14 Feb',
            },
            {
                name: 'Tahun Kuda',
                description: 'Rayakan keberuntungan dengan naga emas. Kue spesial untuk tahun yang makmur.',
                date: '17 Feb',
            },
        ],
    },
    shorts: {
        title: 'Sudah Tersedia.',
        comingSoonCookies: 'Segera Hadir — Lebih Banyak Kue',
        comingSoonEvents: 'Segera Hadir — Acara Baru',
    },
    footer: {
        title: 'Mau bergabung?',
        subtitle: 'Runtutanmu dimulai dengan satu klik.',
        downloadPrefix: 'Unduh di',
    },
};
