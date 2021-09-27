import { graphql } from 'gatsby';
import * as React from 'react';
import { Page } from '../components/Page';
import { HomePage } from '../components/sections/HomePage';
import '../styles/App.css';
import '../styles/global.css';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
// interface IndexPageProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string;
//       };
//     };
//   };
// }

const App: React.FC = () => {
  const pages = React.useRef<HTMLDivElement[]>([]);
  return (
    <main>
      <Page style={{ zIndex: 1 }}>
        <HomePage />
      </Page>
      <Page style={{ zIndex: 2 }}>
        <div
          style={{
            backgroundColor: '#111',
            height: '100%',
            boxShadow: '0px -5px 10px 5px rgba(0,0,0,0.4)',
          }}
        >
          <h1>page 2</h1>
          <img
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
            alt=""
          />
        </div>
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
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
