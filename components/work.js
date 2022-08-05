import Image from 'next/image';
import logo from '/public/assets/craftzdog.png';
import Link from 'next/link';

export default function Work({ info: { title, description, link } }) {
  return (
    <div className='basis-1/2 border px-2 py-1 flex flex-col items-center justify-center'>
      <div className='px-4 pt-2'>
        <Link href={`/works/${link}`}>
          <a>
            <Image src={logo} className='rounded-xl' />
          </a>
        </Link>
      </div>
      <div className='text-2xl'>
        <Link href={`/works/${link}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className='text-base'>
        <Link href={`/works/${link}`}>
          <a>{description}</a>
        </Link>
      </div>
    </div>
  );
}
