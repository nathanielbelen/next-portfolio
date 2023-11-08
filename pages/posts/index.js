import Heading from '@/components/heading';
import Section from '@/components/section';
import Page from '@/components/layouts/page';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Posts({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Page>
      <Section>
        <Heading title='blog' />
        <ul>
          {allPostsData.map((post) => {
            return <li key={`${post.id}`}>{post.date} <Link href={`/posts/${post.id}`}><span className='underline '>{post.title}</span></Link></li>
          })}
        </ul>

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