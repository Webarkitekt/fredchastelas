import { Events } from "../components/events";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/layout";

export default function HomePage(
    props: AsyncReturnType<typeof getStaticProps>["props"]
) {
    const events = props.data.eventsConnection.edges;

    return (
        <Layout>
            <Events data={events} />
        </Layout>
    );
}

export const getStaticProps = async () => {
    const client = ExperimentalGetTinaClient();
    const tinaProps = await client.getEventsList();
    return {
        props: {
            ...tinaProps,
        },
    };
};



export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;