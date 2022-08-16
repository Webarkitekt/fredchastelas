import { Blocks } from "../components/blocks";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
import { client } from '../.tina/__generated__/client'

export default function HomePage(
    props: AsyncReturnType<typeof getStaticProps>["props"]
) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    if (data && data.pages){
        // @ts-ignore
        return (
            <Layout rawData={data}>
                <Blocks id={""} _sys={undefined} _values={undefined} {...data.pages} />
            </Layout>
        );
    }
}

export const getStaticProps = async ({ params }) => {
    const tinaProps = await client.queries.ContentQuery({
        relativePath: `${params.filename}.md`,
    });
    return {
        props: {
            data: tinaProps.data,
            query: tinaProps.query,
            variables: tinaProps.variables,
        },
    };
};

export const getStaticPaths = async () => {
    const pagesListData = await client.queries.pagesConnection();
    return {
        paths: pagesListData.data.pagesConnection.edges.map((page) => ({
            params: { filename: page.node._sys.filename },
        })),
        fallback: false,
    };
};
export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;
