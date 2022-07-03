import React, {useEffect, useState} from 'react';
import { Events } from "../../components/events";
import {Container} from "../container";
import {Section} from "../section";
import Link from "next/link";

export const EventsList = ( { data: data, eventsList: eventsList, parentField = "" }) => {
    return (
        <Section>
            <Container>
                {data.title}

                {eventsList?.edges.map((event) => (
                        <Link
                            key={event.node._sys.filename}
                            href={`/seminaires-et-cours/` + event.node._sys.filename}
                            passHref
                        >

                            <h3>{event.node._values.title}{""}</h3>

                        </Link>
                    ))
                }
            </Container>
        </Section>
    )
}