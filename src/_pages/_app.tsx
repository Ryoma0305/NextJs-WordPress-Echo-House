import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { HubspotProvider } from "next-hubspot";
import { client } from "../../lib/apollo";
import "../styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HubspotProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </HubspotProvider>
  );
}
