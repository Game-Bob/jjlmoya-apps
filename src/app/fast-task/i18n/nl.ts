import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Taakregistratie',
    subtitle: 'Schrijf. Verzend. Vergeet. Rust.',
    description:
        'Leg bugs, ideeën of taken vast in 3 seconden. Stuur notities naar GitHub, Make of Linear via chat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Schrijf. Verzend. Vergeet. Rust.',
        price: '€4,95',
        priceLabel: 'Eenmalige professionele betaling',
    },
    concept: {
        label: 'De Filosofie',
        main: 'GEEN WRIJVING,',
        highlighted: 'ABSOLUTE SNELHEID.',
        philosophy:
            'Fast Task is geen zware projectmanager. Het is uw ultrasnelle invoerkanaal zodat niets uw focus onderbreekt.',
        highlights: [
            { label: 'Snelheid', value: '<3s' },
            { label: 'Integraties', value: 'Nativ' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Optimaliseer uw dagelijkse',
        titleHighlight: 'workflow.',
        items: [
            {
                title: 'Vastleggen in 3 seconden',
                text: 'Werkt als een chat: u komt binnen, schrijft en verzendt. Geen formulieren, geen verplichte velden.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Pro Integraties',
                text: 'Verbind uw projecten rechtstreeks met GitHub, Linear of Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Radicale Privacy',
                text: 'Uw tokens en uw taken blijven op uw apparaat. Geen tussenservers, geen tracking.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Offline-First Modus',
                text: 'Verzamel uw taken zelfs zonder bereik. De app synchroniseert op de achtergrond wanneer u weer online bent.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Van gedachte naar actie in',
        steps: [
            {
                label: 'Schrijf',
                desc: 'Open de app en leg uw idee direct vast.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Context',
                desc: 'Wordt automatisch geformatteerd en verrijkt.',
                icon: 'mdi:brain',
            },
            {
                label: 'Verzonden',
                desc: 'Direct naar uw integratie, klaar voor productie.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Open Ecosysteem',
        titleMain: 'Native',
        titleHighlight: 'Integraties',
        description:
            'Fast Task verbindt rechtstreeks met de tools die u al gebruikt. Geen tussenpersonen, geen latentie.',
        ctaTitle: 'Een specifieke integratie nodig?',
        ctaLinkText: 'Contact opnemen met support',
        comingSoon: 'Binnenkort beschikbaar',
    },
    earlyAdopter: {
        badge: 'Early Adopter Programma',
        titleMain: 'We geven het u',
        titleHighlight: 'cadeau.',
        description:
            'We zoeken echte feedback van veeleisende professionals. Als u zich verbindt aan het gebruik van de app en ons uw eerlijke mening geeft, is de licentie voor u. Voor het leven.',
        countLabel: 'Resterende Licenties',
        countNote: 'Alleen voor de eerste 100 die ons schrijven met oprechte interesse.',
        cta: 'IK WIL MIJN LICENTIE',
    },
    enterprise: {
        label: 'Enterprise-oplossingen',
        titleMain: 'Wilt u een app voor uw',
        titleHighlight: 'bedrijf?',
        description:
            'We transformeren de productiviteit van high-performance teams. Native tools met hetzelfde Fast Task DNA, aangepast aan de behoeften van uw organisatie.',
        featureTitle: 'Ecosysteem op maat',
        featureText:
            'Integraties met Salesforce, SAP, Jira Enterprise en eigen databases.',
        cta: 'Zullen we praten?',
    },
    gallery: {
        title: 'Preview',
    },
    footer: {
        line1: 'Schrijf.',
        line2: 'Vergeet.',
        line3: 'Rust.',
        subtitle: 'Elimineer wrijving uit uw dag',
    },
};
