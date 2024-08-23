import fs from 'fs';
import path from 'path';
import { all } from 'underscore';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  // fileNames.splice(fileNames.indexOf('components'), 1);
  const allPostsDataPromises = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const { date, title, emblems } = await import(`../posts/${fileName}`);
    return {
      id,
      date,
      title,
      emblems
    };
  });
  const allPostsData = await Promise.all(allPostsDataPromises);
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
    const { date, title, emblems } = await import(`../posts/${id}.mdx`);
  return {
    id,
    date: formatDate(new Date(date)),
    title,
    emblems
  };
}

function formatDate(date) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  let daySuffix;
  switch (day) {
    case 1:
    case 21:
    case 31:
      daySuffix = "st";
      break;
    case 2:
    case 22:
      daySuffix = "nd";
      break;
    case 3:
    case 23:
      daySuffix = "rd";
      break;
    default:
      daySuffix = "th";
  }

  return `${monthNames[monthIndex]} ${day}${daySuffix}, ${year}`;
}