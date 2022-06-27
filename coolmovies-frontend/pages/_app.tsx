import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { store } from "../store";
import { EnhancedStore } from "@reduxjs/toolkit";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import ApolloProvider, { client } from "../services/apollo";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  if (!store) return <>{"Loading..."}</>;
  return (
    <ApolloProvider>
      <Head>
        <title>{"Coolmovies Frontend"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
