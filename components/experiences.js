import { useState } from 'react';
import { motion } from 'framer-motion';

let jobs = [
  {
    name: 'Freelance',
    role: 'Web Developer',
    tenure: 'October 2022 - February 2024',
    points: [
      `Collaborated with diverse clients to translate their unique business requirements into customized and responsive web solutions, ensuring a seamless and tailored online presence.`,
      `Developed and implemented efficient and scalable code, leveraging a variety of web technologies and frameworks, such as HTML5, CSS3, JavaScript (including ES6+), and popular front-end libraries like React, to deliver high-performance and visually appealing websites.`,
      `Provided ongoing maintenance and support for client websites, addressing issues promptly and implementing updates to ensure optimal functionality and security.`
    ],
  },
  {
    name: 'Galvanize',
    role: 'Software Engineering Immersive Resident',
    tenure: 'May 2022 - September 2022',
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
    `Developed on numerous projects implementing agile methodologies and feature branch Git workflow.`, `Completed 700+ coding hours, of which included pair programming with Software Engineers of various levels.`],
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
  const handleExpIndexChange = (index) => {
    setExpIndex(Number(index));
  };

  return (
    <div className='min-h-[25rem] flex flex-col md:flex-row'>
      <ul className='basis-1/4 flex-none flex overflow-scroll overflow-y-hidden gap-3 md:gap-0 md:overflow-x-hidden md:overflow-y-hidden md:flex-col'>
        {jobs.map((job, index) => {
          const isSelected = index === expIndex;
          const textStyle = isSelected ? null : 'text-slate-400';
          const sidelineClass = isSelected
            ? 'bg-[#212c33] h-[2px] w-full md:w-[2px] md:h-full sideline'
            : 'h-[2px] w-full md:w-[2px] md:h-full sideline';

          return (
            <li
              key={index}
              className={`flex flex-col md:flex-row md:px-2 py-4 font-semibold ${textStyle}`}
            >
              <button
                onClick={() => handleExpIndexChange(index)}
                className='uppercase grow whitespace-nowrap'
              >
                {job.name}
              </button>
              {isSelected ? (
                <motion.div
                  className={sidelineClass}
                  layoutId='sideline'
                ></motion.div>
              ) : (
                <div className={sidelineClass}></div>
              )}
            </li>
          );
        })}
      </ul>
      <div className='md:px-4 md:py-2'>
        <p className='text-xl text-gray-600 font-semibold'>
          {jobs[expIndex].name}
        </p>
        <p className='text-xl'>{jobs[expIndex].role}</p>
        <p className='uppercase text-sm'>{jobs[expIndex].tenure}</p>
        <ul className='pt-5 px-5 list-[square]'>
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
