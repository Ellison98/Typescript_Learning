import React from 'react';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Detail from './pages/Detail';

function App() {
  // return <Layout children={<Detail />} />
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App;
