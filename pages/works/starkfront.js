import Heading from '../../components/heading';
import Link from 'next/link';
import SectionDiv from '../../components/sectiondiv';
import Page from '../../components/layouts/page';
import AnimatedImage from '../../components/animatedimage';
import { useState } from 'react';
import still from '../../assets/starkfront-still.webp';
import overview from '../../assets/overview.png';
import related from '../../assets/related.png';
import Image from 'next/image';

let work = {
  title: 'Starkfront',
};

export default function Starkfront() {
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
        <div className='px-5 text-justify'>
          <p>
            I worked in a team of engineers to develop the front end of an
            ecommerce product page that met specifications outlined in a 17-page
            Business Requirements Document. Work was done on a single codebase,
            working collaboratively to produce a single front end application. I
            was in charge of the Overview module, which was the top-most module
            on the product page. Overview consisted of 4 major components: image
            gallery, product information, style selector, and add-to-cart.
          </p>
        </div>
        <ul className='indent-8 px-5'>
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
            <a href='https://github.com/Stark-Direwolves/Starkfront'>github</a>
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
              <div className='text-sm p-4 m-4 rounded-lg bg-slate-100 text-justify'>
                One challenge I faced within this project was writing the
                ‘expanded view zoom’ functionality. The requirements stated that
                when inside the expanded view, the portion of the zoomed image
                within the window should correspond to the current mouse
                position relative to the screen. To write this algorithm, the
                most important values I needed were the coordinates of the mouse
                position, which we obtained through clientX and clientY of{' '}
                <a
                  target='_blank'
                  href='https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent'
                  className='underline underline-offset-2'
                  rel='noreferrer'
                >
                  MouseEvent
                </a>
                . Given the width and height of the viewport, I was able to
                determine the ideal zoom position with the following formula:
                <span className='block indent-0 bg-slate-200 p-2 m-2 rounded-sm font-sans'>
                  zoomedX = (currentX / viewport.width) * image.width;
                  <br />
                  zoomedY = (currentY / viewport.height) * image.height;
                </span>
                With this logic and a few tweaks to handle a couple edge cases,
                I was able to achieve an intuitive zoom feature that fulfilled
                the requirements set for me.
              </div>
            )}
          </li>
        </ul>
        <div className='flex flex-col py-5 px-12 gap-2'>
          <AnimatedImage
            animated={'https://i.ibb.co/dWW7Bzd/webp-smaller.webp'}
            still={still}
          />
          <div className=''>
            <Image
              className='rounded-lg'
              src={overview}
              alt='overview component'
            />
          </div>
          <div className=''>
            <Image
              className='rounded-lg'
              src={related}
              alt='related component'
            />
          </div>
        </div>
      </SectionDiv>
    </Page>
  );
}
