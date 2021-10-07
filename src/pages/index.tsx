import Head from 'next/head';
import * as React from 'react';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Page } from '../components/Page';
import { AboutPage } from '../components/sections/AboutPage';
import { ContactPage } from '../components/sections/ContactPage';
import { HomePage } from '../components/sections/HomePage';
import { TechPage } from '../components/sections/TechPage';

const App: React.FC = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const options: IntersectionObserverInit = {
      threshold: 0.5,
    };
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (!entry.isIntersecting) {
          target.classList.remove('show');
          return;
        }
        target.classList.add('show');
      });
    }, options);

    fadeInElements.forEach((el) => appearOnScroll.observe(el));

    return () => {
      appearOnScroll.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home | janstaffa</title>
        <meta name="description" content="My personal portfolio and blog." />
      </Head>
      <main>
        <div className="page-border border-top"></div>
        <div className="page-border border-bottom"></div>
        <div className="page-border border-left"></div>
        <div className="page-border border-right"></div>

        <Page style={{ zIndex: 1 }}>
          <HomePage />
        </Page>
        <Page style={{ zIndex: 2 }}>
          <AboutPage />
        </Page>
        <Page style={{ zIndex: 3 }}>
          <TechPage />
        </Page>
        <Page style={{ zIndex: 4 }}>
          <ContactPage />
        </Page>
        <Page height={'55px'} style={{ zIndex: 5 }}>
          <Footer />
        </Page>
      </main>
    </>
  );
};
export default App;
