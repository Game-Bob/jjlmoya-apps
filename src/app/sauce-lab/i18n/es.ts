import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100+ Recetas de Salsas Icónicas',
    description: 'Domina el arte del saucier con más de 100 recetas icónicas y un atlas culinario profesional.',
    slug: 'sauce-lab',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'El Arte del Saucier',
        subtitle: '+100 salsas icónicas. Una obra maestra culinaria.',
        priceLabel: '100% Gratis · Sin Suscripciones',
        comingSoon: 'Próximamente en Tiendas',
    },
    philosophy: {
        label: 'Filosofía',
        title: 'Herencia Culinaria',
        description: 'SauceLab no es solo un libro de recetas. Es un atlas de sabor curado, diseñado para el chef moderno que valora la precisión, la historia y la ciencia del saucier. Creemos que la maestría de la salsa es la base de la excelencia culinaria.',
    },
    benefits: {
        titleMain: 'Domina los',
        titleHighlight: 'Fundamentos',
        items: [
            {
                title: '+100 Recetas Icónicas',
                text: 'Desde las cinco Salsas Madre hasta derivados globales exóticos. Cada receta probada con precisión profesional.',
                icon: 'chef-hat',
            },
            {
                title: 'Química del Sabor',
                text: 'Entiende el "por qué" detrás del gusto. Ingredientes precisos e instrucciones profesionales claras.',
                icon: 'beaker',
            },
            {
                title: '100% Offline',
                text: 'Tu compañero de cocina funciona en cualquier lugar. Sin necesidad de internet para crear la salsa perfecta.',
                icon: 'wifi-off',
            },
            {
                title: 'Sin Rastreadores',
                text: 'Sin anuncios, sin suscripciones, sin recolección de datos. Pura excelencia culinaria.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: 'El Linaje',
        titleMain: 'Jerarquía',
        titleHighlight: 'Sagrada',
        description: 'Explora el árbol genealógico de las salsas. Desde las Salsas Madre fundacionales hasta sus infinitos derivados.',
        items: [
            {
                name: 'Béchamel',
                base: 'Leche + Roux Blanco',
                derivatives: ['Mornay', 'Soubise', 'Aurore', 'Nantua'],
            },
            {
                name: 'Velouté',
                base: 'Fondo Blanco + Roux Rubio',
                derivatives: ['Allemande', 'Suprême', 'Bercy', 'Normande'],
            },
            {
                name: 'Espagnole',
                base: 'Fondo Oscuro + Roux Oscuro',
                derivatives: ['Demi-Glace', 'Bordelaise', 'Robert', 'Chasseur'],
            },
            {
                name: 'Hollandaise',
                base: 'Yemas + Emulsión de Mantequilla',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomate',
                base: 'Tomate + Fondo/Mirepoix',
                derivatives: ['Provençale', 'Portugaise', 'Marinara', 'Bolognese'],
            },
        ],
    },
    chemistry: {
        label: 'La Ciencia',
        titleMain: 'Precisión',
        titleHighlight: 'Molecular',
        description: 'Cocinar es física y química. Domina las fuerzas técnicas que crean la textura y el perfil de sabor perfectos.',
        items: [
            {
                title: 'Emulsificación',
                description: 'El arte de unir aceite y agua. Aprende los secretos de estabilidad de la Holandesa y la Mayonesa.',
            },
            {
                title: 'Reducción',
                description: 'Concentrar el sabor mediante la evaporación. Logra la consistencia "nappé" perfecta.',
            },
            {
                title: 'Espesado',
                description: 'Desde los Rouxs clásicos hasta suspensiones modernas de almidón y purés vegetales.',
            },
            {
                title: 'Equilibrio',
                description: 'La ciencia de ajustar la acidez, la sal y la grasa para alcanzar la nota gustativa perfecta.',
            },
        ],
    },
    atlas: {
        label: 'Cartografía Gastronómica',
        titleMain: 'Explora el',
        titleHighlight: 'Mundo',
        description: 'Descubre las raíces de cada sabor a través de un atlas regional inmersivo. Desde clásicos franceses hasta fermentaciones asiáticas.',
    },
    fix: {
        label: 'Modo Arreglo',
        titleMain: 'Recuperación',
        titleHighlight: 'Profesional',
        description: 'Todo chef encuentra una salsa que se corta. Nuestra sección dedicada te guía a través de técnicas de recuperación profesionales.',
        steps: [
            {
                num: '01',
                title: 'Identifica el error',
                description: '¿Se ha cortado, está muy líquida o salada? El diagnóstico es el primer paso.',
            },
            {
                num: '02',
                title: 'Aplica el arreglo',
                description: 'Ajustes de temperatura o equilibrio de emulsionantes. Técnicas profesionales a tu disposición.',
            },
            {
                num: '03',
                title: 'Pulido final',
                description: 'Ajuste de consistencia y sazón final para una restauración perfecta.',
            },
        ],
    },
    gallery: {
        title: 'Interfaz',
    },
};
