import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './component/GlobalStyle';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


