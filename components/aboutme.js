import Image from 'next/image';
import profile from '../assets/1646757629589.jpg';

// I am a full-stack engineer based in Los Angeles, California. I curently work at Galvanize as a Software Engineering Immersive Resident.

// Here are some technologies I've been working with:

export default function About() {
  return (
    <div className=' flex gap-5'>
      <div className='flex flex-col text-justify'>
        <span className=''>
          Hello! My name is Nathaniel, I&apos;m a{' '}
          <strong>full-stack engineer</strong> with a background in ecommerce. I
          have a great interest in being able to create things that people
          enjoy. I currently work at <strong>Galvanize</strong> as a Software
          Engineering Immersive Resident.
        </span>
        <br />
        <span>
          Here are some technologies that I&apos;ve been working with:
        </span>
        <ul className='flex flex-wrap list-[square] list-inside md:mx-10 text-sm'>
          <li className='basis-1/2'>Javascript ES6+</li>
          <li className='basis-1/2'>React.js</li>
          <li className='basis-1/2'>Node.js</li>
          <li className='basis-1/2'>HTML & CSS</li>
          <li className='basis-1/2'>Next.js</li>
          <li className='basis-1/2'>MongoDB</li>
          <li className='basis-1/2'>PostgreSQL</li>
          <li className='basis-1/2'>TypeScript</li>
        </ul>
        <br />
        <span>
          Outside of coding, I&apos;m very interested in video games, music, food, and
          the technologies surrounding them.
        </span>
      </div>
      <div className='hidden md:block flex flex-col justify-center'>
        <div className='p-1 rounded-full w-44 h-44 ring-2 ring-gray-300 dark:ring-gray-500 overflow-hidden relative' >
          <Image src={profile} alt='Nathaniel' objectFit="cover" layout='fill' />
        </div>
      </div>
    </div>
  );
}
