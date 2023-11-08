import Page from '@/components/layouts/page';
import { getAllPostIds, getPostData } from '@/lib/posts';
import dynamic from "next/dynamic";

export default function Post({ postData: { id, title, date } }) {
  const DynamicBody = dynamic(() => import(`../../posts/${id}.mdx`));
  return (
    <Page>
      <div className='py-8'>
        <div className='flex items-center gap-6'>
          <div className='bg-[#212c33] h-px grow center'></div>
          <div className='text-4xl text-center font-semibold tracking-wider decoration-slate-400 relative'>
            {title}
          </div>
          <div className='bg-[#212c33] h-px grow center'></div>
        </div>
        <div className='text-center py-2 text-sm'>{date}</div>
      </div>
      <div className='md:p-0 p-4'><DynamicBody /></div>
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