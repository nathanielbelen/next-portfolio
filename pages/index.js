import Head from 'next/head';
import Heading from '@/components/heading';
import About from '@/components/aboutme';
import Experiences from '@/components/experiences';
import Works from '@/components/works';
import Section from '@/components/section';
import Page from '@/components/layouts/page';
import Link from 'next/link'
import Emblem from '@/components/posts/Emblem'
import { getSortedPostsData } from '@/lib/posts';

export default function Home({ allPostsData }) {
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
      <Section delay={1.2}>
        <Heading title='blog' />
        <ul>
          {allPostsData.map((post) => {
            return <li key={`${post.id}`}><span className='text-sm'>{`[${post.date}]`}</span> <Link href={`/posts/${post.id}`}><span className='ml-5 mr-2 font-bold'>{post.title}</span></Link>
              {post.emblems.map((emblem, index) => (
                <Emblem key={`$post-${index}`} emblem={emblem} />
              ))}
            </li>
          })}
        </ul>
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

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}