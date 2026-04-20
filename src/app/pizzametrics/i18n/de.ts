import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'Die Präzision, die dein Teig verdient.',
    description:
        'Berechne Zutaten, Wassertemperaturen und Fermentationszeiten mit wissenschaftlicher Genauigkeit. Entwickelt für Pizzaiolos, die bei jedem Backen professionelle Ergebnisse suchen.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Neapolitanischer Pizza-Rechner:',
        titleHighlight: 'Meisterhafte Präzision',
        titleEnd: 'in deiner Tasche.',
        subtitle:
            'Passe Hydratation, Hefe und Fermentationszeiten an die tatsächliche Temperatur deiner Küche an. Kompatibel mit Biga, Poolish und Direktteig.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Laden im',
        downloadLabelPlay: 'Jetzt bei',
        scanLabel: 'Zum Installieren scannen',
        tagline: 'Entwickelt für Technikbegeisterte',
    },
    showCase: {
        feature1: {
            title: 'Klimaanpassung',
            description: 'Berechne die exakte Hefemenge je nach Umgebungstemperatur.',
        },
        feature2: {
            title: 'Vorteig-Management',
            description: 'Kontrolliere Biga und Poolish ohne komplexe manuelle Berechnungen.',
        },
        feature3: {
            title: 'Knetprotokoll',
            description: 'Speichere Rezepte und Fotos, um aus jedem Backvorgang zu lernen.',
        },
    },
    empathy: {
        title: 'Wir wissen, wie es ist...',
        quote1: 'Überfermentierter Teig wegen Hitze? Pizzametrics passt die Zeiten für dich an.',
        quote2:
            'Probleme mit Bäckerprozenten? Wir machen die Mathematik, du machst die Kunst.',
        quote3:
            'Kein Mehl mehr da? Der Bereich „Vorratskammer“ warnt dich, bevor du mit dem Kneten beginnst.',
    },
    pantry: {
        title: 'Deine Bibliothek für',
        titleHighlight: 'Mehle',
        description:
            'Nicht jedes Mehl nimmt Wasser gleich auf. In deiner Vorratskammer kannst du Mehle nach Marke und Stärke (W) verwalten. Die App nutzt diese technischen Daten, um Berechnungen anzupassen und einen perfekten Cornicione zu garantieren.',
        descriptionHighlight: 'Vorratskammer',
        missionTitle: 'Globale Mission',
        missionSubtitle: 'Ein Werkzeug für eine globale Gemeinschaft von Pizzaiolos.',
    },
    gallery: {
        title: 'Pro',
        titleHighlight: 'Interface',
        imageAlt: 'Echte App-Ansicht',
    },
    shorts: {
        titleMain: 'Die App in',
        titleHighlight: 'Bewegung',
        subtitle:
            'Wirf einen kurzen Blick darauf, wie Pizzametrics deine Küche in ein Präzisionslabor verwandelt.',
    },
    transparency: {
        quoteMain: 'Erstellt von einem Pizzaliebhaber,',
        quoteHighlight: 'für Pizzaliebhaber.',
        description:
            'Pizzametrics wurde geschaffen, um mehlverschmierte Notizbücher und Rechenfehler zu eliminieren. Nur präzise Daten für deinen nächsten Cornicione.',
    },
    footer: {
        titleMain: 'Werde Teil der',
        titleHighlight: 'wissenschaftlichen Revolution',
        privacyLabel: 'Datenschutzrichtlinie',
        termsLabel: 'AGB',
        scanLabel: 'Zum Herunterladen scannen',
    },
};
