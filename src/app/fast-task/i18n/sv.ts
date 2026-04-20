import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Fånga Uppgifter',
    subtitle: 'Skriv. Skicka. Glöm. Lugn.',
    description:
        'Fånga buggar, idéer eller uppgifter på 3 sekunder. Skicka anteckningar till GitHub, Make eller Linear via chatt.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Skriv. Skicka. Glöm. Lugn.',
        price: '4,95€',
        priceLabel: 'Professionell engångsbetalning',
    },
    concept: {
        label: 'Filosofin',
        main: 'NOLL FRIKTION,',
        highlighted: 'ABSOLUT HASTIGHET.',
        philosophy:
            'Fast Task är inte en tung projekthanterare. Det är din ultrasnabba ingångskanal så att inget avbryter ditt fokus.',
        highlights: [
            { label: 'Hastighet', value: '<3s' },
            { label: 'Integreringar', value: 'Native' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimera ditt dagliga',
        titleHighlight: 'arbetsflöde.',
        items: [
            {
                title: 'Fånga på 3 sekunder',
                text: 'Fungerar som en chatt: kom in, skriv och skicka. Inga formulär, inga obligatoriska fält.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Pro-integreringar',
                text: 'Koppla dina projekt direkt till GitHub, Linear eller Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Radikal Integritet',
                text: 'Dina tokens och uppgifter lever på din enhet. Inga mellanhänder, ingen spårning.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Offline-First-läge',
                text: 'Skicka dina uppgifter även utan täckning. Appen synkroniserar i bakgrunden när du är online igen.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Från tanke till handling på',
        steps: [
            {
                label: 'Skriv',
                desc: 'Öppna appen och fånga din idé i farten.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Kontext',
                desc: 'Formateras och berikas automatiskt.',
                icon: 'mdi:brain',
            },
            {
                label: 'Skickat',
                desc: 'Direkt till din integrering, redo för produktion.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Öppet Ekosystem',
        titleMain: 'Native',
        titleHighlight: 'Integreringar',
        description:
            'Fast Task ansluter direkt till verktygen du redan använder. Inga mellanhänder, ingen latens.',
        ctaTitle: 'Behöver du en specifik integrering?',
        ctaLinkText: 'Kontakta support',
        comingSoon: 'Kommer snart',
    },
    earlyAdopter: {
        badge: 'Early Adopter Program',
        titleMain: 'Vi ger den',
        titleHighlight: 'till dig.',
        description:
            'Vi söker verklig feedback från krävande proffs. Om du förbinder dig att använda appen och ge oss din ärliga åsikt, är licensen din. För livet.',
        countLabel: 'Återstående Licenser',
        countNote: 'Endast för de första 100 som skriver till oss och visar verkligt intresse.',
        cta: 'JAG VILL HA MIN LICENS',
    },
    enterprise: {
        label: 'Enterprise-lösningar',
        titleMain: 'Vill du ha en app för ditt',
        titleHighlight: 'företag?',
        description:
            'Vi transformerar produktiviteten för högpresterande team. Native-verktyg med samma Fast Task-DNA, anpassade efter din organisations behov.',
        featureTitle: 'Skräddarsytt ekosystem',
        featureText:
            'Integreringar med Salesforce, SAP, Jira Enterprise och egna databaser.',
        cta: 'Ska vi prata?',
    },
    gallery: {
        title: 'Förhandsvisning',
    },
    footer: {
        line1: 'Skriv.',
        line2: 'Skicka.',
        line3: 'Lugn.',
        subtitle: 'Eliminera friktion från din dag',
    },
};
