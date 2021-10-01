import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useRef, useState } from 'react';

const NotFoundPage: React.FC = () => {
  const [time, setTime] = useState<number>(10);
  const timeRef = useRef(time);
  const router = useRouter();
  timeRef.current = time;
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRef.current === 0) {
        clearInterval(timer);
        router.replace('/');
        return;
      }
      setTime(timeRef.current - 1);
    }, 1000);
  }, []);
  return (
    <div
      id="notfound-page"
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <div className="text-light-200 text-center">
        <h1 className="text-6xl sm:text-9xl">404</h1>
        <h1 className="text-5xl sm:text-8xl text-light-200 text-center">
          NOT FOUND
        </h1>
        <p className="mt-10 text-xl">redirecting home in {time}</p>
      </div>
    </div>
  );
};
export default NotFoundPage;
