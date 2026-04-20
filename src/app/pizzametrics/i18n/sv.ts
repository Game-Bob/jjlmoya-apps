import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: 'Precisionen din deg förtjänar.',
    description:
        'Beräkna ingredienser, vattentemperaturer och jäsningstider med vetenskaplig precision. Designad för pizzaiolos som söker professionella resultat vid varje bakning.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: 'Napolitansk Pizzakalkylator:',
        titleHighlight: 'Mästarprecision',
        titleEnd: 'i din Ficka.',
        subtitle:
            'Justera hydrering, jäst och jäsningstider baserat på kökets faktiska temperatur. Kompatibel med Biga, Poolish och direkt deg.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: 'Hämta i',
        downloadLabelPlay: 'Ladda ned på',
        scanLabel: 'Skanna för att installera',
        tagline: 'Designad för teknikentusiaster',
    },
    showCase: {
        feature1: {
            title: 'Klimatjustering',
            description: 'Beräkna exakt mängd jäst baserat på om det är varmt eller kallt.',
        },
        feature2: {
            title: 'Hantering av Fördeg',
            description: 'Kontrollera Biga och Poolish utan komplexa manuella beräkningar.',
        },
        feature3: {
            title: 'Bakningslogg',
            description: 'Spara dina recept och foton för att lära dig av varje bakning.',
        },
    },
    empathy: {
        title: 'Vi vet hur det känns...',
        quote1: 'Överjäst deg på grund av värmen? Pizzametrics justerar tiderna åt dig.',
        quote2:
            'Kämpar du med bageriprocent? Vi sköter matematiken, du skapar konsten.',
        quote3:
            'Slut på mjöl? Sektionen "Skafferi" varnar dig innan du börjar knåda.',
    },
    pantry: {
        title: 'Ditt bibliotek av',
        titleHighlight: 'Mjöl',
        description:
            'Alla mjölsorter absorberar inte vatten på samma sätt. I ditt Skafferi kan du hantera dina mjölsorter efter märke och styrka (W). Appen använder denna tekniska data för att justera beräkningar och garantera en perfekt cornicione.',
        descriptionHighlight: 'Skafferi',
        missionTitle: 'Globalt Uppdrag',
        missionSubtitle: 'Ett professionellt verktyg för en global gemenskap av pizzaiolos.',
    },
    gallery: {
        title: 'Pro',
        titleHighlight: 'Gränssnitt',
        imageAlt: 'Riktig appvy',
    },
    shorts: {
        titleMain: 'Appen i',
        titleHighlight: 'Rörelse',
        subtitle:
            'Ta en snabb titt på hur Pizzametrics förvandlar ditt kök till ett precisionslaboratorium.',
    },
    transparency: {
        quoteMain: 'Skapad av en pizzaälskare,',
        quoteHighlight: 'för pizzaälskare.',
        description:
            'Pizzametrics föddes för att eliminera mjölfläckade anteckningsböcker och beräkningsfel. Bara exakta data för din nästa cornicione.',
    },
    footer: {
        titleMain: 'Gå med i den',
        titleHighlight: 'Vetenskapliga Revolutionen',
        privacyLabel: 'Integritetspolicy',
        termsLabel: 'Villkor',
        scanLabel: 'Skanna för att ladda ned',
    },
};
