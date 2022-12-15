import Work from './work';

const icons = {
  shoppingcart: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
      <path d='M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z' />
    </svg>
  ),
  controller: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
      <path d='M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z' />
    </svg>
  ),
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z" /></svg>
  ),
  home: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>)
};

const works = [
  {
    title: 'nathanielbelen.com',
    description: 'Responsive personal website hosted on Vercel.',
    link: 'portfolio',
    deployed: 'https://nathanielbelen.com',
    source: 'https://github.com/nathanielbelen/next-portfolio',
    icon: icons.home,
    stack: ['React', 'Next.js', 'Tailwind CSS', 'framer-motion', 'formspree'],
    direct: { link: 'https://github.com/nathanielbelen/next-portfolio' },
  },
  {
    title: 'Apples-to-Oranges',
    description: 'Multiplayer game application with an online chat, customizable card decks, user authentication, and more.',
    link: 'apples',
    source: 'https://github.com/Fraktaa/Social-Game-Night',
    icon: icons.controller,
    stack: ['React', 'MUI', 'Express', 'Firebase', 'Node.js', 'Socket.io'],
    direct: { link: 'https://github.com/Fraktaa/Social-Game-Night' },
  },
  {
    title: `what's up`,
    description: 'An animated weather application displaying detailed, hour-by-hour breakdown of expected weather conditions for the coming week.',
    link: 'whats-up',
    deployed: 'https://classy-hotteok-c9ecbf.netlify.app/',
    source: 'https://github.com/nathanielbelen/whats-up',
    icon: icons.controller,
    stack: ['React', 'Vite', 'Axios', 'chart.js', 'framer-motion'],
    direct: { link: 'https://classy-hotteok-c9ecbf.netlify.app/' },
  },
  {
    title: 'Starkfront',
    description: 'An ecommerce product page.',
    link: 'starkfront',
    source: 'https://github.com/Stark-Direwolves/Starkfront',
    icon: icons.shoppingcart,
    stack: ['React', 'Node.js', 'Express', 'Axios', 'Webpack', 'Styled Components', 'AWS', 'Jest'],
    direct: { link: 'https://github.com/Stark-Direwolves/Starkfront' },
  },
  {
    title: 'websocket-roulette',
    description: 'A collaborative Roulette application using WebSocket, which allows for real-time wagers and chat.',
    link: 'roulette',
    source: 'https://github.com/nathanielbelen/websocket-roulette',
    icon: icons.controller,
    stack: ['MUI', 'Axios', 'Express', 'React', 'SQLite3', 'WebSocket', 'ws'],
    direct: { link: 'https://github.com/nathanielbelen/websocket-roulette' },
  },
  {
    title: 'Project Atelier',
    description: `Built, tested, and scaled backend infrastructure for 'products' microservice.`,
    link: 'atelier',
    source: 'https://github.com/nathanielbelen/project-atelier-product-api',
    icon: icons.server,
    stack: ['Node.js', 'NGINX', 'Express', 'PostgreSQL', 'AWS', 'Docker', 'NewRelic', 'k6'],
    direct: { link: 'https://github.com/nathanielbelen/project-atelier-product-api' },
  },
];

export default function Works() {
  return (
    <div className='grid md:grid-cols-[repeat(2,minmax(300px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-2 py-2'>
      {works.map((work, i) => (
        <Work info={work} key={i} />
      ))}
    </div>
  );
}


/*
  {
    title: 'ouronlygameisroulette',
    description: 'Collaborative roulette application built within a 2 day timebox.',
    link: 'ouronlygameisroulette',
    source: 'https://github.com/nathanielbelen/ouronlygameisroulette',
    icon: icons.controller,
    stack: ['React', 'WebSocket', 'Node.js', 'Axios', 'MUI', 'Express', 'SQLite'],
    thumbnail: oogir_thumbnail,
    direct: { link: 'https://github.com/nathanielbelen/ouronlygameisroulette' },
  }

[
  {
    title: 'nathanielbelen.com',
    description: 'Responsive personal website hosted on Vercel.',
    link: 'portfolio',
    deployed: 'https://nathanielbelen.com',
    icon: icons.home,
    stack: ['React', 'WebSocket', 'Node.js', 'Axios', 'MUI', 'Express', 'SQLite'],
    thumbnail: oogir_thumbnail,
    direct: { link: 'https://nathanielbelen.com' },
  },
  {
    title: 'Starkfront',
    description: 'An ecommerce product page.',
    link: 'starkfront',
    source: 'https://github.com/Stark-Direwolves/Starkfront',
    icon: icons.shoppingcart,
    stack: ['React', 'Node.js', 'Express', 'Axios', 'Webpack', 'Styled Components', 'AWS', 'Jest'],
    thumbnail: starkfront_thumbnail,
  },
  {
    title: 'Project Atelier',
    description: `Built, tested, and scaled backend infrastructure for 'products' microservice.`,
    link: 'atelier',
    source: 'https://github.com/nathanielbelen/project-atelier-product-api',
    icon: icons.server,
    stack: ['Node.js', 'NGINX', 'Express', 'PostgreSQL', 'AWS', 'Docker', 'NewRelic', 'k6'],
    thumbnail: sdc_thumbnail,
  },
  {
    title: 'Apples-to-Oranges',
    description: 'Multiplayer game application with an online chat, customizable card decks, user authentication, and more.',
    link: 'apples',
    source: 'https://github.com/Fraktaa/Social-Game-Night',
    icon: icons.controller,
    stack: ['React', 'MUI', 'Express', 'Firebase', 'Node.js', 'Socket.io'],
    thumbnail: a2o_thumbnail,
    direct: { link: 'https://github.com/Fraktaa/Social-Game-Night' },
  },
]

*/