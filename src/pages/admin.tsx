import fm from 'front-matter';
import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import path from 'path';
import React, { useEffect, useState } from 'react';
import { AiFillFileText } from 'react-icons/ai';
import { FaFolder, FaTrashAlt } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { Modal } from 'react-tiny-modals';
import Editor from '../components/Editor';
import { BlogPostMeta } from './blog/[id]';
interface BlogsList {
  blogs: BlogPostMeta[];
}
const AdminPage: NextPage<BlogsList> = ({ blogs }) => {
  const [isEditorModalOpen, setIsEditorModalOpen] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <>
      <div className="py-16 px-20 bg-dark-200 w-screen h-screen">
        <div className="absolute top-0 left-0 w-full h-16 bg-dark-100 flex flex-row items-center px-3">
          <div className="w-auto text-3xl font-roboto text-light-100">
            Admin panel
          </div>
        </div>
        <div className="p-10">
          <div className="w-full h-16 flex flex-row gap-5">
            <button
              className="w-52 h-10 text-xl flex flex-row justify-center items-center cursor-pointer bg-primary border-none rounded-md hover:opacity-90 transition-opacity"
              onClick={() => setIsEditorModalOpen(true)}
            >
              <IoMdAdd className="mr-2" /> New post
            </button>
            <button className="w-52 h-10 text-xl flex flex-row justify-center items-center cursor-pointer bg-secondary border-none rounded-md hover:opacity-90 transition-opacity">
              <IoMdAdd className="mr-2" /> New category
            </button>
          </div>
          <div className="w-full h-full flex flex-row items-stretch gap-10">
            <div className="flex-1 bg-transparentDark-300 px-10 py-4 rounded-md">
              <h1 className="font-poppins text-light-100 my-2 text-2xl">
                Posts
              </h1>
              <table className="posts-table border border-light-200 border-solid border-collapse w-full font-roboto">
                <thead className="font-bold">
                  <tr className="h-10 bg-secondary">
                    <td className="w-10">id</td>
                    <td>Title</td>
                    <td className="w-52">Category</td>
                    <td className="w-40">Created</td>
                    <td className="w-40">Options</td>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr className="h-12" key={blog.id}>
                      <td>{blog.id}</td>
                      <td>{blog.title}</td>
                      <td>Javascript</td>
                      <td>{blog.date}</td>
                      <td className="text-2xl">
                        <GrView
                          className="mx-1 cursor-pointer"
                          onClick={() => router.push('/blog/' + blog.urlName)}
                        />
                        <MdEdit className="mx-1 cursor-pointer" />
                        <FaTrashAlt className="mx-1 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-12 flex flex-col justify-center items-center gap-8 font-roboto">
              <div className="w-60 h-60 bg-primary rounded-md flex flex-col justify-center items-center gap-8 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="text-3xl">Posts</div>
                <div className="text-4xl flex flex-row items-center gap-1">
                  <AiFillFileText />
                  {blogs.length}
                </div>
              </div>
              <div className="w-60 h-60 bg-secondary rounded-md flex flex-col justify-center items-center gap-8 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="text-3xl mb-3">Categories</div>
                <div className="text-4xl flex flex-row items-center gap-1">
                  <FaFolder />5
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full">
        <div className="w-full h-full bg-light-100" ref={quillRef}></div>
      </div> */}
      </div>
      <Modal isOpen={isEditorModalOpen}>
        <Editor />
      </Modal>
    </>
  );
};

export default AdminPage;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const blogs = files.map((filename) => {
    const post = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { attributes } = fm<BlogPostMeta>(post);
    return attributes;
  });

  return {
    props: {
      blogs,
    },
  };
};
