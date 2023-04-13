import {Event} from "../../components/event";
import {Container} from "../container";
import {Section} from "../section";
import Link from "next/link";
import { client } from '../../.tina/client'
import formatISO from "date-fns/formatISO";
import sub from 'date-fns/sub';
import {useEffect, useState} from "react";
import * as React from "react";
import {TinaMarkdown} from "tinacms/dist/rich-text";
import LinkArrowRight from "../../public/link-arrow-right.svg";


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
        eventsList.length > 0 && (
            <Section>
                <Container className={`px-5 pt-12 lg:pt-24 max-w-screen-xl lg:mx-auto`}>
                    <div className="lg:flex lg:flex-col mb-12 lg:mb-18 justify-between">
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
                                    <LinkArrowRight/>
                                </a>
                            </Link>
                        )}
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
                        {loading ? (
                            <h4>Chargement...</h4>) :
                                (eventsList.length > 0 && (eventsList.map((event) => (
                                    <Event data={event.node} key={event.node._sys.filename}/>
                                ))
                            ))
                        }
                    </div>
                </Container>
            </Section>
        )
    )
}