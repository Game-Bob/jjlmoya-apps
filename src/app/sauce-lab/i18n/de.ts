import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: 'Über 100 ikonische Saucenrezepte',
    description: 'Meistern Sie die Kunst des Saucier mit über 100 ikonischen Rezepten und einem professionellen kulinarischen Atlas.',
    slug: 'saucen-labor',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'Die Kunst des Saucier',
        subtitle: '+100 ikonische Saucen. Ein kulinarisches Meisterwerk.',
        priceLabel: '100% Kostenlos · Keine Abonnements',
        comingSoon: 'Demnächst in den Stores',
    },
    philosophy: {
        label: 'Philosophie',
        title: 'Kulinarisches Erbe',
        description: 'SauceLab ist nicht nur ein Rezeptbuch. Es ist ein kuratierter Atlas des Geschmacks, entworfen für den modernen Koch, der Wert auf Präzision, Geschichte und die Wissenschaft des Saucier legt. Wir glauben, dass die Beherrschung der Sauce das Fundament kulinarischer Exzellenz ist.',
    },
    benefits: {
        titleMain: 'Meistern Sie das',
        titleHighlight: 'Fundament',
        items: [
            {
                title: '+100 Ikonische Rezepte',
                text: 'Von den fünf Muttersaucen bis hin zu exotischen globalen Ableitungen. Jedes Rezept wurde auf professionelle Präzision getestet.',
                icon: 'chef-hat',
            },
            {
                title: 'Chemie des Geschmacks',
                text: 'Verstehen Sie das „Warum“ hinter dem Geschmack. Präzise Zutaten und klare, professionelle Anweisungen.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Ihr Küchenbegleiter funktioniert überall. Kein Internet erforderlich, um die perfekte Sauce zu kreieren.',
                icon: 'wifi-off',
            },
            {
                title: 'Keine Tracker',
                text: 'Keine Werbung, keine Abonnements, keine Datenerfassung. Nur pure kulinarische Exzellenz.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'Die Abstammung',
        titleMain: 'Heilige',
        titleHighlight: 'Hierarchie',
        description: 'Erkunden Sie den Stammbaum der Saucen. Von den grundlegenden Muttersaucen bis zu ihren unendlichen Ableitungen.',
        items: [
            {
                name: 'Béchamel',
                base: 'Milch + Weiße Mehlschwitze',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Heller Fond + Blonde Mehlschwitze',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Dunkler Fond + Dunkle Mehlschwitze',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Eigelb + Butteremulsion',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomate',
                base: 'Tomate + Heller Fond/Mehlschwitze',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'Die Wissenschaft',
        titleMain: 'Molekulare',
        titleHighlight: 'Präzision',
        description: 'Kochen ist Physik und Chemie. Meistern Sie die technischen Kräfte, die die perfekte Textur und das perfekte Geschmacksprofil erzeugen.',
        items: [
            {
                title: 'Emulgierung',
                description: 'Die Kunst, Öl und Wasser zu binden. Lernen Sie die Stabilitätsgeheimnisse von Hollandaise und Mayonnaise.',
            },
            {
                title: 'Reduktion',
                description: 'Konzentration des Geschmacks durch Verdampfung. Erreichen Sie die perfekte „Nappé“-Konsistenz.',
            },
            {
                title: 'Andicken',
                description: 'Von klassischen Mehlschwitzen bis hin zu modernen Stärkesuspensionen und Gemüsepürees.',
            },
            {
                title: 'Balance',
                description: 'Die Wissenschaft der Abstimmung von Säure, Salz und Fett, um die perfekte Geschmacksnote zu treffen.',
            },
        ],
    },
    atlas: {
        label: 'Gastro-Kartographie',
        titleMain: 'Entdecken Sie die',
        titleHighlight: 'Welt',
        description: 'Entdecken Sie die Wurzeln jedes Geschmacks durch einen immersiven regionalen Atlas. Von französischen Klassikern bis zu asiatischen Fermentationen.',
    },
    fix: {
        label: 'Fix-Modus',
        titleMain: 'Professionelle',
        titleHighlight: 'Rettung',
        description: 'Jedem Koch passiert es, dass eine Sauce gerinnt. Unser spezieller Fix-Bereich führt Sie durch Rettungstechniken.',
        steps: [
            {
                num: '01',
                title: 'Fehler identifizieren',
                description: 'Ist sie geronnen, zu dünn oder überwürzt? Die Diagnose ist der erste Schritt.',
            },
            {
                num: '02',
                title: 'Rettung anwenden',
                description: 'Temperaturanpassungen oder Emulgator-Balance. Professionelle Techniken zu Ihrer Verfügung.',
            },
            {
                num: '03',
                title: 'Letzter Schliff',
                description: 'Anpassung der Konsistenz und abschließendes Abschmecken für eine perfekte Wiederherstellung.',
            },
        ],
    },
    gallery: {
        title: 'Interface',
    },
};
