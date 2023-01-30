import React from "react";
import { Container } from "../container";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Content = ({ className= "", data, parentField = "" }) => {
  return (
      <Section className={`${className} ${data.bgColor}`}>
        <Container
          className={`mx-auto pt-12 lg:pt-24 px-5 richtext lg:richtext-lg ${data.size_large && 'lg:max-w-screen-xl'}`}
          data-tinafield={`${parentField}.body`}
        >
          <TinaMarkdown content={data.body} />
        </Container>
      </Section>
  );
};

export const contentBlockSchema : TinaTemplate = {
  name: "content",
  label: "Content",
  ui: {
    itemProps: (item) => {
      return { label: item?.name };
    },
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Nom du bloc",
      name: "name"
    },
    {
      type: "string",
      label: "Couleur de fond",
      name: "bgColor",
      options: [{
        value: "bg-secondary",
        label: "Bleu clair"
      },{
        value: "white",
        label: "Blanc"
      }]
    },
    {
      type: "boolean",
      label: "Taille du contenu large",
      name: "size_large",
      ui: {
        component: "toggle"
      }
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    }
  ],
};
