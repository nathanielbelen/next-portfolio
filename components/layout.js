import Head from 'next/head';
import Navbar from './navbar.js';
import Footer from './footer.js';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>nathaniel belen</title>
        <meta name='description' content={`nathaniel's portfolio website`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='max-w-screen-md mx-auto border pb-10'>{children}</main>
      <Footer />
    </div>
  );
}
