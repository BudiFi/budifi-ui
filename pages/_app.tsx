import { AntThemeProvider } from "@theme/theme-provider";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
// import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "src/store/store";
import React from "react";
import GlobalStyle from "@theme/styles/globalStyles";
import "antd/dist/reset.css";
import "@theme/styles/style.css";
import NotificationContextProvider from "src/context/notificationContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: Infinity,
                refetchOnReconnect: false,
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalStyle />
                <AntThemeProvider>
                    {/* <Hydrate state={pageProps.dehydratedState}> */}
                    <NotificationContextProvider>
                        <Component {...pageProps} />
                    </NotificationContextProvider>

                    {/* </Hydrate> */}
                </AntThemeProvider>
            </Provider>
        </QueryClientProvider>
    );
}

export default MyApp;
