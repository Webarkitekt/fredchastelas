import { Layout } from '../layout'
import { NextSeo } from 'next-seo'
import { Blocks } from '../blocks'

export const BlocksPage = ({ data }) => {
    return (
        <>
            {data.seo && (
                <NextSeo
                    title={data.seo.title}
                    description={data.seo.description}
                    openGraph={{
                        title: data.seo.title,
                        description: data.seo.description,
                    }}
                />
            )}
            <Layout>
                <Blocks blocks={data.blocks} />
            </Layout>
        </>
    )
}