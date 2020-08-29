import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />

    <GlobalStyle />
  </Router>
);

export default App;
