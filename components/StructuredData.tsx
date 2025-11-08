import React from 'react';
import Head from 'next/head';

interface StructuredDataProps {
    type: 'person' | 'course' | 'service' | 'organization';
    data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    const getStructuredData = () => {
        const baseUrl = 'https://fredericchastelas.com';

        switch (type) {
            case 'person':
                return {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Frédéric Chastelas",
                    "jobTitle": "Enseignant de Méditation Bouddhiste, Thérapeute Certifié TIPI",
                    "description": "Enseignant de méditation bouddhiste depuis plus de 15 ans, ancien guide de retraite à Lérab Ling (14 ans). Thérapeute certifié en régulation émotionnelle TIPI depuis 2021, méthode Luc Nicon.",
                    "url": baseUrl,
                    "image": `${baseUrl}/images/frederic-chastelas.jpg`,
                    "sameAs": [
                        "https://www.linkedin.com/in/frederic-chastelas",
                        "https://www.youtube.com/@fredericchastelas"
                    ],
                    "knowsAbout": [
                        "Régulation émotionnelle TIPI",
                        "Méditation bouddhiste",
                        "Gestion du stress",
                        "Coaching en entreprise",
                        "Développement personnel",
                        "Thérapie émotionnelle"
                    ],
                    "hasOccupation": {
                        "@type": "Occupation",
                        "name": "Thérapeute et Formateur en Régulation Émotionnelle",
                        "occupationLocation": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Occitanie",
                                "addressCountry": "FR"
                            }
                        }
                    }
                };

            case 'service':
                return {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Régulation Émotionnelle TIPI",
                    "provider": {
                        "@type": "Person",
                        "name": "Frédéric Chastelas"
                    },
                    "areaServed": {
                        "@type": "Country",
                        "name": "France"
                    },
                    "availableChannel": {
                        "@type": "ServiceChannel",
                        "serviceUrl": baseUrl,
                        "serviceType": "En ligne et en présentiel"
                    },
                    "offers": [
                        {
                            "@type": "Offer",
                            "name": "Séance individuelle TIPI",
                            "price": "55",
                            "priceCurrency": "EUR",
                            "description": "Séance d'accompagnement en régulation émotionnelle TIPI"
                        },
                        {
                            "@type": "Offer",
                            "name": "Formation autonomie TIPI",
                            "price": "160",
                            "priceCurrency": "EUR",
                            "description": "Formation complète pour devenir autonome en régulation émotionnelle"
                        }
                    ]
                };

            case 'course':
                return {
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Formation Régulation Émotionnelle TIPI",
                    "description": "Formation complète pour apprendre la technique TIPI et devenir autonome dans la gestion de vos émotions",
                    "provider": {
                        "@type": "Person",
                        "name": "Frédéric Chastelas"
                    },
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": "online",
                        "courseWorkload": "PT3H30M"
                    },
                    "offers": {
                        "@type": "Offer",
                        "price": "160",
                        "priceCurrency": "EUR"
                    }
                };

            case 'organization':
                return {
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "Frédéric Chastelas - Régulation Émotionnelle & Méditation",
                    "description": "Cabinet de régulation émotionnelle TIPI, stages de méditation et coaching en entreprise",
                    "url": baseUrl,
                    "telephone": "+33-XXX-XXX-XXX",
                    "priceRange": "€€",
                    "areaServed": "France",
                    "serviceArea": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": "43.6108",
                            "longitude": "3.8767"
                        }
                    }
                };

            default:
                return null;
        }
    };

    const structuredData = getStructuredData();

    if (!structuredData) return null;

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </Head>
    );
};
