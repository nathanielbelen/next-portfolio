import Heading from '../../components/heading';
import Link from 'next/link';
import SectionDiv from '../../components/sectiondiv';
import Page from '../../components/layouts/page';
import AnimatedImage from '../../components/animatedimage';
import { useState } from 'react';
import still from '../../assets/a2o-still.png';
import Image from 'next/image';

let work = {
  title: 'Apples-To-Oranges',
};

export default function ApplesToOranges() {
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
        <div className='px-5 text-justify'>
          <p>iterative stakeholder review</p>
        </div>
        <ul className='pl-10'>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              technologies
            </span>{' '}
            React, Node.js, Express, Axios, Webpack, AWS, Jest
          </li>
          <li className='m-4'>
            <span className='font-bold uppercase bg-slate-200 rounded p-1'>
              source
            </span>{' '}
            <a href='https://github.com/Fraktaa/Social-Game-Night' target='_blank' rel='noreferrer'>GitHub</a>
          </li>

        </ul>
      </SectionDiv>
    </Page>
  );
}
