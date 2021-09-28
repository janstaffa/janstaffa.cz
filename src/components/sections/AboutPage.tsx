import Head from 'next/head';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
export const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>janstaffa | Home</title>
      </Head>
      <div
        id="about-page"
        className="w-full h-full flex flex-row justify-center items-center"
        style={{ boxShadow: '0px -5px 10px 2px rgba(0,0,0,0.4)' }}
      >
        <p className="text-light-100 text-5xl text-center max-w-2xl">
          i'm a 17 year old student, with passion in programming and tech.
        </p>
        <div className="absolute bottom-10 w-full flex flex-row justify-center">
          <RiArrowDropDownLine
            color={'#a0a0a0'}
            className="cursor-pointer"
            size={150}
          />
        </div>
      </div>
    </>
  );
};
