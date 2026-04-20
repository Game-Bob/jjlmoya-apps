import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'Presisi yang layak untuk adonan Anda.',
    description:
        'Hitung bahan, suhu air, dan waktu fermentasi dengan presisi ilmiah. Dirancang untuk pizzaiolo yang mencari hasil profesional di setiap panggangan.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Kalkulator Pizza Neapolitan:',
        titleHighlight: 'Presisi Sang Ahli',
        titleEnd: 'di Saku Anda.',
        subtitle:
            'Sesuaikan hidrasi, ragi, dan waktu fermentasi berdasarkan suhu aktual dapur Anda. Kompatibel dengan Biga, Poolish, dan adonan langsung.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Unduh di',
        downloadLabelPlay: 'Tersedia di',
        scanLabel: 'Pindai untuk menginstal sekarang',
        tagline: 'Dirancang untuk penggemar teknis',
    },
    showCase: {
        feature1: {
            title: 'Penyesuaian Iklim',
            description: 'Hitung jumlah ragi yang tepat berdasarkan cuaca panas atau dingin.',
        },
        feature2: {
            title: 'Manajemen Preferment',
            description: 'Kontrol Biga dan Poolish tanpa perhitungan manual yang rumit.',
        },
        feature3: {
            title: 'Log Pengadukan',
            description: 'Simpan resep dan foto Anda untuk belajar dari setiap panggangan.',
        },
    },
    empathy: {
        title: 'Kami tahu bagaimana rasanya...',
        quote1: 'Adonan over-fermentasi karena panas? Pizzametrics menyesuaikan waktunya untuk Anda.',
        quote2:
            'Kesulitan dengan persentase pembuat roti? Kami melakukan hitungannya, Anda membuat seninya.',
        quote3:
            'Kehabisan tepung? Bagian "Dapur" memperingatkan Anda sebelum Anda mulai mengaduk.',
    },
    pantry: {
        title: 'Perpustakaan',
        titleHighlight: 'Tepung Anda',
        description:
            'Tidak semua tepung menyerap air dengan cara yang sama. Di Dapur, Anda dapat mengelola tepung berdasarkan merek dan kekuatan (W). Aplikasi menggunakan data teknis ini untuk menyesuaikan perhitungan dan menjamin cornicione yang sempurna.',
        descriptionHighlight: 'Dapur',
        missionTitle: 'Misi Global',
        missionSubtitle: 'Alat profesional untuk komunitas pizzaiolo global.',
    },
    gallery: {
        title: 'Antarmuka',
        titleHighlight: 'Pro',
        imageAlt: 'Tampilan Aplikasi Nyata',
    },
    shorts: {
        titleMain: 'Aplikasi dalam',
        titleHighlight: 'Gerakan',
        subtitle:
            'Lihat sekilas bagaimana Pizzametrics mengubah dapur Anda menjadi laboratorium presisi.',
    },
    transparency: {
        quoteMain: 'Dibuat oleh pecinta pizza,',
        quoteHighlight: 'untuk pecinta pizza.',
        description:
            'Pizzametrics lahir untuk menghilangkan catatan yang terkena noda tepung dan kesalahan perhitungan. Hanya data akurat untuk cornicione Anda berikutnya.',
    },
    footer: {
        titleMain: 'Bergabunglah dengan',
        titleHighlight: 'Revolusi Ilmiah',
        privacyLabel: 'Kebijakan Privasi',
        termsLabel: 'Syarat dan Ketentuan',
        scanLabel: 'Pindai untuk mengunduh',
    },
};
