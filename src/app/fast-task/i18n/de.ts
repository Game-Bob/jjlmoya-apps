import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Aufgaben-Erfassung',
    subtitle: 'Schreiben. Senden. Vergessen. Ruhe.',
    description:
        'Erfassen Sie Bugs, Ideen oder Aufgaben in 3 Sekunden. Senden Sie Notizen per Chat an GitHub, Make oder Linear.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Schreiben. Senden. Vergessen. Ruhe.',
        price: '4,95€',
        priceLabel: 'Einmalige professionelle Zahlung',
    },
    concept: {
        label: 'Die Philosophie',
        main: 'NULL REIBUNG,',
        highlighted: 'ABSOLUTE GESCHWINDIGKEIT.',
        philosophy:
            'Fast Task ist kein schwerfälliger Projektmanager. Es ist Ihr ultraschneller Eingabekanal, damit nichts Ihren Fokus unterbricht.',
        highlights: [
            { label: 'Geschwindigkeit', value: '<3s' },
            { label: 'Integrationen', value: 'Nativ' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimieren Sie Ihren täglichen',
        titleHighlight: 'Workflow.',
        items: [
            {
                title: 'Erfassung in 3 Sekunden',
                text: 'Funktioniert wie ein Chat: Kommen, schreiben und senden. Keine Formulare, keine Pflichtfelder.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Pro-Integrationen',
                text: 'Verbinden Sie Ihre Projekte direkt mit GitHub, Linear oder Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Radikaler Datenschutz',
                text: 'Ihre Token und Aufgaben bleiben auf Ihrem Gerät. Keine Zwischenserver, kein Tracking.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Offline-First-Modus',
                text: 'Senden Sie Aufgaben auch ohne Netz. Die App synchronisiert im Hintergrund, sobald Sie wieder online sind.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Vom Gedanken zur Aktion in',
        steps: [
            {
                label: 'Schreiben',
                desc: 'Öffnen Sie die App und erfassen Sie Ihre Idee sofort.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Kontext',
                desc: 'Automatisch formatiert und angereichert.',
                icon: 'mdi:brain',
            },
            {
                label: 'Gesendet',
                desc: 'Direkt an Ihre Integration, bereit für die Produktion.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Offenes Ökosystem',
        titleMain: 'Native',
        titleHighlight: 'Integrationen',
        description:
            'Fast Task verbindet sich direkt mit den Tools, die Sie bereits nutzen. Ohne Vermittler, ohne Latenz.',
        ctaTitle: 'Benötigen Sie eine spezielle Integration?',
        ctaLinkText: 'Support kontaktieren',
        comingSoon: 'Demnächst',
    },
    earlyAdopter: {
        badge: 'Early Adopter Programm',
        titleMain: 'Wir schenken es',
        titleHighlight: 'Ihnen.',
        description:
            'Wir suchen echtes Feedback von anspruchsvollen Profis. Wenn Sie sich verpflichten, die App zu nutzen und uns Ihre ehrliche Meinung zu sagen, gehört die Lizenz Ihnen. Lebenslang.',
        countLabel: 'Verbleibende Lizenzen',
        countNote: 'Nur für die ersten 100, die uns mit echtem Interesse schreiben.',
        cta: 'ICH WILL MEINE LIZENZ',
    },
    enterprise: {
        label: 'Enterprise-Lösungen',
        titleMain: 'Wollen Sie eine App für Ihr',
        titleHighlight: 'Unternehmen?',
        description:
            'Wir transformieren die Produktivität von Hochleistungsteams. Native Tools mit derselben Fast Task DNA, angepasst an die Bedürfnisse Ihrer Organisation.',
        featureTitle: 'Maßgeschneidertes Ökosystem',
        featureText:
            'Integrationen mit Salesforce, SAP, Jira Enterprise und eigenen Datenbanken.',
        cta: 'Wollen wir sprechen?',
    },
    gallery: {
        title: 'Vorschau',
    },
    footer: {
        line1: 'Schreiben.',
        line2: 'Vergessen.',
        line3: 'Ruhe.',
        subtitle: 'Eliminieren Sie Reibung aus Ihrem Tag',
    },
};
