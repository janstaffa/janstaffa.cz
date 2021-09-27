import React from 'react';
import { LandingAnimation } from '../LandingAnimation';
import { Quote } from '../Quote';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page">
      <div className="container">
        <h1 className="main-title">janstaffa.</h1>
        <Quote />
      </div>
      <LandingAnimation />
    </div>
  );
};
