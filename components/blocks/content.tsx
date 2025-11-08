import React from "react";
import { Container } from "../container";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { ContactInfo } from "../ContactInfo";

export const Content = ({ className = "", data, parentField = "" }) => {
  return (
    <Section className={`${className} ${data.bgColor}`}>
      <Container
        className={`mx-auto py-12 lg:py-24 px-5 richtext lg:richtext-lg ${data.size_large && 'lg:max-w-screen-xl'}`}
        data-tinafield={`${parentField}.body`}
      >
        <TinaMarkdown
          content={data.body}
          components={{
            ContactInfo: (props) => <ContactInfo {...props} />,
          }}
        />
      </Container>
    </Section>
  );
};

export const contentBlockSchema: TinaTemplate = {
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
      }, {
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
      parser: {
        type: "mdx",
      },
      templates: [
        {
          name: "ContactInfo",
          label: "Informations de contact",
          fields: [
            {
              name: "name",
              label: "Nom",
              type: "string",
            },
            {
              name: "address",
              label: "Adresse",
              type: "string",
            },
            {
              name: "city",
              label: "Ville",
              type: "string",
            },
            {
              name: "phone",
              label: "Téléphone",
              type: "string",
            },
            {
              name: "email",
              label: "Email",
              type: "string",
            },
          ],
        },
      ],
    }
  ],
};
