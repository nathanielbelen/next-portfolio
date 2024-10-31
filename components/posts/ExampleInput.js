import Console from './Console';
import { useState, useCallback, useRef } from 'react';

export default function ExampleInput({ cb }) {
  const [search, setSearch] = useState('');
  const [history, setHistory] = useState([]);

  const countRef = useRef(0);

  const addToHistory = (element) => {
    if (element.length === 0) return;
    countRef.current = countRef.current + 1;
    setHistory((prevHistory) => {
      if (prevHistory.length < 8) {
        return [[element, countRef.current], ...prevHistory];
      } else {
        return [[element, countRef.current], ...prevHistory.slice(0, 7)];
      }
    });
  };

  const handleReset = () => {
    setHistory([]);
    countRef.current = 0;
  }

  const defaultAddToHistory = useCallback((element) => {
    addToHistory(element);
  }, []);

  const decoratedAddToHistory = useCallback(cb ? cb(addToHistory, 500) : defaultAddToHistory, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    decoratedAddToHistory(e.target.value);
  };

  return (
    <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-none'>
      <div className='flex justify-center items-center flex-col'>
        try typing:
        <input className='border-2 border-black text-black' value={search} onChange={handleChange}></input>
      </div>
      <Console reset={handleReset} messages={history.map((ele) => `(${ele[1]}) requested: "${ele[0]}"`)} />
    </div>
  );
}
