import React from "react";
import { Container } from "../container";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Content = ({ className= "", data, parentField = "" }) => {
  return (
      <Section className={`${className} ${data.bgColor}`}>
        <Container
          className={`mt-24 max-w-4xl richtext lg:richtext-lg`}
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
      type: "rich-text",
      label: "Body",
      name: "body",
    }
  ],
};
