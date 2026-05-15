import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: 'Över 100 ikoniska såsrecept',
    description: 'Mästra konsten som saucier med över 100 ikoniska recept och en professionell kulinarisk atlas.',
    slug: 'saslaboratorium',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'Konsten som Saucier',
        subtitle: '+100 ikoniska såser. Ett kulinariskt mästerverk.',
        priceLabel: '100 % gratis · Inga prenumerationer',
        comingSoon: 'Kommer snart till butiker',
    },
    philosophy: {
        label: 'Filosofi',
        title: 'Kulinariskt Arv',
        description: 'SauceLab är inte bara en receptbok. Det är en kurerad smak-atlas, designad för den moderna kocken som värdesätter precision, historia och vetenskapen bakom såser. Vi tror att mästerskap i såser är grunden för kulinarisk excellens.',
    },
    benefits: {
        titleMain: 'Mästra',
        titleHighlight: 'Grunden',
        items: [
            {
                title: '+100 ikoniska recept',
                text: 'Från de fem grundsåserna till exotiska globala derivat. Varje recept är testat för professionell precision.',
                icon: 'chef-hat',
            },
            {
                title: 'Smakens kemi',
                text: 'Förstå "varför" bakom smaken. Exakta ingredienser och tydliga, professionella instruktioner.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Din kökskamrat fungerar överallt. Inget internet behövs för att skapa den perfekta såsen.',
                icon: 'wifi-off',
            },
            {
                title: 'Noll spårare',
                text: 'Ingen reklam, inga prenumerationer, ingen datainsamling. Bara ren kulinarisk excellens.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'Släktet',
        titleMain: 'Helig',
        titleHighlight: 'Hierarki',
        description: 'Utforska såsernas släktträd. Från de grundläggande modersåserna till deras oändliga derivat.',
        items: [
            {
                name: 'Béchamel',
                base: 'Mjölk + Vit roux',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Ljus buljong + Ljus roux',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Mörk buljong + Mörk roux',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Äggula + Smöremulsion',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomat',
                base: 'Tomat + Ljus buljong/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'Vetenskapen',
        titleMain: 'Molekylär',
        titleHighlight: 'Precision',
        description: 'Matlagning är fysik och kemi. Mästra de tekniska krafterna som skapar den perfekta texturen och smakprofilen.',
        items: [
            {
                title: 'Emulgering',
                description: 'Konsten att binda olja och vatten. Lär dig stabilitetshemligheterna bakom hollandaise och majonnäs.',
            },
            {
                title: 'Reduktion',
                description: 'Koncentrera smak genom avdunstning. Uppnå den perfekta "nappé"-konsistensen.',
            },
            {
                title: 'Redning',
                description: 'Från klassiska rouxer till moderna stärkelselösningar och grönsakspuréer.',
            },
            {
                title: 'Balans',
                description: 'Vetenskapen bakom att justera syra, salt och fett för att hitta den perfekta smaknoten.',
            },
        ],
    },
    atlas: {
        label: 'Gastro-kartografi',
        titleMain: 'Utforska',
        titleHighlight: 'Världen',
        description: 'Upptäck rötterna till varje smak genom en uppslukande regional atlas. Från franska klassiker till asiatiska fermenteringar.',
    },
    fix: {
        label: 'Fix-läge',
        titleMain: 'Professionell',
        titleHighlight: 'Räddning',
        description: 'Varje kock stöter på en sås som skär sig. Vår dedikerade Fix-sektion guidar dig genom räddningstekniker.',
        steps: [
            {
                num: '01',
                title: 'Identifiera felet',
                description: 'Har den skurit sig, är den för tunn eller för salt? Diagnosen är första steget.',
            },
            {
                num: '02',
                title: 'Utför räddningen',
                description: 'Temperaturjusteringar eller emulgeringsbalans. Professionella tekniker till ditt förfogande.',
            },
            {
                num: '03',
                title: 'Sista putsen',
                description: 'Justera konsistens och kryddning för en perfekt återställning.',
            },
        ],
    },
    gallery: {
        title: 'Gränssnitt',
    },
};
