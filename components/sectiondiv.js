import AnimatedDiv from '../components/animateddiv';

export default function SectionDiv({ children, delay = 0 }) {
  return (
    <AnimatedDiv delay={delay}>
      <div className='bg-white border rounded-xl drop-shadow-xl px-10 py-8'>
        {children}
      </div>
    </AnimatedDiv>
  );
}
