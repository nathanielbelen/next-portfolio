import Heading from '../components/heading';
import SectionDiv from '../components/sectiondiv';
import FormSpree from '../components/formspree';
import Page from '../components/layouts/page';

export default function ContactMe() {
  return (
    <Page>
      <SectionDiv>
        <Heading title='contact me' />
        <div className='text-center text-xl'>
          <p>
            Find me at{' '}
            <a href='' className='underline underline-offset-4'>
              LinkedIn
            </a>
            , email me <a className='underline underline-offset-4'>here</a>, or
            fill out the form below.
          </p>
        </div>
        <FormSpree />
      </SectionDiv>
    </Page>
  );
}
