import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Penyeimbang Koktail',
    subtitle: 'Mixology: Keseimbangan & Resep',
    description:
        'Kalkulator keseimbangan koktail profesional, ABV, Brix, dan resep klasik.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Mixology: Keseimbangan & Resep',
        philosophy:
            'Tingkatkan konsistensi bar Anda dengan VESP: alat teknis mutakhir untuk bartender dan penggemar mixology yang mencari kesempurnaan ilmiah di setiap gelas.',
        price: 'Gratis',
        priceLabel: 'Tanpa langganan • Akses Instan',
    },
    techSpecs: {
        label: 'Mixology Presisi',
        conceptMain: 'TEKNIK DARI,',
        conceptHighlight: 'KUALITAS.',
        description:
            'Kalkulator keseimbangan koktail profesional, ABV, Brix, dan resep klasik.',
        specsLabel: 'Spesifikasi Teknis',
        features: [
            {
                title: 'Keseimbangan ABV/Brix',
                text: 'Kontrol kepadatan dan kandungan alkohol.',
            },
            {
                title: 'Tanpa Registrasi',
                text: 'Privasi offline lokal total.',
            },
            {
                title: 'Mode Bar',
                text: 'Pembacaan cepat di bawah lampu redup.',
            },
        ],
        tableRows: [
            { label: 'KEPADATAN', value: 'ANALITIS' },
            { label: 'KADAR (ABV)', value: 'TERKALIBRASI' },
            { label: 'GULA (BRIX)', value: 'WAKTU NYATA' },
        ],
    },
    benefits: {
        titleMain: 'Mesin',
        titleHighlight: 'keseimbangan.',
        description:
            'Visualisasikan keseimbangan antara alkohol, gula, dan keasaman melalui perhitungan teknis yang dirancang untuk industri.',
        items: [
            {
                title: 'Keseimbangan Ilmiah',
                text: 'Perhitungan tepat antara alkohol, gula, dan keasaman.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Kalibrasi Pengenceran',
                text: 'Penyesuaian berdasarkan teknik: Shake, Stir, atau Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Perpustakaan Klasik',
                text: 'Lebih dari 70 klasik dengan data fisikokimia.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Kreator',
                text: 'Rancang dan simpan kreasi Anda sendiri.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Ekosistem VESP',
        subtitle: 'Mixology & Standarisasi',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Layanan',
        titleHighlight: 'SEMPURNA.',
        cta: 'Tersedia sekarang',
    },
};
