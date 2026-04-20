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
        titleMain: 'CZY UNIKNIESZ',
        titleHighlight: 'KOLAPSU?',
        subtitle: 'Codzienne wyzwanie jest aktywne. Nie pozwól, aby litery wygrały dzisiaj.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Pobierz na',
        ratingText: '+5/5 ocenione przez społeczność',
    },
};
