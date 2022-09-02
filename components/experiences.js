import { useState } from 'react';
import { motion } from 'framer-motion';

let jobs = [
  {
    name: 'Galvanize',
    role: 'Software Engineering Immersive Resident',
    tenure: 'May 2022 - Present',
    points: [
      `Mentored students through one on one discussions of facing and overcoming obstacles in software development, and agile workflow.`,
      `Provided technical assistance and shaped the critical problem-solving process of students.`,
      `Instructed students in CS fundamentals, JavaScript core concepts, modern web development technologies (React, Express, database management systems, deployment platforms), and industry best-practices.`,
    ],
  },
  {
    name: 'HackReactor',
    role: 'Advanced Software Engineering Immersive',
    tenure: 'Feb 2022 - May 2022',
    points: [`Received instruction on CS fundamentals, JavaScript core concepts, industry best-practices, and modern web development technologies (React, Node, Express, database management systems, deployment platforms).`,
    `Developed on numerous projects implementing agile methodologies and feature branch Git workflow.`, `Completed 700+ coding hours, of which included pair programming with Software Engineers of various skill levels.`],
  },
  {
    name: 'LEVO',
    role: 'Ecommerce Manager',
    tenure: 'Oct 2017 - Apr 2020',
    points: [`Created and managed promotional ad campaigns for Ebay and Amazon channels to increase sales.`, `Effectively handled day-to-day ecommerce operations on Ebay and Amazon.`, `Provided insights on customer shopping trends to support product assortment and identify assortment gaps.`, `Worked to provide good customer service by addressing and ensuring the timely resolution of customer issues or comments.`],
  },
  {
    name: 'Green Project',
    role: 'Ecommerce Manager',
    tenure: 'Oct 2015 - Oct 2017',
    points: [`Effectively handled day-to-day ecommerce operations on Ebay and Amazon.`, `Coordinated with sales and accounting departments to develop logistics optimizations.`, `Created Excel and AutoHotKey macros to improve speed and quality of work.`, `Worked closely with warehouse and sales teams in order to ensure smooth order fulfillment.`],
  },
];

export default function Experiences() {
  const [expIndex, setExpIndex] = useState(0);
  return (
    <div className='min-h-[27rem] flex flex-col md:flex-row'>
      <ul className='basis-1/4 flex-none flex overflow-scroll md:overflow-x-scroll md:overflow-y-hidden  md:flex-col'>
        {jobs.map((job, index) => (
          <li
            index={index}
            className={`flex flex-col md:flex-row px-4 py-4 md:px-1 font-semibold ${
              index === expIndex ? null : 'text-slate-400'
            }`}
            key={index}
          >
            <button onClick={() => { setExpIndex(Number(index)); }} className='uppercase grow whitespace-nowrap'>
              {job.name}
            </button>
            {index === expIndex ? (
              <motion.div
                className='bg-[#212c33] h-[2px] w-full md:w-[2px] md:h-full sideline'
                layoutId='sideline'
              ></motion.div>
            ) : <div
                className='h-[2px] w-full md:w-[2px] md:h-full sideline'
              ></div>}
          </li>
        ))}
      </ul>
      <div className='px-4 py-2'>
        <p className='text-xl text-gray-600 font-semibold'>
          {jobs[expIndex].name}
        </p>
        <p className='text-xl'>{jobs[expIndex].role}</p>
        <p className='uppercase text-sm'>{jobs[expIndex].tenure}</p>
        <ul className='p-5 list-[square]'>
          {jobs[expIndex].points.map((point, index) => (
            <motion.li
              key={[expIndex, index]}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='pb-3'
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
