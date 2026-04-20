import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Przechwytywanie Zadań',
    subtitle: 'Napisz. Wyślij. Zapomnij. Spokój.',
    description:
        'Przechwyć błędy, pomysły lub zadania w 3 sekundy. Wysyłaj notatki do GitHub, Make lub Linear przez czat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Napisz. Wyślij. Zapomnij. Spokój.',
        price: '4,95€',
        priceLabel: 'Jednorazowa płatność profesjonalna',
    },
    concept: {
        label: 'Filozofia',
        main: 'ZERO TARCIA,',
        highlighted: 'ABSOLUTNA PRĘDKOŚĆ.',
        philosophy:
            'Fast Task nie jest ciężkim menedżerem projektów. To Twój ultraszybki kanał wejściowy, aby nic nie rozpraszało Twojej uwagi.',
        highlights: [
            { label: 'Prędkość', value: '<3s' },
            { label: 'Integracje', value: 'Natywne' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Zoptymalizuj swój dzienny',
        titleHighlight: 'workflow.',
        items: [
            {
                title: 'Przechwytywanie w 3 sekundy',
                text: 'Działa jak czat: wchodzisz, piszesz i wysyłasz. Bez formularzy, bez pól obowiązkowych.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Integracje Pro',
                text: 'Połącz swoje projekty bezpośrednio z GitHub, Linear lub Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Radykalna Prywatność',
                text: 'Twoje tokeny i zadania żyją na Twoim urządzeniu. Bez serwerów pośredniczących, bez śledzenia.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Tryb Offline-First',
                text: 'Wysyłaj zadania nawet bez zasięgu. Aplikacja synchronizuje się w tle, gdy wrócisz do sieci.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Od myśli do działania w',
        steps: [
            {
                label: 'Napisz',
                desc: 'Otwórz aplikację i uchwyć pomysł w locie.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Kontekst',
                desc: 'Automatycznie formatowane i wzbogacane.',
                icon: 'mdi:brain',
            },
            {
                label: 'Wysłano',
                desc: 'Prosto do Twojej integracji, gotowe do produkcji.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Otwarty Ekosystem',
        titleMain: 'Natywne',
        titleHighlight: 'Integracje',
        description:
            'Fast Task łączy się bezpośrednio z narzędziami, których już używasz. Bez pośredników, bez opóźnień.',
        ctaTitle: 'Potrzebujesz konkretnej integracji?',
        ctaLinkText: 'Kontakt z pomocą',
        comingSoon: 'Wkrótce',
    },
    earlyAdopter: {
        badge: 'Program Early Adopter',
        titleMain: 'Damy Ci ją',
        titleHighlight: 'w prezencie.',
        description:
            'Szukamy realnego feedbacku od wymagających profesjonalistów. Jeśli zobowiążesz się do korzystania z aplikacji i podzielenia się szczerą opinią, licencja jest Twoja. Na całe życie.',
        countLabel: 'Pozostałe Licencje',
        countNote: 'Tylko dla pierwszych 100 osób, które napiszą do nas wykazując realne zainteresowanie.',
        cta: 'CHCĘ MOJĄ LICENCJĘ',
    },
    enterprise: {
        label: 'Rozwiązania Enterprise',
        titleMain: 'Chcesz aplikację dla Twojej',
        titleHighlight: 'firmy?',
        description:
            'Transformujemy produktywność zespołów o wysokiej wydajności. Natywne narzędzia z tym samym DNA co Fast Task, dostosowane do potrzeb Twojej organizacji.',
        featureTitle: 'Ekosystem na miarę',
        featureText:
            'Integracje z Salesforce, SAP, Jira Enterprise i własnymi bazami danych.',
        cta: 'Porozmawiamy?',
    },
    gallery: {
        title: 'Podgląd',
    },
    footer: {
        line1: 'Napisz.',
        line2: 'Wyślij.',
        line3: 'Spokój.',
        subtitle: 'Wyeliminuj tarcie ze swojego dnia',
    },
};
