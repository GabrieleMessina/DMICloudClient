import App from 'next/app'
import React from 'react'
import Head from "next/head";
import withReduxStore from '../lib/with-redux-store'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import theme from '../public/theme';

class MyApp extends App {

    /*
    Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:
    -Persisting layout between page changes
    -Keeping state when navigating pages
    -Custom error handling using componentDidCatch
    -Inject additional data into pages (for example by processing GraphQL queries)

    */

    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.

    /*static async getInitialProps({ req }) { // WARN only for pages not component, executed by server most of the time
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    }*/

    render() {
        const { Component, pageProps, reduxStore, reduxPersistor } = this.props;
        return (
            <Provider store={reduxStore}>
                {/*</PersistGate>*/}
                <Head>
                    <title>Dmi Cloud</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
                {/*<PersistGate loading={<p>Sto caricando...</p>} persistor={reduxPersistor}>*/}
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)