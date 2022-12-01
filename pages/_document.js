import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth overflow-y-scroll'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/assets/icons/logo.ico' />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main what={'hi'}/>
        <NextScript />
      </body>
    </Html>
  );
}

/* <link
href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;800&family=Roboto:wght@300;400;700;900&display=swap'
rel='stylesheet'
/> */
