import Image from 'next/image';
import logo from '/public/assets/craftzdog.png';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Work({ info: { title, description, link } }) {
  return (
    <div className='basis-1/2 px-3 py-2 flex flex-col items-center justify-center'>
      <motion.div
        className='rounded-xl p-2'
        whileHover={{ scale: 1.025 }}
      >
        <div className='px-4 pt-2'>
          <Link href={`/works/${link}`}>
            <a>
              <Image src={logo} className='rounded-xl' alt={link} />
            </a>
          </Link>
        </div>
        <div className='text-2xl text-center'>
          <Link href={`/works/${link}`}>
            <a>{title}</a>
          </Link>
        </div>
        <div className='text-base text-center'>
          <Link href={`/works/${link}`}>
            <a>{description}</a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
