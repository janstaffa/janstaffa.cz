import fm from 'front-matter';
import fs from 'fs';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { BlogPostMeta } from '../..';
import { BlogFooter } from '../../components/BlogFooter';
import BlogNav from '../../components/BlogNav';

interface BlogProps {
  blog: {
    metadata: BlogPostMeta;
    content: string;
  };
}
const Blog: NextPage<BlogProps> = ({ blog }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!blog) {
    router.replace('/blogs');
    return null;
  }
  const { content, metadata } = blog;
  const [showScrollDown, setShowScrollDown] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollDown(false);
        return;
      }
      setShowScrollDown(true);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  });
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{metadata.title} | Blog - janstaffa</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="flex flex-col items-center w-full min-h-screen h-auto">
        <div
          id="blog-header"
          className="w-full h-96 flex flex-col justify-center items-center"
        >
          <BlogNav />
          <h1 className="font-roboto text-dark-100 text-6xl">
            {metadata.title}
          </h1>
        </div>
        <main className="blog-content flex flex-col items-center bg-light-100 w-full h-full flex-1">
          <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
            className="max-w-3xl px-4 py-10"
          ></div>
        </main>
        <BlogFooter />
      </div>
      {showScrollDown && (
        <div
          className="fixed top-20 right-5 text-6xl text-dark-100 cursor-pointer"
          title="Scroll to top"
        >
          <IoIosArrowDropupCircle
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      )}
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postName = params?.id;
  if (!postName)
    return {
      notFound: true,
    };
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', postName + '.html'),
    'utf-8'
  );
  const { attributes, body } = fm<BlogPostMeta>(markdownWithMeta);

  return {
    props: {
      blog: {
        metadata: {
          id: attributes.id,
          title: attributes.title,
          date: attributes.date,
        } as BlogPostMeta,
        content: body,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => {
    const post = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { attributes } = fm<BlogPostMeta>(post);
    console.log(attributes);
    return { params: { id: attributes.urlName } };
  });
  return {
    paths,
    fallback: true,
  };
};
