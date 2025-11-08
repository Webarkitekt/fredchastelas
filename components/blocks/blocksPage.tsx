import { Layout } from '../layout'
import { NextSeo } from 'next-seo'
import { Blocks } from '../blocks'
import { StructuredData } from '../StructuredData'
import Head from 'next/head'

export const BlocksPage = ({ data }) => {
    const siteUrl = 'https://fredericchastelas.com'
    const filename = data._sys?.filename || ''
    const pageUrl = filename === 'home' ? siteUrl : `${siteUrl}/${filename}`

    // Déterminer le type de données structurées selon la page
    const getStructuredDataType = () => {
        if (filename === 'home') return 'person'
        if (filename === 'regulation-emotionnelle-tipi') return 'service'
        if (filename === 'stages-et-cours') return 'course'
        if (filename === 'coaching-en-entreprise') return 'organization'
        return null
    }

    const structuredDataType = getStructuredDataType()

    return (
        <>
            {data.seo && (
                <NextSeo
                    title={data.seo.title}
                    description={data.seo.description}
                    canonical={pageUrl}
                    openGraph={{
                        type: 'website',
                        locale: 'fr_FR',
                        url: pageUrl,
                        title: data.seo.title,
                        description: data.seo.description,
                        site_name: 'Frédéric Chastelas',
                        images: [
                            {
                                url: `${siteUrl}/images/og-image.jpg`,
                                width: 1200,
                                height: 630,
                                alt: 'Frédéric Chastelas - Expert TIPI et Méditation',
                            },
                        ],
                    }}
                    twitter={{
                        cardType: 'summary_large_image',
                    }}
                    additionalMetaTags={[
                        {
                            name: 'keywords',
                            content: 'régulation émotionnelle, TIPI, méditation, coaching entreprise, formation TIPI, gestion stress, phobies, angoisses',
                        },
                        {
                            name: 'author',
                            content: 'Frédéric Chastelas',
                        },
                        {
                            property: 'article:author',
                            content: 'Frédéric Chastelas',
                        },
                    ]}
                />
            )}

            {structuredDataType && <StructuredData type={structuredDataType} />}

            <Head>
                <link rel="canonical" href={pageUrl} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            </Head>

            <Layout>
                <Blocks blocks={data.blocks} />
            </Layout>
        </>
    )
}