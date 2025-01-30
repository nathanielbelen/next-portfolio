import Heading from '@/components/heading';
import Section from '@/components/section';
import Page from '@/components/layouts/page';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import Emblem from '@/components/posts/Emblemm'

export default function Posts({ allPostsData }) {
  return (
    <Page>
      <Section>
        <Heading title='blog' />
        <ul>
          {allPostsData.map((post) => {
            return (
              <li key={`${post.id}`}>
                <span className='text-sm'>{`[${post.date}]`}</span>
                <Link href={`/posts/${post.id}`}>
                  <span className='ml-5 mr-2 font-bold cursor-pointer'>{post.title}</span>
                </Link>
                {post.emblems.map((emblem, index) => (
                  <Emblem key={`$post-${index}`} emblem={emblem} />
                ))}
              </li>
            );
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