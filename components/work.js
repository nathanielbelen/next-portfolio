import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Work({
  info: { title, description, link, icon, thumbnail, stack, source, deployed },
}) {
  return (
    <motion.div
      className='flex flex-col bg-slate-200 rounded-md justify-between min-h-[18rem] p-5 relative'
      whileHover={{ y: -2 }}
    >
      <header className=''>
        <div className='flex justify-between pb-3 min-h-[52px]'>
          <div className='w-10'>{icon}</div>
          <ul className='flex gap-3'>
            {source && (
              <li className='w-8'>
                <a
                  href={source}
                  className='z-10 relative hover:fill-slate-600 transition-colors'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                  </svg>
                </a>
              </li>
            )}
            {deployed && (
              <li className='w-8'>
                <a
                  href={deployed}
                  className='z-10 relative hover:fill-slate-600 transition-colors'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z' />
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </div>
        <Link href={`works/${link}`}>
          <a
            className={`z-20 hover:text-slate-600 transition-colors before:content-[''] before:absolute before:z-0 before:h-full before:w-full before:top-0 before:left-0 before:block`}
          >
            <div className='text-2xl font-semibold py-3'>{title}</div>
          </a>
        </Link>

        <div className='text-base pb-3'>{description}</div>
      </header>
      <footer className=''>
        <ul className='text-sm gap-x-2 gap-y-1 flex flex-wrap'>
          {stack.map((tech, index) => <li key={index} className='bg-slate-300 px-1 rounded'>{tech}</li>)}
        </ul>
      </footer>
    </motion.div>
  );
}
