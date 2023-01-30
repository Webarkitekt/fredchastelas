import * as React from 'react'
import type {TinaTemplate} from "tinacms"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import LinkArrowRight from "../../public/link-arrow-right.svg"
import IllustrationWaterDrops from "../../public/illust-water-drops.svg"

export const TextAndImage = ({data, parentField}) => {
    return (
        <div className={`${data.bgColor} py-10 lg:py-20`}>
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16 ">
                <div className={`flex flex-col xl:flex-row justify-items-start relative ${data.image_position === 'right' ? 'xl:flex-row-reverse': ''}`}>
                    {data.image.src &&
                      <div className="xl:w-5/12 relative pt-[28px]">
                        <div className="w-full">
                          <div className="relative z-10">
                            <img src={data.image.src} alt={data.image.alt}/>
                          </div>
                        </div>
                          {data.showIllustrations &&
                            <div className="absolute z-20 -bottom-12 right-0 hidden lg:block">
                                <IllustrationWaterDrops />
                            </div>
                          }
                      </div>
                    }
                    <div className=
                             {`${data.image.src ?? 'xl:w-7/12'} ${ data.image.src ? data.image_position === 'right' ? 'xl:mr-8' : 'xl:ml-8' : 'mx-auto text-center'} pt-6`}>
                        <h3 className="font-serif text-4xl lg:text-5xl text-gray-700 mb-12">{data.title}</h3>
                        <div className="richtext lg:richtext-lg">
                            <TinaMarkdown content={data.body} />
                        </div>
                        {data.link.url &&
                          <a href={data.link.url} className="flex flex-row items-center pt-4 text-interaction-default">
                            <span className="inline">{data.link.label}</span>
                            <LinkArrowRight />
                          </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


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
                alt: ""
            },
            image_position: "left",
            link: {
                url: "",
                label: "Read more"
            },
        }
    },
    fields: [
        {
            type: "boolean",
            label: "Afficher les illustrations",
            name: "showIllustrations",
            ui: {
                component: "toggle"
            }
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
                }
            ],
        },
        {
            name: "image_position",
            label: "Position de l'image",
            type: "string",
            options: [{
                value: "left",
                label: "Gauche"
            }, {
                value: "right",
                label: "Droite"
            }]
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
    ]
}
