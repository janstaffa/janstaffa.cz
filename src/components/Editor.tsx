import 'quill/dist/quill.snow.css';
import { useRef } from 'react';
import { useQuill } from 'react-quilljs';
import { BlogData } from '..';

export interface EditorProps {}

const Editor: React.FC<EditorProps> = () => {
  const { quill, quillRef } = useQuill();

  const titleInput = useRef<HTMLInputElement>(null);
  const saveBlog = () => {
    if (!titleInput.current || titleInput.current.value === '' || !quill)
      return;
    const content = quill.root.innerHTML;
    const requestBody: BlogData = {
      meta: {
        title: titleInput.current.value,
      },
      content,
    };
    console.log(JSON.stringify(requestBody));
    fetch('/api/blog/save', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="w-screen h-screen p-20">
      <div className="w-full h-full bg-white rounded-md flex flex-col">
        <div className="w-full h-72 font-roboto p-8">
          <div>
            <h1 className="m-0">New post</h1>
          </div>
          <div className="w-96">
            <div className="flex flex-col my-3">
              <label>Page title</label>
              <input type="text" className="p-2" ref={titleInput} />
            </div>
            <div className="flex flex-col my-3">
              <label>Category</label>
              <select className="p-2"></select>
            </div>
            <button
              className="w-36 p-2 bg-primary border-none rounded-md cursor-pointer hover:opacity-90"
              onClick={saveBlog}
            >
              Save
            </button>
          </div>
        </div>
        <div
          className="bg-light-100 w-full h-auto overflow-y-auto rounded-b-md"
          ref={quillRef}
        ></div>
      </div>
    </div>
  );
};

export default Editor;
