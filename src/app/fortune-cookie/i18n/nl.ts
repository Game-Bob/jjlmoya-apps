import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'gelukskoekje',
    title: 'Gelukskoekje',
    subtitle: 'Je lot in één aanraking.',
    description: 'Eén aanraking per dag. Laat het tellen. Je verzamelt geen citaten, je verzamelt standvastigheid.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'De meesten kunnen niet wachten. Jij wel.',
        description: 'Eén aanraking per dag. Laat het tellen. Je verzamelt geen citaten, je verzamelt standvastigheid.',
        scanLabel: 'Scannen om te downloaden',
    },
    challenge: {
        title: 'De Dagelijkse Uitdaging.',
        crystalLabel: 'Kristal',
        standardLabel: 'Standaard',
        lunarLabel: 'Lunaire',
        quote: 'Vandaag heeft de digitale wereld een nieuwe kans ontgrendeld.',
        quoteNote: 'Alleen beschikbaar in de app gedurende de volgende',
        quoteHighlight: '24 uur',
    },
    streak: {
        title: 'De Heilige Reeks.',
        description: 'Je verzamelt geen citaten, je verzamelt standvastigheid.',
        descriptionHighlight: 'Je verhaal wordt dag na dag geschreven.',
        countdownPrefix: 'Het koekje van vandaag eindigt over:',
        tomorrowNote: 'Maar maak je geen zorgen, morgen is er weer een',
        altarLabel: 'Jouw Altaar',
        nextMilestoneLabel: 'Volgende Mijlpaal',
        todayLabel: 'VANDAAG',
        dayPrefix: 'Dag',
    },
    showcase: {
        titleStart: 'De',
        titleHighlight: 'Glans',
        titleEnd: 'van het Lot.',
        description: 'Goud-, Jade- en Zwart papier. Het zijn geen simpele boodschappen; het zijn de trofeeën van je standvastigheid en intuïtie.',
    },
    events: {
        title: 'Tijdelijke Evenementen.',
        subtitle: 'Het lot verandert met de seizoenen. Nieuwe koekjes, nieuwe berichten, nieuw geluk.',
        items: [
            {
                name: 'Valentijnsdag',
                description: 'Liefde hangt in de lucht... en in je geluk. Vind de romantische koekjes.',
                date: '14 feb',
            },
            {
                name: 'Jaar van het Paard',
                description: 'Vier het geluk met de gouden draak. Speciale koekjes voor een voorspoedig jaar.',
                date: '17 feb',
            },
        ],
    },
    shorts: {
        title: 'Nu Beschikbaar.',
        comingSoonCookies: 'Binnenkort — Meer koekjes',
        comingSoonEvents: 'Binnenkort — Nieuwe evenementen',
    },
    footer: {
        title: 'Doe je mee?',
        subtitle: 'Je reeks begint met één klik.',
        downloadPrefix: 'Downloaden in',
    },
};
