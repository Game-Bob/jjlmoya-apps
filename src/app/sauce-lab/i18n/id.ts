import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Resep Saus Ikonik',
    description: 'Kuasai seni saucier dengan lebih dari 100 resep ikonik och atlas kuliner profesional.',
    slug: 'lab-saus',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'Seni Sang Saucier',
        subtitle: '+100 saus ikonik. Satu mahakarya kuliner.',
        priceLabel: '100% Gratis · Tanpa Langganan',
        comingSoon: 'Segera hadir di toko aplikasi',
    },
    philosophy: {
        label: 'Filosofi',
        title: 'Warisan Kuliner',
        description: 'SauceLab bukan sekadar buku resep. Ini adalah atlas rasa yang dikurasi, dirancang untuk koki modern yang menghargai presisi, sejarah, dan sains di balik pembuatan saus. Kami percaya bahwa penguasaan saus adalah landasan keunggulan kuliner.',
    },
    benefits: {
        titleMain: 'Kuasai',
        titleHighlight: 'Landasannya',
        items: [
            {
                title: '100+ Resep Ikonik',
                text: 'Dari lima Saus Induk hingga turunan global yang eksotis. Setiap resep diuji untuk presisi profesional.',
                icon: 'chef-hat',
            },
            {
                title: 'Kimia Rasa',
                text: 'Pahami "mengapa" di balik rasa. Bahan yang presisi dan instruksi profesional yang jelas.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Teman dapur Anda bekerja di mana saja. Tidak perlu internet untuk membuat saus yang sempurna.',
                icon: 'wifi-off',
            },
            {
                title: 'Tanpa Pelacak',
                text: 'Tanpa iklan, tanpa langganan, tanpa pengumpulan data. Hanya keunggulan kuliner murni.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'Silsilah',
        titleMain: 'Hierarki',
        titleHighlight: 'Suci',
        description: 'Jelajahi pohon silsilah saus. Dari Saus Induk yang mendasar hingga turunan tak terbatasnya.',
        items: [
            {
                name: 'Béchamel',
                base: 'Susu + White Roux',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Kaldu Putih + Blond Roux',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Kaldu Cokelat + Brown Roux',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Kuning Telur + Emulsi Mentega',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomat',
                base: 'Tomat + Kaldu Putih/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'Sains',
        titleMain: 'Presisi',
        titleHighlight: 'Molekuler',
        description: 'Memasak adalah fisika och kimia. Kuasai kekuatan teknis yang menciptakan tekstur och profil rasa yang sempurna.',
        items: [
            {
                title: 'Emulsifikasi',
                description: 'Seni menyatukan minyak och air. Pelajari rahasia stabilitas Hollandaise och Mayones.',
            },
            {
                title: 'Reduksi',
                description: 'Memekatkan rasa melalui penguapan. Capai konsistensi "nappé" yang sempurna.',
            },
            {
                title: 'Pengentalan',
                description: 'Dari Roux klasik hingga suspensi pati modern och purée sayuran.',
            },
            {
                title: 'Keseimbangan',
                description: 'Sains menyesuaikan tingkat keasaman, garam, och lemak untuk mencapai nada rasa yang sempurna.',
            },
        ],
    },
    atlas: {
        label: 'Gastro Kartografi',
        titleMain: 'Jelajahi',
        titleHighlight: 'Dunia',
        description: 'Temukan akar dari setiap rasa melalui atlas regional yang imersif. Dari klasik Prancis hingga fermentasi Asia.',
    },
    fix: {
        label: 'Mode Fix',
        titleMain: 'Pemulihan',
        titleHighlight: 'Profesional',
        description: 'Setiap koki pasti pernah mengalami saus yang pecah. Bagian Fix khusus kami memandu Anda melalui teknik pemulihan.',
        steps: [
            {
                num: '01',
                title: 'Identifikasi masalah',
                description: 'Apakah pecah, terlalu encer, or terlalu asin? Diagnosis adalah langkah pertama.',
            },
            {
                num: '02',
                title: 'Terapkan perbaikan',
                description: 'Penyesuaian suhu atau keseimbangan pengemulsi. Teknik profesional siap Anda gunakan.',
            },
            {
                num: '03',
                title: 'Sentuhan akhir',
                description: 'Menyesuaikan konsistensi dan bumbu akhir untuk restorasi yang sempurna.',
            },
        ],
    },
    gallery: {
        title: 'Antarmuka',
    },
};
