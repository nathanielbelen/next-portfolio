import Image from 'next/image';
import profile from '/public/assets/1646757629589.jpg';

// I am a full-stack engineer based in Los Angeles, California. I curently work at Galvanize as a Software Engineering Immersive Resident.

// Here are some technologies I've been working with:

export default function About() {
  return (
    <div className='px-5 flex gap-5'>
      <div className='flex flex-col'>
        <span className='indent-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          elementum purus. Cras vitae ante sit amet sem feugiat facilisis in vel
          nisi. In sollicitudin diam nulla, nec feugiat enim auctor eu. Integer
          finibus neque nec ipsum lacinia posuere. Sed in enim efficitur, varius
          eros vitae, scelerisque ipsum. Quisque ut pretium ex, ut tempus lacus.
          Nulla nulla augue, tincidunt nec orci quis, egestas fermentum leo.
          Praesent quis magna in eros efficitur efficitur a ut massa. Nunc vitae
          est in enim fringilla mollis. Suspendisse sit amet ultrices justo.
          Nullam condimentum enim diam. Donec interdum rhoncus ultrices. Mauris
          in congue mauris, vitae euismod sem.
        </span>
        <br />
        <span>Here are some technologies that I&apos;ve been working with:</span>
        <ul className='flex flex-wrap list-[square] list-inside mx-10'>
          <li className='basis-1/2'>Javascript ES6+</li>
          <li className='basis-1/2'>React.js</li>
          <li className='basis-1/2'>Node.js</li>
          <li className='basis-1/2'>HTML & CSS</li>
          <li className='basis-1/2'>Next.js</li>
          <li className='basis-1/2'>MongoDB</li>
          <li className='basis-1/2'>PostgreSQL</li>
        </ul>
      </div>
      <div className='flex flex-col justify-center'>

        <img
          className='max-w-none w-36 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
          src='/assets/1646757629589.jpg'
          alt='Nathaniel'
        ></img>
      </div>
    </div>
  );
}
