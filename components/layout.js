import Head from 'next/head';
import NavBar from './navbar.js';
import Footer from './footer.js';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router.js';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();

  console.log("Layout component rendered");

  return (
    <div className={`relative min-h-screen overflow-hidden`}>
      <Head>
        <title>nathaniel belen</title>
        <meta name='description' content={`nathaniel's portfolio website`} />
      </Head>
      <AnimatePresence mode='wait'>
        <NavBar path={router.asPath} />
      </AnimatePresence>
      <div className='max-w-screen-md mx-auto pb-14'>{children}</div>
      <Footer />
      <Background />
    </div>
  );
}


const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position state
    const updateMousePosition = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Update scroll position state
    const updateScrollPosition = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateScrollPosition);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  // Calculate the final position using mouse and scroll positions
  const finalX = mousePosition.x + scrollPosition.x;
  const finalY = mousePosition.y + scrollPosition.y;
  console.log(finalX, finalY)

  return (
    <div
      className={"absolute w-[500px] h-[500px] rounded-full animate-spin-slow bg-gradient-to-r from-cyan-400 to-purple-500 blur-[200px] -z-10"}
      style={{
        top: `calc(${finalY}px - 250px)`,
        left: `calc(${finalX}px - 250px)`,
      }}
    />
  );
};