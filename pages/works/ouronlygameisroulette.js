import Heading from '../../components/heading';
import Link from 'next/link';
import SectionDiv from '../../components/sectiondiv';
import Page from '../../components/layouts/page';
import { useState } from 'react';

let work = {
  title: 'ouronlygameisroulette',
};

export default function Roulette() {
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
            Given 2 days to work on creating an application of our choice with the goal of achieving MVP, I chose to create a roulette app that spun synchronously to all clients.
          </p>
        </div>
        <ul className='pl-10'>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              technologies
            </span>{' '}
            React, WebSocket, Node.js, Axios, MUI, Express, SQLite
          </li>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              source
            </span>{' '}
            <a href='https://github.com/nathanielbelen/ouronlygameisroulette' target='_blank' rel='noreferrer'>GitHub</a>
          </li>
        </ul>
      </SectionDiv>
    </Page>
  );
}
