import Heading from '@/components/heading';
import Section from '@/components/section';
import Page from '@/components/layouts/page';
import { getSortedPostsData } from '@/lib/posts';

export default function Posts({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Page>
      <Section>
        <Heading title='blog' />
        blog
      </Section>
    </Page>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}