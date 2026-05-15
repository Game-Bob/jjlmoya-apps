import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: 'Ponad 100 ikonicznych przepisów na sosy',
    description: 'Opanuj sztukę sosjerstwa dzięki ponad 100 ikonicznym przepisom i profesjonalnemu atlasowi kulinarnemu.',
    slug: 'laboratorium-sosow',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'Sztuka Sosjerstwa',
        subtitle: '+100 ikonicznych sosów. Jedno kulinarne arcydzieło.',
        priceLabel: '100% Darmowe · Bez subskrypcji',
        comingSoon: 'Wkrótce w sklepach',
    },
    philosophy: {
        label: 'Filozofia',
        title: 'Dziedzictwo Kulinarne',
        description: 'SauceLab to nie tylko książka kucharska. To starannie opracowany atlas smaków, stworzony dla nowoczesnego szefa kuchni, który ceni precyzję, historię i naukę o sosach. Wierzymy, że opanowanie sosów jest fundamentem kulinarnej doskonałości.',
    },
    benefits: {
        titleMain: 'Opanuj',
        titleHighlight: 'Fundamenty',
        items: [
            {
                title: '+100 ikonicznych przepisów',
                text: 'Od pięciu sosów matcznych po egzotyczne światowe pochodne. Każdy przepis przetestowany pod kątem profesjonalnej precyzji.',
                icon: 'chef-hat',
            },
            {
                title: 'Chemia smaku',
                text: 'Zrozum „dlaczego” kryjące się za smakiem. Precyzyjne składniki i jasne, profesjonalne instrukcje.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Twój kuchenny towarzysz działa wszędzie. Brak internetu nie przeszkodzi Ci w stworzeniu idealnego sosu.',
                icon: 'wifi-off',
            },
            {
                title: 'Zero śledzenia',
                text: 'Bez reklam, bez subskrypcji, bez zbierania danych. Tylko czysta kulinarna doskonałość.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'Rodowód',
        titleMain: 'Święta',
        titleHighlight: 'Hierarchia',
        description: 'Poznaj drzewo genealogiczne sosów. Od fundamentalnych sosów matcznych po ich nieskończone pochodne.',
        items: [
            {
                name: 'Béchamel',
                base: 'Mleko + biała zasmażka',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Biały wywar + jasna zasmażka',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Ciemny wywar + ciemna zasmażka',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Żółtka + emulsja maślana',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Pomidorowy',
                base: 'Pomidory + biały wywar/zasmażka',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'Nauka',
        titleMain: 'Molekularna',
        titleHighlight: 'Precyzja',
        description: 'Gotowanie to fizyka i chemia. Opanuj siły techniczne, które tworzą idealną teksturę i profil smakowy.',
        items: [
            {
                title: 'Emulgacja',
                description: 'Sztuka łączenia oleju i wody. Poznaj sekrety stabilności sosu holenderskiego i majonezu.',
            },
            {
                title: 'Redukcja',
                description: 'Koncentrowanie smaku poprzez odparowywanie. Osiągnij idealną konsystencję „nappé”.',
            },
            {
                title: 'Zagęszczanie',
                description: 'Od klasycznych zasmażek po nowoczesne zawiesiny skrobiowe i purée warzywne.',
            },
            {
                title: 'Balans',
                description: 'Nauka o dostosowywaniu kwasowości, soli i tłuszczu, aby trafić w idealną nutę smakową.',
            },
        ],
    },
    atlas: {
        label: 'Gastrokartografia',
        titleMain: 'Odkrywaj',
        titleHighlight: 'Świat',
        description: 'Poznaj korzenie każdego smaku dzięki wciągającemu atlasowi regionalnemu. Od francuskiej klasyki po azjatycką fermentację.',
    },
    fix: {
        label: 'Tryb Fix',
        titleMain: 'Profesjonalny',
        titleHighlight: 'Ratunek',
        description: 'Każdemu szefowi kuchni zdarza się, że sos się warzy. Nasza sekcja Fix przeprowadzi Cię przez techniki ratunkowe.',
        steps: [
            {
                num: '01',
                title: 'Zidentyfikuj błąd',
                description: 'Zwarzył się, jest za rzadki czy przesolony? Diagnoza to pierwszy krok.',
            },
            {
                num: '02',
                title: 'Zastosuj rozwiązanie',
                description: 'Regulacja temperatury lub balans emulgatorów. Profesjonalne techniki do Twojej dyspozycji.',
            },
            {
                num: '03',
                title: 'Ostatni szlif',
                description: 'Dostosowanie konsystencji i końcowe doprawienie dla idealnego rezultatu.',
            },
        ],
    },
    gallery: {
        title: 'Interfejs',
    },
};
