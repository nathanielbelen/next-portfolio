import Heading from '../../components/heading';
import Link from 'next/link';
import SectionDiv from '../../components/sectiondiv';
import Page from '../../components/layouts/page';
import { useState } from 'react';

let work = {
  title: 'Project Atelier',
};

export default function SDC() {
  let [showChallenge, setShowChallenge] = useState(false);
  return (
    <Page>
      <SectionDiv>
        <div className='flex items-center gap-6'>
          <div className='py-3 decoration-slate-400 relative ml-6'>
            <span className='text-base font-bold underline underline-offset-4'>
              <Link href='/works'>
                <a>works</a>
              </Link>
            </span>
            <span> &gt; </span>
            <span className='font-bold text-2xl'>{work.title} </span>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              2022
            </span>
          </div>
        </div>
        <div className='px-5 text-justify'>
          <p>
            {`I worked with a team of engineers to overhaul an existing ecommerce storefront's API to withstand production-level traffic. The inherhited monolithic backend was slow, with response times often reaching over 1000ms. In the process of refactoring to microservices, we decomposed the existing API into 3 services: Products, Reviews, and Q&A. I personally was in charge of the Products service.`}
          <br />
            {`After the iterative process of improving queries, our service was able to reach 1600 requests per second while staying under 1500ms response time and 1% error rate. After identifying the current bottleneck to be the processing power of the individual server, 3 nodes were added to the system (1 load balancer and 2 extra app servers). This horizontally scaling allowed the service to reach 4500 requests per second (281% increase in rps) while keeping below the 1500 ms response time and 1% error rate threshold.`}
          </p>
        </div>
        <ul className='pl-10'>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              technologies
            </span>{' '}
            Node.js, NGINX, Express, PostgreSQL, AWS, Docker, NewRelic, k6
          </li>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              source
            </span>{' '}
            <a href='https://github.com/nathanielbelen/project-atelier-product-api' target='_blank' rel='noreferrer'>GitHub</a>
          </li>
        </ul>
      </SectionDiv>
    </Page>
  );
}
