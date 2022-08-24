import Link from 'next/link';
import NavbarItem from './navbar-item.js'

export default function NavBar({ path, toggleTheme }) {
  return (
    <div className='w-full'>
      <div className='p-5 max-w-screen-lg m-auto' id='navbar'>
        <div className='flex items-center'>
          <div className='text-3xl font-medium'>
          <Link href='/'>
                <a>nathaniel belen</a>
              </Link>
          </div>
          <div className='flex-grow flex gap-5 px-10'>
            <NavbarItem path={path} pathName={`/`} name='home'/>
            <NavbarItem path={path} pathName={`/works`} name='works'/>
            <NavbarItem path={path} pathName={`/contact`} name='contact'/>
            <NavbarItem path={path} pathName={`/posts`} name='posts'/>
          </div>
          <div className=''><button onClick={toggleTheme}>🌑/🌞</button></div>
        </div>
      </div>
    </div>

  );
}

// return <div className='max-w-screen-lg border absolute w-full mx-auto'>navbar</div>;
