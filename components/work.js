import Image from 'next/image';
import logo from '/public/assets/craftzdog.png';

export default function Work({ info: { title, description }}) {
  return (
    <div className='basis-1/2 border px-2 py-1 flex flex-col items-center justify-center'>
      <div className='px-4 pt-2'>
      <Image src={logo} className="rounded-xl" />
      </div>
      <div className="text-2xl">{title}</div>
      <div className="text-base">{description}</div>
    </div>
  );
}
