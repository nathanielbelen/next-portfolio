import Head from 'next/head';
import NavBar from './navbar.js';
import Footer from './footer.js';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ children, router }) {
  return (
    <div className={`relative min-h-screen bg-gray-100`}>
      <Head>
        <title>nathaniel belen</title>
        <meta name='description' content={`nathaniel's portfolio website`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AnimatePresence>
        <NavBar path={router.asPath} />
        <main className='max-w-screen-md mx-auto pb-14'>{children}</main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
