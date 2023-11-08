/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import addClasses from 'rehype-add-classes';
// import rehypeHighlight from 'rehype-highlight'
import rehypePrettyCode from 'rehype-pretty-code';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        addClasses,
        {
          a: 'underline'
        },
      ], [rehypePrettyCode, {}]
    ],
  },
});

export default withMDX(nextConfig)