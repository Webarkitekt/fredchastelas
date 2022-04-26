import * as React from 'react'
import type {TinaTemplate} from "tinacms";

export const Events = ({data, parentField}) => {
    return (
        <div>Events</div>
    )
}


export const eventsBlockSchema: TinaTemplate = {
    name: "events",
    label: "Events",
    ui: {
        previewSrc: "/blocks/events.png",
        defaultItem: {
            title: "Title",
        }
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
                component: "textarea"
            }
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
