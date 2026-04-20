import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: Stabilizator Koktajli',
    subtitle: 'Miksologia: Balans i Przepisy',
    description:
        'Profesjonalny kalkulator balansu, ABV, Brix oraz klasycznych przepisów miksologicznych.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: 'Miksologia: Balans i Przepisy',
        philosophy:
            'Podnieś standard swojego baru dzięki VESP: ostatecznemu narzędziu technicznemu dla barmanów i entuzjastów miksologii poszukujących naukowej perfekcji w każdym szkle.',
        price: 'Za darmo',
        priceLabel: 'Bez subskrypcji • Natychmiastowy dostęp',
    },
    techSpecs: {
        label: 'Precyzyjna Miksologia',
        conceptMain: 'TECHNIKA,',
        conceptHighlight: 'JAKOŚĆ.',
        description:
            'Profesjonalny kalkulator balansu, ABV, Brix oraz klasycznych przepisów miksologicznych.',
        specsLabel: 'Specyfikacje Techniczne',
        features: [
            {
                title: 'Balans ABV/Brix',
                text: 'Kontroluj gęstość i zawartość alkoholu.',
            },
            {
                title: 'Brak Rejestracji',
                text: 'Pełna lokalna prywatność offline.',
            },
            {
                title: 'Tryb Barowy',
                text: 'Szybki odczyt przy przygaszonym świetle.',
            },
        ],
        tableRows: [
            { label: 'GĘSTOŚĆ', value: 'ANALITYCZNA' },
            { label: 'STOPIEŃ (ABV)', value: 'KALIBROWANY' },
            { label: 'CUKIER (BRIX)', value: 'W CZASIE RZECZYWISTYM' },
        ],
    },
    benefits: {
        titleMain: 'Silnik',
        titleHighlight: 'balansu.',
        description:
            'Wizualizuj równowagę między alkoholem, cukrem a kwasowością dzięki obliczeniom technicznym zaprojektowanym dla branży.',
        items: [
            {
                title: 'Naukowy Balans',
                text: 'Dokładne obliczenia między alkoholem, cukrem a kwasowością.',
                icon: 'mdi:flask-outline',
            },
            {
                title: 'Kalibracja Rozcieńczenia',
                text: 'Dostosowanie według techniki: Shake, Stir lub Direct.',
                icon: 'mdi:water-percent',
            },
            {
                title: 'Klasyczna Biblioteka',
                text: 'PONAD 70 klasyków z danymi fizykochemicznymi.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: 'Kreator',
                text: 'Projektuj i zapisuj własne autorskie przepisy.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'Ekosystem VESP',
        subtitle: 'Miksologia i Standaryzacja',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: 'Obsługa',
        titleHighlight: 'IDEALNA.',
        cta: 'Wkrótce w sklepach',
    },
};
