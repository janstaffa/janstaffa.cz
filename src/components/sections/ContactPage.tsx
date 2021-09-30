import Head from 'next/head';
import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { RiArrowDropUpLine } from 'react-icons/ri';
export const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>janstaffa | Home</title>
      </Head>

      <div
        id="contact-page"
        className="w-full h-full flex flex-col justify-center items-center"
        style={{ boxShadow: '0px -5px 10px 2px rgba(0,0,0,0.4)' }}
      >
        <h1 className="page-title dark fade-in fade-fast">get in touch_</h1>
        <div className="flex flex-col text-dark-100 text-2xl md:text-5xl fade-in">
          <a
            href="https://github.com/janstaffa"
            target="_blank"
            className="flex flex-row items-center my-1"
          >
            <FaGithub className="mr-4" />
            janstaffa
          </a>
          <a
            href="mailto:jstaffa@janstaffa.cz"
            target="_blank"
            className="flex flex-row items-center my-1"
          >
            <HiOutlineMail className="mr-4" />
            jstaffa@janstaffa.cz
          </a>
          <a
            href="https://www.instagram.com/janstaffa"
            target="_blank"
            className="flex flex-row items-center my-1"
          >
            <FaInstagram className="mr-4" />
            janstaffa
          </a>
        </div>
        <div className="absolute bottom-10 w-full flex flex-row justify-center">
          <RiArrowDropUpLine
            color={'#131515'}
            className="cursor-pointer"
            size={150}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </>
  );
};
