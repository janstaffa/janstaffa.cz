import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  SiAndroid,
  SiDocker,
  SiKotlin,
  SiNodeDotJs,
  SiPython,
  SiReact,
  SiTypescript
} from 'react-icons/si';
export const TechPage: React.FC = () => {
  return (
    <div
      id="tech-page"
      className="w-full h-full flex flex-col justify-center items-center"
      style={{ boxShadow: '0px -5px 10px 2px rgba(0,0,0,0.4)' }}
    >
      <h1 className="page-title light fade-in fade-fast">what i do_</h1>

      <div className="text-light-200 text-3xl md:text-5xl flex flex-row justify-center flex-wrap w-56 md:w-auto md:max-w-2xl fade-in">
        <SiReact className="m-2" />
        <SiTypescript className="m-2" />
        <SiNodeDotJs className="m-2" />
        <SiPython className="m-2" />
        <SiAndroid className="m-2"/>
        <SiKotlin className="m-2"/>
        <SiDocker className="m-2"/>
      </div>
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
  );
};
