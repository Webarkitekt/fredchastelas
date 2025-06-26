import { Event } from "../event";
import { Container } from "../container";
import { Section } from "../section";
import Link from "next/link";
import { client } from "../../tina/__generated__/client";
import { formatISO } from "date-fns";
import { sub } from "date-fns";
import { useEffect, useState, useCallback } from "react";
import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import useEmblaCarousel from "embla-carousel-react";

// Import du SVG via import statique
const LinkArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L9.293 4.707a1 1 0 010-1.414z" />
  </svg>
);

export const EventsList = ({ data: data, parentField = "" }) => {
  const [loading, setLoading] = useState(false);
  const [eventsList, setData] = useState([]);

  // Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const yesterday = formatISO(sub(new Date(), { days: 1 }));

  // Fake data pour tester les différents scénarios d'affichage
  // Aix-en-Provence: 3 événements (grid 1/3)
  // Lérab Ling: 6 événements (carousel)
  // Château: 4 événements (carousel)
  const fakeEventsAix = [
    {
      node: {
        _sys: { filename: "aix-1" },
        title: "Méditation et Pleine Conscience",
        type: "Stage week-end",
        start_date: "2024-03-15",
        end_date: "2024-03-17",
        location: { name: "Aix-en-Provence" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "aix-2" },
        title: "Surmonter l'Ego et Retrouver la Paix",
        type: "Retraite",
        start_date: "2024-03-22",
        end_date: "2024-03-24",
        location: { name: "Aix-en-Provence" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "aix-3" },
        title: "Comprendre ses Émotions",
        type: "Atelier",
        start_date: "2024-04-05",
        end_date: "2024-04-05",
        location: { name: "Aix-en-Provence" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
  ];

  const fakeEventsLerab = [
    {
      node: {
        _sys: { filename: "lerab-1" },
        title: "Week-end Jeunes Méditants",
        type: "Stage week-end",
        start_date: "2024-04-12",
        end_date: "2024-04-14",
        location: { name: "Lérab Ling" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "lerab-2" },
        title: "Méditation et Qi Qong",
        type: "Stage",
        start_date: "2024-04-20",
        end_date: "2024-04-21",
        location: { name: "Lérab Ling" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "lerab-3" },
        title: "Retraite Silencieuse",
        type: "Retraite",
        start_date: "2024-05-01",
        end_date: "2024-05-03",
        location: { name: "Lérab Ling" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "lerab-4" },
        title: "Mindfulness Avancé",
        type: "Formation",
        start_date: "2024-05-10",
        end_date: "2024-05-12",
        location: { name: "Lérab Ling" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "lerab-5" },
        title: "Guérison par la Méditation",
        type: "Atelier",
        start_date: "2024-05-18",
        end_date: "2024-05-19",
        location: { name: "Lérab Ling" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "lerab-6" },
        title: "Sagesse et Compassion",
        type: "Retraite",
        start_date: "2024-05-25",
        end_date: "2024-05-27",
        location: { name: "Lérab Ling" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
  ];

  const fakeEventsChateau = [
    {
      node: {
        _sys: { filename: "chateau-1" },
        title: "Libération des Émotions",
        type: "Stage intensif",
        start_date: "2024-06-01",
        end_date: "2024-06-03",
        location: { name: "Château de Saint-Martin" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "chateau-2" },
        title: "Paix Intérieure",
        type: "Retraite",
        start_date: "2024-06-08",
        end_date: "2024-06-10",
        location: { name: "Château de Saint-Martin" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "chateau-3" },
        title: "Transformation Personnelle",
        type: "Stage",
        start_date: "2024-06-15",
        end_date: "2024-06-16",
        location: { name: "Château de Saint-Martin" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
    {
      node: {
        _sys: { filename: "chateau-4" },
        title: "Éveil de la Conscience",
        type: "Atelier",
        start_date: "2024-06-22",
        end_date: "2024-06-23",
        location: { name: "Château de Saint-Martin" },
        description: {
          children: [{ children: [{ text: "Description test" }] }],
        },
        external_link: null,
      },
    },
  ];

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

      // En mode développement, utiliser les fake data pour tester
      if (process.env.NODE_ENV === "development" && data.location?.name) {
        // Simuler un délai de chargement
        setTimeout(() => {
          // Choisir les fake data selon le lieu
          let selectedFakeData = [];
          if (data.location.name === "Aix-en-Provence") {
            selectedFakeData = fakeEventsAix;
          } else if (data.location.name === "Lérab Ling") {
            selectedFakeData = fakeEventsLerab;
          } else if (data.location.name === "Château de Saint-Martin") {
            selectedFakeData = fakeEventsChateau;
          }
          setData(selectedFakeData);
          setLoading(false);
        }, 500);
        return;
      }

      const events = await client.queries.eventsConnection({
        sort: "start_date",
        first: data.limit,
        filter: {
          start_date: { after: yesterday },
          location: data.location?.name && {
            location: { name: { eq: data.location.name } },
          },
        },
      });
      setData(events.data.eventsConnection.edges);
      setLoading(false);
    };
    fetchContent();
  }, [data.location?.name]);

  // Détermine si on utilise le Layout A (avec lieu spécifique) ou le layout classique (homepage)
  const hasSpecificLocation = data.location?.name;

  // Détermine si on a besoin du carousel (4+ événements) ou affichage statique (moins de 4)
  const needsCarousel = eventsList.length >= 4;

  return (
    eventsList.length > 0 && (
      <Section>
        <Container className={`px-5 pt-8 lg:pt-16 max-w-screen-xl lg:mx-auto`}>
          {/* Header Section avec titre + description lieu */}
          <div className="mb-6 lg:mb-8 relative">
            {/* Titre simple */}
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-700 mb-4">
              {data.title}
            </h2>

            {/* Description lieu sous le titre */}
            {hasSpecificLocation && data.location && (
              <div className="italic text-xl font-serif text-gray-500 lg:w-2/3 mb-6">
                <TinaMarkdown content={data.location.description} />
              </div>
            )}

            {data.show_all_link && (
              <Link key={"stages-et-cours"} href={"stages-et-cours"} passHref>
                <span className="text-interaction-default flex items-center">
                  Voir tous
                  <LinkArrowRight />
                </span>
              </Link>
            )}

            {/* Navigation carousel - positionnée en bas à droite du header (desktop seulement) */}
            {hasSpecificLocation && needsCarousel && (
              <div className="hidden lg:flex absolute bottom-0 right-0 gap-2">
                <button
                  className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${
                    prevBtnDisabled
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${
                    nextBtnDisabled
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Contenu conditionnel : Loading, Événements ou Message vide */}
          {loading ? (
            <div className="text-center py-8">
              <h4 className="text-gray-500">Chargement des stages...</h4>
            </div>
          ) : eventsList.length > 0 ? (
            /* Layout avec événements */
            hasSpecificLocation ? (
              /* Layout A: Image lieu + Embla Carousel */
              <div className="lg:flex lg:gap-6 lg:items-stretch mb-6">
                {/* Image lieu - côté gauche */}
                {data.location?.image && (
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="aspect-[4/3] overflow-hidden shadow-lg">
                      <img
                        src={data.location.image}
                        alt={data.location?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Embla Carousel Container - côté droit, jusqu'au bord écran */}
                <div className="lg:flex-1 flex flex-col">
                  {loading ? (
                    <div className="flex items-center justify-center flex-1 bg-gray-50 rounded-lg shadow-inner">
                      <h4 className="text-gray-500">
                        Chargement des stages...
                      </h4>
                    </div>
                  ) : (
                    <div className="flex-1">
                      {/* Embla Viewport ou Grid statique selon le nombre d'événements */}
                      {needsCarousel ? (
                        <div
                          className="overflow-hidden lg:h-full"
                          ref={emblaRef}
                        >
                          <div className="flex items-stretch gap-3 lg:gap-4 lg:h-full">
                            {eventsList.map((event, index) => (
                              <div
                                key={event.node._sys.filename}
                                className="flex-none w-[calc((100%-0.75rem)/1.2)] lg:w-[calc((100%-3rem)/3.3)]"
                              >
                                <Event data={event.node} compact={true} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`grid grid-cols-1 gap-3 lg:gap-4 lg:h-full items-stretch ${
                            eventsList.length < 3
                              ? "lg:grid-cols-2"
                              : "lg:grid-cols-3"
                          }`}
                        >
                          {eventsList.map((event, index) => (
                            <div key={event.node._sys.filename}>
                              <Event data={event.node} compact={true} />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Navigation mobile - en dessous du carousel */}
                      {hasSpecificLocation && needsCarousel && (
                        <div className="flex justify-center mt-4 gap-2 lg:hidden">
                          <button
                            className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${
                              prevBtnDisabled
                                ? "opacity-30 cursor-not-allowed"
                                : "opacity-70 hover:opacity-100"
                            }`}
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                          >
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>

                          <button
                            className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${
                              nextBtnDisabled
                                ? "opacity-30 cursor-not-allowed"
                                : "opacity-70 hover:opacity-100"
                            }`}
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                          >
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Layout classique pour homepage (sans lieu spécifique) */
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                {eventsList.map((event) => (
                  <div key={event.node._sys.filename} className="w-full">
                    <Event data={event.node} compact={true} />
                  </div>
                ))}
              </div>
            )
          ) : (
            /* Message informatif si aucun événement trouvé */
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <h4 className="text-gray-500 mb-2">
                Aucun stage à venir pour le moment
              </h4>
              <p className="text-gray-400 text-sm">
                Consultez régulièrement cette page pour découvrir nos prochains
                stages.
              </p>
            </div>
          )}
        </Container>
      </Section>
    )
  );
};
