import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";

export default function HomePage(
    props: AsyncReturnType<typeof getStaticProps>["props"]
) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    if (data && data.pages){
        return (
            <Layout rawData={data}>
                <Blocks id={""} _sys={{
                    __typename: "SystemInfo",
                    filename: "",
                    title: "",
                    basename: "",
                    breadcrumbs: [],
                    path: "",
                    relativePath: "",
                    extension: "",
                    template: "",
                    collection: {
                        __typename: "Collection",
                        name: "",
                        slug: "",
                        label: "",
                        path: "",
                        format: "",
                        matches: "",
                        templates: [],
                        fields: [],
                        documents: undefined
                    }
                }} _values={undefined} {...data.pages} />
            </Layout>
        );
    }
}

export const getStaticProps = async ({ params }) => {
    const client = ExperimentalGetTinaClient();
    const tinaProps = await client.ContentQuery({
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
    const client = ExperimentalGetTinaClient();
    const pagesListData = await client.pagesConnection();
    return {
        paths: pagesListData.data.pagesConnection.edges.map((page) => ({
            params: { filename: page.node._sys.filename },
        })),
        fallback: false,
    };
};
export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;
