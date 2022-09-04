import Layout from '../components/layout.js';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

/* <AnimatePresence
exitBeforeEnter
initial={true}
onExitComplete={() => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}}
> */

function MyApp({ Component, pageProps, what }) {
  let router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout router={router}>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
