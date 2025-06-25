import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "../container";
import { Section } from "../section";

// Arrow components inline - elegant design matching eventsList.tsx
const SwiperArrowLeft = () => (
  <svg
    className="w-8 h-8 text-gray-600"
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
);

const SwiperArrowRight = () => (
  <svg
    className="w-8 h-8 text-gray-600"
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
);

export const Testimonials = ({ data, parentField }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
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

  return (
    <Section>
      <Container className={"px-5 pt-24 lg:pt-32 max-w-screen-xl lg:mx-auto"}>
        <div className="max-w-2xl bg-gray-100 p-8 lg:p-28 mx-auto mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-gray-800 pb-12">
            {data.title}
          </h2>

          {/* Embla Carousel */}
          <div className="overflow-hidden mb-8" ref={emblaRef}>
            <div className="flex">
              {data?.testimonial?.map((testimonial, i) => (
                <div key={i} className="flex-none w-full">
                  <div className={"text-gray-500"}>
                    <div className={"text-sm uppercase pb-2"}>
                      {testimonial.type}
                    </div>
                    <div
                      className={
                        "text-gray-500 leading-relaxed text-xl font-serif font-light pb-2"
                      }
                    >
                      {testimonial.text}
                    </div>
                    <div className={"text-gray-700 italic text-right"}>
                      {testimonial.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className={"flex space-x-6 items-center justify-center w-full"}>
            <button
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 transition-all duration-200 ${
                prevBtnDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-70 hover:opacity-100 hover:border-gray-400 hover:shadow-md"
              }`}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            >
              <SwiperArrowLeft />
            </button>
            <button
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 transition-all duration-200 ${
                nextBtnDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-70 hover:opacity-100 hover:border-gray-400 hover:shadow-md"
              }`}
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            >
              <SwiperArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
