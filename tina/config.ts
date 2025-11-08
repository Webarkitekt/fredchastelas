import { defineSchema, defineConfig } from "tinacms";
import { heroBlockSchema } from "../components/blocks/hero";
import { contentBlockSchema } from "../components/blocks/content";
import { introductionBlockSchema } from "../components/blocks/introduction";
import { featureBlockSchema } from "../components/blocks/feature";
import { textAndImageBlockSchema } from "../components/blocks/text-and-image";
import { newsletterBlockSchema } from "../components/blocks/newsletter";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export const tinaConfig = defineConfig({
  branch: 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin',  // within the public folder
  },
  media: {
    //@ts-ignore
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
  },
  schema: {
    collections: [
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        fields: [
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              {
                type: "object",
                label: "Liens",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Lien (relatif)",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label",
                  },
                ],
              },
            ],
          }, {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "object",
                label: "Liens",
                name: "links",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "/lien",
                    label: "Label",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Lien",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label",
                  },
                ],
              },
              {
                type: "object",
                label: "Réseaux sociaux",
                name: "social_links",
                fields: [
                  {
                    type: "string",
                    label: "Lien vers le profil facebook",
                    name: "facebook_href",
                  },
                  {
                    type: "string",
                    label: "Lien vers le profil twitter",
                    name: "twitter_href",
                  },
                  {
                    type: "string",
                    label: "Lien vers le profil instagram",
                    name: "instagram_href",
                  },
                ],
              }
            ],
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO Information",
            fields: [
              { type: "string", label: "Title", name: "title" },
              {
                type: "string",
                label: " Description",
                name: "description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Page sections",
            templates: [
              heroBlockSchema,
              contentBlockSchema,
              introductionBlockSchema,
              featureBlockSchema,
              textAndImageBlockSchema,
              newsletterBlockSchema,
              {
                name: 'youtubeVideo',
                label: 'YouTube Video',
                fields: [
                  {
                    name: 'url',
                    label: 'URL de la vidéo YouTube',
                    type: 'string',
                    required: true,
                  },
                  {
                    type: "image",
                    label: "Image de la miniature pour illustrer la vidéo",
                    name: "thumbnailImage",
                  }
                ],
              },
              {
                name: "testimonials",
                label: "Témoignages",
                fields: [
                  {
                    type: 'string',
                    label: 'Title',
                    name: 'title'
                  },
                  {
                    type: 'object',
                    label: 'Témoignage',
                    name: 'testimonial',
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.author };
                      },
                      previewSrc: "/blocks/testimonials.png",
                    },
                    fields: [
                      {
                        type: "string",
                        label: "Type",
                        name: "type",
                      },
                      {
                        type: "string",
                        label: "Auteur",
                        name: "author",
                      },
                      {
                        type: "string",
                        label: "Témoignage",
                        name: "text",
                        ui: {
                          component: "textarea"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                name: "events",
                label: "Events",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                  previewSrc: "/blocks/events.png",
                  defaultItem: {
                    title: "Title",
                    limit: 0
                  }
                },
                fields: [
                  {
                    type: "string",
                    label: "Title",
                    name: "title",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "reference",
                    label: "Lieu",
                    name: "location",
                    collections: ["location"],
                  },
                  {
                    type: "boolean",
                    label: "Stages",
                    name: "stage",
                    ui: {
                      component: "toggle"
                    }
                  },
                  {
                    type: "boolean",
                    label: "Afficher le lien vers tous les évènements",
                    name: "show_all_link",
                    ui: {
                      component: "toggle"
                    }
                  },
                  {
                    type: "number",
                    label: "Nombre d'évènements à afficher (0 = tous)",
                    name: "limit"
                  }
                ]
              }
            ]
          },
        ],
      },
      {
        label: "Stages et Cours",
        name: "events",
        path: "content/events",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "datetime",
            name: "start_date",
            label: "Date de début",
            ui: {
              dateFormat: "DD MMMM YYYY"
            }
          },
          {
            type: "datetime",
            name: "end_date",
            label: "Date de fin",
            ui: {
              dateFormat: "DD MMMM YYYY"
            }
          },
          {
            label: "Lieu",
            name: "location",
            type: "reference",
            collections: ["location"],
          },
          {
            type: "string",
            name: "type",
            label: "Type d'événement",
          },
          // {
          //     type: "boolean",
          //     name: "stage",
          //     label: "Stage",
          //     ui: {
          //         component: "toggle"
          //     }
          // },
          {
            type: "string",
            name: "external_link",
            label: "Lien externe"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
        ],
      },
      {
        label: "Lieu",
        name: "location",
        path: "content/locations",
        fields: [
          {
            label: "Nom",
            name: "name",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "rich-text"
          },
          {
            label: "Image",
            name: "image",
            type: "image"
          }]
      }
    ]
  },
  cmsCallback: (cms) => {
    /**
     * Enables experimental branch switcher
     */
    cms.flags.set("branch-switcher", true);

    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["global"].includes(collection.name)) {
          return undefined;
        }
        if (["pages"].includes(collection.name)) {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return `/${document._sys.filename}`
        }
        if (['event'].includes(collection.name)) {
          return `/events/${document._sys.filename}`;
        }
        return undefined
      });
      cms.plugins.add(RouteMapping);
    });

    return cms;
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (formConfig.id === "getGlobalDocument") {
      return createGlobalForm(formConfig);
    }

    return createForm(formConfig);
  },
});

export default tinaConfig;
