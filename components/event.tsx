import React from "react";
import format from "date-fns/format";
import { fr } from "date-fns/locale";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/layout";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";

export const Event = (data) => {

    data = data.data

    console.log(data)

    const start_date = new Date(data?._values.start_date);
    let formattedStartDate = "";
    if (!isNaN(start_date.getTime())) {
        formattedStartDate = format(start_date, "dd MMM", {locale: fr});
    }

    const end_date = new Date(data?._values.end_date);
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
                    href={`/seminaires-et-cours/` + data._sys.filename}
                    passHref
                >
                    <a className="lg:w-1/4 ">
                        <div className="mb-2">
                            <div className="font-serif italic text-primary text-lg">{data._values.type}</div>
                            <div className="flex font-bold text-xl items-center gap-2 mb-1 pb-1 border-b border-[#9ABECB]">
                                {date}
                            </div>
                            <div className="text-primary">{data._values.location}</div>
                        </div>
                        <div className="bg-gray-100 p-4 lg:p-6">
                            <h3 className="font-serif text-xl lg:text-2xl text-gray-800">{data._values.title}</h3>
                        </div>
                        <hr className="border-interaction-default border-b-4 mt-1"/>
                    </a>
                </Link>
            )}
        </>
    )
}