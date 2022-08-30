import Image from 'next/image';
import logo from '../assets/craftzdog.png';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Work({ info: { title, description, link, icon, thumbnail } }) {
  return (
    <div className='basis-1/2 px-3 py-2 flex
                    flex-col items-center justify-center h-full'>
      <motion.div className='rounded-xl p-2' whileHover={{ y: -2 }}>
        <div className='px-4 pt-2 relative'>
        <Link href={`/works/${link}`}>
            <a>
          <div className='absolute w-32 h-32 pt-2 top-0
                          bottom-0 left-0 right-0 m-auto
                          z-10 fill-slate-500 outline-white'>
            {icon}
          </div>
          <Image src={thumbnail || logo} className='rounded-xl' objectFit={true} alt={link} />
            </a>
          </Link>
        </div>
        <div className='text-lg font-semibold text-center'>
          <Link href={`/works/${link}`}>
            <a>{title}</a>
          </Link>
        </div>
        <div className='text-sm text-center'>
          <Link href={`/works/${link}`}>
            <a>{description}</a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
