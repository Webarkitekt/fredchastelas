import { getStaticPropsForTina } from 'tinacms'
import { Layout } from '../../components/layout'
import {client} from "../../.tina/client";

import Link from 'next/link'
export default function Home(props) {
    const eventsList = props.data.eventsConnection.edges
    return (
        <Layout>
            <h1>eventss</h1>
            <div>
                {eventsList.map((events) => (
                    <div key={events.node.id}>
                        <Link href={`/stages/${events.node._sys.filename}`}>
                            <a>{events.node._sys.filename}</a>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const tinaProps = await getStaticPropsForTina({
        query: `{
        eventsConnection{
          edges {
            node {
              id
              _sys {
                filename
              }
            }
          }
        }
      }`,
        variables: {},
    })

    return {
        props: {
            ...tinaProps,
        },
    }
}