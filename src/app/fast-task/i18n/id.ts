import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Penangkapan Tugas',
    subtitle: 'Tulis. Kirim. Lupakan. Ketenangan.',
    description:
        'Tangkap bug, ide, atau tugas dalam 3 detik. Kirim catatan ke GitHub, Make, atau Linear melalui obrolan.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Tulis. Kirim. Lupakan. Ketenangan.',
        price: '€4,95',
        priceLabel: 'Pembayaran tunggal profesional',
    },
    concept: {
        label: 'Filosofi',
        main: 'TANPA GESEKAN,',
        highlighted: 'KECEPATAN ABSOLUT.',
        philosophy:
            'Fast Task bukanlah pengelola proyek yang berat. Ini adalah saluran input ultra-cepat Anda agar tidak ada yang mengganggu fokus Anda.',
        highlights: [
            { label: 'Kecepatan', value: '<3 d' },
            { label: 'Integrasi', value: 'Native' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimalkan alur kerja',
        titleHighlight: 'harian Anda.',
        items: [
            {
                title: 'Tangkap dalam 3 Detik',
                text: 'Bekerja seperti obrolan: datang, tulis, dan kirim. Tanpa formulir, tanpa kolom wajib.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Integrasi Pro',
                text: 'Hubungkan proyek Anda langsung dengan GitHub, Linear, atau Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Privasi Radikal',
                text: 'Token dan tugas Anda tetap ada di perangkat Anda. Tanpa server perantara, tanpa pelacakan.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Mode Offline-First',
                text: 'Kirim tugas Anda bahkan tanpa sinyal. Aplikasi akan sinkron di latar belakang saat Anda kembali online.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Dari pikiran ke tindakan dalam',
        steps: [
            {
                label: 'Tulis',
                desc: 'Buka aplikasi dan tangkap ide Anda saat itu juga.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Konteks',
                desc: 'Diformat dan diperkaya secara otomatis.',
                icon: 'mdi:brain',
            },
            {
                label: 'Terkirim',
                desc: 'Langsung ke integrasi Anda, siap untuk produksi.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Ekosistem Terbuka',
        titleMain: 'Integrasi',
        titleHighlight: 'Native',
        description:
            'Fast Task terhubung langsung dengan alat yang sudah Anda gunakan. Tanpa perantara, tanpa latensi.',
        ctaTitle: 'Butuh integrasi khusus?',
        ctaLinkText: 'Hubungi dukungan',
        comingSoon: 'Segera Hadir',
    },
    earlyAdopter: {
        badge: 'Program Early Adopter',
        titleMain: 'Kami bagi',
        titleHighlight: 'gratis.',
        description:
            'Kami mencari umpan balik nyata dari para profesional yang menuntut. Jika Anda berkomitmen untuk menggunakan aplikasi ini dan memberi kami opini jujur Anda, lisensinya milik Anda. Seumur hidup.',
        countLabel: 'Lisensi Tersisa',
        countNote: 'Hanya untuk 100 orang pertama yang menulis kepada kami dan menunjukkan minat nyata.',
        cta: 'SAYA MAU LISENSINYA',
    },
    enterprise: {
        label: 'Solusi Perusahaan',
        titleMain: 'Ingin aplikasi untuk',
        titleHighlight: 'perusahaan Anda?',
        description:
            'Kami mentransformasi produktivitas tim berkinerja tinggi. Alat native dengan DNA yang sama dengan Fast Task, disesuaikan dengan kebutuhan organisasi Anda.',
        featureTitle: 'Ekosistem Khusus',
        featureText:
            'Integrasi dengan Salesforce, SAP, Jira Enterprise, dan database milik sendiri.',
        cta: 'Bisa kita bicara?',
    },
    gallery: {
        title: 'Pratinjau',
    },
    footer: {
        line1: 'Tulis.',
        line2: 'Kirim.',
        line3: 'Ketenangan.',
        subtitle: 'Hilangkan hambatan dari hari Anda',
    },
};
