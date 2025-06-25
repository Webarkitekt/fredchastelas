import React from "react";
import App from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import data from "../content/siteConfig.json";
import "../styles.css";

const MainLayout = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title={data.seoDefaultTitle}
        titleTemplate={"%s | " + data.title}
        description={data.description}
        openGraph={{
          type: "website",
          locale: "fr_FR",
          url: data.siteUrl,
          site_name: data.title,
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#E9F0F3" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

class Site extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <MainLayout Component={Component} pageProps={pageProps} />;
  }
}

export default Site;
