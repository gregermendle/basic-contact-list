import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';

import HomePage from './components/HomePage';

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <HomePage />
  </Router>,
  root
);
