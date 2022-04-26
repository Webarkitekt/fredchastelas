import * as React from 'react'
import type {TinaTemplate} from "tinacms";

export const Introduction = ({data, parentField}) => {
    return (
        <div className="lg:flex max-w-screen-md mx-auto mb-20 lg:mb-32">
            <div className="relative">
                <div data-tinafield={`${parentField}.image`}
                    className="relative z-10 rounded-full overflow-hidden aspect-square lg:mr-10 mb-12 w-48 mx-auto lg:mb-0 lg:w-[13rem]">
                    <img src={data.image.src} alt={data.image.alt}/>
                </div>
            </div>
            <div className="px-6">
                <h2 data-tinafield={`${parentField}.title`}
                    className="font-serif text-5xl text-gray-700 mb-5">{data.title}</h2>
                <p data-tinafield={`${parentField}.text`} className="text-gray-500 leading-loose text-lg font-light">
                    {data.text}
                </p>
            </div>
        </div>
    )
}


export const introductionBlockSchema: TinaTemplate = {
    name: "introduction",
    label: "Introduction",
    ui: {
        previewSrc: "/blocks/introduction.png",
        defaultItem: {
            title: "title",
            text: "Lorem ipsum dolore sit amet",
            image: {
                src: "http://via.placeholder.com/400x400",
                alt: "Placeholder"
            }
        }
    },
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
        },
        {
            type: "string",
            label: "Text",
            name: "text",
            ui: {
                component: "textarea"
            }
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
    ]
}
