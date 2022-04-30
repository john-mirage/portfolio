import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {configureStore} from "@reduxjs/toolkit";
import reducer from "@reducers/main";
import {Provider} from "react-redux";

const store = configureStore({
  reducer: reducer,
});

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                  fontFamily: 'Poppins, sans-serif',
                  headings: {
                    fontFamily: 'Poppins, sans-serif',
                  },
                  colorScheme: 'dark',
                }}
            >
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </MantineProvider>
        </>
    );
}