import React from "react";
import Head from 'next/head'
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";

export const Layout = ({
    rawData = {},
    data = layoutData as any,
    children,
  }) => { return (
    <div>
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={data?.header}/>
      <main>{children}</main>
      <Footer data={data?.header}/>
    </div>
  )
}
