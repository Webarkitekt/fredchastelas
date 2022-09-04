import {defineSchema, defineConfig} from "tinacms";
import {client} from "./client";
import {heroBlockSchema} from "../components/blocks/hero";
import {contentBlockSchema} from "../components/blocks/content";
import {introductionBlockSchema} from "../components/blocks/introduction";
import {featureBlockSchema} from "../components/blocks/feature";
import {textAndImageBlockSchema} from "../components/blocks/text-and-image";

const schema = defineSchema({
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
                        {
                            name: "testimonials",
                            label: "Témoignages",
                            ui: {
                                previewSrc: "/blocks/testimonials.png",
                            },
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
                                /*{
                                    type: "object",
                                    list: true,
                                    name: "featuredEvents",
                                    label: "Featured Events",
                                    fields: [{
                                        type: "reference",
                                        label: "Evénements",
                                        name: "events",
                                        collections: ["events"]
                                    }
                                    ]
                                }*/
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
    ],
});

export default schema

export const tinaConfig = defineConfig({
    client,
    schema,
    mediaStore: async () => {
        const pack = await import("next-tinacms-cloudinary");
        return pack.TinaCloudCloudinaryMediaStore;
    },
    cmsCallback: (cms) => {
        /**
         * Enables experimental branch switcher
         */
        cms.flags.set("branch-switcher", true);
        cms.flags.set("experimentalData", true);

        /**
         * When `tina-admin` is enabled, this plugin configures contextual editing for collections
         */
        import("tinacms").then(({RouteMappingPlugin}) => {
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
    formifyCallback: ({formConfig, createForm, createGlobalForm}) => {
        if (formConfig.id === "getGlobalDocument") {
            return createGlobalForm(formConfig);
        }

        return createForm(formConfig);
    },
});
