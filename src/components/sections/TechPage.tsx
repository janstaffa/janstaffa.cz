import Head from 'next/head';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  SiCss3,
  SiNodeDotJs,
  SiPhp,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
export const TechPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>janstaffa | Home</title>
      </Head>

      <div
        id="tech-page"
        className="w-full h-full flex flex-col justify-center items-center"
        style={{ boxShadow: '0px -5px 10px 2px rgba(0,0,0,0.4)' }}
      >
        <h1 className="absolute top-0 left-0 m-8 text-9xl text-light-200 fade-in fade-fast">
          what i do_
        </h1>

        <p className="text-light-200 text-5xl text-center flex flex-row flex-wrap max-w-2xl fade-in">
          <SiReact className="mx-2" />
          <SiTypescript className="mx-2" />
          <SiCss3 className="mx-2" />
          <SiNodeDotJs className="mx-2" />
          <SiPhp className="mx-2" />
          <SiPython className="mx-2" />
        </p>
        <div className="absolute bottom-10 w-full flex flex-row justify-center">
          <RiArrowDropDownLine
            color={'#a0a0a0'}
            className="cursor-pointer"
            size={150}
            onClick={() => {
              document
                .getElementById('contact-page')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </>
  );
};
