export default function Heading({ title, id }) {
  return (
    <div className='underline underline-offset-8 decoration-4 text-3xl font-bold py-7 decoration-slate-400 relative'>
      <div className='absolute -top-[40px]' id={id}></div>
      {title}
    </div>
  );
}
