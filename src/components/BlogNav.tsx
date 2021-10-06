import Link from 'next/link';

export interface BlogNavProps {}

const BlogNav: React.FC<BlogNavProps> = () => {
  return (
    <div className="fixed top-0 w-full h-16 bg-transparent bg-dark-100 flex flex-row justify-between items-center px-3">
      <div className="w-auto text-3xl font-roboto text-light-100">
        <Link href="/">
          <a className="text-light-100 no-underline">
            <span className="custom-j-small">j</span>anstaffa
            <span className="text-primary">.</span>
          </a>
        </Link>{' '}
        | Blog
      </div>
    </div>
  );
};

export default BlogNav;
