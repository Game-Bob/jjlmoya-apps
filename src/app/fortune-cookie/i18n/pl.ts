import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'ciasteczko-z-wrozba',
    title: 'Ciasteczko z Wróżbą',
    subtitle: 'Twoje przeznaczenie w jednym dotknięciu.',
    description: 'Jeden dotyk dziennie. Niech się liczy. Nie kolekcjonujesz sentencji, kolekcjonujesz wytrwałość.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'Większość nie potrafi czekać. Ty tak.',
        description: 'Jeden dotyk dziennie. Niech się liczy. Nie kolekcjonujesz sentencji, kolekcjonujesz wytrwałość.',
        scanLabel: 'Zeskanuj, aby pobrać',
    },
    challenge: {
        title: 'Codzienne Wyzwanie.',
        crystalLabel: 'Kryształowe',
        standardLabel: 'Standardowe',
        lunarLabel: 'Księżycowe',
        quote: 'Dzisiaj świat cyfrowy odblokował nową szansę.',
        quoteNote: 'Dostępne tylko w aplikacji przez następne',
        quoteHighlight: '24 godziny',
    },
    streak: {
        title: 'Święta Seria.',
        description: 'Nie kolekcjonujesz sentencji, kolekcjonujesz wytrwałość.',
        descriptionHighlight: 'Twoja historia pisze się dzień po dniu.',
        countdownPrefix: 'Dzisiejsze ciasteczko kończy się za:',
        tomorrowNote: 'Ale spokojnie, jutro będzie kolejne',
        altarLabel: 'Twój Ołtarz',
        nextMilestoneLabel: 'Kolejny Kamień Milowy',
        todayLabel: 'DZISIAJ',
        dayPrefix: 'Dzień',
    },
    showcase: {
        titleStart: 'Blask ',
        titleHighlight: 'Przeznaczenia',
        titleEnd: '.',
        description: 'Złote, Jadeitowe i Czarne papiery. To nie są zwykłe wiadomości; to trofea Twojej wytrwałości i intuicji.',
    },
    events: {
        title: 'Wydarzenia Czasowe.',
        subtitle: 'Przeznaczenie zmienia się wraz z porami roku. Nowe ciasteczka, nowe wiadomości, nowe szczęście.',
        items: [
            {
                name: 'Walentynki',
                description: 'Miłość wisi w powietrzu... i w Twoim szczęściu. Znajdź romantyczne ciasteczka.',
                date: '14 lut',
            },
            {
                name: 'Rok Konia',
                description: 'Świętuj pomyślność ze złotym smokiem. Specjalne ciasteczka na pomyślny rok.',
                date: '17 lut',
            },
        ],
    },
    shorts: {
        title: 'Już Dostępne.',
        comingSoonCookies: 'Wkrótce — Więcej ciasteczek',
        comingSoonEvents: 'Wkrótce — Nowe wydarzenia',
    },
    footer: {
        title: 'Dołączysz do nas?',
        subtitle: 'Twoja seria zaczyna się od jednego kliknięcia.',
        downloadPrefix: 'Pobierz w',
    },
};
