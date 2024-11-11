import React from 'react';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle themeName='dark'/>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
