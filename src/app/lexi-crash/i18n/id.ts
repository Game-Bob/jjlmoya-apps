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
        screenshotAlt: 'Screenshot LexiCrash',
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
        titleMain: 'AKANKAH KAMU MENGHINDARI',
        titleHighlight: 'KERUNTUHAN?',
        subtitle: 'Tantangan harian sedang aktif. Jangan biarkan huruf menang hari ini.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Unduh di',
        ratingText: '+5/5 dinilai oleh komunitas',
    },
};
