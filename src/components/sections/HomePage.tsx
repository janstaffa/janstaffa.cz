import Head from 'next/head';
import React from 'react';
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
        className="w-full h-full flex flex-row justify-between select-none"
      >
        <div className="px-20 py-32 z-10 fade-in fade-fast">
          <h1 className="text-8xl text-light-100 font-rubik">
            <span className="custom-j">j</span>anstaffa
            <span className="text-primary">.</span>
          </h1>
          <Quote />
          <div className="w-full mt-10 flex flex-row">
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
