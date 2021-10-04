import { NextPage } from 'next';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useQuill } from 'react-quilljs';
const AdminPage: NextPage = () => {
  const { quill, quillRef } = useQuill();
  useEffect(() => {}, []);
  return (
    <div className="py-16 px-20 flex flex-row gap-5 bg-dark-100 w-screen h-screen">
      <div className="w-1/2 h-full border border-light-300 border-solid rounded-sm flex flex-col gap-1">
        <div
          className="w-full border-b border-l-0 border-t-0 border-r-0 border-light-300 border-solid"
          style={{ height: '42px' }}
        >
          <IoMdAdd />
        </div>
        <div className="w-full h-24 bg-dark-200 flex flex-row justify-between p-1 font-roboto">
          <div className="h-full w-auto flex flex-row">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              className="h-full"
            />
            <div className="p-1 ml-2">
              <div className="text-3xl text-light-100">test post</div>
              <div className="text-lg text-light-200">1.10. 2021</div>
            </div>
          </div>
        </div>
        <div className="w-full h-24 bg-dark-200 flex flex-row justify-between p-1 font-roboto">
          <div className="h-full w-auto flex flex-row">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              className="h-full"
            />
            <div className="p-1 ml-2">
              <div className="text-3xl text-light-100">test post</div>
              <div className="text-lg text-light-200">1.10. 2021</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-full bg-light-100" ref={quillRef}></div>
      </div>
    </div>
  );
};

export default AdminPage;
