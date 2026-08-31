import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Susun kata, taklukkan tantangan, dan hindari keruntuhan.',
    description: 'Uji ketangkasan mentalmu dalam puzzle kata terbaik. Gabungkan huruf sekencang mungkin dan hindari keruntuhan.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Kata hari ini sudah tersedia',
        subtitle: 'Puzzle kata terbaik. Game cepat dan tak terbatas yang dirancang untuk pikiran yang gesit.',
        artNote: 'Tantangan nyaman berikutnya sudah menunggu',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Unduh sekarang di',
    },
    gameModes: {
        titleMain: 'PENGALAMAN',
        titleHighlight: '10/10',
        subtitle: 'Bukan sekadar game kata biasa. Tantangan visual dan mental untuk mereka yang tidak puas dengan hal-hal dasar.',
        crash: {
            title: 'Adrenalin Murni',
            description: 'Susun kata di bawah tekanan. Huruf tidak pernah menunggu. Bersihkan papan sebelum kekacauan menguasaimu.',
            alt: 'Mode Crash',
        },
        relax: {
            title: 'Penguasaan Mental',
            description: 'Ambil waktumu. Tanpa tekanan visual, hanya kamu dan papan. Temukan kombinasi paling berharga.',
            alt: 'Mode Relax',
        },
        daily: {
            title: 'Tantangan Global',
            description: 'Satu kata rahasia setiap hari. Semua orang bersaing untuk menjadi yang tercepat. Bisakah kamu memimpin peringkat?',
            alt: 'Tantangan Harian',
        },
    },
    socialProof: {
        titleMain: 'BERGABUNGLAH DENGAN',
        titleHighlight: 'GERAKAN',
        subtitle: 'Ribuan pikiran sudah menantang keruntuhan. Lacak kemajuanmu, pecahkan rekor, dan dominasi leksikon global.',
        challengesLabel: 'Tantangan Ditaklukkan',
        wordsLabel: 'Kata',
        ratingLabel: 'Penilaian',
        feedUser1: '@Alex94',
        feedAction1: 'baru saja memecahkan rekor di Mode Crash',
        feedUser2: '@Marta_Lex',
        feedAction2: 'menemukan kata hari ini',
        screenshotAlt: 'Tangkapan layar LexiCrash',
    },
    roadmap: {
        titleMain: 'PILIH',
        titleHighlight: 'PRIORITASMU',
        subtitle: 'Kami ingin mendengarmu. Pilih bagian mana yang harus kami prioritaskan di pembaruan berikutnya.',
        items: [
            {
                title: 'Mode Permainan',
                description: 'Mekanik baru dan papan bertema untuk memperluas pengalaman taktil.',
                tag: 'Imersi',
            },
            {
                title: 'Mode Cerita',
                description: 'Perjalanan epik melalui leksikon dengan tantangan naratif dan konten yang bisa dibuka.',
                tag: 'Narasi',
            },
            {
                title: 'Peringkat',
                description: 'Bersaing dengan seluruh dunia dan buktikan siapa maestro kata sejati.',
                tag: 'Sosial',
            },
        ],
        voteLabel: 'Klik untuk memilih',
        votedLabel: 'Ditandai sebagai prioritas',
        feedbackTitle: 'Punya ide?',
        feedbackSub: 'Tulis kepada kami dan bantu kami meningkatkan LexiCrash.',
    },
    finalCta: {
        titleMain: 'KATA BERIKUTNYA',
        titleHighlight: 'SUDAH MENUNGGU',
        subtitle: 'Buka LexiCrash, temukan ritmemu, dan nikmati beberapa kata tanpa terburu-buru.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Unduh di',
        downloadAction: 'Unduh',
        ratingText: 'Jeda kata yang hangat, disukai komunitas',
    },
    cozyFeatures: {
        eyebrow: 'RITME YANG NYAMAN',
        titleMain: 'MAIN SEBENTAR.',
        titleHighlight: 'KEMBALI DENGAN SENANG.',
        subtitle: 'Ritme permainan kata yang tenang dan penuh warna untuk jeda singkat, fokus lembut, dan momen “satu kata lagi”.',
        cards: [
            { title: 'Temukan ritmemu', description: 'Permainan singkat, papan yang jelas, dan kombinasi memuaskan sejak kata pertama.', alt: 'Adegan Mode Crash' },
            { title: 'Buat rantainya bersinar', description: 'Setiap kata menambahkan kilau kecil. Buat combo, bersihkan papan, dan nikmati progresmu.', alt: 'Adegan Mode Crash' },
            { title: 'Bangun rentetan lembut', description: 'Kembali untuk Kata Harian, rayakan temuan terbaikmu, dan lihat dunia katamu tumbuh.', alt: 'Progres dan statistik LexiCrash' },
        ],
    },
    storyShowcase: {
        eyebrow: 'DUNIA KATA KECIL',
        titleMain: 'SEMESTA KATA',
        titleHighlight: 'KECIL MILIKMU.',
        subtitle: 'Awan lembut, keping ceria, dan perayaan kecil membuat setiap ronde terasa seperti tempat yang ingin kamu kunjungi lagi.',
        ariaLabel: 'Fitur LexiCrash',
        bannerAlt: 'LexiCrash dalam dunia kata yang berwarna dan nyaman',
        pills: ['Ritual harian', 'Tantangan nyaman', 'Skor terbaik pribadi'],
    },
};
