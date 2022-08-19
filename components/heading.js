// 'underline underline-offset-8 decoration-4 text-3xl font-bold py-7 decoration-slate-400 relative'

export default function Heading({ title, id }) {
  return (
    <div className='flex items-center gap-6'>
      <div className='text-3xl font-roboto font-bold py-7 decoration-slate-400 relative ml-6'>
        <div className='absolute -top-[40px]' id={id}></div>
        {title}
      </div>
      <div className='bg-black h-px grow mr-6 center'></div>
    </div>
  );
}
