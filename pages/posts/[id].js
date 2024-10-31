import Page from '@/components/layouts/page';
import Section from '@/components/section';
import { getAllPostIds, getPostData } from '@/lib/posts';
import dynamic from "next/dynamic";
import Emblem from '@/components/posts/Emblem.js'

export default function Post({ postData: { id, title, date, emblems } }) {
  const DynamicBody = dynamic(() => import(`../../posts/${id}.mdx`));
  console.log(emblems)
  return (
    <Page>
      <Section>
        <div className='py-8'>
          <div className='flex items-center gap-6'>
            <div className='bg-[#212c33] h-px grow center'></div>
            <div className='text-4xl text-center font-semibold tracking-wider decoration-slate-400 relative'>
              {title}
            </div>
            <div className='bg-[#212c33] h-px grow center'></div>
          </div>
          <div className='text-center py-2 text-sm'>{date}</div>
          <div className='text-center text-sm'>
            {emblems.map((emblem, index) => (
              <Emblem key={`$post-${index}`} emblem={emblem} />
            ))}

          </div>
        </div>
        <div className='md:p-0 p-4'><DynamicBody /></div>
      </Section>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}