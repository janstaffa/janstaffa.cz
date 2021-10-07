import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
export interface TagBarProps {
  tags: string[];
  selectedTag?: string;
}

const TagBar: React.FC<TagBarProps> = ({ tags, selectedTag }) => {
  return (
    <>
      <div className="text-xl text-light-100 font-roboto my-2">Tags:</div>
      <div className="flex flex-row items-center gap-3 mb-5 text-lg text-light-200 font-roboto select-none h-auto flex-wrap">
        <Link href="/blogs">
          <div className="px-3 py-1 h-9 rounded-md w-max cursor-pointer shadow-md bg-grey-500 text-light-200 hover:bg-grey-550 mr-2 flex flex-col justify-center items-center">
            <FaHome className="text-lg" />
          </div>
        </Link>
        {tags.map((tag, i) => (
          <Link
            href={'/blogs/' + tag.replace(/\s+/g, '-').toLowerCase()}
            key={i}
          >
            <div
              className={
                'px-3 py-1 rounded-md w-max cursor-pointer shadow-md h-full' +
                (selectedTag &&
                tag.replace(/\s+/g, '-').toLowerCase() === selectedTag
                  ? ' bg-grey-400 text-dark-100'
                  : ' bg-grey-500 hover:bg-grey-550 text-light-200')
              }
            >
              {tag}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TagBar;
