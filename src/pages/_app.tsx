import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/browser.png" type="image/png" />
        <meta
          name="keywords"
          content="Programming, Programmer, Tech, Portfolio, Web Developer, Javascript"
        />
        <meta name="author" content="janstaffa" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
