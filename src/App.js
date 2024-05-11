import { Suspense, startTransition, useState } from 'react';

import './App.css';
import { RecipePage } from './components/RecipePage/RecipePage';
import Newsletter from './components/Newsletter/Newsletter.js';
import { Layout } from './Layout';
import { Home } from './components/HomePage/Home.js'
function App() {
  function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
  }

  function Router() {
    const [page, setPage] = useState('/');

    function navigate(url) {
      startTransition(() => {
        setPage(url);
      });
    }

    let content;
    switch (page) {

      case '/recipe-page':
        return content = (<RecipePage />)
      case '/news-letter':
        return content = (<Newsletter />)
      default:
        content = (
          <Home navigate={navigate} />
        );

    }
    return (
      <Layout>
        {content}
      </Layout>
    );
  }

  return (
    <div className="App">
      <Suspense fallback={<BigSpinner />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
