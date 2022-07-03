import React from "react";
import Link from "next/link";

export const Events = ( events ) => {
    const eventsList = events?.eventsConnection?.edges
    console.log('eventsList', events);
    return (
        <>
            {events?.eventsConnection?.edges.map((event) => (


                    <Link
                        key={event.node._sys.filename}
                        href={`/events/` + event.node._sys.filename}
                        passHref
                    >

                        <h3>{event.node._values.title}{""}</h3>

                    </Link>
                ))
            }
        </>
    );
};