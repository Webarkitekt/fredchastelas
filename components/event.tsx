import React from "react";
import format from "date-fns/format";
import { fr } from "date-fns/locale";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/layout";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";

export const Event = (data) => {

    const start_date = new Date(data.start_date);
    let formattedStartDate = "";
    if (!isNaN(start_date.getTime())) {
        formattedStartDate = format(start_date, "dd MMM yyyy", {locale: fr});
    }

    const end_date = new Date(data.end_date);
    let formattedEndDate = "";
    if (!isNaN(end_date.getTime())) {
        formattedEndDate = format(end_date, "dd MMM yyyy", {locale: fr});
    }

    let date = ''
    if (formattedStartDate && formattedEndDate) {
        date = formattedStartDate + ' au ' + formattedEndDate;
    } else {
        date = formattedStartDate;
    }

    return (
        <Layout>
            <div className={'prose lg:prose-lg'}>
                <h1>{data.title}</h1>
                <div className={'font-bold'}>{date}</div>
                <div>{data.location}</div>
                <div>{data.type}</div>
                <div><TinaMarkdown content={data.description}/></div>
            </div>
        </Layout>
    )
}