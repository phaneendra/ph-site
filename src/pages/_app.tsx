import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { siteMetadatum } from "contentlayer/generated";
import Analytics from "@/components/core/analytics";
import LayoutWrapper from "@/components/LayoutWrapper";

import { trpc } from "@/lib/utils/trpc";

import "@/styles/globals.css";
import "@/styles/prism.css";
import "katex/dist/katex.css";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme={siteMetadatum.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
