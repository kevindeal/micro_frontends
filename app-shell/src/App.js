import './App.css';
import React, { Suspense } from 'react';

const Header = React.lazy(() => import('appHeader/App'));
const Body = React.lazy(() => import('appBody/App'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading Body...</div>}>
        <Body />
      </Suspense>
    </div>
  );
}

export default App;
