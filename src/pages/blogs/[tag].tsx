import fm from 'front-matter';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { BlogPostMeta, BlogsList } from '../..';
import BlogListItem from '../../components/BlogListItem';
import BlogNav from '../../components/BlogNav';
import TagBar from '../../components/TagBar';

const BlogsPage: NextPage<BlogsList> = ({ blogs, tags }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>janstaffa | Blogs</title>
      </Head>
      <div className="w-screen h-screen" id="blogs-page">
        <BlogNav />
        <div className="mt-16 p-10">
          <TagBar tags={tags} selectedTag={router.query.tag as string} />
          <div className="w-full h-full flex flex-row flex-wrap gap-5">
            {blogs.map((blog) => (
              <BlogListItem
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
                thumbnail={blog.thumbnail}
                urlName={blog.urlName}
                key={blog.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  if (!tag)
    return {
      notFound: true,
    };
  const files = fs.readdirSync(path.join('posts'));
  const tags: string[] = [];
  const blogs: BlogPostMeta[] = [];
  files.forEach((filename) => {
    const post = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { attributes } = fm<BlogPostMeta>(post);
    if (!attributes.tags) return;
    const newTags = attributes.tags.filter((tag) => !tags.includes(tag));
    if (newTags && newTags.length > 0) {
      tags.push(...newTags);
    }
    const formatedTags = attributes.tags.map((tag) =>
      tag.replace(/\s+/g, '-').toLowerCase()
    );
    if (formatedTags.includes(tag)) {
      blogs.push(attributes);
    }
  });

  return {
    props: {
      blogs,
      tags,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const tags: string[] = [];
  files.forEach((filename) => {
    const post = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { attributes } = fm<BlogPostMeta>(post);
    if (attributes.tags) {
      const newTags = attributes.tags.filter((tag) => !tags.includes(tag));
      if (newTags && newTags.length > 0) {
        const formatedTags = newTags.map((tag) =>
          tag.replace(/\s+/g, '-').toLowerCase()
        );
        tags.push(...formatedTags);
      }
    }
  });
  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};
