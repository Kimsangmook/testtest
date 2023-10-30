import "styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { DEFAULT_SEO } from "constants/seo";
import { ErrorBoundary } from "utils/errors/ErrorBoundary";
import { CSSProp } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MSWProvider } from "mocks/MSWProvider";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <MSWProvider>
          <NextSeo {...DEFAULT_SEO} />
          <Component {...pageProps} />
        </MSWProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
