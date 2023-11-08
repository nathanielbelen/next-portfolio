import Layout from '@/components/layout.js';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import '@/styles/code-blocks.css';
import { useRouter } from 'next/router'
import * as ga from '@/lib/ga'

function MyApp({ Component, pageProps }) {
  let router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
