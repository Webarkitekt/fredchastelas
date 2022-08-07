import React from "react";
import Head from 'next/head'
import {Header} from "./header";
import {Footer} from "./footer";
import layoutData from "../content/global/index.json";

export const Layout = ({
                           rawData = {},
                           data = layoutData as any,
                           children,
                       }) => {
    return (
        <div>
            <Head>
                <title>Frédéric Chastelas - Régulation émotionnelle TIPI, cours et stages de méditation</title>
                <meta property="og:title" content="Frédéric Chastelas - Régulation émotionnelle TIPI, cours et stages de méditation" key="title" />
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <Header data={data?.header}/>
            <main>{children}</main>
            <Footer data={data?.header}/>
        </div>
    )
}
