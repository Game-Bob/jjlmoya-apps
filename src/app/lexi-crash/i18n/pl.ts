import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Twórz słowa, pokonuj wyzwania i unikaj kolapsu.',
    description: 'Sprawdź swoją sprawność umysłową w ostatecznej układance słownej. Łącz litery z pełną prędkością i unikaj kolapsu.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Słowo dnia jest już dostępne',
        subtitle: 'Ostateczna układanka słowna. Szybka, nieskończona gra zaprojektowana dla sprawnych umysłów.',
        artNote: 'Twoje kolejne przytulne wyzwanie już czeka',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Pobierz teraz na',
    },
    gameModes: {
        titleMain: 'DOŚWIADCZENIE',
        titleHighlight: '10/10',
        subtitle: 'To nie tylko kolejna gra słowna. Wizualne i umysłowe wyzwanie dla tych, którzy nie zadowalają się minimum.',
        crash: {
            title: 'Czysta Adrenalina',
            description: 'Twórz słowa pod presją. Litery nie czekają. Oczyść planszę, zanim chaos cię przytłoczy.',
            alt: 'Tryb Crash',
        },
        relax: {
            title: 'Mistrzostwo Umysłu',
            description: 'Weź swój czas. Bez presji wizualnej, tylko ty i plansza. Znajdź najcenniejsze kombinacje.',
            alt: 'Tryb Relaks',
        },
        daily: {
            title: 'Globalne Wyzwanie',
            description: 'Tajne słowo każdego dnia. Wszyscy rywalizują, aby być najszybszym. Czy możesz prowadzić ranking?',
            alt: 'Codzienne wyzwanie',
        },
    },
    socialProof: {
        titleMain: 'DOŁĄCZ DO',
        titleHighlight: 'RUCHU',
        subtitle: 'Tysiące umysłów już teraz rzuca wyzwanie kolapsowi. Śledź swoje postępy, bij rekordy i dominuj w globalnym leksykonie.',
        challengesLabel: 'Pokonane Wyzwania',
        wordsLabel: 'Słowa',
        ratingLabel: 'Ocena',
        feedUser1: '@Alex94',
        feedAction1: 'właśnie pobił rekord w trybie Crash',
        feedUser2: '@Marta_Lex',
        feedAction2: 'znalazł słowo dnia',
        screenshotAlt: 'Zrzut ekranu LexiCrash',
    },
    roadmap: {
        titleMain: 'ZAGŁOSUJ NA SWÓJ',
        titleHighlight: 'PRIORYTET',
        subtitle: 'Chcemy cię wysłuchać. Wybierz, którą sekcję powinniśmy priorytetyzować w następnej aktualizacji.',
        items: [
            {
                title: 'Tryby Gry',
                description: 'Nowe mechaniki i tematyczne plansze, aby rozszerzyć doświadczenie dotykowe.',
                tag: 'Immersja',
            },
            {
                title: 'Tryb Fabularny',
                description: 'Epiczna podróż przez leksykon z narracyjnymi wyzwaniami i odblokowywalnymi elementami.',
                tag: 'Narracja',
            },
            {
                title: 'Rankingi',
                description: 'Rywalizuj z całym światem i udowodnij, kto jest prawdziwym mistrzem słów.',
                tag: 'Społeczny',
            },
        ],
        voteLabel: 'Kliknij, aby zagłosować',
        votedLabel: 'Oznaczono jako priorytet',
        feedbackTitle: 'Masz pomysł?',
        feedbackSub: 'Napisz do nas i pomóż nam ulepszyć LexiCrash.',
    },
    finalCta: {
        titleMain: 'TWOJE NASTĘPNE',
        titleHighlight: 'SŁOWO CZEKA',
        subtitle: 'Otwórz LexiCrash, znajdź swój rytm i ułóż kilka słów bez pośpiechu.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Pobierz na',
        downloadAction: 'Pobierz',
        ratingText: 'Ciepła chwila ze słowami, lubiana przez społeczność',
    },
    cozyFeatures: {
        eyebrow: 'PRZYTULNY RYTM',
        titleMain: 'ZAGRAJ CHWILĘ.',
        titleHighlight: 'WRÓĆ Z UŚMIECHEM.',
        subtitle: 'Spokojna, kolorowa gra słowna na krótką przerwę, ciche skupienie i chwile „jeszcze jedno słowo”.',
        cards: [
            { title: 'Znajdź swój rytm', description: 'Krótkie gry, przejrzyste plansze i satysfakcjonujące połączenia od pierwszego słowa.', alt: 'Scena z trybu Crash' },
            { title: 'Rozświetlaj łańcuch', description: 'Każde słowo dodaje iskierkę. Twórz kombinacje, czyść planszę i ciesz się postępem.', alt: 'Scena z trybu Crash' },
            { title: 'Buduj spokojną serię', description: 'Wracaj po słowo dnia, świętuj najlepsze znaleziska i rozwijaj swój słowny świat.', alt: 'Postępy i statystyki LexiCrash' },
        ],
    },
    storyShowcase: {
        eyebrow: 'MAŁY ŚWIAT SŁÓW',
        titleMain: 'TWÓJ MAŁY',
        titleHighlight: 'SŁOWNY WSZECHŚWIAT.',
        subtitle: 'Miękkie chmury, zabawne kafelki i małe świętowanie sprawiają, że do każdej rundy chce się wracać.',
        ariaLabel: 'Funkcje LexiCrash',
        bannerAlt: 'LexiCrash w kolorowym, przytulnym świecie słów',
        pills: ['Codzienne rytuały', 'Przytulne wyzwania', 'Rekordy osobiste'],
    },
};
