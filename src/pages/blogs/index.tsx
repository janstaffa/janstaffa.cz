import fm from 'front-matter';
import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { BlogPostMeta, BlogsList } from '../..';
import Blogs from '../../components/sections/BlogsPage';

const BlogsPage: NextPage<BlogsList> = ({ blogs, tags }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Blogs | janstaffa</title>
        <meta name="description" content="Discover my blogs." />
      </Head>
      <Blogs blogs={blogs} tags={tags} />
    </>
  );
};

export default BlogsPage;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const tags: string[] = [];
  const blogs = files.map((filename) => {
    const post = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { attributes } = fm<BlogPostMeta>(post);
    if (attributes.tags) {
      const newTags = attributes.tags.filter((tag) => !tags.includes(tag));
      if (newTags && newTags.length > 0) {
        tags.push(...newTags);
      }
    }
    return attributes;
  });

  return {
    props: {
      blogs,
      tags,
    },
  };
};
