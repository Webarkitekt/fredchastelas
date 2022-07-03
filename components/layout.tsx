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
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="theme-color" content="#E6FAF8"/>
            </Head>
            <Header data={data?.header}/>
            <main>{children}</main>
            <Footer data={data?.header}/>
        </div>
    )
}
