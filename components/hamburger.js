import { useState } from 'react';
import NavbarItem from './navbar-item.js';

export default function Hamburger({ path }) {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const closeMenu = () => {
    setVisibleMenu(false);
  };

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <>
      <section className='flex md:hidden'>
        <button onClick={toggleMenu} className='HAMBURGER-ICON space-y-2'>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
        </button>
        {visibleMenu && (
          <div className='showMenuNav'>
            <button className='absolute top-0 right-0 px-8 py-8' onClick={closeMenu}>
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
            <ul className='flex flex-col items-center justify-between min-h-[250px]'>
              <NavbarItem path={path} link='/' name='home' closeMenu={closeMenu} />
              <NavbarItem path={path} link='/posts' name='posts' closeMenu={closeMenu} />
              <NavbarItem path={path} link='/contact' name='contact' closeMenu={closeMenu} />
              <NavbarItem path={path} link='https://linkedin.com/in/nathanielbelen' name='linkedin' closeMenu={closeMenu} />
              <NavbarItem path={path} link='https://github.com/nathanielbelen' name='github' closeMenu={closeMenu} />
            </ul>
          </div>
        )}
      </section>
      <style jsx>{`
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </>
  );
}
