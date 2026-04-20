import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: Cattura Attività',
    subtitle: 'Scrivi. Invia. Dimentica. Pace.',
    description:
        'Cattura bug, idee o attività in 3 secondi. Invia note a GitHub, Make o Linear via chat.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: 'Scrivi. Invia. Dimentica. Pace.',
        price: '4,95€',
        priceLabel: 'Pagamento unico professionale',
    },
    concept: {
        label: 'La Filosofia',
        main: 'ZERO ATTRITO,',
        highlighted: 'VELOCITÀ ASSOLUTA.',
        philosophy:
            'Fast Task non è un pesante gestore di progetti. È il tuo canale di input ultra-veloce affinché nulla interrompa la tua concentrazione.',
        highlights: [
            { label: 'Velocità', value: '<3s' },
            { label: 'Integrazioni', value: 'Native' },
            { label: 'Offline', value: 'First' },
        ],
    },
    benefits: {
        titleMain: 'Ottimizza il tuo workflow',
        titleHighlight: 'quotidiano.',
        items: [
            {
                title: 'Cattura in 3 secondi',
                text: 'Funziona come una chat: arrivi, scrivi e invii. Niente moduli, niente campi obbligatori.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: 'Integrazioni Pro',
                text: 'Connetti i tuoi progetti direttamente con GitHub, Linear o Make.',
                icon: 'mdi:connection',
            },
            {
                title: 'Privacy Radicale',
                text: 'I tuoi token e le tue attività vivono sul tuo dispositivo. Niente server intermedi, niente tracciamento.',
                icon: 'mdi:shield-check',
            },
            {
                title: 'Modalità Offline-First',
                text: 'Invia le tue attività anche senza copertura. L\'app sincronizza in background quando torni online.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: 'Dal pensiero all\'azione in',
        steps: [
            {
                label: 'Scrivi',
                desc: 'Apri l\'app e cattura la tua idea al volo.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: 'Contesto',
                desc: 'Viene formattato e arricchito automaticamente.',
                icon: 'mdi:brain',
            },
            {
                label: 'Inviato',
                desc: 'Diretto alla tua integrazione, pronto per la produzione.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: 'Ecosistema Aperto',
        titleMain: 'Integrazioni',
        titleHighlight: 'Native',
        description:
            'Fast Task si connette direttamente con gli strumenti che già usi. Niente intermediari, niente latenza.',
        ctaTitle: 'Hai bisogno di un\'integrazione specifica?',
        ctaLinkText: 'Contatta il supporto',
        comingSoon: 'Prossimamente',
    },
    earlyAdopter: {
        badge: 'Programma Early Adopter',
        titleMain: 'Te la',
        titleHighlight: 'regaliamo.',
        description:
            'Cerchiamo feedback reale da professionisti esigenti. Se ti impegni a usare l\'app e a darci la tua opinione sincera, la licenza è tua. Per sempre.',
        countLabel: 'Licenze Rimanenti',
        countNote: 'Solo per i primi 100 che ci scrivono dimostrando un reale interesse.',
        cta: 'VOGLIO LA MIA LICENZA',
    },
    enterprise: {
        label: 'Soluzioni Enterprise',
        titleMain: 'Vuoi un\'app per la tua',
        titleHighlight: 'azienda?',
        description:
            'Trasformiamo la produttività di team ad alte prestazioni. Strumenti nativi con lo stesso DNA di Fast Task, adattati alle esigenze della tua organizzazione.',
        featureTitle: 'Ecosistema su misura',
        featureText:
            'Integrazioni con Salesforce, SAP, Jira Enterprise e database proprietari.',
        cta: 'Parliamone',
    },
    gallery: {
        title: 'Anteprima',
    },
    footer: {
        line1: 'Scrivi.',
        line2: 'Dimentica.',
        line3: 'Pace.',
        subtitle: 'Elimina l\'attrito dalla tua giornata',
    },
};
