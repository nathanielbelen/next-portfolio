import Heading from '../components/heading';
import SectionDiv from '../components/sectiondiv';
import FormSpree from '../components/formspree';

export default function ContactMe() {
  return (
    <SectionDiv>
      <Heading title='contact me' />
      <div className='text-center text-xl'>
        <p>Find me at LinkedIn and GitHub</p>
      </div>

      <FormSpree />
    </SectionDiv>
  );
}
