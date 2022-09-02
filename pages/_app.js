import Layout from '../components/layout.js';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

/* <AnimatePresence
exitBeforeEnter
initial={true}
onExitComplete={() => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}}
> */

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
