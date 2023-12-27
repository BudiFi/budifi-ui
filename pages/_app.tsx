import { AntThemeProvider } from "@theme/theme-provider";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
// import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import React from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AntThemeProvider>
                    {/* <Hydrate state={pageProps.dehydratedState}> */}
                    <Component {...pageProps} />
                    {/* </Hydrate> */}
                </AntThemeProvider>
            </Provider>
        </QueryClientProvider>
    );
}

export default MyApp;
