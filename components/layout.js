import Head from 'next/head';
import NavBar from './navbar.js';
import Footer from './footer.js';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router.js';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className={`relative min-h-screen bg-gray-100`}>
      <Head>
        <title>nathaniel belen</title>
        <meta name='description' content={`nathaniel's portfolio website`} />
      </Head>
      <AnimatePresence mode='wait'>
        <NavBar path={router.asPath} />
      </AnimatePresence>
      <div className='max-w-screen-md mx-auto pb-14'>{children}</div>
      <Footer />
    </div>
  );
}
