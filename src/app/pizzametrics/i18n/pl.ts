import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'Precyzja, na jaką zasługuje Twoje ciasto.',
    description:
        'Obliczaj składniki, temperaturę wody i czas fermentacji z naukową dokładnością. Zaprojektowany dla pizzaiolo szukających profesjonalnych rezultatów przy każdym wypieku.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Kalkulator pizzy neapolitańskiej:',
        titleHighlight: 'Mistrzowska Precyzja',
        titleEnd: 'w Twojej Kieszeni.',
        subtitle:
            'Dostosuj nawodnienie, drożdże i czas fermentacji do rzeczywistej temperatury w Twojej kuchni. Kompatybilny z Biga, Poolish i ciastem bezpośrednim.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Pobierz w',
        downloadLabelPlay: 'Pobierz z',
        scanLabel: 'Zeskanuj, aby zainstalować',
        tagline: 'Zaprojektowany dla pasjonatów techniki',
    },
    showCase: {
        feature1: {
            title: 'Dostosowanie Klimatyczne',
            description: 'Oblicz dokładną ilość drożdży w zależności od temperatury otoczenia.',
        },
        feature2: {
            title: 'Zarządzanie Rozczynem',
            description: 'Kontroluj Biga i Poolish bez skomplikowanych ręcznych obliczeń.',
        },
        feature3: {
            title: 'Dziennik Wypieków',
            description: 'Zapisuj swoje przepisy i zdjęcia, aby uczyć się z każdego wypieku.',
        },
    },
    empathy: {
        title: 'Wiemy, jak to jest...',
        quote1: 'Przefermentowane ciasto przez upał? Pizzametrics dostosuje czas za Ciebie.',
        quote2:
            'Problemy z procentami piekarniczymi? My zajmiemy się matematyką, Ty tworzysz sztukę.',
        quote3:
            'Zabrakło mąki? Sekcja „Spiżarnia” ostrzeże Cię, zanim zaczniesz wyrabianie.',
    },
    pantry: {
        title: 'Twoja Biblioteka',
        titleHighlight: 'Mąk',
        description:
            'Nie każda mąka chłonie wodę tak samo. W swojej Spiżarni możesz zarządzać mąkami według marki i siły (W). Aplikacja wykorzystuje te dane techniczne do korygowania obliczeń i gwarantuje idealne cornicione.',
        descriptionHighlight: 'Spiżarnia',
        missionTitle: 'Misja Globalna',
        missionSubtitle: 'Profesjonalne narzędzie dla globalnej społeczności pizzaiolo.',
    },
    gallery: {
        title: 'Interfejs',
        titleHighlight: 'Pro',
        imageAlt: 'Prawdziwy widok aplikacji',
    },
    shorts: {
        titleMain: 'Aplikacja w',
        titleHighlight: 'Ruchu',
        subtitle:
            'Zobacz szybko, jak Pizzametrics zmienia Twoją kuchnię w laboratorium precyzji.',
    },
    transparency: {
        quoteMain: 'Stworzone przez miłośnika pizzy,',
        quoteHighlight: 'dla miłośników pizzy.',
        description:
            'Pizzametrics powstało, aby wyeliminować notesy poplamione mąką i błędy w obliczeniach. Tylko dokładne dane dla Twojego następnego cornicione.',
    },
    footer: {
        titleMain: 'Dołącz do',
        titleHighlight: 'Naukowej Rewolucji',
        privacyLabel: 'Polityka Prywatności',
        termsLabel: 'Regulamin',
        scanLabel: 'Zeskanuj, aby pobrać',
    },
};
