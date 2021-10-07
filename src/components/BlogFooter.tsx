import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
export const BlogFooter: React.FC = () => {
  return (
    <div className="w-full h-28 bg-light-300 px-8 py-2 border-0 border-t border-grey-400 border-solid relative">
      <div className="text-3xl text-dark-200 flex flex-row justify-end">
        <a
          href="https://github.com/janstaffa"
          target="_blank"
          className="link flex flex-row items-center my-1"
        >
          <FaGithub className="mr-4" />
        </a>
        <a
          href="mailto:jstaffa@janstaffa.cz"
          target="_blank"
          className="link flex flex-row items-center my-1"
        >
          <HiOutlineMail className="mr-4" />
        </a>
        <a
          href="https://www.instagram.com/janstaffa"
          target="_blank"
          className="link flex flex-row items-center my-1"
        >
          <FaInstagram className="mr-4" />
        </a>
      </div>
      <p className="text-dark-200 italic absolute bottom-0 left-3">
        &copy; janstaffa.cz 2015-{new Date().getFullYear()}
      </p>
    </div>
  );
};
