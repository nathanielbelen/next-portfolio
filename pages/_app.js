import Layout from '../components/layout.js';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import useDarkMode from '../components/useDarkMode.js';
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
  const { theme, toggleTheme } = useDarkMode();
  return (
    <Layout router={router} theme={theme} toggleTheme={toggleTheme}>
      <AnimatePresence
        mode='wait'
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
