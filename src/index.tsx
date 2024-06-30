import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Layout } from './Components/Layout/layout/layout';
import { BrowserRouter } from 'react-router-dom';
import { ReactTagManager } from 'react-gtm-ts';

// google tag manager
ReactTagManager.init({
  code: 'GTM-N2QD2JT5', // Replace with your actual GTM code
  debug: false,
  performance: false,
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
