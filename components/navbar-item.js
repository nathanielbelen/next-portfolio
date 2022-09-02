import Link from 'next/link';

export default function NavbarItem({ path, link, name, closeMenu = null }) {
  return (
    <div
      onClick={closeMenu}
      className={`transition-colors duration-300 p-2 text-xl hover:text-[#A2A7A9] ${
        path === link ? 'underline underline-offset-8 decoration-1' : null
      }`}
    >
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>
  );
}
