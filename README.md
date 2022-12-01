<h1 align="center">
  nathaniel's personal website 👋
</h1>
<p align="center">
  This is my <a href="https://nathanielbelen.com/" target="_blank">personal website</a> built with <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>.
</p>
<p align="center">
  I also use <a href="https://www.framer.com/motion/" target="_blank">framer-motion</a> to assist with smooth animations and <a href="https://formspree.io/" target="_blank">formspree.io</a> to handle my contact form submissions.
</p>

## development & getting started
  install the necessary dependencies
   ```sh
   npm install
   ```

  start the development server
   ```sh
   npm run dev
   ```

## production & deployment

  build optimized version of application
  ```sh
  npm run build
  ```

  start next.js production server to serve the application
  ```sh
  npm start
  ```

## notes
  if utilizing google analytics, add the Measurement ID to the project's environment variables

  [Adding Environment Variables on Vercel Deployment](https://vercel.com/docs/concepts/projects/environment-variables)
  ```
  NEXT_PUBLIC_GOOGLE_ANALYTICS={analytics_key}
  ```