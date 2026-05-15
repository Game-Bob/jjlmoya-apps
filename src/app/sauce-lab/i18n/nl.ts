import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Iconische Sausrecepten',
    description: 'Beheers de kunst van de saucier met meer dan 100 iconische recepten en een professionele culinaire atlas.',
    slug: 'saus-lab',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'De Kunst van de Saucier',
        subtitle: '+100 iconische sauzen. Eén culinair meesterwerk.',
        priceLabel: '100% Gratis · Geen Abonnementen',
        comingSoon: 'Binnenkort in de stores',
    },
    philosophy: {
        label: 'Filosofie',
        title: 'Culinair Erfgoed',
        description: 'SauceLab is niet zomaar een receptenboek. Het is een samengestelde atlas van smaak, ontworpen voor de moderne chef die waarde hecht aan precisie, geschiedenis en de wetenschap van de saucier. Wij geloven dat beheersing van de saus de basis is van culinaire uitmuntendheid.',
    },
    benefits: {
        titleMain: 'Beheers de',
        titleHighlight: 'Basis',
        items: [
            {
                title: '+100 Iconische Recepten',
                text: 'Van de vijf Moedersauzen tot exotische wereldwijde afgeleiden. Elk recept is getest op professionele precisie.',
                icon: 'chef-hat',
            },
            {
                title: 'Chemie van Smaak',
                text: 'Begrijp het "waarom" achter de smaak. Precieze ingrediënten en duidelijke, professionele instructies.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Je keukenhulp werkt overal. Geen internet nodig om de perfecte saus te maken.',
                icon: 'wifi-off',
            },
            {
                title: 'Nul trackers',
                text: 'Geen advertenties, geen abonnementen, geen gegevensverzameling. Alleen pure culinaire perfectie.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'De Afstammelingslijn',
        titleMain: 'Heilige',
        titleHighlight: 'Hiërarchie',
        description: 'Verken de stamboom van sauzen. Van de fundamentele Moedersauzen tot hun oneindige afgeleiden.',
        items: [
            {
                name: 'Béchamel',
                base: 'Melk + Witte Roux',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Blanke Fond + Blonde Roux',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Bruine Fond + Bruine Roux',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Eidooier + Boteremulsie',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomaat',
                base: 'Tomaat + Blanke Fond/Roux',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'De Wetenschap',
        titleMain: 'Moleculaire',
        titleHighlight: 'Precisie',
        description: 'Koken is natuur- en scheikunde. Beheers de technische krachten die de perfecte textuur en smaakprofiel creëren.',
        items: [
            {
                title: 'Emulgeren',
                description: 'De kunst van het binden van olie en water. Leer de stabiliteitsgeheimen van Hollandaise en Mayonaise.',
            },
            {
                title: 'Reduceren',
                description: 'Smaak concentreren door verdamping. Bereik de perfecte "nappé" consistentie.',
            },
            {
                title: 'Indikken',
                description: 'Van klassieke Rouxs tot moderne zetmeelsuspensies en groentepurees.',
            },
            {
                title: 'Balans',
                description: 'De wetenschap van het afstemmen van zuur, zout en vet om de perfecte smaaknoot te raken.',
            },
        ],
    },
    atlas: {
        label: 'Gastro-cartografie',
        titleMain: 'Verken de',
        titleHighlight: 'Wereld',
        description: 'Ontdek de wortels van elke smaak via een meeslepende regionale atlas. Van Franse klassiekers tot Aziatische fermentaties.',
    },
    fix: {
        label: 'Fix-modus',
        titleMain: 'Professioneel',
        titleHighlight: 'Herstel',
        description: 'Elke chef krijgt wel eens te maken met een saus die schift. Onze speciale Fix-sectie helpt je met hersteltechnieken.',
        steps: [
            {
                num: '01',
                title: 'Identificeer de fout',
                description: 'Is het geschift, te dun of te zout? Diagnose is de eerste stap.',
            },
            {
                num: '02',
                title: 'Pas de fix toe',
                description: 'Temperatuuraanpassingen of emulgatorbalans. Professionele technieken tot je beschikking.',
            },
            {
                num: '03',
                title: 'Final polish',
                description: 'Aanpassen van consistentie en smaak voor een perfect herstel.',
            },
        ],
    },
    gallery: {
        title: 'Interface',
    },
};
