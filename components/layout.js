import Head from 'next/head';
import NavBar from './navbar.js';
import Footer from './footer.js';

export default function Layout({ children, router, theme, toggleTheme }) {
  return (
    <div className={`relative min-h-screen bg-gray-100 ${theme}`} >
      <Head>
        <title>nathaniel belen</title>
        <meta name='description' content={`nathaniel's portfolio website`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar path={router.asPath} toggleTheme={toggleTheme} />
      <main className='max-w-screen-md mx-auto pb-15'>{children}</main>
      <Footer />
    </div>
  );
}
