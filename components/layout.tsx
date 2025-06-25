import React from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";
import { PageTransition } from "./page-transition";

export const Layout = ({
  rawData = {},
  data = layoutData as any,
  children,
}) => {
  const router = useRouter();
  return (
    <div>
      <DefaultSeo
        openGraph={{
          url: "https://fredericchastelas.com" + router.asPath,
        }}
      />
      <Header data={data?.header} />
      <PageTransition variant="fade" showLoader={true} loaderColor="gradient">
        <main>{children}</main>
      </PageTransition>
      <Footer data={data?.footer} />
    </div>
  );
};
