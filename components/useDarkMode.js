import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      console.log('toggling to light!')
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      console.log('toggling to dark!')
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return { theme, toggleTheme };
};

export default useDarkMode;
