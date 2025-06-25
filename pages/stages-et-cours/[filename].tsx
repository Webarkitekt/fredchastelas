import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../../components/layout";
import { Hero } from "../../components/blocks/hero";
import { Content } from "../../components/blocks/content";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const query = `query getEvent($relativePath: String!) {
  events(relativePath: $relativePath) {
      title
      start_date
      end_date
      location {
          ... on Location {
            name
          }
        }
      type
      description
  }
}
`;

// Use the props returned by get static props
function EventsPage({ ...props }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { start_date, end_date, title, type, description } = data.events;

  const event_start_date = new Date(start_date);
  const formattedStartDate = format(event_start_date, "dd MMM", { locale: fr });

  const event_end_date = new Date(end_date);
  const formattedEndDate = format(event_end_date, "dd MMM yyyy", {
    locale: fr,
  });

  return (
    <Layout>
      <Hero
        data={{
          as_banner: true,
          headline: title,
          tagline: `${type} • ${formattedStartDate} au ${formattedEndDate} • ${data.events.location.name}`,
        }}
        parentField={undefined}
      />
      <Content
        className="mb-24"
        data={{
          body: description,
        }}
      />
    </Layout>
  );
}

export default EventsPage;

export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.filename + ".md",
  };

  const res = await client.request(
    {
      query,
      variables,
    },
    {
      fetchOptions: {
        cache: "no-store",
      },
    }
  );

  return {
    props: {
      query: query,
      data: res.data,
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
  const eventsResponse: any = await client.queries.eventsConnection();

  const paths = eventsResponse.data.eventsConnection.edges.map((event) => {
    console.log(event.node._sys.filename);
    return { params: { filename: event.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
