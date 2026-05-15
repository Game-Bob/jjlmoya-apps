import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: 'Más de 100 Recetas Icónicas',
    description: 'Domina el arte del salsero con más de 100 recetas icónicas y un atlas culinario profesional.',
    slug: 'laboratorio-salsas',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: 'El Arte del Salsero',
        subtitle: '+100 salsas icónicas. Una obra maestra culinaria.',
        priceLabel: '100% Gratis · Sin Suscripciones',
        comingSoon: 'Próximamente en tiendas',
    },
    philosophy: {
        label: 'Filosofía',
        title: 'Herencia Culinaria',
        description: 'SauceLab no es solo un libro de recetas. Es un atlas de sabor curado, diseñado para el chef moderno que valora la precisión, la historia y la ciencia del salsero. Creemos que el dominio de la salsa es la base de la excelencia culinaria.',
    },
    benefits: {
        titleMain: 'Domina los',
        titleHighlight: 'Fundamentos',
        items: [
            {
                title: '+100 Recetas Icónicas',
                text: 'Desde las cinco Salsas Madre hasta derivados globales exóticos. Cada receta ha sido probada con precisión profesional.',
                icon: 'chef-hat',
            },
            {
                title: 'Química del Sabor',
                text: 'Entiende el "porqué" detrás del sabor. Ingredientes exactos e instrucciones claras y profesionales.',
                icon: 'beaker',
            },
            {
                title: 'Offline-First',
                text: 'Tu compañero de cocina funciona en cualquier lugar. Sin necesidad de internet para crear la salsa perfecta.',
                icon: 'wifi-off',
            },
            {
                title: 'Cero rastreadores',
                text: 'Sin anuncios, sin suscripciones, sin recolección de datos. Solo pura excelencia culinaria.',
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
                base: 'Yema de Huevo + Emulsión de Mantequilla',
                derivatives: ['Béarnaise', 'Mousseline', 'Maltaise', 'Choron'],
            },
            {
                name: 'Tomate',
                base: 'Tomate + Fondo Blanco/Roux',
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
                description: 'Concentración de sabor mediante evaporación. Logra la consistencia "nappé" perfecta.',
            },
            {
                title: 'Espesado',
                description: 'Desde Rouxs clásicos hasta suspensiones de almidón modernas y purés vegetales.',
            },
            {
                title: 'Balance',
                description: 'La ciencia de ajustar acidez, sal y grasa para alcanzar la nota gustativa perfecta.',
            },
        ],
    },
    atlas: {
        label: 'Cartografía Gastronómica',
        titleMain: 'Explora el',
        titleHighlight: 'Mundo',
        description: 'Descubre las raíces de cada sabor a través de un atlas regional inmersivo. Desde los clásicos franceses hasta las fermentaciones asiáticas.',
    },
    fix: {
        label: 'Modo Fix',
        titleMain: 'Recuperación',
        titleHighlight: 'Profesional',
        description: 'Todo chef se encuentra con una salsa que se corta. Nuestra sección Fix te guía a través de técnicas de recuperación.',
        steps: [
            {
                num: '01',
                title: 'Identifica el fallo',
                description: '¿Está cortada, demasiado líquida o sobrecondimentada? El diagnóstico es el primer paso.',
            },
            {
                num: '02',
                title: 'Aplica el arreglo',
                description: 'Ajustes de temperatura o balance de emulsionantes. Técnicas profesionales a tu disposición.',
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
