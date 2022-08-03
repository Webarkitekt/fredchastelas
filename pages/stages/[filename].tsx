import {staticRequest} from "tinacms";
import {useTina} from "tinacms/dist/edit-state";
import {Layout} from "../../components/layout";

const query = `query getEvent($relativePath: String!) {
  events(relativePath: $relativePath) {
      title
      start_date
      end_date
      location
      type
      description
  }
}
`;

// Use the props returned by get static props
export default function EventsPage(
    props: AsyncReturnType<typeof getStaticProps>["props"]
) {
    const {data} = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    if (data && data.events) {
        return (
            <Layout>
                <div>
                    {data.events.title}
                </div>
            </Layout>
        );
    }
    return (
        <div>No data</div>
    );
}

export const getStaticProps = async (ctx) => {
    const variables = {
        relativePath: ctx.params.filename + ".md",
    };
    let data = {
        events: null
    };
    try {
        // @ts-ignore
        data = await staticRequest({
            query,
            variables,
        });
    } catch (error) {
        console.log(error);
        // swallow errors related to document creation
    }

    return {
        props: {
            query,
            data,
            variables,
        },
    };
};

/**
 * To build the blog post pages we just iterate through the list of
 * posts and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/posts/hello.md" would
 * be viewable at http://localhost:3000/posts/hello
 */
export const getStaticPaths = async () => {

    const eventsResponse : any = await staticRequest({
            query: `{
              eventsConnection {
                edges {
                  node {
                    id
                    start_date
                    end_date
                    title
                    location
                    description
                    _sys {
                      filename
                    }
                  }
                }
              }
            }`
        }
    );


    const paths = eventsResponse?.eventsConnection.edges.map((event) => {
        return { params: { filename: event.node._sys.filename } };
    });

    return {
        paths,
        fallback: "blocking",
    };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;