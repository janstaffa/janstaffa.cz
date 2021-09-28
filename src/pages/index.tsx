import * as React from 'react';
import { Page } from '../components/Page';
import { AboutPage } from '../components/sections/AboutPage';
import { HomePage } from '../components/sections/HomePage';

const App: React.FC = () => {
  return (
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
        <div style={{ backgroundColor: '#181818', height: '100%' }}>
          <h1>page 3</h1>
          <img
            src="https://media.sciencephoto.com/f0/23/19/34/f0231934-800px-wm.jpg"
            alt=""
          />
        </div>
      </Page>
      <Page height="300px" style={{ zIndex: 3 }}>
        <div style={{ backgroundColor: '#000', height: '300px' }}>
          <h1>page 3</h1>
        </div>
      </Page>
    </main>
  );
};
export default App;
