import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes';
import { HashRouter, Switch, withRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('root'));
