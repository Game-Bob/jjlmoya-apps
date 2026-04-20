import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lyckokaka',
    title: 'Lyckokaka',
    subtitle: 'Ditt öde med en enda beröring.',
    description: 'En touch om dagen. Få det att räknas. Du samlar inte på fraser, du samlar på uthållighet.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: 'De flesta kan inte vänta. Det kan du.',
        description: 'En touch om dagen. Få det att räknas. Du samlar inte på fraser, du samlar på uthållighet.',
        scanLabel: 'Skanna för att ladda ner',
    },
    challenge: {
        title: 'Den dagliga utmaningen.',
        crystalLabel: 'Kristall',
        standardLabel: 'Standard',
        lunarLabel: 'Måne',
        quote: 'Idag har den digitala världen låst upp en ny möjlighet.',
        quoteNote: 'Endast tillgänglig i appen under de kommande',
        quoteHighlight: '24 timmar',
    },
    streak: {
        title: 'Den heliga sviten.',
        description: 'Du samlar inte på fraser, du samlar på uthållighet.',
        descriptionHighlight: 'Din historia skrivs dag för dag.',
        countdownPrefix: 'Dagens kaka går ut om:',
        tomorrowNote: 'Men oroa dig inte, i morgon kommer en till',
        altarLabel: 'Ditt Altar',
        nextMilestoneLabel: 'Nästa milstolpe',
        todayLabel: 'IDAG',
        dayPrefix: 'Dag',
    },
    showcase: {
        titleStart: 'Ödets',
        titleHighlight: 'Lyster',
        titleEnd: '.',
        description: 'Guld, Jade och Svarta papper. De är inte bara meddelanden; de är troféerna för din uthållighet och din intuition.',
    },
    events: {
        title: 'Säsongsbetonade event.',
        subtitle: 'Ödet förändras med årstiderna. Nya kakor, nya meddelanden, ny lycka.',
        items: [
            {
                name: 'Alla hjärtans dag',
                description: 'Kärleken är i luften... och i din lycka. Hitta de romantiska kakorna.',
                date: '14 feb',
            },
            {
                name: 'Hästens år',
                description: 'Fira lyckan med den gyllene draken. Specialkakor för ett framgångsrikt år.',
                date: '17 feb',
            },
        ],
    },
    shorts: {
        title: 'Nu tillgänglig.',
        comingSoonCookies: 'Kommer snart — Fler kakor',
        comingSoonEvents: 'Kommer snart — Nya event',
    },
    footer: {
        title: 'Hänger du med?',
        subtitle: 'Din svit börjar med ett klick.',
        downloadPrefix: 'Ladda ner på',
    },
};
