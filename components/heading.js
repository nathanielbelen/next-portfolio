// 'underline underline-offset-8 decoration-4 text-3xl font-bold py-7 decoration-slate-400 relative'

export default function Heading({ title }) {
  return (
    <div className='flex items-center gap-6 pb-4'>
      <div className='text-3xl font-semibold tracking-wider decoration-slate-400 relative'>
        {title}
      </div>
      <div className='bg-[#212c33] h-px grow center'></div>
    </div>
  );
}
