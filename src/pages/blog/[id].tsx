import fm from 'front-matter';
import fs from 'fs';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { BlogPostMeta } from '../..';
import BlogNav from '../../components/BlogNav';

interface BlogProps {
  blog: {
    metadata: BlogPostMeta;
    content: string;
  };
}
const Blog: NextPage<BlogProps> = ({ blog: { metadata, content } }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>janstaffa | Blog - {metadata.title}</title>
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
        <main className="blog-wrap flex flex-col bg-light-100 w-full h-full flex-1">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </main>
      </div>
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
    return { params: { id: attributes.urlName } };
  });
  return {
    paths,
    fallback: true,
  };
};
