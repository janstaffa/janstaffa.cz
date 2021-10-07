import { useRouter } from 'next/router';
import React from 'react';
import { BlogPostMeta } from '../..';
import BlogListItem from '../BlogListItem';
import BlogNav from '../BlogNav';
import TagBar from '../TagBar';
export interface BlogsPageProps {
  tags: string[];
  blogs: BlogPostMeta[];
}

const Blogs: React.FC<BlogsPageProps> = ({ blogs, tags }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 overflow-y-auto"
      id="blogs-page"
    >
      <BlogNav />
      <div className="mt-16 p-10">
        <TagBar tags={tags} selectedTag={router.query.tag as string} />
        <div className="w-full h-full flex flex-row flex-wrap justify-center xl:justify-start gap-5">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogListItem
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
                thumbnail={blog.thumbnail}
                urlName={blog.urlName}
                key={blog.id}
              />
            ))
          ) : (
            <div className="text-light-300 font-roboto text-xl">
              No blogs found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
