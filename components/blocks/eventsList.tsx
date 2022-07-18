import {Event} from "../../components/event";
import {Container} from "../container";
import {Section} from "../section";
import Link from "next/link";
import {client} from "../../.tina/client";
import {useEffect, useState} from "react";


export const EventsList = ({data: data, parentField = ""}) => {

    const [loading, setLoading] = useState(false);
    const [eventsList, setData] = useState([])

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            const events = await client.queries.EventsQuery()
            setData(events.data.eventsConnection.edges)
            setLoading(false);
        };
        fetchContent();
    }, []);


    return (
        <Section>
            <Container className={'mx-5 max-w-screen-xl lg:mx-auto pb-24 lg:pb-48'}>
                <div className="lg:flex lg:flex-col  mb-12 lg:mb-24 justify-between">
                    <h2 className="font-serif text-4xl lg:text-5xl  text-gray-700 ">{data.title}</h2>
                    <Link key={'seminaires-et-cours'}
                          href={'/seminaires-et-cours/'}
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