import React from 'react'
import { EmailForm } from '../emailForm'
import {TinaTemplate} from "tinacms";

export const newsletterBlockSchema : TinaTemplate = {
    name: 'newsletter',
    label: 'Newsletter Signup',
    ui: {
        defaultItem: {
            style: 'default',
        },
    },
    fields: [
        {
            name: 'style',
            label: 'Style',
            type: 'string',
            options: [
                {
                    label: 'Default',
                    value: 'default',
                },
                {
                    label: 'Small',
                    value: 'small',
                },
            ],
        },
    ],
}

export const NewsletterBlock = props => {
    return <EmailForm />
}