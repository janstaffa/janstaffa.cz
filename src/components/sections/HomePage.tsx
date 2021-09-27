import React from 'react';
import { LandingAnimation } from '../LandingAnimation';
import { Quote } from '../Quote';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="flex flex-row justify-between select-none">
      <div className="px-20 py-32">
        <h1 className="text-8xl text-heading font-rubik">janstaffa.</h1>
        <Quote />
      </div>
      <LandingAnimation />
    </div>
  );
};
