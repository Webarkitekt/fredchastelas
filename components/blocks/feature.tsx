import * as React from "react";
import type { TinaTemplate } from "tinacms";
import { Section } from "../section";
import { Container } from "../container";
import Link from "next/link";
import { IconArrowRight } from "../icons/IconArrowRight";
import IllustrationRain from "../../public/illust-rain.svg";
import IllustrationWaves from "../../public/illust-waves.svg";

export const Feature = ({ data, parentField }) => {
  return (
    <Section>
      <Container className={"pt-12 lg:pt-24"}>
        <div className=" mx-auto ">
          <div className="relative pt-32 pb-16 ">
            <div className="absolute right-[120px] top-14 w-[340px] h-[95%] bg-gray-100" />
            <div
              className="relative z-10 bg-secondary py-10 px-6 lg:py-20 lg:px-36  rellax"
              data-rellax-speed="1"
            >
              <div className="max-w-2xl mx-auto">
                <div
                  className="uppercase text-primary mb-8"
                  data-tinafield={`${parentField}.subhead`}
                >
                  {data.subhead}
                </div>
                <h2
                  className="font-serif text-gray-800 text-4xl lg:text-5xl mb-8 leading-snug lg:leading-[1.4]"
                  data-tinafield={`${parentField}.title`}
                >
                  {data.title}
                </h2>
                <Link href={data.link.url} passHref>
                  <span className="text-interaction-default flex items-center">
                    {data.link.label}
                    <IconArrowRight />
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="absolute z-10 bottom-0 left-0 rellax hidden lg:block"
              data-rellax-percentage="0.5"
            >
              <IllustrationRain />
            </div>
            <div
              className=" w-48 lg:w-64 absolute z-10 top-0 right-0 rellax"
              data-rellax-speed="-1"
            >
              <IllustrationWaves />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const featureBlockSchema: TinaTemplate = {
  name: "feature",
  label: "Feature",
  ui: {
    previewSrc: "/blocks/feature.png",
    defaultItem: {
      subhead: "category",
      title: "Lorem ipsum dolore sit amet",
    },
  },
  fields: [
    {
      type: "string",
      label: "Subhead",
      name: "subhead",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "Link",
      name: "link",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "url",
          label: "URL",
          type: "string",
        },
      ],
    },
  ],
};
