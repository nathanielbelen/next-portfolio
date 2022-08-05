import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='sticky top-0 p-5 border bg-white max-w-screen-lg m-auto z-50 font-roboto'>
      <div className='flex items-center'>
        <div className='text-3xl font-medium'>
        <Link href='/'>
              <a>nathaniel belen</a>
            </Link>
        </div>
        <div className='flex-grow flex gap-5 px-10 text-xl'>
          <div>
            <Link href='/'>
              <a>home</a>
            </Link>
          </div>
          <div>
          <Link href='/works'>
              <a>works</a>
            </Link>
          </div>
          <div>
          <Link href='/contact'>
              <a>contact me</a>
            </Link>
          </div>
          <div>
          <Link href='/posts'>
              <a>posts</a>
            </Link>
          </div>
        </div>
        <div className=''>🌑/🌞</div>
      </div>
    </div>
  );
}

// return <div className='max-w-screen-lg border absolute w-full mx-auto'>navbar</div>;
