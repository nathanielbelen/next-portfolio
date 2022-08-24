import Link from 'next/link';

export default function NavbarItem({ path, pathName, name }) {
  return (
    <div className={`transition-colors duration-300 p-2 text-xl hover:text-[#A2A7A9] ${path === pathName ? 'underline underline-offset-8 decoration-1' : null}`}>
      <Link href={pathName}>
        <a>{name}</a>
      </Link>
    </div>
  );
}
