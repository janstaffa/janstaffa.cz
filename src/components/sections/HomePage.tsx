import Head from 'next/head';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AtomAnimation } from '../animations/AtomAnimation';
import { Quote } from '../Quote';

export const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>janstaffa | Home</title>
      </Head>
      <div
        id="home-page"
        className="relative w-full h-full flex flex-row justify-between select-none"
      >
        <div className="absolute right-8 bottom-8 text-3xl sm:text-4xl z-50">
          <a href="https://github.com/janstaffa" target="_blank">
            <FaGithub className="text-light-200" />
          </a>
        </div>
        <div className="px-10 py-12 sm:px-20 sm:py-24 z-10 fade-in fade-fast">
          <h1 className="text-5xl sm:text-8xl text-light-100 font-poppins my-1">
            <span className="custom-j">j</span>anstaffa
            <span className="text-primary">.</span>
          </h1>
          <Quote />
          <div className="w-full absolute bottom-16 xl:relative mt-10 xl:bottom-0 flex flex-row">
            <div className="btn-wrap">
              <div className="main-btn-border"></div>
              <button
                className="main-btn"
                onClick={() => {
                  document
                    .getElementById('about-page')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                more
              </button>
            </div>
            <div className="btn-wrap">
              <div className="main-btn-border"></div>
              <button className="main-btn">blog</button>
            </div>
          </div>
        </div>
        <AtomAnimation />
      </div>
    </>
  );
};
