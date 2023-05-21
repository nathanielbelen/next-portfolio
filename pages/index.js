import Head from 'next/head';
import Heading from '../components/heading';
import About from '../components/aboutme';
import Experiences from '../components/experiences';
import Works from '../components/works';
import Section from '../components/section';
import Page from '../components/layouts/page';
import Link from 'next/link'

export default function Home() {
  return (
    <Page>
      <Section>
        <Heading title='about me' id='about' />
        <About />
      </Section>
      <Section delay={0.3}>
        <Heading title='experience' id='experience' />
        <Experiences />
      </Section>
      <Section delay={0.6}>
        <Heading title='works' id='works' />
        <Works />
      </Section>
      <Section delay={0.9}>
        <Heading title='contact me' id='contact' />
        <div className='text-center flex flex-col'>
          <div className='font-semibold text-2xl p-2'>
            <Link href='/contact'>
              <a><u>Let&apos;s talk!</u></a>
            </Link>
          </div>
          <div className='text-xl'>
            I&apos;m always interested in new opportunities.
          </div>
        </div>
      </Section>
    </Page>
  );
}
