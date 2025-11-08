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
import LinkArrowRight from "../../public/link-arrow-right.svg";

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

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

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

  // Détermine si on utilise le Layout avec carousel (page stages-et-cours avec lieu) ou le layout classique (homepage)
  const hasSpecificLocation = data.location?.name;

  // Détermine si on a besoin du carousel
  // Desktop: 4+ événements
  // Mobile: 2+ événements (sauf si 1 seul)
  const needsCarousel = eventsList.length >= 2;

  return (
    eventsList.length > 0 && (
      <Section>
        {hasSpecificLocation ? (
          // Layout pour page stages-et-cours avec lieu spécifique
          <Container className={`px-5 pt-8 lg:pt-16 max-w-screen-xl lg:mx-auto`}>
            {/* Header Section avec titre + description lieu */}
            <div className="mb-6 lg:mb-8 relative">
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-700 mb-4">
                {data.title}
              </h2>

              {data.location && (
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
              {needsCarousel && (
                <div className="hidden lg:flex absolute bottom-0 right-0 gap-2">
                  <button
                    className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${prevBtnDisabled
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
                    className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${nextBtnDisabled
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

            {/* Layout avec image lieu + Carousel */}
            {loading ? (
              <div className="text-center py-8">
                <h4 className="text-gray-500">Chargement des stages...</h4>
              </div>
            ) : eventsList.length > 0 ? (
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

                {/* Embla Carousel Container - côté droit */}
                <div className="lg:flex-1 flex flex-col">
                  <div className="flex-1">
                    {needsCarousel ? (
                      <div className="overflow-hidden lg:h-full" ref={emblaRef}>
                        <div className="flex items-stretch gap-3 lg:gap-4 lg:h-full">
                          {eventsList.map((event) => (
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
                        className={`grid grid-cols-1 gap-3 lg:gap-4 lg:h-full items-stretch ${eventsList.length < 3
                          ? "lg:grid-cols-2"
                          : "lg:grid-cols-3"
                          }`}
                      >
                        {eventsList.map((event) => (
                          <div key={event.node._sys.filename}>
                            <Event data={event.node} compact={true} />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Navigation mobile - en dessous du carousel */}
                    {needsCarousel && (
                      <div className="flex justify-center mt-4 gap-2 lg:hidden">
                        <button
                          className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${prevBtnDisabled
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
                          className={`flex items-center justify-center w-8 h-8 transition-all duration-200 ${nextBtnDisabled
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
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <h4 className="text-gray-500 mb-2">
                  Aucun stage à venir pour le moment
                </h4>
                <p className="text-gray-400 text-sm">
                  Consultez régulièrement cette page pour découvrir nos
                  prochains stages.
                </p>
              </div>
            )}
          </Container>
        ) : (
          // Layout classique pour homepage (sans lieu spécifique)
          <Container
            className={`px-5 pt-12 lg:pt-24 max-w-screen-xl lg:mx-auto`}
          >
            <div
              className={`lg:flex lg:flex-col ${!data.location?.image && "mb-12 lg:mb-18"} justify-between`}
            >
              <div className="lg:flex">
                <div className={"flex-1"}>
                  <h2 className="font-serif text-4xl lg:text-5xl text-gray-700 ">
                    {data.title}
                  </h2>
                </div>
              </div>
              {data.show_all_link && (
                <Link
                  key={"stages-et-cours"}
                  href={"stages-et-cours"}
                  passHref
                >
                  <span className="text-interaction-default flex items-center">
                    Voir tous
                    <LinkArrowRight />
                  </span>
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-5 lg:items-stretch">
              {loading ? (
                <h4>Chargement...</h4>
              ) : (
                eventsList.length > 0 &&
                eventsList.map((event) => (
                  <Event data={event.node} key={event.node._sys.filename} />
                ))
              )}
            </div>
          </Container>
        )}
      </Section>
    )
  );
};
