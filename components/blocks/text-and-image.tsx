import * as React from "react";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import { IconArrowRight } from "../icons/IconArrowRight";
import { DynamicIcon, iconOptions } from "../icons/DynamicIcon";
import IllustrationWaterDrops from "../../public/illust-water-drops.svg";
import { Container } from "../container";
import { Section } from "../section";

export const TextAndImage = ({ data, parentField }) => {

  return (
    <div className={`${data.bgColor} py-10 lg:py-20`}>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-16">
        <div
          className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${data.image_position === "right" ? "lg:flex-row-reverse" : ""
            }`}
        >
          {data.image.src && (
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/5] lg:aspect-square">
                <img
                  src={data.image.src}
                  alt={data.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {data.showIllustrations && (
                <div className="absolute z-20 -bottom-12 right-0 hidden lg:block">
                  <IllustrationWaterDrops />
                </div>
              )}
            </div>
          )}
          <div className={`w-full ${data.image.src ? "lg:w-7/12" : "lg:max-w-3xl lg:mx-auto"} flex flex-col justify-center`}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {data.icon && (
                  <div className="flex-shrink-0">
                    <DynamicIcon name={data.icon} size="md" className="text-primary" />
                  </div>
                )}
                <h3 className="font-serif text-3xl lg:text-4xl text-gray-700">
                  {data.title}
                </h3>
              </div>
            </div>
            <div className="richtext lg:richtext-lg">
              <TinaMarkdown content={data.body} />
            </div>
            {data.link.url && (
              <Link href={data.link.url} passHref>
                <span className="text-interaction-default flex items-center mt-6">
                  {data.link.label}
                  <IconArrowRight />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const textAndImageBlockSchema: TinaTemplate = {
  name: "textAndImage",
  label: "Text and image",
  ui: {
    previewSrc: "/blocks/text-and-image.png",
    itemProps: (item) => {
      return { label: item?.title };
    },
    defaultItem: {
      title: "title",
      bgColor: "bg-secondary",
      showIllustrations: "false",
      body: "",
      image: {
        src: "http://via.placeholder.com/400x400",
        alt: "",
      },
      image_position: "left",
      link: {
        url: "",
        label: "Read more",
      },
    },
  },
  fields: [
    {
      type: "boolean",
      label: "Afficher les illustrations",
      name: "showIllustrations",
      ui: {
        component: "toggle",
      },
    },
    {
      type: "string",
      label: "Couleur de fond",
      name: "bgColor",
      options: [
        {
          value: "bg-secondary",
          label: "Bleu clair",
        },
        {
          value: "white",
          label: "Blanc",
        },
      ],
    },
    {
      type: "string",
      label: "Icône",
      name: "icon",
      options: iconOptions,
    },
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Text",
      name: "body",
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "image_position",
      label: "Position de l'image",
      type: "string",
      options: [
        {
          value: "left",
          label: "Gauche",
        },
        {
          value: "right",
          label: "Droite",
        },
      ],
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
