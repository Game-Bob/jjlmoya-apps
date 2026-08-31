import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: 'Vorm woorden, overwin uitdagingen en voorkom de ineenstorting.',
    description: 'Test je mentale behendigheid in de ultieme woordpuzzel. Combineer letters op volle snelheid en voorkom de ineenstorting.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: 'Het woord van de dag is nu beschikbaar',
        subtitle: 'De ultieme woordpuzzel. Een snel, eindeloos spel ontworpen voor wendbare geesten.',
        artNote: 'Je volgende gezellige uitdaging wacht',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Download nu op',
    },
    gameModes: {
        titleMain: 'ERVARING',
        titleHighlight: '10/10',
        subtitle: 'Niet zomaar een woordspel. Een visuele en mentale uitdaging voor wie zich niet tevreden stelt met het minimum.',
        crash: {
            title: 'Pure Adrenaline',
            description: 'Vorm woorden onder druk. Letters wachten niet. Maak het bord leeg voordat de chaos je overweldigt.',
            alt: 'Crash-modus',
        },
        relax: {
            title: 'Mentale Meesterschap',
            description: 'Neem de tijd. Geen visuele druk, alleen jij en het bord. Vind de meest waardevolle combinaties.',
            alt: 'Ontspanningsmodus',
        },
        daily: {
            title: 'Mondiale Uitdaging',
            description: 'Elke dag een geheim woord. Iedereen strijdt om de snelste te zijn. Kun jij de ranglijst aanvoeren?',
            alt: 'Dagelijkse uitdaging',
        },
    },
    socialProof: {
        titleMain: 'SLUIT JE AAN BIJ DE',
        titleHighlight: 'BEWEGING',
        subtitle: 'Duizenden geesten tarten al de ineenstorting. Volg je voortgang, breek records en domineer het mondiale lexicon.',
        challengesLabel: 'Uitdagingen Overwonnen',
        wordsLabel: 'Woorden',
        ratingLabel: 'Beoordeling',
        feedUser1: '@Alex94',
        feedAction1: 'heeft zojuist het record gebroken in Crash-modus',
        feedUser2: '@Marta_Lex',
        feedAction2: 'heeft het woord van de dag gevonden',
        screenshotAlt: 'Schermafbeelding van LexiCrash',
    },
    roadmap: {
        titleMain: 'STEM JE',
        titleHighlight: 'PRIORITEIT',
        subtitle: 'We willen je horen. Kies welke sectie we in de volgende update moeten prioriteren.',
        items: [
            {
                title: 'Spelmodi',
                description: 'Nieuwe mechanismen en thematische borden voor een uitgebreidere tactiele ervaring.',
                tag: 'Onderdompeling',
            },
            {
                title: 'Verhaalmodus',
                description: 'Een epische reis door het lexicon met narratieve uitdagingen en vrijspeelbare items.',
                tag: 'Verhaal',
            },
            {
                title: 'Ranglijsten',
                description: 'Strijdt met de hele wereld en bewijs wie de ware meester van woorden is.',
                tag: 'Sociaal',
            },
        ],
        voteLabel: 'Klik om te stemmen',
        votedLabel: 'Gemarkeerd als prioriteit',
        feedbackTitle: 'Heb je een idee?',
        feedbackSub: 'Schrijf ons en help ons LexiCrash te verbeteren.',
    },
    finalCta: {
        titleMain: 'JE VOLGENDE',
        titleHighlight: 'WOORD WACHT',
        subtitle: 'Open LexiCrash, vind je ritme en geniet van een paar woorden zonder haast.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: 'Downloaden op',
        downloadAction: 'Downloaden',
        ratingText: 'Een warme woordpauze, geliefd bij de community',
    },
    cozyFeatures: {
        eyebrow: 'DE GEZELLIGE RONDE',
        titleMain: 'SPEEL EEN BEETJE.',
        titleHighlight: 'KOM BLIJ TERUG.',
        subtitle: 'Een rustig, kleurrijk woordritme voor korte pauzes, zachte focus en die momenten van “nog één woord”.',
        cards: [
            { title: 'Vind je ritme', description: 'Korte spellen, duidelijke borden en fijne combinaties vanaf het eerste woord.', alt: 'Scène uit de Crash-modus' },
            { title: 'Laat de keten gloeien', description: 'Elk woord voegt een vonkje toe. Maak combo’s, ruim het bord op en geniet van je vooruitgang.', alt: 'Scène uit de Crash-modus' },
            { title: 'Bouw een zachte reeks op', description: 'Kom terug voor het dagelijkse woord, vier je beste vondsten en laat je woordenwereld groeien.', alt: 'LexiCrash-voortgang en statistieken' },
        ],
    },
    storyShowcase: {
        eyebrow: 'EEN KLEINE WERELD VAN WOORDEN',
        titleMain: 'JOUW KLEINE',
        titleHighlight: 'WOORDENUNIVERSUM.',
        subtitle: 'Zachte wolken, speelse tegels en kleine vieringen maken van elke ronde een plek waar je graag terugkomt.',
        ariaLabel: 'LexiCrash-functies',
        bannerAlt: 'LexiCrash in een kleurrijk en gezellig woordenuniversum',
        pills: ['Dagelijkse rituelen', 'Gezellige uitdagingen', 'Persoonlijke records'],
    },
};
