import { defineSchema, defineConfig } from "tinacms";
import { heroBlockSchema } from "../components/blocks/hero";
import { contentBlockSchema } from "../components/blocks/content";
import { introductionBlockSchema} from "../components/blocks/introduction";
import { featureBlockSchema} from "../components/blocks/feature";
import { textAndImageBlockSchema } from "../components/blocks/text-and-image";

// Tina schema

// =================
// This is where you can define the shape of your content
export default defineSchema({
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
              label: "Nav Links",
              name: "nav",
              list: true,
              ui: {
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
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
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
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
          ]
        },
      ],
    },
  ],
});

const branch = "main";
const apiURL =
    process.env.NODE_ENV == "development"
        ? "http://localhost:4001/graphql"
        : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    /**
     * Enables experimental branch switcher
     */
    cms.flags.set("branch-switcher", true);

    /**
     * When `tina-admin` is enabled, this plugin configures contextual editing for collections
     */
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["authors", "global"].includes(collection.name)) {
          return undefined;
        }
        if (["pages"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return `/`;
          }
          if (document.sys.filename === "about") {
            return `/about`;
          }
          return undefined;
        }
        return `/${collection.name}/${document.sys.filename}`;
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
