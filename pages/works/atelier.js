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
            <span> > </span>
            <span className='font-bold text-2xl'>{work.title} </span>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              2022
            </span>
          </div>
        </div>
        <div className='px-5'>
          <p>
            stuff here
          </p>
        </div>
        <ul className='indent-8 px-5'>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              technologies
            </span>{' '}
            zee technologies
          </li>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              source
            </span>{' '}
            <a href=''>github</a>
          </li>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              challenges
            </span>
            <button
              onClick={() => {
                setShowChallenge(!showChallenge);
              }}
            >
              +
            </button>
            {showChallenge && (
              <div className='text-sm p-4 m-4 rounded-lg bg-slate-100'>
              sum challenge
              </div>
            )}
          </li>
        </ul>
      </SectionDiv>
    </Page>
  );
}
