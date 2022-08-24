import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='scroll-smooth overflow-y-scroll'>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;800&family=Nunito+Sans:wght@200;400;800&family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link rel='icon' href='/assets/icons/logo.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


/* <link
href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;800&family=Roboto:wght@300;400;700;900&display=swap'
rel='stylesheet'
/> */