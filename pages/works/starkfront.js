import Heading from '../../components/heading';
import Link from 'next/link';

let work = {
  title: 'Starkfront'
}

export default function Starkfront() {
  return (
    <div className='px-5'>
      <div className='flex items-center gap-6'>
        <div className='text-3xl font-roboto font-bold py-7 decoration-slate-400 relative ml-6'>
          <div className='absolute -top-[40px]' id={`starkfront`}></div>
          works > {work.title}
        </div>
        <div className='bg-black h-px grow center'></div>
        <div className='mr-6 text-sm'><Link href='/works'><a>{`<< back`}</a></Link></div>
      </div>
      <div className='indent-16 px-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        elementum purus. Cras vitae ante sit amet sem feugiat facilisis in vel
        nisi. In sollicitudin diam nulla, nec feugiat enim auctor eu. Integer
        finibus neque nec ipsum lacinia posuere. Sed in enim efficitur, varius
        eros vitae, scelerisque ipsum. Quisque ut pretium ex, ut tempus lacus.
        Nulla nulla augue, tincidunt nec orci quis, egestas fermentum leo.
        Praesent quis magna in eros efficitur efficitur a ut massa. Nunc vitae
        est in enim fringilla mollis. Suspendisse sit amet ultrices justo.
        Nullam condimentum enim diam. Donec interdum rhoncus ultrices. Mauris in
        congue mauris, vitae euismod sem.
      </div>
      <ul className='indent-8 px-5'>
        <li className='m-4'>
          <span className='font-bold uppercase bg-slate-200 rounded p-1'>
            technologies
          </span>{' '}
          React, Node.js, Express, Axios, Webpack, AWS, Jest
        </li>
        <li className='m-4'>
          <span className='font-bold uppercase bg-slate-200 rounded p-1'>
            source
          </span>{' '}
          <a href='https://github.com/Stark-Direwolves/Starkfront'>github</a>
        </li>
      </ul>
    </div>
  );
}
