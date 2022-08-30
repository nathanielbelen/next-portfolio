import Image from 'next/image';
import { useState } from 'react';

export default function AnimatedImage({ animated, still }) {
  let [showAnimated, setShowAnimated] = useState(false);
  return (
    <div className='' onClick={() => { setShowAnimated(!showAnimated); }}>
      {showAnimated ? (
        <Image
          className='rounded-lg'
          src={animated}
          alt='starkfront animation'
          width={902}
          height={629}
        />
      ) : (
        <Image
          className='rounded-lg'
          src={still}
          alt='starkfront still'
          width={902}
          height={629}
        />
      )}
    </div>
  );
}
