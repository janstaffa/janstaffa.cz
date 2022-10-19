import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
export const AboutPage: React.FC = () => {
  return (
    <div
      id="about-page"
      className="w-full h-full flex flex-col justify-center items-center"
      style={{ boxShadow: '0px -5px 10px 2px rgba(0,0,0,0.4)' }}
    >
      <h1 className="page-title dark fade-in fade-fast">about me_</h1>

      <p className="page-text dark fade-in">
        i'm an 18 year old student, with passion in programming and tech.
      </p>
      <div className="absolute bottom-10 w-full flex flex-row justify-center">
        <RiArrowDropDownLine
          color={'#131515'}
          className="cursor-pointer"
          size={150}
          onClick={() => {
            document
              .getElementById('tech-page')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
};
