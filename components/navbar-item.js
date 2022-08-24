import Link from 'next/link';

export default function NavbarItem({ path, pathName, name }) {
  return (
    <div className='transition-colors duration-300 border p-2 rounded-lg text-xl border-white hover:border-slate-300'>
      <Link href={pathName}>
        <a className={path === pathName ? `underline underline-offset-8 decoration-1` : null}>{name}</a>
      </Link>
    </div>
  );
}
