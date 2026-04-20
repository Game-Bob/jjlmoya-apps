import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: Penghitung Hari',
    subtitle: 'Waktu, menjadi seni.',
    description:
        'Kelola hitung mundur untuk momen paling istimewa Anda dengan desain yang elegan dan minimalis. Liburan, ulang tahun, atau target: buat setiap detik berharga.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: Penghitung Hari',
        titleStart: 'Setiap ',
        titleItalic: 'detik',
        titleEnd: 'adalah kemenangan.',
        subtitle:
            'Visualisasikan target Anda dan rayakan pencapaian Anda dengan alat paling elegan di Store.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: 'STATUS: MENDESAK',
        ctaTitle: 'Waktunya Anda menggunakan',
        ctaHighlight: 'Day Check: Penghitung Hari',
        ctaButton: 'Lakukan sekarang',
        daysLabel: 'Hari',
        hoursLabel: 'Jam',
        minsLabel: 'Menit',
        segsLabel: 'Detik',
        sinceLabel: 'SEJAK',
        targetLabel: 'TERSISA',
        cards: [
            { label: 'Hari tanpa rokok', type: 'since', emoji: '\u2728', tag: 'KESEHATAN' },
            { label: 'Perjalanan ke Jepang', type: 'target', emoji: '\uD83C\uDF38', tag: 'WISATA' },
            { label: 'Runtutan Gym', type: 'since', emoji: '\uD83D\uDD25', tag: 'FITNESS' },
        ],
    },
    benefits: {
        titleMain: 'Psikologi ',
        titleHighlight: 'Kebiasaan.',
        description:
            'Day Check menggunakan penguatan visual untuk mengubah disiplin menjadi permainan pengembangan diri. Setiap detik adalah bukti komitmen Anda.',
        items: [
            {
                title: 'Hitung Mundur dan Maju',
                text: 'Lacak waktu tersisa (Count down) atau waktu yang telah berlalu (Count up) sejak tanggal penting apa pun.',
                icon: 'mdi:timer-sand',
            },
            {
                title: 'Widget Asli',
                text: 'Jaga agar acara Anda selalu terlihat di layar beranda dengan widget yang elegan dan fungsional.',
                icon: 'mdi:widgets',
            },
            {
                title: 'Desain Glassmorphism',
                text: 'Antarmuka modern dengan efek kaca, buram, dan gradien cerah yang memanjakan mata.',
                icon: 'mdi:blur',
            },
            {
                title: 'Privasi Total',
                text: 'Data pribadi dan acara Anda tetap ada di perangkat Anda. Hidup Anda bersifat pribadi.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: 'Aplikasi Asli',
    },
    footer: {
        badge: 'TERSEDIA SEKARANG',
        titleMain: 'Kuasai',
        titleHighlight: 'Waktu Anda.',
        subtitle:
            'Mulai visualisasikan target Anda hari ini dengan Day Check.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
