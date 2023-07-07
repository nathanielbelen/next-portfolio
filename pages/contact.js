import Heading from '@/components/heading';
import Section from '@/components/section';
import FormSpree from '@/components/formspree';
import Page from '@/components/layouts/page';

export default function ContactMe() {
  return (
    <Page>
      <Section>
        <Heading title='contact me' />
        <div className='text-center text-xl leading-relaxes leading-8'>
          <p>
            Find me on{' '}
            <a href='' className='underline underline-offset-4'>
              LinkedIn
            </a>
            , email me <a className='underline underline-offset-4' href='mailto:me@nathanielbelen.com'>here</a>, or
            fill out the form below.<br />
            I look forward to hearing from you.
          </p>
        </div>
        <FormSpree />
      </Section>
    </Page>
  );
}
