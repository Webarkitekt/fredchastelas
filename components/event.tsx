import React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";

export const Event = ({ data, compact = false }) => {
  const start_date = new Date(data.start_date);
  let formattedStartDate = "";
  if (!isNaN(start_date.getTime())) {
    formattedStartDate = format(start_date, "dd MMM", { locale: fr });
  }

  const end_date = new Date(data.end_date);
  let formattedEndDate = "";
  if (!isNaN(end_date.getTime())) {
    formattedEndDate = format(end_date, "dd MMM yyyy", { locale: fr });
  }

  let date = "";
  if (formattedStartDate && formattedEndDate) {
    date = formattedStartDate + " > " + formattedEndDate;
  } else {
    date = formattedStartDate;
  }

  return (
    <>
      {data && (
        <Link
          key={data._sys.filename}
          href={
            data.description.children.length
              ? `stages-et-cours/` + data._sys.filename
              : data.external_link ?? ""
          }
          target={data.external_link && `blank`}
          className={`${
            compact ? "flex flex-col h-full" : "lg:w-1/4 flex flex-col h-full"
          } group transition-all duration-200`}
          passHref
        >
          {/* Compact mode - Layout A horizontal */}
          {compact ? (
            <div className="bg-gray-50 overflow-hidden h-full flex flex-col group-hover:bg-white group-hover:shadow-lg transition-all duration-200">
              {/* Header compact */}
              <div className="p-4 border-b border-gray-200 group-hover:border-primary/30">
                <div className="font-serif italic text-primary text-sm mb-1 group-hover:text-primary/80">
                  {data.type}
                </div>
                <div className="font-bold text-base text-gray-800 mb-1 group-hover:text-gray-900">
                  {date}
                </div>
                <div className="text-primary text-sm group-hover:text-primary/80">
                  {data.location.name}
                </div>
              </div>

              {/* Content compact - titre en haut */}
              <div className="p-4 flex-grow">
                <h3 className="font-serif text-lg text-gray-800 leading-tight group-hover:text-primary transition-colors">
                  {data.title}
                </h3>
              </div>

              {/* Bottom accent - toujours au bas */}
              <div className="h-1 bg-interaction-default/70 mt-auto group-hover:bg-interaction-default transition-all duration-200"></div>
            </div>
          ) : (
            /* Mode original - Layout existant */
            <>
              <div className="mb-2">
                <div className="font-serif italic text-primary text-lg">
                  {data.type}
                </div>
                <div className="flex font-bold text-xl items-center gap-2 mb-1 pb-1 border-b border-[#9ABECB]">
                  {date}
                </div>
                <div className="text-primary">{data.location.name}</div>
              </div>
              <div className="bg-gray-100 p-4 lg:p-6 flex-grow">
                <h3 className="font-serif text-xl lg:text-2xl text-gray-800">
                  {data.title}
                </h3>
              </div>
              <hr className="border-interaction-default border-b-4 mt-1" />
            </>
          )}
        </Link>
      )}
    </>
  );
};
