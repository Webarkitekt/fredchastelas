import {Event} from "../../components/event";
import {Container} from "../container";
import {Section} from "../section";
import Link from "next/link";
import { client } from '../../.tina/__generated__/client'
import formatISO from "date-fns/formatISO";
import sub from 'date-fns/sub';
import {useEffect, useState} from "react";
import * as React from "react";
import {TinaMarkdown} from "tinacms/dist/rich-text";


export const EventsList = ({data: data, parentField = ""}) => {

    const [loading, setLoading] = useState(false);
    const [eventsList, setData] = useState([])

    const yesterday = formatISO(sub(new Date(), {days: 1}));

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            const events = await client.queries.eventsConnection({
                sort: 'start_date',first: data.limit,
                filter: {
                    start_date: {after: yesterday},
                    location: data.location?.name && {location: {name: {eq: data.location.name}}}
                }})
            setData(events.data.eventsConnection.edges)
            setLoading(false);
        };
        fetchContent();
    }, []);


    return (
        <Section>
            <Container className={`px-5 pt-24 max-w-screen-xl lg:mx-auto`}>
                <div className="lg:flex lg:flex-col  mb-12 lg:mb-24 justify-between">
                    <div className="lg:flex">


                        <div className={"flex-1"}>
                            <h2 className="font-serif text-4xl lg:text-5xl text-gray-700 ">{data.title}</h2>

                            { data.location &&
                                <div className={"italic text-xl font-serif text-gray-500 lg:w-2/3 pt-6 pb-4"}>
                                    <TinaMarkdown content={ data.location.description } />
                                </div>
                            }
                        </div>

                        { data.location?.image &&
                          <div className={'lg:w-1/4 mr-4'}>
                            <img src={data.location.image} />
                          </div>
                        }

                    </div>
                    { data.show_all_link && (
                        <Link key={'stages-et-cours'}
                              href={'stages-et-cours'}
                              passHref>
                            <a className="text-interaction-default flex items-center">
                                Voir tous
                                <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17.8969H27.5101M27.5101 17.8969L23.4938 14M27.5101 17.8969L23.4938 21.7938"
                                          stroke="#FF922D" stroke-width="1.5" stroke-linecap="square"></path>
                                </svg>
                            </a>
                        </Link>
                    )}
                </div>

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
                    {loading ? (
                        <h4>Chargement...</h4>) :
                            (eventsList && eventsList.map((event) => (
                                <Event data={event.node}/>
                            ))
                        )
                    }
                </div>
            </Container>
        </Section>
    )
}