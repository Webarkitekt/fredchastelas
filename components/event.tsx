import React from "react";
import format from "date-fns/format";
import { fr } from "date-fns/locale";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/layout";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";

export const Event = (data) => {

    data = data.data

    const start_date = new Date(data.start_date);
    let formattedStartDate = "";
    if (!isNaN(start_date.getTime())) {
        formattedStartDate = format(start_date, "dd MMM", {locale: fr});
    }

    const end_date = new Date(data.end_date);
    let formattedEndDate = "";
    if (!isNaN(end_date.getTime())) {
        formattedEndDate = format(end_date, "dd MMM yyyy", {locale: fr});
    }

    let date = ''
    if (formattedStartDate && formattedEndDate) {
        date = formattedStartDate + ' > ' + formattedEndDate;
    } else {
        date = formattedStartDate;
    }

    return (
        <>
            {data && (
                <Link
                    key={data._sys.filename}
                    href={data.description.children.length ? `stages-et-cours/` + data._sys.filename : data.external_link ?? ''}
                    target={data.external_link && `blank`}
                    className="lg:w-1/4 flex flex-col"
                    passHref
                >
                    <div className="mb-2">
                        <div className="font-serif italic text-primary text-lg">{data.type}</div>
                        <div className="flex font-bold text-xl items-center gap-2 mb-1 pb-1 border-b border-[#9ABECB]">
                            {date}
                        </div>
                        <div className="text-primary">{data.location.name}</div>
                    </div>
                    <div className="bg-gray-100 p-4 lg:p-6 flex-grow">
                        <h3 className="font-serif text-xl lg:text-2xl text-gray-800">{data.title}</h3>
                    </div>
                    <hr className="border-interaction-default border-b-4 mt-1"/>
                </Link>
            )}
        </>
    )
}
